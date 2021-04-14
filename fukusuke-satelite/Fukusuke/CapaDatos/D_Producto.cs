using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.OracleClient;
using System.Configuration;
using CapaEntidades;
using System.Data;

namespace CapaDatos
{
    public class D_Producto
    {
        OracleConnection conexion = new OracleConnection(ConfigurationManager.ConnectionStrings["conectar"].ConnectionString);

        public List<E_Producto>ListarProducto(string buscar)
        {
            OracleDataReader LeerFilas;
            OracleCommand cmd = new OracleCommand("SP_BUSCARPRODUCTO", conexion); //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            cmd.CommandType = CommandType.StoredProcedure;
            conexion.Open();

            cmd.Parameters.AddWithValue("@BSUCAR", buscar); //VARIABLE DE ENTRADA DEL PROCEDIMIENTO ALMACENADO

            LeerFilas = cmd.ExecuteReader();

            List<E_Producto> Listar = new List<E_Producto>();

            while (LeerFilas.Read())
            {
                Listar.Add(new E_Producto
                {
                    ID = LeerFilas.GetInt32(0),
                    NAME = LeerFilas.GetString(1),
                    DESCRIPTION = LeerFilas.GetString(2),
                    PROMOTION = LeerFilas.GetInt32(3),
                    STOCK = LeerFilas.GetInt32(4),
                    PRICE = LeerFilas.GetInt32(5),
                    STATE = LeerFilas.GetInt32(6),
                    IMAGE = LeerFilas.GetString(7)
                });
            }

            conexion.Close();
            LeerFilas.Close();

            return Listar;
        }

        public void InsertarProducto(E_Producto Producto)
        {
            OracleCommand cmd = new OracleCommand("SP_INSERTARPRODUCTO", conexion); //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            cmd.CommandType = CommandType.StoredProcedure;
            conexion.Open();

            cmd.Parameters.AddWithValue("@NAME", Producto.NAME); //NOMBRE DEL CAMPO EN EL PROCEDIMIENTO ALMACENADO   
            cmd.Parameters.AddWithValue("@DESCRIPTION", Producto.DESCRIPTION);  
            cmd.Parameters.AddWithValue("@PROMOTION", Producto.PROMOTION);  
            cmd.Parameters.AddWithValue("@STOCK", Producto.STOCK);  
            cmd.Parameters.AddWithValue("@PRICE", Producto.PRICE);  
            cmd.Parameters.AddWithValue("@STATE", Producto.STATE);  
            cmd.Parameters.AddWithValue("@IMAGE", Producto.IMAGE);  

            cmd.ExecuteNonQuery();
            conexion.Close();
        }

        public void EditarProducto(E_Producto Producto)
        {
            OracleCommand cmd = new OracleCommand("SP_EDITARPRODUCTO", conexion); //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            cmd.CommandType = CommandType.StoredProcedure;
            conexion.Open();

            cmd.Parameters.AddWithValue("@ID", Producto.ID);  
            cmd.Parameters.AddWithValue("@NAME", Producto.NAME);  
            cmd.Parameters.AddWithValue("@DESCRIPTION", Producto.DESCRIPTION);
            cmd.Parameters.AddWithValue("@PROMOTION", Producto.PROMOTION);
            cmd.Parameters.AddWithValue("@STOCK", Producto.STOCK);
            cmd.Parameters.AddWithValue("@PRICE", Producto.PRICE);
            cmd.Parameters.AddWithValue("@STATE", Producto.STATE);
            cmd.Parameters.AddWithValue("@IMAGE", Producto.IMAGE);

            cmd.ExecuteNonQuery();
            conexion.Close();

        }

        public void EliminarProducto(E_Producto Producto)
        {
            OracleCommand cmd = new OracleCommand("SP_ELIMINARPRODUCTO", conexion); //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            cmd.CommandType = CommandType.StoredProcedure;
            conexion.Open();

            cmd.Parameters.AddWithValue("@ID", Producto.ID);  

            cmd.ExecuteNonQuery();
            conexion.Close();
        }

    }
}
