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
    public class D_Empleado
    {
        OracleConnection conexion = new OracleConnection(ConfigurationManager.ConnectionStrings["conectar"].ConnectionString);

        public List<E_Empleado> ListarEmpleado(string buscar)
        {
            OracleDataReader LeerFilas;
            OracleCommand cmd = new OracleCommand("SP_BUSCAREMPLEADO", conexion); //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            cmd.CommandType = CommandType.StoredProcedure;
            conexion.Open();

            cmd.Parameters.AddWithValue("@BSUCAR", buscar); //VARIABLE DE ENTRADA DEL PROCEDIMIENTO ALMACENADO

            LeerFilas = cmd.ExecuteReader();

            List<E_Empleado> Listar = new List<E_Empleado>();

            while (LeerFilas.Read())
            {
                Listar.Add(new E_Empleado
                {
                    ID = LeerFilas.GetInt32(0),
                    NAME = LeerFilas.GetString(1),
                    RUT = LeerFilas.GetInt32(2),
                    DATE_BURN = LeerFilas.GetDateTime(3),
                    TELPHONE = LeerFilas.GetInt32(4),
                    EMAIL = LeerFilas.GetString(5),
                    PASSWORD = LeerFilas.GetString(6),
                    STATE = LeerFilas.GetInt32(7),
                    COMMUNE_ID = LeerFilas.GetInt32(8),
                    ROLE_ID = LeerFilas.GetInt32(9),
                    SEX_ID = LeerFilas.GetInt32(10)
                });
            }

            conexion.Close();
            LeerFilas.Close();

            return Listar;
        }

        public void InsertarEmpleado(E_Empleado Empleado)
        {
            OracleCommand cmd = new OracleCommand("SP_INSERTAREMPLEADO", conexion); //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            cmd.CommandType = CommandType.StoredProcedure;
            conexion.Open();

            cmd.Parameters.AddWithValue("@NAME", Empleado.NAME); //NOMBRE DEL CAMPO EN EL PROCEDIMIENTO ALMACENADO   
            cmd.Parameters.AddWithValue("@RUT", Empleado.RUT);
            cmd.Parameters.AddWithValue("@DATE_BURN", Empleado.DATE_BURN);
            cmd.Parameters.AddWithValue("@TELPHONE", Empleado.TELPHONE);
            cmd.Parameters.AddWithValue("@EMAIL", Empleado.EMAIL);
            cmd.Parameters.AddWithValue("@PASSWORD", Empleado.PASSWORD);
            cmd.Parameters.AddWithValue("@STATE", Empleado.STATE);
            cmd.Parameters.AddWithValue("@COMMUNE_ID", Empleado.COMMUNE_ID);
            cmd.Parameters.AddWithValue("@ROLE_ID", Empleado.ROLE_ID);
            cmd.Parameters.AddWithValue("@SEX_ID", Empleado.SEX_ID);

            cmd.ExecuteNonQuery();
            conexion.Close();
        }

        public void EditarEmpleado(E_Empleado Empleado)
        {
            OracleCommand cmd = new OracleCommand("SP_EDITAREMPLEADO", conexion); //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            cmd.CommandType = CommandType.StoredProcedure;
            conexion.Open();

            cmd.Parameters.AddWithValue("@ID", Empleado.ID);
            cmd.Parameters.AddWithValue("@NAME", Empleado.NAME);
            cmd.Parameters.AddWithValue("@RUT", Empleado.RUT);
            cmd.Parameters.AddWithValue("@DATE_BURN", Empleado.DATE_BURN);
            cmd.Parameters.AddWithValue("@TELPHONE", Empleado.TELPHONE);
            cmd.Parameters.AddWithValue("@EMAIL", Empleado.EMAIL);
            cmd.Parameters.AddWithValue("@PASSWORD", Empleado.PASSWORD);
            cmd.Parameters.AddWithValue("@STATE", Empleado.STATE);
            cmd.Parameters.AddWithValue("@COMMUNE_ID", Empleado.COMMUNE_ID);
            cmd.Parameters.AddWithValue("@ROLE_ID", Empleado.ROLE_ID);
            cmd.Parameters.AddWithValue("@SEX_ID", Empleado.SEX_ID);

            cmd.ExecuteNonQuery();
            conexion.Close();

        }

        public void EliminarEmpleado(E_Empleado Empleado)
        {
            OracleCommand cmd = new OracleCommand("SP_ELIMINAREMPLEADO", conexion); //NOMBRE DEL PROCEDIMIENTO ALMACENADO
            cmd.CommandType = CommandType.StoredProcedure;
            conexion.Open();

            cmd.Parameters.AddWithValue("@ID", Empleado.ID);

            cmd.ExecuteNonQuery();
            conexion.Close();
        }
    }
}
