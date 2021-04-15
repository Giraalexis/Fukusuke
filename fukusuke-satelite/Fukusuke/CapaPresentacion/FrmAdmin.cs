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
    public partial class FrmAdmin : Form
    {
        public FrmAdmin()
        {
            InitializeComponent();
            AbrirFormulariosEnContenedor(new FrmInicio());
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private Form formActivado = null;

        private void AbrirFormulariosEnContenedor(Form FormHijo)
        {
            if (formActivado != null)
                formActivado.Close();
            formActivado = FormHijo;
            FormHijo.TopLevel = false;
            FormHijo.Dock = DockStyle.Fill;
            contenedor.Controls.Add(FormHijo);
            contenedor.Tag = FormHijo;
            FormHijo.BringToFront();
            FormHijo.Show();
        }

        private void btnProducto_Click(object sender, EventArgs e)
        {
            titulo.Text = "Productos";
            AbrirFormulariosEnContenedor(new FrmProducto());
        }

        private void btnEmpleados_Click(object sender, EventArgs e)
        {
            titulo.Text = "Empleados";
            AbrirFormulariosEnContenedor(new FrmEmpleado());
        }

        private void btnInicio_Click(object sender, EventArgs e)
        {
            titulo.Text = "Inicio";
            AbrirFormulariosEnContenedor(new FrmInicio());
        }

        private void contenedor_Paint(object sender, PaintEventArgs e)
        {

        }

        private void titulo_Click(object sender, EventArgs e)
        {

        }

        private void Header_Paint(object sender, PaintEventArgs e)
        {

        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {

        }

        private void Menu_Paint(object sender, PaintEventArgs e)
        {

        }

        private void usuario_Click(object sender, EventArgs e)
        {

        }
    }


}
