export class QuickQuotes {
    // docType: string = 'quickQuote'; // assuming a default docType for the model, adjust if needed
    fullName!: string;
    eventName!: string;
    // imagePath: string[] = []; // to store the file paths of uploaded images
    email!: string;
    quantity!: string;
    categoryId!: string;
    genders: string[] = []; // to store selected gender options (e.g., ["mens", "ladies"])
    color!: string;
    budget!: string;
    dateRequired!: Date;
    deliveryPostCode!: number;
    additionalInfo!: string;
  
 
  }