package vistas;

import dao.ClienteDAO;
import entidades.Cliente;
import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

public class cliente extends javax.swing.JFrame {

    
    public cliente() {
        initComponents();
        txtId.setVisible(false);
        this.listar();
    }
    
    private void listar(){
        
        ClienteDAO tDAO = new ClienteDAO();
        
        try {
            ArrayList<Cliente> clientes = tDAO.listarClientes();
            
            DefaultTableModel modelo = new DefaultTableModel();
            
            modelo.addColumn("Id");
            modelo.addColumn("Nombre");
            modelo.addColumn("Direccion");
            modelo.addColumn("Rut");
            modelo.addColumn("F.Nacimiento");
            modelo.addColumn("Telefono");
            modelo.addColumn("Email");
            modelo.addColumn("Contraseña");
            modelo.addColumn("Estado");
            modelo.addColumn("Comuna");            
            modelo.addColumn("Sexo");
            
            
            for (Cliente clientore : clientes) {
                String[] fila = new String[11];
                
                fila[0] = String.valueOf(clientore.getId());
                fila[1] = clientore.getName();
                fila[2] = clientore.getAdress();
                fila[3] = clientore.getRut();
                fila[4] = String.valueOf(clientore.getDate_burn());
                fila[5] = String.valueOf(clientore.getTelphone());
                fila[6] = clientore.getEmail();
                fila[7] = clientore.getPassword();
                
                if(clientore.getState() == 1){
                    fila[8] = "Activo";
                }else{
                    fila[8] = "Inactivo";
                }
                
                if(clientore.getCommune_id() == 29)
                    fila[9] = "Juan Fernandez";
                else if(clientore.getCommune_id() == 20)
                    fila[9] = "Quillota";
                else if(clientore.getCommune_id() == 34)
                    fila[9] = "Limache";
                else if(clientore.getCommune_id() == 1)
                    fila[9] = "Catemu";
                else if(clientore.getCommune_id() == 7)
                    fila[9] = "Calle Larga";
                else if(clientore.getCommune_id() == 6)
                    fila[9] = "Santa Maria";
                else if(clientore.getCommune_id() == 33)
                    fila[9] = "Viña del mar";
                else if(clientore.getCommune_id() == 32)
                    fila[9] = "Valparaiso";
                else if(clientore.getCommune_id() == 37)
                    fila[9] = "Quilpue";
                else if(clientore.getCommune_id() == 36)
                    fila[9] = "Villa Alemana";
                else if(clientore.getCommune_id() == 28)
                    fila[9] = "Concon";
                                                
                if(clientore.getSex_id() == 1){
                    fila [10] = "Masculino";
                }else{
                    fila [10] = "Femenino";
                }
                    
                
                
                modelo.addRow(fila);
            }
            
            tblClientes.setModel(modelo);
            
            
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }
    
    private void limpiarCampos(){
        txtNombre.setText("");
        txtDireccion.setText("");
        txtRut.setText("");
        txtNacimiento.setText("");
        txtTelefono.setText("");
        txtEmail.setText("");
        txtContraseña.setText("");
        bgEstado.clearSelection();
        cbComuna.setSelectedIndex(0);        
        cbSexo.setSelectedIndex(0);
        txtId.setText("");
    }
    
    private void buscar(){
        
        ClienteDAO tDAO = new ClienteDAO();
        
        try {
            ArrayList<Cliente> clientes = null;
            
            if(txtBuscar.getText().isEmpty()){
                clientes = tDAO.listarClientes();
            }else{
                clientes = tDAO.buscarCliente(txtBuscar.getText());
                
                if(clientes.size() == 0){
                JOptionPane.showMessageDialog(this, "No encontrado");
                
                }
            }
            
            
            
            DefaultTableModel modelo = new DefaultTableModel();
            
            modelo.addColumn("Id");
            modelo.addColumn("Nombre");
            modelo.addColumn("Direccion");
            modelo.addColumn("Rut");
            modelo.addColumn("F.Nacimiento");
            modelo.addColumn("Telefono");
            modelo.addColumn("Email");
            modelo.addColumn("Contraseña");
            modelo.addColumn("Estado");
            modelo.addColumn("Comuna");            
            modelo.addColumn("Sexo");
            
            
            for (Cliente clientore : clientes) {
                String[] fila = new String[11];
                
                fila[0] = String.valueOf(clientore.getId());
                fila[1] = clientore.getName();
                fila[2] = clientore.getAdress();
                fila[3] = clientore.getRut();
                fila[4] = String.valueOf(clientore.getDate_burn());
                fila[5] = String.valueOf(clientore.getTelphone());
                fila[6] = clientore.getEmail();
                fila[7] = clientore.getPassword();
                
                if(clientore.getState() == 1){
                    fila[8] = "Activo";
                }else{
                    fila[8] = "Inactivo";
                }
                
                if(clientore.getCommune_id() == 29)
                    fila[9] = "Juan Fernandez";
                else if(clientore.getCommune_id() == 20)
                    fila[9] = "Quillota";
                else if(clientore.getCommune_id() == 34)
                    fila[9] = "Limache";
                else if(clientore.getCommune_id() == 1)
                    fila[9] = "Catemu";
                else if(clientore.getCommune_id() == 7)
                    fila[9] = "Calle Larga";
                else if(clientore.getCommune_id() == 6)
                    fila[9] = "Santa Maria";
                else if(clientore.getCommune_id() == 33)
                    fila[9] = "Viña del mar";
                else if(clientore.getCommune_id() == 32)
                    fila[9] = "Valparaiso";
                else if(clientore.getCommune_id() == 37)
                    fila[9] = "Quilpue";
                else if(clientore.getCommune_id() == 36)
                    fila[9] = "Villa Alemana";
                else if(clientore.getCommune_id() == 28)
                    fila[9] = "Concon";
                                                
                if(clientore.getSex_id() == 1){
                    fila [10] = "Masculino";
                }else{
                    fila [10] = "Femenino";
                }
            
                modelo.addRow(fila);
            }
                
            tblClientes.setModel(modelo);
            
            
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
        lblDireccion = new javax.swing.JLabel();
        lblRut = new javax.swing.JLabel();
        lblNacimiento = new javax.swing.JLabel();
        lblTelefono = new javax.swing.JLabel();
        lblEmail = new javax.swing.JLabel();
        lblContraseña = new javax.swing.JLabel();
        lblEstado = new javax.swing.JLabel();
        lblComuna = new javax.swing.JLabel();
        lblSexo = new javax.swing.JLabel();
        txtNombre = new javax.swing.JTextField();
        txtDireccion = new javax.swing.JTextField();
        txtRut = new javax.swing.JTextField();
        txtNacimiento = new javax.swing.JTextField();
        txtTelefono = new javax.swing.JTextField();
        txtEmail = new javax.swing.JTextField();
        txtContraseña = new javax.swing.JPasswordField();
        rbActivo = new javax.swing.JRadioButton();
        rbInactivo = new javax.swing.JRadioButton();
        cbComuna = new javax.swing.JComboBox<>();
        cbSexo = new javax.swing.JComboBox<>();
        lblFukusuke = new javax.swing.JLabel();
        lblLogo = new javax.swing.JLabel();
        btnEditar = new javax.swing.JButton();
        btnEliminar = new javax.swing.JButton();
        btnGuardar = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        tblClientes = new javax.swing.JTable();
        txtId = new javax.swing.JTextField();
        txtBuscar = new javax.swing.JTextField();
        btnBuscar = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(255, 255, 255));

        lblTitulo.setBackground(new java.awt.Color(255, 255, 255));
        lblTitulo.setFont(new java.awt.Font("Dialog", 1, 36)); // NOI18N
        lblTitulo.setForeground(new java.awt.Color(255, 102, 0));
        lblTitulo.setText("Clientes");

        lblNombre.setBackground(new java.awt.Color(255, 255, 255));
        lblNombre.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblNombre.setForeground(new java.awt.Color(0, 0, 0));
        lblNombre.setText("Nombre");

        lblDireccion.setBackground(new java.awt.Color(255, 255, 255));
        lblDireccion.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblDireccion.setForeground(new java.awt.Color(0, 0, 0));
        lblDireccion.setText("Direccion");

        lblRut.setBackground(new java.awt.Color(255, 255, 255));
        lblRut.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblRut.setForeground(new java.awt.Color(0, 0, 0));
        lblRut.setText("Rut");

        lblNacimiento.setBackground(new java.awt.Color(255, 255, 255));
        lblNacimiento.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblNacimiento.setForeground(new java.awt.Color(0, 0, 0));
        lblNacimiento.setText("F. Nacimiento");

        lblTelefono.setBackground(new java.awt.Color(255, 255, 255));
        lblTelefono.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblTelefono.setForeground(new java.awt.Color(0, 0, 0));
        lblTelefono.setText("Telefono");

        lblEmail.setBackground(new java.awt.Color(255, 255, 255));
        lblEmail.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblEmail.setForeground(new java.awt.Color(0, 0, 0));
        lblEmail.setText("Email");

        lblContraseña.setBackground(new java.awt.Color(255, 255, 255));
        lblContraseña.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblContraseña.setForeground(new java.awt.Color(0, 0, 0));
        lblContraseña.setText("Contraseña");

        lblEstado.setBackground(new java.awt.Color(255, 255, 255));
        lblEstado.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblEstado.setForeground(new java.awt.Color(0, 0, 0));
        lblEstado.setText("Estado");

        lblComuna.setBackground(new java.awt.Color(255, 255, 255));
        lblComuna.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblComuna.setForeground(new java.awt.Color(0, 0, 0));
        lblComuna.setText("Comuna");

        lblSexo.setBackground(new java.awt.Color(255, 255, 255));
        lblSexo.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblSexo.setForeground(new java.awt.Color(0, 0, 0));
        lblSexo.setText("Sexo");

        txtNombre.setBackground(new java.awt.Color(255, 255, 255));
        txtNombre.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        txtNombre.setForeground(new java.awt.Color(0, 0, 0));

        txtDireccion.setBackground(new java.awt.Color(255, 255, 255));
        txtDireccion.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        txtDireccion.setForeground(new java.awt.Color(0, 0, 0));

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
        txtContraseña.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
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
        cbComuna.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        cbComuna.setForeground(new java.awt.Color(0, 0, 0));
        cbComuna.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Viña del mar", "Valparaiso", "Quilpue", "Limache", "Villa Alemana", "Concon" }));

        cbSexo.setBackground(new java.awt.Color(255, 255, 255));
        cbSexo.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        cbSexo.setForeground(new java.awt.Color(0, 0, 0));
        cbSexo.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Masculino", "Femenino" }));

        lblFukusuke.setBackground(new java.awt.Color(255, 255, 255));
        lblFukusuke.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagenes/FUKUSUKE-chico.jpg"))); // NOI18N

        lblLogo.setBackground(new java.awt.Color(255, 255, 255));
        lblLogo.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagenes/sushi-derecha-chico.jpg"))); // NOI18N

        btnEditar.setBackground(new java.awt.Color(255, 102, 0));
        btnEditar.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnEditar.setForeground(new java.awt.Color(0, 0, 0));
        btnEditar.setText("Editar");
        btnEditar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEditarActionPerformed(evt);
            }
        });

        btnEliminar.setBackground(new java.awt.Color(255, 102, 0));
        btnEliminar.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnEliminar.setForeground(new java.awt.Color(0, 0, 0));
        btnEliminar.setText("Eliminar");
        btnEliminar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEliminarActionPerformed(evt);
            }
        });

        btnGuardar.setBackground(new java.awt.Color(255, 102, 0));
        btnGuardar.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnGuardar.setForeground(new java.awt.Color(0, 0, 0));
        btnGuardar.setText("Ingresar");
        btnGuardar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnGuardarActionPerformed(evt);
            }
        });

        tblClientes.setBackground(new java.awt.Color(255, 255, 255));
        tblClientes.setForeground(new java.awt.Color(102, 102, 102));
        tblClientes.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null, null, null}
            },
            new String [] {
                "Id", "Nombre", "Direccion", "Rut", "F. Nacimiento", "Telefono", "Email", "Contraseña", "Estado", "Comuna", "Sexo"
            }
        ));
        tblClientes.setSelectionBackground(new java.awt.Color(255, 102, 0));
        tblClientes.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                tblClientesMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(tblClientes);

        txtBuscar.setBackground(new java.awt.Color(255, 255, 255));
        txtBuscar.setFont(new java.awt.Font("Dialog", 0, 12)); // NOI18N
        txtBuscar.setForeground(new java.awt.Color(0, 0, 0));

        btnBuscar.setBackground(new java.awt.Color(255, 102, 0));
        btnBuscar.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnBuscar.setForeground(new java.awt.Color(0, 0, 0));
        btnBuscar.setText("Buscar");
        btnBuscar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnBuscarActionPerformed(evt);
            }
        });

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
                                .addComponent(lblTitulo, javax.swing.GroupLayout.PREFERRED_SIZE, 155, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(195, 195, 195)
                                .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, 56, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addComponent(lblNombre, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addComponent(lblDireccion, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addComponent(lblRut, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addComponent(lblNacimiento, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addComponent(lblTelefono, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                            .addComponent(txtNombre)
                                            .addComponent(txtDireccion)
                                            .addComponent(txtRut)
                                            .addComponent(txtNacimiento)
                                            .addComponent(txtTelefono, javax.swing.GroupLayout.DEFAULT_SIZE, 161, Short.MAX_VALUE))
                                        .addGap(50, 50, 50)
                                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                            .addComponent(lblContraseña, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                            .addComponent(lblEmail, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                            .addComponent(lblEstado, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                            .addComponent(lblComuna, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                            .addComponent(lblSexo, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                            .addComponent(txtEmail)
                                            .addComponent(txtContraseña)
                                            .addGroup(jPanel1Layout.createSequentialGroup()
                                                .addComponent(rbActivo, javax.swing.GroupLayout.PREFERRED_SIZE, 80, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(rbInactivo, javax.swing.GroupLayout.DEFAULT_SIZE, 77, Short.MAX_VALUE))
                                            .addComponent(cbComuna, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                            .addComponent(cbSexo, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                            .addGroup(jPanel1Layout.createSequentialGroup()
                                                .addComponent(btnGuardar, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                                .addComponent(btnEliminar, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE))
                                            .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel1Layout.createSequentialGroup()
                                                .addComponent(txtBuscar, javax.swing.GroupLayout.PREFERRED_SIZE, 175, javax.swing.GroupLayout.PREFERRED_SIZE)
                                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                                .addComponent(btnBuscar, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                        .addGap(56, 56, 56)
                                        .addComponent(btnEditar, javax.swing.GroupLayout.PREFERRED_SIZE, 130, javax.swing.GroupLayout.PREFERRED_SIZE)))))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 177, Short.MAX_VALUE)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addComponent(lblFukusuke)
                                .addGap(19, 19, 19))
                            .addComponent(lblLogo, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 231, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(150, 150, 150))))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addContainerGap()
                                .addComponent(lblTitulo))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(22, 22, 22)
                                .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblNombre)
                                    .addComponent(lblEmail)
                                    .addComponent(txtEmail, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblDireccion)
                                    .addComponent(lblContraseña)
                                    .addComponent(txtDireccion, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(txtContraseña, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblRut)
                                    .addComponent(lblEstado)
                                    .addComponent(txtRut, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(rbActivo)
                                    .addComponent(rbInactivo))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblNacimiento)
                                    .addComponent(lblComuna)
                                    .addComponent(txtNacimiento, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(cbComuna, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                    .addComponent(lblTelefono)
                                    .addComponent(lblSexo)
                                    .addComponent(txtTelefono, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(cbSexo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                            .addComponent(txtNombre, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(46, 46, 46)
                        .addComponent(lblFukusuke)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(lblLogo)))
                .addGap(25, 25, 25)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnEliminar)
                    .addComponent(btnGuardar)
                    .addComponent(btnEditar))
                .addGap(53, 53, 53)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtBuscar, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnBuscar))
                .addGap(35, 35, 35)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 271, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(16, Short.MAX_VALUE))
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
            Cliente clientes = new Cliente();
            ClienteDAO pDAO = new ClienteDAO();

            clientes.setName(txtNombre.getText());
            clientes.setAdress(txtDireccion.getText());
            clientes.setRut(txtRut.getText());
            clientes.setDate_burn(Date.valueOf(txtNacimiento.getText()));
            clientes.setTelphone(Integer.parseInt(txtTelefono.getText()));
            clientes.setEmail(txtEmail.getText());
            clientes.setPassword(txtContraseña.getText());
            
            if(rbActivo.isSelected()){
                clientes.setState(1);
            }else{
                clientes.setState(0);
            }
            
            if(cbComuna.getSelectedItem() == "Santa Maria")
                clientes.setCommune_id(6);
            else if(cbComuna.getSelectedItem() == "Calle Larga")
                clientes.setCommune_id(7);
            else if(cbComuna.getSelectedItem() == "Viña del mar")
                clientes.setCommune_id(33);
            else if(cbComuna.getSelectedItem() == "Valparaiso")
                clientes.setCommune_id(32);
            else if(cbComuna.getSelectedItem() == "Quilpue")
                clientes.setCommune_id(37);
            else if(cbComuna.getSelectedItem() == "Limache")
                clientes.setCommune_id(34);
            else if(cbComuna.getSelectedItem() == "Villa Alemana")
                clientes.setCommune_id(36);
            else if(cbComuna.getSelectedItem() == "Concon")
                clientes.setCommune_id(28);           
            
            if(cbSexo.getSelectedItem() == "Masculino")
                clientes.setSex_id(1);
            else if(cbSexo.getSelectedItem() == "Femenino")
                clientes.setSex_id(2);           
                       
            
            pDAO.agregarCliente(clientes);
                
            
        } catch (NumberFormatException | SQLException e) {
            
            JOptionPane.showMessageDialog(this, e.getMessage());
        }
        this.listar();
        this.limpiarCampos();
    }//GEN-LAST:event_btnGuardarActionPerformed

    private void tblClientesMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_tblClientesMouseClicked
        // TODO add your handling code here:
        
        int seleccion = tblClientes.rowAtPoint(evt.getPoint());
        
        txtId.setText(tblClientes.getValueAt(seleccion, 0)+"");
        txtNombre.setText(tblClientes.getValueAt(seleccion, 1)+"");
        txtDireccion.setText(tblClientes.getValueAt(seleccion, 2)+"");
        txtRut.setText(tblClientes.getValueAt(seleccion, 3)+"");
        txtNacimiento.setText(tblClientes.getValueAt(seleccion, 4)+"");
        txtTelefono.setText(tblClientes.getValueAt(seleccion, 5)+"");
        txtEmail.setText(tblClientes.getValueAt(seleccion, 6)+"");
        txtContraseña.setText(tblClientes.getValueAt(seleccion, 7)+"");
        
        String estado = tblClientes.getValueAt(seleccion, 8)+"";
        if(estado.equals("Activo")){
            rbActivo.setSelected(true);
        }else{
            rbInactivo.setSelected(true);
        }
        
        String comuna = tblClientes.getValueAt(seleccion, 9)+"";
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
                       
        String sexo = tblClientes.getValueAt(seleccion, 10)+"";
        if(sexo.equals("Masculino"))
            cbSexo.setSelectedIndex(0);
        else if(sexo.equals("Femenino"))
            cbSexo.setSelectedIndex(1);
    }//GEN-LAST:event_tblClientesMouseClicked

    private void btnEliminarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEliminarActionPerformed
        // TODO add your handling code here:
        
        try {
            Cliente clientes = new Cliente();
            ClienteDAO pDAO = new ClienteDAO();
            
            clientes.setId(Integer.parseInt(txtId.getText()));
                        
            pDAO.eliminarCliente(clientes);
        
        
            
        } catch (Exception e) {
            
            JOptionPane.showMessageDialog(this, e.getMessage());
        }
        this.listar();
        this.limpiarCampos();
    }//GEN-LAST:event_btnEliminarActionPerformed

    private void btnEditarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEditarActionPerformed
        // TODO add your handling code here:
        
        try {
            Cliente clientes = new Cliente();
            ClienteDAO pDAO = new ClienteDAO();
            
            clientes.setId(Integer.parseInt(txtId.getText()));
            clientes.setName(txtNombre.getText());
            clientes.setAdress(txtDireccion.getText());
            clientes.setRut(txtRut.getText());
            clientes.setDate_burn(Date.valueOf(txtNacimiento.getText()));
            clientes.setTelphone(Integer.parseInt(txtTelefono.getText()));
            clientes.setEmail(txtEmail.getText());
            clientes.setPassword(txtContraseña.getText());
            
            if(rbActivo.isSelected()){
                clientes.setState(1);
            }else{
                clientes.setState(0);
            }
            
            if(cbComuna.getSelectedItem() == "Santa Maria")
                clientes.setCommune_id(6);
            else if(cbComuna.getSelectedItem() == "Calle Larga")
                clientes.setCommune_id(7);
            else if(cbComuna.getSelectedItem() == "Viña del mar")
                clientes.setCommune_id(33);
            else if(cbComuna.getSelectedItem() == "Valparaiso")
                clientes.setCommune_id(32);
            else if(cbComuna.getSelectedItem() == "Quilpue")
                clientes.setCommune_id(37);
            else if(cbComuna.getSelectedItem() == "Limache")
                clientes.setCommune_id(34);
            else if(cbComuna.getSelectedItem() == "Villa Alemana")
                clientes.setCommune_id(36);
            else if(cbComuna.getSelectedItem() == "Concon")
                clientes.setCommune_id(28);
                                    
            if(cbSexo.getSelectedItem() == "Masculino")
                clientes.setSex_id(1);
            else if(cbSexo.getSelectedItem() == "Femenino")
                clientes.setSex_id(2);       
            
            
            pDAO.editarCliente(clientes);
        
        
            
        } catch (Exception e) {
            
            JOptionPane.showMessageDialog(this, e.getMessage());
        }
        this.listar();
        this.limpiarCampos();
    }//GEN-LAST:event_btnEditarActionPerformed

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
            java.util.logging.Logger.getLogger(cliente.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(cliente.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(cliente.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(cliente.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new cliente().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.ButtonGroup bgEstado;
    private javax.swing.JButton btnBuscar;
    private javax.swing.JButton btnEditar;
    private javax.swing.JButton btnEliminar;
    private javax.swing.JButton btnGuardar;
    private javax.swing.JComboBox<String> cbComuna;
    private javax.swing.JComboBox<String> cbSexo;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel lblComuna;
    private javax.swing.JLabel lblContraseña;
    private javax.swing.JLabel lblDireccion;
    private javax.swing.JLabel lblEmail;
    private javax.swing.JLabel lblEstado;
    private javax.swing.JLabel lblFukusuke;
    private javax.swing.JLabel lblLogo;
    private javax.swing.JLabel lblNacimiento;
    private javax.swing.JLabel lblNombre;
    private javax.swing.JLabel lblRut;
    private javax.swing.JLabel lblSexo;
    private javax.swing.JLabel lblTelefono;
    private javax.swing.JLabel lblTitulo;
    private javax.swing.JRadioButton rbActivo;
    private javax.swing.JRadioButton rbInactivo;
    private javax.swing.JTable tblClientes;
    private javax.swing.JTextField txtBuscar;
    private javax.swing.JPasswordField txtContraseña;
    private javax.swing.JTextField txtDireccion;
    private javax.swing.JTextField txtEmail;
    private javax.swing.JTextField txtId;
    private javax.swing.JTextField txtNacimiento;
    private javax.swing.JTextField txtNombre;
    private javax.swing.JTextField txtRut;
    private javax.swing.JTextField txtTelefono;
    // End of variables declaration//GEN-END:variables
}
