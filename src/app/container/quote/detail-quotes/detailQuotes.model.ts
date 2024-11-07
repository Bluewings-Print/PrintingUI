export class DetailedQuote {
  id!:string;
    firstName!: string;
    lastName!: string;
    companyName!: string;
    email!: string;
    phone!: string;
    address!: string;
    city!: string;
    country!: string;
    state!: string;
    zipcode!: string;
    orderDetails!: OrderDetails[];
  }
  
  export class OrderDetails {
    brand!: string;
    gender!: string;
    color!: string;
    sizeQuantity!: { [key: string]: number };
    frontImagePath!: string;
    backImagePath!: string;
    lhSleevePath!: string;
    rhSleevePath!: string;
    additionalInfo!: string;
  }
  