using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using CapaNegocio;

namespace CapaPresentacion
{
    public partial class Producto : Form
    {
        CN_Productos objetoCN = new CN_Productos();
        private string idProducto = null;
        private bool Editar = false;
        public Producto()
        {
            InitializeComponent();
        }

        private void Producto_Load(object sender, EventArgs e)
        {
            MostrarProductos();
        }

        private void MostrarProductos()
        {
            CN_Productos objeto = new CN_Productos();
            dataGridView1.DataSource = objeto.MostarProd();
        }

        private void btnGuardar_Click(object sender, EventArgs e)
        {
            //INSERTAR PRODUCTO
            if(Editar == false)
            {            
                try
                {
                    objetoCN.InsertarProd(txtNombre.Text, txtDesc.Text, txtStock.Text, txtPrecio.Text, txtEstado.Text, txtPromocion.Text);
                    MessageBox.Show("Se inserto correctamente");
                    MostrarProductos();
                    limpiarForm();
                }
                catch(Exception ex)
                {
                    MessageBox.Show("no se pudieron insertar los dato, motivo: " + ex.StackTrace);
                }
            }

            //EDITAR PRODUCTO
            if(Editar == true)
            {
                try
                {
                    objetoCN.EditarProd(txtNombre.Text, txtDesc.Text, txtStock.Text, txtPrecio.Text, txtEstado.Text, txtPromocion.Text,idProducto);
                    MessageBox.Show("Se edito correctamente");
                    MostrarProductos();
                    limpiarForm();
                    Editar = false;
                }
                catch(Exception ex)
                {
                    MessageBox.Show("no se pudieron editar los dato, motivo: " + ex.StackTrace);
                }
            }
        }

        private void btnEditar_Click(object sender, EventArgs e)
        {
            if (dataGridView1.SelectedRows.Count > 0)
            {
                Editar = true;
                txtNombre.Text = dataGridView1.CurrentRow.Cells["Nombre"].Value.ToString();
                txtNombre.Text = dataGridView1.CurrentRow.Cells["Descripcion"].Value.ToString();
                txtNombre.Text = dataGridView1.CurrentRow.Cells["Stock"].Value.ToString();
                txtNombre.Text = dataGridView1.CurrentRow.Cells["Precio"].Value.ToString();
                txtNombre.Text = dataGridView1.CurrentRow.Cells["Estado"].Value.ToString();
                txtNombre.Text = dataGridView1.CurrentRow.Cells["Promocion"].Value.ToString();
                idProducto = dataGridView1.CurrentRow.Cells["Id"].Value.ToString();
            }
            else
                MessageBox.Show("Seleccione una fila por favor");
        }

        private void limpiarForm()
        {
            txtNombre.Clear();
            txtDesc.Clear();
            txtStock.Clear();
            txtPrecio.Clear();
            txtEstado.Clear();
            txtPromocion.Clear();
        }

        private void btnEliminar_Click(object sender, EventArgs e)
        {
            if (dataGridView1.SelectedRows.Count > 0)
            {
                idProducto = dataGridView1.CurrentRow.Cells["Id"].Value.ToString();
                objetoCN.EliminarProd(idProducto);
                MessageBox.Show("Eliminado correctamente");
                MostrarProductos();
            }
            else
                MessageBox.Show("Seleccione una fila por favor");
        }
    }
}
