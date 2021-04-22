/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vistas;

import dao.EmpleadoDAO;
import entidades.Empleado;
import java.sql.Date;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author felipe
 */
public class empleado extends javax.swing.JFrame {

    /**
     * Creates new form empleado
     */
    public empleado() {
        initComponents();
        txtId.setVisible(false);
        this.listar();
    }
    
    private void listar(){
        
        EmpleadoDAO tDAO = new EmpleadoDAO();
        
        try {
            ArrayList<Empleado> empleados = tDAO.listarEmpleados();
            
            DefaultTableModel modelo = new DefaultTableModel();
            
            modelo.addColumn("Id");
            modelo.addColumn("nombre");
            modelo.addColumn("Rut");
            modelo.addColumn("F.Nacimiento");
            modelo.addColumn("Telefono");
            modelo.addColumn("Email");
            modelo.addColumn("Contraseña");
            modelo.addColumn("Estado");
            modelo.addColumn("Comuna");
            modelo.addColumn("Rol");
            modelo.addColumn("Sexo");
            
            
            for (Empleado empleadore : empleados) {
                String[] fila = new String[11];
                
                fila[0] = String.valueOf(empleadore.getId());
                fila[1] = empleadore.getName();
                fila[2] = empleadore.getRut();
                fila[3] = String.valueOf(empleadore.getDate_burn());
                fila[4] = String.valueOf(empleadore.getTelphone());
                fila[5] = empleadore.getEmail();
                fila[6] = empleadore.getPassword();
                
                if(empleadore.getState() == 1){
                    fila[7] = "Activo";
                }else{
                    fila[7] = "Inactivo";
                }
                
                if(empleadore.getCommune_id() == 29)
                    fila[8] = "Juan Fernandez";
                else if(empleadore.getCommune_id() == 20)
                    fila[8] = "Quillota";
                else if(empleadore.getCommune_id() == 34)
                    fila[8] = "Limache";
                else if(empleadore.getCommune_id() == 1)
                    fila[8] = "Catemu";
                else if(empleadore.getCommune_id() == 7)
                    fila[8] = "Calle Larga";
                else if(empleadore.getCommune_id() == 6)
                    fila[8] = "Santa Maria";
                else if(empleadore.getCommune_id() == 33)
                    fila[8] = "Viña del mar";
                else if(empleadore.getCommune_id() == 32)
                    fila[8] = "Valparaiso";
                else if(empleadore.getCommune_id() == 37)
                    fila[8] = "Quilpue";
                else if(empleadore.getCommune_id() == 36)
                    fila[8] = "Villa Alemana";
                else if(empleadore.getCommune_id() == 28)
                    fila[8] = "Concon";
                
                if(empleadore.getRol_id() == 1)
                    fila[9] = "Administrador";
                else if (empleadore.getRol_id() == 2)
                    fila[9] = "Mantenedor";
                else if (empleadore.getRol_id() == 3)
                    fila[9] = "Dueño";
                else if (empleadore.getRol_id() == 4)
                    fila[9] = "Cajero";
                
                if(empleadore.getSex_id() == 1){
                    fila [10] = "Masculino";
                }else{
                    fila [10] = "Femenino";
                }
                    
                
                
                modelo.addRow(fila);
            }
            
            tblEmpleados.setModel(modelo);
            
            
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }
    
    private void limpiarCampos(){
        txtNombre.setText("");
        txtRut.setText("");
        txtNacimiento.setText("");
        txtTelefono.setText("");
        txtEmail.setText("");
        txtContraseña.setText("");
        bgEstado.clearSelection();
        cbComuna.setSelectedIndex(0);
        cbRol.setSelectedIndex(0);
        cbSexo.setSelectedIndex(0);
        txtId.setText("");
    }
    
    private void buscar(){
        
        EmpleadoDAO tDAO = new EmpleadoDAO();
        
        try {
            ArrayList<Empleado> empleados = null;
            
            if(txtBuscar.getText().isEmpty()){
                empleados = tDAO.listarEmpleados();
            }else{
                empleados = tDAO.buscarEmpleado(txtBuscar.getText());
                
                if(empleados.size() == 0){
                JOptionPane.showMessageDialog(this, "No encontrado");
                
                }
            }
            
            
            
            DefaultTableModel modelo = new DefaultTableModel();
            
            modelo.addColumn("Id");
            modelo.addColumn("nombre");
            modelo.addColumn("F.Nacimiento");
            modelo.addColumn("Telefono");
            modelo.addColumn("Email");
            modelo.addColumn("Contraseña");
            modelo.addColumn("Estado");
            modelo.addColumn("Comuna");
            modelo.addColumn("Rol");
            modelo.addColumn("Sexo");
            
            
            for (Empleado empleadore : empleados) {
                String[] fila = new String[11];
                
                fila[0] = String.valueOf(empleadore.getId());
                fila[1] = empleadore.getName();
                fila[2] = empleadore.getRut();
                fila[3] = String.valueOf(empleadore.getDate_burn());
                fila[4] = String.valueOf(empleadore.getTelphone());
                fila[5] = empleadore.getEmail();
                fila[6] = empleadore.getPassword();
                
                if(empleadore.getState() == 1){
                    fila[7] = "Activo";
                }else{
                    fila[7] = "Inactivo";
                }
                
                if(empleadore.getCommune_id() == 29)
                    fila[8] = "Juan Fernandez";
                else if(empleadore.getCommune_id() == 20)
                    fila[8] = "Quillota";
                else if(empleadore.getCommune_id() == 34)
                    fila[8] = "Limache";
                else if(empleadore.getCommune_id() == 1)
                    fila[8] = "Catemu";
                else if(empleadore.getCommune_id() == 7)
                    fila[8] = "Calle Larga";
                else if(empleadore.getCommune_id() == 6)
                    fila[8] = "Santa Maria";
                else if(empleadore.getCommune_id() == 33)
                    fila[8] = "Viña del mar";
                else if(empleadore.getCommune_id() == 32)
                    fila[8] = "Valparaiso";
                else if(empleadore.getCommune_id() == 37)
                    fila[8] = "Quilpue";
                else if(empleadore.getCommune_id() == 36)
                    fila[8] = "Villa Alemana";
                else if(empleadore.getCommune_id() == 28)
                    fila[8] = "Concon";
                
                if(empleadore.getRol_id() == 1)
                    fila[9] = "Administrador";
                else if (empleadore.getRol_id() == 2)
                    fila[9] = "Mantenedor";
                else if (empleadore.getRol_id() == 3)
                    fila[9] = "Dueño";
                else if (empleadore.getRol_id() == 4)
                    fila[9] = "Cajero";
                
                if(empleadore.getSex_id() == 1){
                    fila [10] = "Male";
                }else{
                    fila [10] = "Female";
                }
            
                modelo.addRow(fila);
            }
                
            tblEmpleados.setModel(modelo);
            
            
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        bgEstado = new javax.swing.ButtonGroup();
        jPanel1 = new javax.swing.JPanel();
        lblTitulo = new javax.swing.JLabel();
        lblNombre = new javax.swing.JLabel();
        lblRut = new javax.swing.JLabel();
        lblNacimiento = new javax.swing.JLabel();
        lblTelefono = new javax.swing.JLabel();
        lblEmail = new javax.swing.JLabel();
        lblContraseña = new javax.swing.JLabel();
        lblEstado = new javax.swing.JLabel();
        lblComuna = new javax.swing.JLabel();
        lblRol = new javax.swing.JLabel();
        lblSexo = new javax.swing.JLabel();
        txtNombre = new javax.swing.JTextField();
        txtRut = new javax.swing.JTextField();
        txtNacimiento = new javax.swing.JTextField();
        txtTelefono = new javax.swing.JTextField();
        txtEmail = new javax.swing.JTextField();
        txtContraseña = new javax.swing.JPasswordField();
        rbActivo = new javax.swing.JRadioButton();
        rbInactivo = new javax.swing.JRadioButton();
        cbComuna = new javax.swing.JComboBox<>();
        cbRol = new javax.swing.JComboBox<>();
        cbSexo = new javax.swing.JComboBox<>();
        btnGuardar = new javax.swing.JButton();
        btnEditar = new javax.swing.JButton();
        btnBuscar = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        tblEmpleados = new javax.swing.JTable();
        lblFukusuke = new javax.swing.JLabel();
        lblLogo = new javax.swing.JLabel();
        txtId = new javax.swing.JTextField();
        txtBuscar = new javax.swing.JTextField();
        btnEliminar1 = new javax.swing.JButton();
        lblSeleccionar = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(255, 255, 255));
        jPanel1.setForeground(new java.awt.Color(0, 0, 0));

        lblTitulo.setBackground(new java.awt.Color(255, 255, 255));
        lblTitulo.setFont(new java.awt.Font("Dialog", 1, 36)); // NOI18N
        lblTitulo.setForeground(new java.awt.Color(255, 102, 0));
        lblTitulo.setText("Empleados");

        lblNombre.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblNombre.setForeground(new java.awt.Color(0, 0, 0));
        lblNombre.setText("Nombre");

        lblRut.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblRut.setForeground(new java.awt.Color(0, 0, 0));
        lblRut.setText("Rut");

        lblNacimiento.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblNacimiento.setForeground(new java.awt.Color(0, 0, 0));
        lblNacimiento.setText("F. Nacimiento");

        lblTelefono.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblTelefono.setForeground(new java.awt.Color(0, 0, 0));
        lblTelefono.setText("Telefono");

        lblEmail.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblEmail.setForeground(new java.awt.Color(0, 0, 0));
        lblEmail.setText("Email");

        lblContraseña.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblContraseña.setForeground(new java.awt.Color(0, 0, 0));
        lblContraseña.setText("Contraseña");

        lblEstado.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblEstado.setForeground(new java.awt.Color(0, 0, 0));
        lblEstado.setText("Estado");

        lblComuna.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblComuna.setForeground(new java.awt.Color(0, 0, 0));
        lblComuna.setText("Comuna");

        lblRol.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblRol.setForeground(new java.awt.Color(0, 0, 0));
        lblRol.setText("Rol");

        lblSexo.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblSexo.setForeground(new java.awt.Color(0, 0, 0));
        lblSexo.setText("Sexo");

        txtNombre.setBackground(new java.awt.Color(255, 255, 255));
        txtNombre.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        txtNombre.setForeground(new java.awt.Color(0, 0, 0));

        txtRut.setBackground(new java.awt.Color(255, 255, 255));
        txtRut.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        txtRut.setForeground(new java.awt.Color(0, 0, 0));

        txtNacimiento.setBackground(new java.awt.Color(255, 255, 255));
        txtNacimiento.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        txtNacimiento.setForeground(new java.awt.Color(0, 0, 0));

        txtTelefono.setBackground(new java.awt.Color(255, 255, 255));
        txtTelefono.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        txtTelefono.setForeground(new java.awt.Color(0, 0, 0));

        txtEmail.setBackground(new java.awt.Color(255, 255, 255));
        txtEmail.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        txtEmail.setForeground(new java.awt.Color(0, 0, 0));

        txtContraseña.setBackground(new java.awt.Color(255, 255, 255));
        txtContraseña.setForeground(new java.awt.Color(0, 0, 0));

        rbActivo.setBackground(new java.awt.Color(255, 255, 255));
        bgEstado.add(rbActivo);
        rbActivo.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        rbActivo.setForeground(new java.awt.Color(0, 0, 0));
        rbActivo.setText("Activo");

        rbInactivo.setBackground(new java.awt.Color(255, 255, 255));
        bgEstado.add(rbInactivo);
        rbInactivo.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        rbInactivo.setForeground(new java.awt.Color(0, 0, 0));
        rbInactivo.setText("Inactivo");

        cbComuna.setBackground(new java.awt.Color(255, 255, 255));
        cbComuna.setForeground(new java.awt.Color(0, 0, 0));
        cbComuna.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Viña del mar", "Valparaiso", "Quilpue", "Limache", "Villa Alemana", "Concon", "Santa Maria", "Calle Larga" }));

        cbRol.setBackground(new java.awt.Color(255, 255, 255));
        cbRol.setForeground(new java.awt.Color(0, 0, 0));
        cbRol.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Administrador", "Mantenedor", "Dueño", "Cajero" }));

        cbSexo.setBackground(new java.awt.Color(255, 255, 255));
        cbSexo.setForeground(new java.awt.Color(0, 0, 0));
        cbSexo.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Masculino", "Femenino", " ", " ", " " }));

        btnGuardar.setBackground(new java.awt.Color(255, 102, 0));
        btnGuardar.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnGuardar.setForeground(new java.awt.Color(0, 0, 0));
        btnGuardar.setText("Ingresar");
        btnGuardar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnGuardarActionPerformed(evt);
            }
        });

        btnEditar.setBackground(new java.awt.Color(255, 102, 0));
        btnEditar.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnEditar.setForeground(new java.awt.Color(0, 0, 0));
        btnEditar.setText("Editar");
        btnEditar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEditarActionPerformed(evt);
            }
        });

        btnBuscar.setBackground(new java.awt.Color(255, 102, 0));
        btnBuscar.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnBuscar.setForeground(new java.awt.Color(0, 0, 0));
        btnBuscar.setText("Buscar");
        btnBuscar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnBuscarActionPerformed(evt);
            }
        });

        tblEmpleados.setBackground(new java.awt.Color(255, 255, 255));
        tblEmpleados.setForeground(new java.awt.Color(102, 102, 102));
        tblEmpleados.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null, null, null}
            },
            new String [] {
                "Id", "Nombre", "Rut", "F. Nacimiento", "Telefono", "Email", "Contraseña", "Estado", "Comuna", "Rol", "Sexo"
            }
        ));
        tblEmpleados.setSelectionBackground(new java.awt.Color(255, 102, 0));
        tblEmpleados.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                tblEmpleadosMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(tblEmpleados);

        lblFukusuke.setBackground(new java.awt.Color(255, 255, 255));
        lblFukusuke.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagenes/FUKUSUKE-chico.jpg"))); // NOI18N

        lblLogo.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagenes/sushi-derecha-chico.jpg"))); // NOI18N

        txtBuscar.setBackground(new java.awt.Color(255, 255, 255));
        txtBuscar.setFont(new java.awt.Font("Dialog", 0, 14)); // NOI18N
        txtBuscar.setForeground(new java.awt.Color(0, 0, 0));

        btnEliminar1.setBackground(new java.awt.Color(255, 102, 0));
        btnEliminar1.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnEliminar1.setForeground(new java.awt.Color(0, 0, 0));
        btnEliminar1.setText("Eliminar");
        btnEliminar1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEliminar1ActionPerformed(evt);
            }
        });

        lblSeleccionar.setBackground(new java.awt.Color(255, 255, 255));
        lblSeleccionar.setForeground(new java.awt.Color(255, 102, 0));
        lblSeleccionar.setText("(Seleccione una fila para editar o eliminar)");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jScrollPane1)
                        .addContainerGap())
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addComponent(lblNacimiento, javax.swing.GroupLayout.DEFAULT_SIZE, 80, Short.MAX_VALUE)
                                    .addComponent(lblTelefono, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addComponent(lblEmail, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addComponent(txtNacimiento, javax.swing.GroupLayout.DEFAULT_SIZE, 171, Short.MAX_VALUE)
                                    .addComponent(txtTelefono)
                                    .addComponent(txtEmail))
                                .addGap(39, 39, 39)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                        .addComponent(lblRol, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addGap(224, 224, 224))
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(lblSexo)
                                        .addGap(0, 0, Short.MAX_VALUE)))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(lblTitulo, javax.swing.GroupLayout.PREFERRED_SIZE, 217, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(173, 173, 173))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addComponent(lblRut, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addComponent(lblNombre, javax.swing.GroupLayout.DEFAULT_SIZE, 80, Short.MAX_VALUE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                    .addComponent(txtRut, javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(txtNombre, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 171, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addGap(39, 39, 39)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(lblContraseña, javax.swing.GroupLayout.DEFAULT_SIZE, 70, Short.MAX_VALUE)
                                    .addComponent(lblEstado, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(lblComuna, javax.swing.GroupLayout.PREFERRED_SIZE, 49, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGap(0, 0, Short.MAX_VALUE)))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(txtContraseña)
                                        .addGap(6, 6, 6))
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(rbActivo, javax.swing.GroupLayout.PREFERRED_SIZE, 74, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGap(18, 18, 18)
                                        .addComponent(rbInactivo, javax.swing.GroupLayout.PREFERRED_SIZE, 79, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGap(0, 0, Short.MAX_VALUE))
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(cbSexo, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addGap(6, 6, 6))
                                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                            .addComponent(cbRol, javax.swing.GroupLayout.Alignment.LEADING, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                            .addComponent(cbComuna, 0, 214, Short.MAX_VALUE))
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)))))
                        .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, 56, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(145, 145, 145)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(18, 18, 18)
                                .addComponent(lblFukusuke)
                                .addGap(18, 18, 18))
                            .addComponent(lblLogo, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 235, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(108, 108, 108))))
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(93, 93, 93)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(txtBuscar, javax.swing.GroupLayout.PREFERRED_SIZE, 167, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addComponent(btnBuscar, javax.swing.GroupLayout.PREFERRED_SIZE, 124, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(btnGuardar, javax.swing.GroupLayout.PREFERRED_SIZE, 135, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(btnEliminar1, javax.swing.GroupLayout.PREFERRED_SIZE, 124, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(61, 61, 61)
                        .addComponent(btnEditar, javax.swing.GroupLayout.PREFERRED_SIZE, 129, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(332, 332, 332)
                        .addComponent(lblSeleccionar)))
                .addGap(0, 0, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(lblTitulo)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(8, 8, 8)
                                .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblNombre)
                                    .addComponent(lblContraseña)
                                    .addComponent(txtNombre, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblRut)
                                    .addComponent(lblEstado)
                                    .addComponent(txtRut, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblNacimiento)
                                    .addComponent(txtNacimiento, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(cbComuna, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(lblComuna))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblTelefono)
                                    .addComponent(txtTelefono, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(lblRol)
                                    .addComponent(cbRol, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblEmail)
                                    .addComponent(txtEmail, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(lblSexo)
                                    .addComponent(cbSexo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(txtContraseña, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(rbActivo)
                                    .addComponent(rbInactivo))))
                        .addGap(37, 37, 37))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addComponent(lblFukusuke)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(lblLogo)
                        .addGap(18, 18, 18)))
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnGuardar)
                    .addComponent(btnEditar)
                    .addComponent(btnEliminar1))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(lblSeleccionar)
                .addGap(46, 46, 46)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtBuscar, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnBuscar))
                .addGap(48, 48, 48)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 284, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnBuscarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnBuscarActionPerformed
        // TODO add your handling code here:
        this.buscar();
        this.limpiarCampos();
    }//GEN-LAST:event_btnBuscarActionPerformed

    private void btnGuardarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnGuardarActionPerformed
        // TODO add your handling code here:
         try {
            Empleado empleados = new Empleado();
            EmpleadoDAO pDAO = new EmpleadoDAO();

            empleados.setName(txtNombre.getText());
            empleados.setRut(txtRut.getText());
            empleados.setDate_burn(Date.valueOf(txtNacimiento.getText()));
            empleados.setTelphone(Integer.parseInt(txtTelefono.getText()));
            empleados.setEmail(txtEmail.getText());
            empleados.setPassword(txtContraseña.getText());
            
            if(rbActivo.isSelected()){
                empleados.setState(1);
            }else{
                empleados.setState(0);
            }
            
            if(cbComuna.getSelectedItem() == "Santa Maria")
                empleados.setCommune_id(6);
            else if(cbComuna.getSelectedItem() == "Calle Larga")
                empleados.setCommune_id(7);
            else if(cbComuna.getSelectedItem() == "Viña del mar")
                empleados.setCommune_id(33);
            else if(cbComuna.getSelectedItem() == "Valparaiso")
                empleados.setCommune_id(32);
            else if(cbComuna.getSelectedItem() == "Quilpue")
                empleados.setCommune_id(37);
            else if(cbComuna.getSelectedItem() == "Limache")
                empleados.setCommune_id(34);
            else if(cbComuna.getSelectedItem() == "Villa Alemana")
                empleados.setCommune_id(36);
            else if(cbComuna.getSelectedItem() == "Concon")
                empleados.setCommune_id(28);
            
            if(cbRol.getSelectedItem() == "Administrador")
                empleados.setRol_id(1);
            else if(cbRol.getSelectedItem() == "Mantenedor")
                empleados.setRol_id(2);
            else if(cbRol.getSelectedItem() == "Dueño")
                empleados.setRol_id(3);
            else if(cbRol.getSelectedItem() == "Cajero")
                empleados.setRol_id(4);
            
            if(cbSexo.getSelectedItem() == "Masculino")
                empleados.setSex_id(1);
            else if(cbSexo.getSelectedItem() == "Femenino")
                empleados.setSex_id(2);           
                       
            
            pDAO.agregarEmpleado(empleados);
                
            
        } catch (NumberFormatException | SQLException e) {
            
            JOptionPane.showMessageDialog(this, e.getMessage());
        }
        this.listar();
        this.limpiarCampos();
    }//GEN-LAST:event_btnGuardarActionPerformed

    private void btnEditarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEditarActionPerformed
        // TODO add your handling code here:
        try {
            Empleado empleados = new Empleado();
            EmpleadoDAO pDAO = new EmpleadoDAO();
            
            empleados.setId(Integer.parseInt(txtId.getText()));
            empleados.setName(txtNombre.getText());
            empleados.setRut(txtRut.getText());
            empleados.setDate_burn(Date.valueOf(txtNacimiento.getText()));
            empleados.setTelphone(Integer.parseInt(txtTelefono.getText()));
            empleados.setEmail(txtEmail.getText());
            empleados.setPassword(txtContraseña.getText());
            
            if(rbActivo.isSelected()){
                empleados.setState(1);
            }else{
                empleados.setState(0);
            }
            
            if(cbComuna.getSelectedItem() == "Santa Maria")
                empleados.setCommune_id(6);
            else if(cbComuna.getSelectedItem() == "Calle Larga")
                empleados.setCommune_id(7);
            else if(cbComuna.getSelectedItem() == "Viña del mar")
                empleados.setCommune_id(33);
            else if(cbComuna.getSelectedItem() == "Valparaiso")
                empleados.setCommune_id(32);
            else if(cbComuna.getSelectedItem() == "Quilpue")
                empleados.setCommune_id(37);
            else if(cbComuna.getSelectedItem() == "Limache")
                empleados.setCommune_id(34);
            else if(cbComuna.getSelectedItem() == "Villa Alemana")
                empleados.setCommune_id(36);
            else if(cbComuna.getSelectedItem() == "Concon")
                empleados.setCommune_id(28);
            
            if(cbRol.getSelectedItem() == "Administrador")
                empleados.setRol_id(1);
            else if(cbRol.getSelectedItem() == "Mantenedor")
                empleados.setRol_id(2);
            else if(cbRol.getSelectedItem() == "Dueno")
                empleados.setRol_id(3);
            else if(cbRol.getSelectedItem() == "Cajero")
                empleados.setRol_id(4);
            
            if(cbSexo.getSelectedItem() == "Masculino")
                empleados.setSex_id(1);
            else if(cbSexo.getSelectedItem() == "Femenino")
                empleados.setSex_id(2);       
            
            
            pDAO.editarEmpleado(empleados);
        
        
            
        } catch (Exception e) {
            
            JOptionPane.showMessageDialog(this, e.getMessage());
        }
        this.listar();
        this.limpiarCampos();
        
    }//GEN-LAST:event_btnEditarActionPerformed

    private void tblEmpleadosMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_tblEmpleadosMouseClicked
        // TODO add your handling code here:
        
        int seleccion = tblEmpleados.rowAtPoint(evt.getPoint());
        
        txtId.setText(tblEmpleados.getValueAt(seleccion, 0)+"");
        txtNombre.setText(tblEmpleados.getValueAt(seleccion, 1)+"");
        txtRut.setText(tblEmpleados.getValueAt(seleccion, 2)+"");
        txtNacimiento.setText(tblEmpleados.getValueAt(seleccion, 3)+"");
        txtTelefono.setText(tblEmpleados.getValueAt(seleccion, 4)+"");
        txtEmail.setText(tblEmpleados.getValueAt(seleccion, 5)+"");
        txtContraseña.setText(tblEmpleados.getValueAt(seleccion, 6)+"");
        
        String estado = tblEmpleados.getValueAt(seleccion, 7)+"";
        if(estado.equals("Activo")){
            rbActivo.setSelected(true);
        }else{
            rbInactivo.setSelected(true);
        }
        
        String comuna = tblEmpleados.getValueAt(seleccion, 8)+"";
        if(comuna.equals("Santa Maria"))
            cbComuna.setSelectedIndex(6);
        else if(comuna.equals("Calle Larga"))
            cbComuna.setSelectedIndex(7);
        else if(comuna.equals("Viña del mar"))
            cbComuna.setSelectedIndex(0);
        else if(comuna.equals("Valparaiso"))
            cbComuna.setSelectedIndex(1);
        else if(comuna.equals("Quilpue"))
            cbComuna.setSelectedIndex(2);
        else if(comuna.equals("Limache"))
            cbComuna.setSelectedIndex(3);
        else if(comuna.equals("Villa Alemana"))
            cbComuna.setSelectedIndex(4);
        else if(comuna.equals("Concon"))
            cbComuna.setSelectedIndex(5);
        
        String rol = tblEmpleados.getValueAt(seleccion, 9)+"";
        if(rol.equals("Administrador"))
            cbRol.setSelectedIndex(0);
        else if(rol.equals("Mantenedor"))
            cbRol.setSelectedIndex(1);
        else if(rol.equals("dueno"))
            cbRol.setSelectedIndex(2);
        else if(rol.equals("Cajero"))
            cbRol.setSelectedIndex(3);
        
        String sexo = tblEmpleados.getValueAt(seleccion, 10)+"";
        if(sexo.equals("Masculino"))
            cbSexo.setSelectedIndex(0);
        else if(sexo.equals("Femenino"))
            cbSexo.setSelectedIndex(1);
        
        
    }//GEN-LAST:event_tblEmpleadosMouseClicked

    private void btnEliminar1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEliminar1ActionPerformed
        // TODO add your handling code here:
        try {
            Empleado empleados = new Empleado();
            EmpleadoDAO pDAO = new EmpleadoDAO();
            
            empleados.setId(Integer.parseInt(txtId.getText()));
                        
            pDAO.eliminarEmpleado(empleados);
        
        
            
        } catch (Exception e) {
            
            JOptionPane.showMessageDialog(this, e.getMessage());
        }
        this.listar();
        this.limpiarCampos();
    }//GEN-LAST:event_btnEliminar1ActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(empleado.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(empleado.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(empleado.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(empleado.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new empleado().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.ButtonGroup bgEstado;
    private javax.swing.JButton btnBuscar;
    private javax.swing.JButton btnEditar;
    private javax.swing.JButton btnEliminar1;
    private javax.swing.JButton btnGuardar;
    private javax.swing.JComboBox<String> cbComuna;
    private javax.swing.JComboBox<String> cbRol;
    private javax.swing.JComboBox<String> cbSexo;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel lblComuna;
    private javax.swing.JLabel lblContraseña;
    private javax.swing.JLabel lblEmail;
    private javax.swing.JLabel lblEstado;
    private javax.swing.JLabel lblFukusuke;
    private javax.swing.JLabel lblLogo;
    private javax.swing.JLabel lblNacimiento;
    private javax.swing.JLabel lblNombre;
    private javax.swing.JLabel lblRol;
    private javax.swing.JLabel lblRut;
    private javax.swing.JLabel lblSeleccionar;
    private javax.swing.JLabel lblSexo;
    private javax.swing.JLabel lblTelefono;
    private javax.swing.JLabel lblTitulo;
    private javax.swing.JRadioButton rbActivo;
    private javax.swing.JRadioButton rbInactivo;
    private javax.swing.JTable tblEmpleados;
    private javax.swing.JTextField txtBuscar;
    private javax.swing.JPasswordField txtContraseña;
    private javax.swing.JTextField txtEmail;
    private javax.swing.JTextField txtId;
    private javax.swing.JTextField txtNacimiento;
    private javax.swing.JTextField txtNombre;
    private javax.swing.JTextField txtRut;
    private javax.swing.JTextField txtTelefono;
    // End of variables declaration//GEN-END:variables
}
