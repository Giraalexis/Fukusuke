using System;
using System.Data;
using System.Data.SqlClient;



namespace CapaDatos
{
    public class CD_Conexion
    {
        private SqlConnection Conexion = new SqlConnection("Server= ;DataBase= ;Integrated Security=true");

        public SqlConnection AbrirConexion()
        {
            if (Conexion.State == ConnectionState.Closed)
                Conexion.Open();
            return Conexion;
        }

        public SqlConnection CerrarConexion()
        {
            if(Conexion.State == ConnectionState.Open)            
                Conexion.Close();
            return Conexion;
            
        }

    }
}
