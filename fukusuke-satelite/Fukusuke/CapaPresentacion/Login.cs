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
    public partial class Login : Form
    {
        public Login()
        {
            InitializeComponent();
        }

        private void btnSalir_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void cbContraseña_CheckedChanged(object sender, EventArgs e)
        {
            if (cbContraseña.Checked)
            {
                txtContraseña.UseSystemPasswordChar = false;
                var checkbox = (CheckBox)sender;
                checkbox.Text = "Ocultar contraseña";
            }
            else
            {
                txtContraseña.UseSystemPasswordChar = true;
                var checkbox = (CheckBox)sender;
                checkbox.Text = "Mostrar contraseña";
            }
        }
    }
}
