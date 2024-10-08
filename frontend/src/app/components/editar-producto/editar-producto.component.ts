import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../productos/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {
  producto: Producto = {} as Producto;
  id: number = 0;
  mensaje: string = '';

  constructor(
    private productosService: ProductosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerProducto();
  }

  obtenerProducto(): void {
    this.productosService.obtenerProducto(this.id)
      .subscribe({
        next: (producto) => this.producto = producto,
        error: (error) => console.error('Error al obtener el producto:', error)
      });
  }

  actualizarProducto(): void {
    this.productosService.actualizarProducto(this.id, this.producto)
      .subscribe({
        next: () => {
          this.mensaje = 'Producto actualizado exitosamente';
          setTimeout(() => {
            this.router.navigate(['/productos']);
          }, 2000);
        },
        error: (error) => this.mensaje = 'Error al actualizar el producto'
      });
  }
}