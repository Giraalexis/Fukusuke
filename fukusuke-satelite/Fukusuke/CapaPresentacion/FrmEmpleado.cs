using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using CapaEntidades;
using CapaNegocio;

namespace CapaPresentacion
{
    public partial class FrmEmpleado : Form
    {
        private string idempleado;
        private string password;
        private bool editarse = false;

        E_Empleado objEntidad = new E_Empleado();
        N_Empleado objNegocio = new N_Empleado();
        public FrmEmpleado()
        {
            InitializeComponent();
        }

        private void FrmEmpleado_Load(object sender, EventArgs e)
        {
            mostrarBuscarTabla("");
            accionesTabla();
        }

        //METODO PARA OCULTAR COLUMNAS EN LA TABLA -- AGREGAR METODO AL METODO DE CARGA INICIAL -- ESPECIFICAR ANCHOS DE COLUMNAS

        /*
        public void ocultarColumna()
        {
            tablaEmpleado.Columns[0].Visible = false;

            tablaEmpleado.Columns[0].With = 60;
        }
        */

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        public void accionesTabla()
        {
            tablaEmpleado.Columns[0].Visible = false;
            tablaEmpleado.Columns[1].Width = 60;
            tablaEmpleado.Columns[2].Width = 100;
            tablaEmpleado.Columns[3].Width = 50;
            tablaEmpleado.Columns[4].Width = 50;
            tablaEmpleado.Columns[5].Width = 50;
            tablaEmpleado.Columns[6].Width = 50;
            tablaEmpleado.Columns[7].Width = 50;
            tablaEmpleado.Columns[8].Width = 50;


            tablaEmpleado.ClearSelection();
        }

        public void mostrarBuscarTabla(string buscar)
        {
            N_Empleado objNegocio = new N_Empleado();
            tablaEmpleado.DataSource = objNegocio.ListandoEmpleado(buscar);
        }

        private void limpiarCampos()
        {
            editarse = false;
            txtNombre.Text = "";
            txtRut.Text = "";
            txtFecha.Text = "";
            txtTelefono.Text = "";
            txtEmail.Text = "";
            txtEstado.Text = "";
            txtComuna.Text = "";
            txtRol.Text = "";
            txtSexo.Text = "";
        }

        private void txtBuscar_TextChanged(object sender, EventArgs e)
        {
            mostrarBuscarTabla(txtBuscar.Text);
        }
       
        private void btnEditar_Click_1(object sender, EventArgs e)
        {
            if (tablaEmpleado.SelectedRows.Count > 0)
            {
                editarse = true;
                idempleado = tablaEmpleado.CurrentRow.Cells[0].Value.ToString();
                txtNombre.Text = tablaEmpleado.CurrentRow.Cells[1].Value.ToString();
                txtRut.Text = tablaEmpleado.CurrentRow.Cells[2].Value.ToString();
                txtFecha.Text = tablaEmpleado.CurrentRow.Cells[3].Value.ToString();
                txtTelefono.Text = tablaEmpleado.CurrentRow.Cells[4].Value.ToString();
                txtEmail.Text = tablaEmpleado.CurrentRow.Cells[5].Value.ToString();
                password = tablaEmpleado.CurrentRow.Cells[6].Value.ToString();
                txtEstado.Text = tablaEmpleado.CurrentRow.Cells[7].Value.ToString();
                txtComuna.Text = tablaEmpleado.CurrentRow.Cells[8].Value.ToString();
                txtRol.Text = tablaEmpleado.CurrentRow.Cells[9].Value.ToString();
                txtSexo.Text = tablaEmpleado.CurrentRow.Cells[10].Value.ToString();
            }
            else
            {
                MessageBox.Show("Seleccione una fila");
            }
        }

        private void btnEliminar_Click(object sender, EventArgs e)
        {
            if (tablaEmpleado.SelectedRows.Count > 0)
            {
                objEntidad.ID = Convert.ToInt32(tablaEmpleado.CurrentRow.Cells[0].Value.ToString());

                objNegocio.EliminandoEmpleado(objEntidad);

                MessageBox.Show("Se elimino el registro");
                mostrarBuscarTabla("");
            }
            else
            {
                MessageBox.Show("Selecciona la fila que deseas eliminar");
            }
        }

        private void btnGuardar_Click(object sender, EventArgs e)
        {
            if (editarse == false)
            {
                try
                {
                    objEntidad.NAME = txtNombre.Text;
                    objEntidad.RUT = Convert.ToInt32(txtRut.Text);
                    objEntidad.DATE_BURN = Convert.ToDateTime(txtFecha.Text);
                    objEntidad.TELPHONE = Convert.ToInt32(txtTelefono.Text);
                    objEntidad.EMAIL = txtEmail.Text;
                    objEntidad.PASSWORD = txtPassword.Text;
                    objEntidad.STATE = Convert.ToInt32(txtEstado.Text);
                    objEntidad.COMMUNE_ID = Convert.ToInt32(txtComuna.Text);
                    objEntidad.ROLE_ID = Convert.ToInt32(txtRol.Text);
                    objEntidad.SEX_ID = Convert.ToInt32(txtSexo.Text);

                    objNegocio.InsertandoEmpleado(objEntidad);

                    MessageBox.Show("Se guardo el registro");
                    mostrarBuscarTabla("");
                    limpiarCampos();
                }
                catch (Exception ex)
                {
                    MessageBox.Show("No se pudo guardar el registro" + ex.StackTrace);
                }
            }
            if (editarse == true)
            {
                try
                {
                    objEntidad.ID = Convert.ToInt32(idempleado);
                    objEntidad.NAME = txtNombre.Text;
                    objEntidad.RUT = Convert.ToInt32(txtRut.Text);
                    objEntidad.DATE_BURN = Convert.ToDateTime(txtFecha.Text);
                    objEntidad.TELPHONE = Convert.ToInt32(txtTelefono.Text);
                    objEntidad.EMAIL = txtEmail.Text;
                    objEntidad.PASSWORD = txtPassword.Text;
                    objEntidad.STATE = Convert.ToInt32(txtEstado.Text);
                    objEntidad.COMMUNE_ID = Convert.ToInt32(txtComuna.Text);
                    objEntidad.ROLE_ID = Convert.ToInt32(txtRol.Text);
                    objEntidad.SEX_ID = Convert.ToInt32(txtSexo.Text);


                    objNegocio.EditandoEmpleado(objEntidad);

                    MessageBox.Show("Se edito el registro");
                    mostrarBuscarTabla("");
                    limpiarCampos();
                    editarse = false;
                }
                catch (Exception ex)
                {
                    MessageBox.Show("No se pudo editar el registro" + ex.StackTrace);
                }
            }
        }
    }
}
