using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidades;
using CapaDatos;

namespace CapaNegocio
{
    public class N_Empleado
    {
        D_Empleado objDatos = new D_Empleado();

        public List<E_Empleado> ListandoEmpleado(string buscar)
        {
            return objDatos.ListarEmpleado(buscar);
        }

        public void InsertandoEmpleado(E_Empleado Empleado)
        {
            objDatos.InsertarEmpleado(Empleado);
        }

        public void EditandoEmpleado(E_Empleado Empleado)
        {
            objDatos.EditarEmpleado(Empleado);
        }

        public void EliminandoEmpleado(E_Empleado Empleado)
        {
            objDatos.EliminarEmpleado(Empleado);
        }

        
    }
}
