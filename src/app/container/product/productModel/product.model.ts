// export class Product {
//     product_ID!: number;
//     category_Type_ID!: number;
//     category_ID!: number;
//     product_Name!: string;
//     product_Description!: string;
//     product_IsActive!: boolean;
//     product_Price!: number;
//     product_Image!: string;
//     product_isMisc!: boolean;
//   }

export interface Product {

    id: number;
    name: string;
    price: number;
    color: string;
    category: string;
    size: string;
    brand: string;
  }
  