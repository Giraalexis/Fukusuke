using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class CD_Productos
    {
        private CD_Conexion conexion = new CD_Conexion();

        SqlDataReader leer;
        DataTable tabla = new DataTable();
        SqlCommand comando = new SqlCommand();

        public DataTable Mostrar()
        {
            //TRANSACCION SQL
            comando.Connection = conexion.AbrirConexion();
            comando.CommandText = "Select * from Producto";
            leer = comando.ExecuteReader();
            tabla.Load(leer);
            conexion.CerrarConexion();
            return tabla;

            //PROCEDIMIENTO ALMACENADO
            comando.Connection = conexion.AbrirConexion();
            comando.CommandText = "MostrarProductos"; //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            comando.CommandType = CommandType.StoredProcedure;
            leer = comando.ExecuteReader();
            tabla.Load(leer);
            conexion.CerrarConexion();
            return tabla;
        }

        public void Insertar(String Nombre, String Descripcion, String Stock, String Precio, String Estado, String Promocion)
        {
            //TRANSACCION SQL
            comando.Connection = conexion.AbrirConexion();
            comando.CommandText = "inserta into Producto values('"+ Nombre + "','" + Descripcion + "','" + Stock + "','" + Precio + "','" + Estado + "','" + Promocion + "')";
            comando.CommandType = CommandType.Text;
            comando.ExecuteNonQuery();
            comando.Parameters.Clear();

            //PROCEDIMIENTO ALMACENADO
            comando.Connection = conexion.AbrirConexion();
            comando.CommandText = "InsertarProductos"; //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            comando.CommandType = CommandType.StoredProcedure;
            comando.Parameters.AddWithValue("@Nombre", Nombre);
            comando.Parameters.AddWithValue("@Descripcion", Descripcion);
            comando.Parameters.AddWithValue("@Stock", Stock);
            comando.Parameters.AddWithValue("@Precio", Precio);
            comando.Parameters.AddWithValue("@Estado", Estado);
            comando.Parameters.AddWithValue("@Promocion", Promocion);
            comando.ExecuteNonQuery();
            comando.Parameters.Clear();

        }

        public void Editar(String Nombre, String Descripcion, String Stock, String Precio, String Estado, String Promocion, String Id)
        {
            //PROCEDIMIENTO ALMACENADO
            comando.Connection = conexion.AbrirConexion();
            comando.CommandText = "EditarProductos"; //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            comando.CommandType = CommandType.StoredProcedure;
            comando.Parameters.AddWithValue("@Nombre", Nombre);
            comando.Parameters.AddWithValue("@Descripcion", Descripcion);
            comando.Parameters.AddWithValue("@Stock", Stock);
            comando.Parameters.AddWithValue("@Precio", Precio);
            comando.Parameters.AddWithValue("@Estado", Estado);
            comando.Parameters.AddWithValue("@Promocion", Promocion);
            comando.Parameters.AddWithValue("@Id", Id);
            comando.ExecuteNonQuery();
            comando.Parameters.Clear();
        }

        public void Eliminar(string Id)
        {
            //PROCEDIMIENTO ALMACENADO
            comando.Connection = conexion.AbrirConexion();
            comando.CommandText = "EliminarProducto"; //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            comando.CommandType = CommandType.StoredProcedure;
            comando.Parameters.AddWithValue("@Idpro", Id); //EL PRIMER PARAMETRO ES EL NOMBRE CON EL QUE SE CREO EN EL PROCEDIMIENTO
            comando.ExecuteNonQuery();
            comando.Parameters.Clear();
        }
    }
}
