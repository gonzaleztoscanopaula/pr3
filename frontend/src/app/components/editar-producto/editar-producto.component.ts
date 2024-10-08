import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-editar-producto',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatTableModule, FormsModule, RouterModule, MatInputModule, CommonModule], 
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