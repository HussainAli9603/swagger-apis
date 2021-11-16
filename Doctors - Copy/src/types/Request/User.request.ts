export interface ReqCustomer {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    // active: 1;
}

export interface ReqStaff {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    store: string;
    picUrl: string;

}

export interface ReqRental {
    customerId: string;
    staffId: string;
    filmId: string;
    rentalDate: string;
    returnDate: string;

}

export interface ReqPayment {
    rentalId: string;
    staffId: string;
    customerId: string;
    amount: string;

}

export interface GetPaymentById {
    _id: string;

}
