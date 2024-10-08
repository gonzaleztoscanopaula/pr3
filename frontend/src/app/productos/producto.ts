// productos/producto.ts
export interface Producto {
    id?: number; // El id es opcional ya que lo genera la base de datos
    nombre: string;
    precio: number;
    // ... otras propiedades que necesites
  }