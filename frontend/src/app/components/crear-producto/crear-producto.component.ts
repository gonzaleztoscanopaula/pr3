import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../productos/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormsModule],
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