import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../productos/producto';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
  ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];
  displayedColumns: string[] = ['nombre', 'precio', 'acciones'];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productosService.obtenerProductos()
      .subscribe(productos => this.productos = productos);
  }
}