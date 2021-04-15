using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CapaPresentacion
{
    public partial class FrmGerente : Form
    {
        public FrmGerente()
        {
            InitializeComponent();
            AbrirFormulariosEnContenedor(new FrmInicio());
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

        private void btnInicio_Click(object sender, EventArgs e)
        {
            titulo.Text = "Inicio";
            AbrirFormulariosEnContenedor(new FrmInicio());
        }

        private void btnReporte_Click(object sender, EventArgs e)
        {
            titulo.Text = "Reporte";
            AbrirFormulariosEnContenedor(new FrmReporte());
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
