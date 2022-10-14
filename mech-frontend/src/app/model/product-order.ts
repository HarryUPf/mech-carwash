import { Product } from "./product";
import { Car } from "./car";
import { Employee } from "./employee";

export class ProductOrder{
    id:number;
    date:Date;
    description:String;
    product:Product;
    car:Car;
    employee:Employee;
}
