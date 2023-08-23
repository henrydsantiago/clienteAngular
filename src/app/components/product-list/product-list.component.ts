import { Component } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from 'src/app/interfaces/Product';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //products: any[] =[]
 products: Product[] =[];
/*   producto: Product={
    name:'',
    description: '',
    price:0,
    imageURL:''
  }; */

  constructor(
    private productService: ProductService,
    private router: Router){}

  ngOnInit(){
    this.getProducts()
  }

  //editar:boolean=false;

    getProducts(){
      this.productService.getProducts()
        .subscribe(
          (res:any) => {
            let result:any = [];
      
            let keys = Object.keys(res);
              keys.forEach(function(key){
                  result.push(res[key]);
              });
      
            this.products = result[0]
            console.log(result[0])
          }
          
          ,
          err=> console.log(err)
        )
    }

    deleteProduct(id:string){
      this.productService.deleteProduct(id)
        .subscribe(
          res=>{
            console.log(res);
            //this.router.navigate(['/']);
            this.getProducts()
          },
          err => console.log(err)
        )
    }





    /*   getProducts(){
    this.productService.getProducts()
      .subscribe((res: any) => {
        let result=[]

        let keys=Object.keys(res)
        keys.forEach(function(key){
          result.push(res[key]);
        })
        this.products = result
        }
        ,
        err=> console.log(err)
      )
  } */


}

