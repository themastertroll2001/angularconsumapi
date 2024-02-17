import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit{

  productList: ProductInterface[]=[];
  constructor(private productoService: ProductoService) {}
  ngOnInit(): void {
this.getProducto()
  }
getProducto(){
  this.productoService.getProducto().subscribe({
 next: (result) => {
   this.productList = result.products;
 },
error: (err)=>{
  console.log(err);
}

  })
}

}
