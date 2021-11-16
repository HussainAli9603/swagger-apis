import express from 'express';
import { PatientController } from '../controller/Patient.controller';
import { GetPatient, forgotPassword } from '../types/request/Doctor.request';
import { RegisterUpdateResPatient } from '../types/response/Doctor.response';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/jwtConfig';
import fileSystem from 'fs';
import { createObjectCsvWriter } from 'csv-writer'




export class DoctorRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/patient-register', async (req: any, res, next) => {
      try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const patient: any = {
          FullName: req.body.FullName,
          email: req.body.email,
          password: hash,
          cell: req.body.cell,
          adress: req.body.adress,
          disease: req.body.disease,
          doctor: req.body.doctor,
        }
        const new_patient: any = await new PatientController().registerPatient(patient);
        res.status(200).json({
          message: new_patient
        });
      } catch (error) {
        next(error)
      }
    })

    this.router.post('/patient-loginUser', async (req, res, next) => {
      try {
        const userss: any = {
          email: req.body.email
        }
        const userDoc: RegisterUpdateResPatient = await new PatientController().loginEmailUser(userss);
        if (!userDoc) {
          res.status(200).json("user Not Found");
        } else {
          const isPasswordValid = await bcrypt.compare(req.body.password, userDoc.password, (err, match) => {
            if (match) {
              const token = jwt.sign({ email: userDoc.email }, secret);
              res.status(200).send({ token: token, Doctor: userDoc });
            } else {
              res.status(200).json("Password Incorrect");
            }
          });
        }
      } catch (error) {
        next(error)
      }
    })

    this.router.post('/getPatientlist', async (req: any, res, next) => {
      try {
        const PatientList: RegisterUpdateResPatient[] = await new PatientController().getPatientList();
        res.status(200).json({
          result: PatientList
        });

      } catch (error) {
        next(error);
      }
    });

    this.router.post('/getPatient', async (req, res, next) => {
      try {
        const getreq: GetPatient = req.body;
        const patient: RegisterUpdateResPatient = await new PatientController().getPatient(getreq);
        res.send(patient);
      } catch (error) {
        next(error);
      }
    });

    this.router.get('/get-PatientByAddress', async (req, res, next) => {
      try {
        // const getreq:GetPatientByAddress = req.body; 
        const patients: RegisterUpdateResPatient = await new PatientController().getPatientByCity();
        res.send(patients);
      } catch (error) {
        next(error);
      }
    });

    this.router.post('/forgot-password', async (req, res, next) => {
      try {
        const getReq: forgotPassword = {
          email: req.body.email
        }
        const EmailVerify: any = await new PatientController().forgotPass(getReq);
        if (!EmailVerify) {
          res.status(404).json("user Not Found");
        } else {
          const OTPCODE: any = await Math.floor(1000 + Math.random() * 9000);
          const token = jwt.sign({ foo: "bar" }, "shhhhh");
          EmailVerify.resetPasswordToken = token;
          EmailVerify.otpCode = OTPCODE;
          EmailVerify.resetPasswordExpires = Date.now() + 3600000; // 1 hour
          const new_patient: any = await new PatientController().sendOTPCOde(EmailVerify);
          res.status(200).json({
            OTPCODE: OTPCODE,
            email: req.body.email
          })
        }
      } catch (error) {
        next(error)
      }
    })

    this.router.post('/verify-OTPCode', async (req, res, next) => {
      try {
        var emailVerify: any = {
          email: req.body.email
        }
        const Patient: any = await new PatientController().verifyEamil(emailVerify);
        if (!Patient) {
          res.status(404).json({
            email: "User Not Found"
          })
        } else {
          if (Patient.resetPasswordExpires > Date.now()) {
            if (Patient.otpCode == Number(req.body.otpCode)) {
              if (Patient.resetPasswordToken != "") {
                Patient.resetPasswordToken = "";
              }
              if (Patient.resetPasswordExpires != "") {
                Patient.resetPasswordExpires = "";
              }
              const verify_OTP: any = await new PatientController().VerifyOTPCOde(Patient);
              if (verify_OTP) {
                res.status(200).json({ message: "Verify OTP Code successfull" })
              } else {
                res.status(404).json({ OTPCode: "OTP Code Not Found" })
              }
            } else {
              res.status(404).json({ message: "OTP Code Not Found.", })
            }
          } else {
            res.status(404).json({ message: "Your OTP has been expired please request new code.", })
          }
        }
      } catch (error) {
        next(error)
      }
    })

    this.router.post("/change-password", async (req, res, next) => {
      try {
        const changPass: any = {
          email: req.body.email
        }
        const User: any = await new PatientController().changePasswords(changPass);
        if (!User) {
          res.status(404).json("User Not Found")
        } else {
          if (req.body.newPassword != req.body.confirmPassword) {
            res.status(404).json("New Password And Confirm Password Not Matchhs");
          } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            User.password = hash;

            const savePatientData: any = await new PatientController().SaveChangePassword(User);
            if (savePatientData) {
              res.status(200).json({ savePatientData })
            } else {
              res.status(404).json("Error")
            }

          }
        }
      } catch (error) {
        next(error);
      }
    })

    this.router.post('/search', async (req, res, next) => {
      try {
        const searchPait: any = req.body;
        const findPatient: any = await new PatientController().SearchPatient(searchPait);
        if (findPatient.length == 0) {
          res.status(404).json("Patient Not Found")
        } else {
          res.status(200).json({ Patient: findPatient })
        }

      } catch (error) {
        next(error)
      }
    });

    this.router.post('/search-by-location', async (req, res, next) => {
      try {
        const searchLoc: any = req.body;
        const searchPatient: any = await new PatientController().SearchByLocations(searchLoc);
        if (searchPatient.length == 0) {
          res.status(404).json("Patient Not Found")
        } else {
          res.status(200).json({ Patient: searchPatient })
        }
      } catch (error) {
        next(error)
      }
    })

    this.router.delete('/delete', async (req, res, next) => {
      const del: any = req.body;
      const delProduct: any = await new PatientController().deletePatients(del)
      if (delProduct) {
        res.status(200).json("delete")
      } else {
        res.status(404).json("Patient Not Found")
      }
    });


    this.router.get('/save-file-download', async (req, res, next) => {
      const delPaitient1: any = await new PatientController().findDatePatient();
      if (delPaitient1) {
        const csvWriter: any = createObjectCsvWriter({
          path: "public/data.csv",
          header: [
            { id: "_id", title: "ID" },
            { id: "FullName", title: "FullName" },
            { id: "email", title: "Email" },
            { id: "password", title: "Password" },
            { id: "cell", title: "Cell" },
            { id: "disease", title: "Disease" },
            { id: "adress", title: "Address" },
            { id: "otpCode", title: "OTPCode" },
          ]
        });
        csvWriter.writeRecords(delPaitient1)
          .then(() => console.log('The CSV file was written successfully'));
        res.setHeader('Content-disposition', 'attachment; filename=public/data.csv');
        res.set('Content-Type', 'text/csv');

        res.download("public/data.csv", () => {
          fileSystem.unlinkSync("public/data.csv")
        })
        res.status(200).json({ Data: delPaitient1 })
      } else {
        res.status(404).json("Patient Not Found")
      }
    });













  }
}

export const PatientRoutesApi = new DoctorRoutes().router;

function data(data: any, arg1: { headers: boolean; }) {
  throw new Error('Function not implemented.');
}

