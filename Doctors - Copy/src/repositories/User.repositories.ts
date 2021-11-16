import { CustomerSchema } from '../model/customer.model';
import { StaffSchema } from '../model/staff.model';
import { RentalSchema } from '../model/rental.model';
import { PaymentSchema } from '../model/payment.model';
import { ActorSchema } from '../model/actor.model';
import { ICustomer } from '../types/document/ICustomer';
import { IRental } from '../types/document/IRental';
import { IActor } from '../types/document/IActor';
import { IStaff } from '../types/document/IStaff';
import { IPayment } from '../types/document/IPayment';
export class MainUser {
    constructor() { }
    saveCustomer(customer: ICustomer) {
        return new CustomerSchema(customer).save();
    }
    saveStaff(staff: IStaff) {
        return new StaffSchema(staff).save();
    }
    saveRental(rental: IRental) {
        return new RentalSchema(rental).save();
    }
    savePayment(payment: IPayment) {
        return new PaymentSchema(payment).save();
    }

    GetPaymentById(_id: string) {
        return PaymentSchema.findById(_id).populate('rentalId').populate('customerId').populate('staffId');
    }
    GetAllPayment() {
        return PaymentSchema.find().populate('rentalId').populate('customerId').populate('staffId');
    }




}