using System;
using System.Data;
using System.Data.SqlClient;
using CapaDatos;

namespace CapaNegocio
{
    public class CN_Productos
    {
        private CD_Productos objetoCD = new CD_Productos();

        public DataTable MostarProd()
        {
            DataTable tabla = new DataTable();
            tabla = objetoCD.Mostrar();
            return tabla;
        }

        public void InsertarProd(String Nombre, String Descripcion, String Stock, String Precio, String Estado, String Promocion)
        {
            objetoCD.Insertar(Nombre, Descripcion, Stock, Precio, Estado, Promocion); //AQUI SE REALIZAN LAS CONVERSIONES DE DATOS SI ES NECESARIO
        }

        public void EditarProd(String Nombre, String Descripcion, String Stock, String Precio, String Estado, String Promocion, String Id)
        {
            objetoCD.Editar(Nombre, Descripcion, Stock, Precio, Estado, Promocion, Id);
        }

        public void EliminarProd(string Id)
        {
            objetoCD.Eliminar(Id);
        }
        

    }
}
