import express from 'express';
import { DoctorController } from '../controller/Doctor.controller';
import { IDoctor } from '../types/document/IDoctor';
import { RegisterDoctors } from '../types/document/RegisterDoctor';
import { DoctorSchema } from '../model/doctor.model';
import { DeleteDoctor, GetDoctor, SaveReqDoctor, UpdateReqDoctor, RegisterDoctor } from '../types/request/Doctor.request';
import { SaveUpdateResDoctor, RegisterUpdateResDoctor } from '../types/response/Doctor.response';
import CustomeError from '../utills/error';
import * as bcrypt from 'bcrypt-nodejs';
import * as jwt from 'jsonwebtoken';
import { secret } from '../config/jwtConfig';
import { checkJwtToken } from '../middleware/checkJwtToken';
import apikeyauths from '../middleware/checkApikey';
import e from 'express';


export class DoctorRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/getDoctor', apikeyauths, async (req, res, next) => {
      try {
        const getreq: GetDoctor = req.body;
        const doctor: SaveUpdateResDoctor = await new DoctorController().getdoctor(getreq);
        res.send(doctor);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/savedoctor', async (req, res, next) => {
      try {
        const doctor: SaveReqDoctor = req.body;
        const newDoctor: SaveUpdateResDoctor = await new DoctorController().savedoctor(doctor);
        console.log(newDoctor)
        res.status(200).json({
          message: newDoctor
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.put('/updatedoctor', async (req, res, next) => {
      try {
        const doctor: UpdateReqDoctor = req.body;
        const upadated_Doctor: SaveUpdateResDoctor = await new DoctorController().updateDoctor(doctor);
        const response = {
          upadated_Doctor,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deletedoctor', checkJwtToken, async (req: any, res, next) => {
      try {
        const delreq: DeleteDoctor = req.body;
        const Deleted_doctor = await new DoctorController().deletdoctor(delreq, <any>req.user.id);
        res.status(200).json({
          message: 'Doctor deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/getDoctorlist', checkJwtToken, async (req: any, res, next) => {
      try {
        const DoctorList: SaveUpdateResDoctor[] = await new DoctorController().getdoctorList(<any>req.user.id);
        res.status(200).json({
          result: DoctorList
        });

      } catch (error) {
        next(error);
      }
    });

    this.router.post('/register', async (req, res, next) => {
      try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const registers: RegisterDoctor = {
          userName: req.body.userName,
          email: req.body.email,
          password: hash,
        }
        const registerDoc: RegisterUpdateResDoctor = await new DoctorController().registerDoctor(registers);
        res.status(200).json({
          message: registerDoc
        });
      } catch (error) {
        next(error)
      }
    })


    this.router.post('/loginUser', async (req, res, next) => {
      try {
        const userss: any = {
          email: req.body.email
        }
        const userDoc: RegisterUpdateResDoctor = await new DoctorController().loginEmailUser(userss);
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

    this.router.put('/like', async (req, res, next) => {
      const getReg: any = req.body
      const getandFind: any = await new DoctorController().findDoctorById(getReg)
      const getUserFind: any = await new DoctorController().findPatientById(getReg)

      var flag: boolean = true;
      if (getandFind && getUserFind) {
        function removeLike(elem: any, index: number, array: any) {
          if (req.body.userId == elem) {
            flag = false;
            return false;
          }
          return true;
        }
        var pass = getandFind.like.filter(removeLike);

        if (flag)
          getandFind.like.push(getUserFind._id);
        else
          getandFind.like = pass;
        getandFind.save();
        res.status(200).json({ doctor: getandFind })

      } else {
        res.status(404).json("Doctor and Patient ID Not Found")
      }
    })


  }
}
export const DoctorRoutesApi = new DoctorRoutes().router;