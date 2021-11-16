export interface ResCustomer {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    active: 1;
}

export interface ResStaff {
    _id: string;
    paymentId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    store: string;
    picUrl: string;
}

export interface ResRental {
    _id: string;
    customerId: string;
    staffId: string;
    filmId: string;
    rentalDate: string;
    returnDate: string;

}
export interface ResPayment {
    _id: string;
    rentalId: string;
    staffId: string;
    customerId: string;
    amount: string;

}