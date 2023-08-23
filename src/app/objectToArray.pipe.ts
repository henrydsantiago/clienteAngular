import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./interfaces/Product";

@Pipe({
    name:'ObjToArray'
})

export class ObjToArrayPipe implements PipeTransform{
    
    transform(object: any={}): Product[] {
        return Object.values(object)
    }
}