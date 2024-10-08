import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../productos/producto';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';   
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [ MatFormFieldModule,MatInputModule, FormsModule ,RouterModule, MatIconModule, MatTableModule
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
  eliminarProducto(id: number) {
    // Lógica para eliminar el producto con el ID dado
    console.log('Eliminar producto con ID:', id);
  }
}