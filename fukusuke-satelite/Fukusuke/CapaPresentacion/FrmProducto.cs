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
    public partial class FrmProducto : Form
    {
        private string idproducto;
        private bool editarse = false;

        E_Producto objEntidad = new E_Producto();
        N_Producto objNegocio = new N_Producto();
        public FrmProducto()
        {
            InitializeComponent();
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void FrmProducto_Load(object sender, EventArgs e)
        {
            mostrarBuscarTabla("");
        }

        public void accionesTabla()
        {
            tablaProducto.Columns[0].Visible = false;
            tablaProducto.Columns[1].Width = 60;
            tablaProducto.Columns[2].Width = 100;
            tablaProducto.Columns[3].Width = 50;
            tablaProducto.Columns[4].Width = 50;
            tablaProducto.Columns[5].Width = 50;
            tablaProducto.Columns[6].Width = 50;

            tablaProducto.ClearSelection();
        }

        public void mostrarBuscarTabla(string buscar)
        {
            N_Producto objNegocio = new N_Producto();
            tablaProducto.DataSource = objNegocio.ListandoProducto(buscar);
        }

        private void limpiarCampos()
        {
            editarse = false;
            txtNombre.Text = "";
            txtDescripcion.Text = "";
            txtPromocion.Text = "";
            txtStock.Text = "";
            txtPrecio.Text = "";
            txtEstado.Text = "";
        }

        private void txtBuscar_TextChanged(object sender, EventArgs e)
        {
            mostrarBuscarTabla(txtBuscar.Text);
        }

        private void btnEditar_Click(object sender, EventArgs e)
        {
            if(tablaProducto.SelectedRows.Count > 0)
            {
                editarse = true;
                idproducto = tablaProducto.CurrentRow.Cells[0].Value.ToString();
                txtNombre.Text = tablaProducto.CurrentRow.Cells[1].Value.ToString();
                txtDescripcion.Text = tablaProducto.CurrentRow.Cells[2].Value.ToString();
                txtPromocion.Text = tablaProducto.CurrentRow.Cells[3].Value.ToString();
                txtStock.Text = tablaProducto.CurrentRow.Cells[4].Value.ToString();
                txtPrecio.Text = tablaProducto.CurrentRow.Cells[5].Value.ToString();
                txtEstado.Text = tablaProducto.CurrentRow.Cells[6].Value.ToString();
            }
            else
            {
                MessageBox.Show("Seleccione una fila");
            }
        }

        private void btnGuardar_Click(object sender, EventArgs e)
        {
            if(editarse == false)
            {
                try
                {
                    objEntidad.NAME = txtNombre.Text;
                    objEntidad.DESCRIPTION = txtDescripcion.Text;
                    objEntidad.PROMOTION = Convert.ToInt32(txtPromocion.Text);
                    objEntidad.STOCK = Convert.ToInt32(txtStock.Text);
                    objEntidad.PRICE = Convert.ToInt32(txtPrecio.Text);
                    objEntidad.STATE = Convert.ToInt32(txtEstado.Text);

                    objNegocio.InsertandoProducto(objEntidad);

                    MessageBox.Show("Se guardo el registro");
                    mostrarBuscarTabla("");
                    limpiarCampos();
                }
                catch(Exception ex)
                {
                    MessageBox.Show("No se pudo guardar el registro" + ex.StackTrace);
                }
            }
            if(editarse == true)
            {
                try
                {
                    objEntidad.ID = Convert.ToInt32(idproducto);
                    objEntidad.NAME = txtNombre.Text;
                    objEntidad.DESCRIPTION = txtDescripcion.Text;
                    objEntidad.PROMOTION = Convert.ToInt32(txtPromocion.Text);
                    objEntidad.STOCK = Convert.ToInt32(txtStock.Text);
                    objEntidad.PRICE = Convert.ToInt32(txtPrecio.Text);
                    objEntidad.STATE = Convert.ToInt32(txtEstado.Text);

                    objNegocio.EditandoProducto(objEntidad);

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

        private void btnEliminar_Click(object sender, EventArgs e)
        {
            if(tablaProducto.SelectedRows.Count > 0)
            {
                objEntidad.ID = Convert.ToInt32(tablaProducto.CurrentRow.Cells[0].Value.ToString());

                objNegocio.EliminandoProducto(objEntidad);

                MessageBox.Show("Se elimino el registro");
                mostrarBuscarTabla("");
            }
            else
            {
                MessageBox.Show("Selecciona la fila que deseas eliminar");
            }
        }
    }
}
