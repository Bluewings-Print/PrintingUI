export class ContactModel{
    id!:string;
    firstName!:string;
    phoneNumber!:number;
    email!:string;
    description!:string;
    message!:string;
    status: string = 'PENDING';
    isExpanded: boolean = false;
}