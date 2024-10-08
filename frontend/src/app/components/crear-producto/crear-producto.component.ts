import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../productos/producto';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';   
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, RouterModule, MatInputModule, MatIconModule,MatTableModule,CommonModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  producto: Producto = {} as Producto;
  mensaje: string = '';

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) { }

  crearProducto(): void {
    if (this.producto.nombre && this.producto.precio) { 
      this.productosService.crearProducto(this.producto)
        .subscribe({
          next: () => {
            this.mensaje = 'Producto creado exitosamente';
            this.producto = {} as Producto; 
            setTimeout(() => {
              this.router.navigate(['/productos']);
            }, 2000); 
          },
          error: (error) => this.mensaje = 'Error al crear el producto'
        });
    } else {
      this.mensaje = 'Por favor, completa todos los campos';
    }
  }
}