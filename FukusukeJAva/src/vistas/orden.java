package vistas;

import dao.DespachoOrdenDAO;
import entidades.DespachoOrden;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.swing.table.DefaultTableModel;

public class orden extends javax.swing.JFrame {

    
    public orden() {
        initComponents();
        this.ejecutarProce();
        this.listarOrden();
        txtId.setVisible(false);
        //ANCHO DE COLUMNAS
        tblOrdenes.getColumnModel().getColumn(0).setPreferredWidth(10);
    }
    
    private void limpiar (){        
        
        IdOrdenes = "";
        numBoleta = "";
        nomCliente = "";
        direcCliente = "";
        teleCliente = "";
        
    }
    
    public static String IdOrdenes = "";
    public static String numBoleta = "";
    public static String nomCliente = "";
    public static String direcCliente = "";
    public static String teleCliente = "";
    
    
    //EJECUTAR PROC SP_ODRDEN_DESPACHOS
    private void ejecutarProce(){
        DespachoOrdenDAO orden = new DespachoOrdenDAO();
        orden.ordenDespacho();
    }

    private void listarOrden() {

        DespachoOrdenDAO tDAO = new DespachoOrdenDAO();

        try {
            ArrayList<DespachoOrden> orden = tDAO.listarOrden();

            DefaultTableModel modelo = new DefaultTableModel();

            modelo.addColumn("ORDEN_DESPACHOID");
            modelo.addColumn("NOMBRE_CLIENTE");
            modelo.addColumn("DIRECCION");
            modelo.addColumn("TELEFONO");
            modelo.addColumn("NOMBRE_PRODUCTO");
            modelo.addColumn("CANTIDAD");
            modelo.addColumn("ESTADO");
            modelo.addColumn("BOLETA_ID");
            modelo.addColumn("ORDEN_DESPACHO_ID");
            

            for (DespachoOrden ordentore : orden) {
                String[] fila = new String[9];

                fila[0] = String.valueOf(ordentore.getId());
                fila[1] = ordentore.getCliente();
                fila[2] = ordentore.getDireccion();
                fila[3] = ordentore.getTelefono();
                fila[4] = ordentore.getProducto();
                fila[5] = String.valueOf(ordentore.getCantidad());
                fila[6] = String.valueOf(ordentore.getEstado());
                fila[7] = String.valueOf(ordentore.getBoleta());
                fila[8] = String.valueOf(ordentore.getOrden());
                
                
                modelo.addRow(fila);
            }

            tblOrdenes.setModel(modelo);

        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }
    
    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        lblTitulo = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        tblOrdenes = new javax.swing.JTable();
        lblFukusuke = new javax.swing.JLabel();
        lblLogo = new javax.swing.JLabel();
        btnImprimir = new javax.swing.JButton();
        jButton1 = new javax.swing.JButton();
        txtId = new javax.swing.JTextField();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("Fukusuke - Orden");
        setResizable(false);

        jPanel1.setBackground(new java.awt.Color(255, 255, 255));

        lblTitulo.setBackground(new java.awt.Color(255, 255, 255));
        lblTitulo.setFont(new java.awt.Font("Dialog", 1, 36)); // NOI18N
        lblTitulo.setForeground(new java.awt.Color(255, 102, 0));
        lblTitulo.setText("Orden");

        tblOrdenes.setBackground(new java.awt.Color(255, 255, 255));
        tblOrdenes.setForeground(new java.awt.Color(102, 102, 102));
        tblOrdenes.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null, null}
            },
            new String [] {
                "ID", "Cliente", "Direccion", "Telefono", "Producto", "Cantidad", "Estado", "Boleta", "Orden"
            }
        ));
        tblOrdenes.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                tblOrdenesMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(tblOrdenes);

        lblFukusuke.setBackground(new java.awt.Color(255, 255, 255));
        lblFukusuke.setForeground(new java.awt.Color(0, 0, 0));
        lblFukusuke.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagenes/FUKUSUKE-chico.jpg"))); // NOI18N

        lblLogo.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagenes/sushi-derecha-chico.jpg"))); // NOI18N

        btnImprimir.setBackground(new java.awt.Color(255, 102, 0));
        btnImprimir.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnImprimir.setForeground(new java.awt.Color(0, 0, 0));
        btnImprimir.setText("Procesar orden");
        btnImprimir.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnImprimirActionPerformed(evt);
            }
        });

        jButton1.setBackground(new java.awt.Color(255, 102, 0));
        jButton1.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        jButton1.setForeground(new java.awt.Color(0, 0, 0));
        jButton1.setText("Cerrar sesión");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel1Layout.createSequentialGroup()
                        .addComponent(jScrollPane1)
                        .addContainerGap())
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(lblTitulo, javax.swing.GroupLayout.PREFERRED_SIZE, 174, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(28, 28, 28)
                                .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, 67, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 250, Short.MAX_VALUE)
                                .addComponent(jButton1))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(167, 167, 167)
                                .addComponent(btnImprimir, javax.swing.GroupLayout.PREFERRED_SIZE, 192, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(lblLogo)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(17, 17, 17)
                                .addComponent(lblFukusuke)))
                        .addGap(73, 73, 73))))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(lblTitulo)
                        .addGap(62, 62, 62)
                        .addComponent(btnImprimir)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 80, Short.MAX_VALUE))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(lblFukusuke)
                            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                                .addComponent(jButton1)
                                .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(lblLogo)
                        .addGap(18, 18, 18)))
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 369, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
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
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        // TODO add your handling code here:
        login log = new login();
        log.setVisible(true);
        this.dispose();
    }//GEN-LAST:event_jButton1ActionPerformed

    private void btnImprimirActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnImprimirActionPerformed
        
        IdOrdenes = txtId.getText();
        
        imprimirOrden imprimir = new imprimirOrden();
               
        imprimir.setVisible(true);       
        this.limpiar();
        this.dispose();
        
    }//GEN-LAST:event_btnImprimirActionPerformed

    private void tblOrdenesMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_tblOrdenesMouseClicked
        
        //EJECUTAR PROCEDIMIENTO
        
        int seleccion = tblOrdenes.rowAtPoint(evt.getPoint());
        
        txtId.setText(tblOrdenes.getValueAt(seleccion, 8) + "");
        numBoleta = tblOrdenes.getValueAt(seleccion, 7) + "";
        nomCliente = tblOrdenes.getValueAt(seleccion, 1) + "";
        direcCliente = tblOrdenes.getValueAt(seleccion, 2) + "";
        teleCliente = tblOrdenes.getValueAt(seleccion, 3) + "";
        
        
        
        
    }//GEN-LAST:event_tblOrdenesMouseClicked

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
            java.util.logging.Logger.getLogger(orden.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(orden.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(orden.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(orden.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new orden().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnImprimir;
    private javax.swing.JButton jButton1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel lblFukusuke;
    private javax.swing.JLabel lblLogo;
    private javax.swing.JLabel lblTitulo;
    private javax.swing.JTable tblOrdenes;
    private javax.swing.JTextField txtId;
    // End of variables declaration//GEN-END:variables
}
