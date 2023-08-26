import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from "../../services/product.service";
/*
import { Product } from "../../interfaces/Product";
import { ProductFormComponent } from "../product-form/product-form.component"; */


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

  constructor(
    private productService:ProductService
  ){}


  handleSearch(value:string){
    this.getProduct(value)
    console.log(value);
  }

  productox: any[]=[]

   
  ngOnInit(){
    
   /*  this.productService.getProduct('64deb99ba047f37da1c9fe49')
    .subscribe((products) => this.productox=products) */
  }

  getProduct(id:string){
    this.productService.getProduct(id)
      .subscribe(
        (producto)=>{
          console.log('Este es el producto');
          console.log(producto);
          this.productox[0] = producto
          console.log('Este es el Array de productox');
          console.log(this.productox);

         }
         //64deb99ba047f37da1c9fe49

/*         (res:any) => {
          let result:any = [];
    
          let keys = Object.keys(res);
            keys.forEach(function(key){
                result.push(res[key]);
            });
    
          this.productox = result[0]
        } */
        
        ,
        err=> console.log(err)
      )
  }
  


}
