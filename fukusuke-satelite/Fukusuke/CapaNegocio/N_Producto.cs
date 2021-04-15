using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidades;
using CapaDatos;

namespace CapaNegocio
{
    public class N_Producto
    {
        D_Producto objDatos = new D_Producto();

        public List<E_Producto> ListandoProducto(string buscar)
        {
            return objDatos.ListarProducto(buscar);
        }

        public void InsertandoProducto(E_Producto Producto)
        {
            objDatos.InsertarProducto(Producto);
        }

        public void EditandoProducto(E_Producto Producto)
        {
            objDatos.EditarProducto(Producto);
        }

        public void EliminandoProducto(E_Producto Producto)
        {
            objDatos.EliminarProducto(Producto);
        }
    }
}
