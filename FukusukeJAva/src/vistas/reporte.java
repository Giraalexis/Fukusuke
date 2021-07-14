package vistas;

import dao.DetalleVentaDAO;
import dao.ResumenVentaDAO;
import entidades.DetalleVenta;
import entidades.ResumenVenta;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.swing.table.DefaultTableModel;

public class reporte extends javax.swing.JFrame {

    
    public reporte() {
        initComponents();
        
        lblDetalle.setVisible(false);
        tblDetalle2.setVisible(false);
        lblResumen.setVisible(false);
        tblResumen2.setVisible(false);
        
        //ANCHO DE COLUMNAS
        tblResumen.getColumnModel().getColumn(0).setPreferredWidth(10);
    }
    
    private void listarResumen() {

        ResumenVentaDAO tDAO = new ResumenVentaDAO();

        try {
            ArrayList<ResumenVenta> resumen = tDAO.listarResumen();

            DefaultTableModel modelo = new DefaultTableModel();

            modelo.addColumn("ResumenID");
            modelo.addColumn("Fecha");
            modelo.addColumn("Nombre");
            modelo.addColumn("Stock");
            modelo.addColumn("Cantidad");
            modelo.addColumn("Ganancia");
            

            for (ResumenVenta resumentore : resumen) {
                String[] fila = new String[6];

                fila[0] = String.valueOf(resumentore.getId());
                fila[1] = String.valueOf(resumentore.getFecha());
                fila[2] = resumentore.getNombre();
                fila[3] = String.valueOf(resumentore.getStock());
                fila[4] = String.valueOf(resumentore.getCantidad());
                fila[5] = String.valueOf(resumentore.getMonto());
                
                
                modelo.addRow(fila);
            }

            tblResumen.setModel(modelo);

        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }
    
    private void listarDetalle() {

        DetalleVentaDAO tDAO = new DetalleVentaDAO();

        try {
            ArrayList<DetalleVenta> detalle = tDAO.listarDetalle();

            DefaultTableModel modelo = new DefaultTableModel();

            modelo.addColumn("Detalle_venta_proceid");
            modelo.addColumn("Fecha_boleta");
            modelo.addColumn("Folio");
            modelo.addColumn("Nombre_producto");
            modelo.addColumn("Cantidad");
            modelo.addColumn("Precio_producto");
            modelo.addColumn("Empleado");
            modelo.addColumn("Tipo_pago");
            

            for (DetalleVenta detalletore : detalle) {
                String[] fila = new String[8];

                fila[0] = String.valueOf(detalletore.getId());
                fila[1] = String.valueOf(detalletore.getFecha());
                fila[2] = String.valueOf(detalletore.getFolio());
                fila[3] = detalletore.getNombre();
                fila[4] = String.valueOf(detalletore.getCantidad());
                fila[5] = String.valueOf(detalletore.getPrecio());
                fila[6] = detalletore.getEmpleado();
                fila[7] = detalletore.getPago();
                
                
                modelo.addRow(fila);
            }

            tblDetalle.setModel(modelo);

        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }

    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        lblTitulo = new javax.swing.JLabel();
        tblResumen2 = new javax.swing.JScrollPane();
        tblResumen = new javax.swing.JTable();
        lblFukusuke = new javax.swing.JLabel();
        jLabel1 = new javax.swing.JLabel();
        lblInicio = new javax.swing.JLabel();
        txtInicio = new javax.swing.JTextField();
        lblTermino = new javax.swing.JLabel();
        txtTermino = new javax.swing.JTextField();
        btnGenerar = new javax.swing.JButton();
        txtCerrar = new javax.swing.JButton();
        tblDetalle2 = new javax.swing.JScrollPane();
        tblDetalle = new javax.swing.JTable();
        lblResumen = new javax.swing.JLabel();
        lblDetalle = new javax.swing.JLabel();
        btnResumen = new javax.swing.JButton();
        btnDetalle = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("Fukusuke - Reportes");
        setResizable(false);

        jPanel1.setBackground(new java.awt.Color(255, 255, 255));

        lblTitulo.setBackground(new java.awt.Color(255, 255, 255));
        lblTitulo.setFont(new java.awt.Font("Dialog", 1, 36)); // NOI18N
        lblTitulo.setForeground(new java.awt.Color(255, 102, 0));
        lblTitulo.setText("Reportes de ventas");

        tblResumen.setBackground(new java.awt.Color(255, 255, 255));
        tblResumen.setForeground(new java.awt.Color(102, 102, 102));
        tblResumen.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null}
            },
            new String [] {
                "ID", "Fecha", "Nombre", "Stock", "Cantidad", "Monto"
            }
        ));
        tblResumen2.setViewportView(tblResumen);

        lblFukusuke.setBackground(new java.awt.Color(255, 255, 255));
        lblFukusuke.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagenes/FUKUSUKE-chico.jpg"))); // NOI18N

        jLabel1.setBackground(new java.awt.Color(255, 255, 255));
        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Imagenes/sushi-derecha-chico.jpg"))); // NOI18N

        lblInicio.setBackground(new java.awt.Color(255, 255, 255));
        lblInicio.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblInicio.setForeground(new java.awt.Color(0, 0, 0));
        lblInicio.setText("Fecha inicio");

        txtInicio.setBackground(new java.awt.Color(255, 255, 255));
        txtInicio.setForeground(new java.awt.Color(0, 0, 0));

        lblTermino.setBackground(new java.awt.Color(255, 255, 255));
        lblTermino.setFont(new java.awt.Font("Dialog", 1, 12)); // NOI18N
        lblTermino.setForeground(new java.awt.Color(0, 0, 0));
        lblTermino.setText("Fecha termino");

        txtTermino.setBackground(new java.awt.Color(255, 255, 255));
        txtTermino.setForeground(new java.awt.Color(0, 0, 0));

        btnGenerar.setBackground(new java.awt.Color(255, 102, 0));
        btnGenerar.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnGenerar.setForeground(new java.awt.Color(0, 0, 0));
        btnGenerar.setText("Procesar Reporte");
        btnGenerar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnGenerarActionPerformed(evt);
            }
        });

        txtCerrar.setBackground(new java.awt.Color(255, 102, 0));
        txtCerrar.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        txtCerrar.setForeground(new java.awt.Color(0, 0, 0));
        txtCerrar.setText("Cerrar sesión");
        txtCerrar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtCerrarActionPerformed(evt);
            }
        });

        tblDetalle.setBackground(new java.awt.Color(255, 255, 255));
        tblDetalle.setForeground(new java.awt.Color(102, 102, 102));
        tblDetalle.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null}
            },
            new String [] {
                "ID", "Fecha", "Folio", "Producto", "Cantidad", "Precio", "Empleado", "Tipo Pago"
            }
        ));
        tblDetalle2.setViewportView(tblDetalle);

        lblResumen.setFont(new java.awt.Font("Dialog", 0, 18)); // NOI18N
        lblResumen.setForeground(new java.awt.Color(0, 0, 0));
        lblResumen.setText("RESUMEN DE VENTAS");

        lblDetalle.setFont(new java.awt.Font("Dialog", 0, 18)); // NOI18N
        lblDetalle.setForeground(new java.awt.Color(0, 0, 0));
        lblDetalle.setText("DETALLE DE VENTAS");

        btnResumen.setBackground(new java.awt.Color(255, 102, 0));
        btnResumen.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnResumen.setForeground(new java.awt.Color(0, 0, 0));
        btnResumen.setText("Resumen de Ventas");
        btnResumen.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnResumenActionPerformed(evt);
            }
        });

        btnDetalle.setBackground(new java.awt.Color(255, 102, 0));
        btnDetalle.setFont(new java.awt.Font("Dialog", 1, 14)); // NOI18N
        btnDetalle.setForeground(new java.awt.Color(0, 0, 0));
        btnDetalle.setText("Detalle de Ventas");
        btnDetalle.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnDetalleActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(tblResumen2)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(lblTitulo, javax.swing.GroupLayout.PREFERRED_SIZE, 341, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(lblInicio, javax.swing.GroupLayout.PREFERRED_SIZE, 75, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                            .addComponent(btnResumen, javax.swing.GroupLayout.PREFERRED_SIZE, 185, javax.swing.GroupLayout.PREFERRED_SIZE)
                                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                            .addComponent(btnDetalle, javax.swing.GroupLayout.PREFERRED_SIZE, 185, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                            .addComponent(txtInicio, javax.swing.GroupLayout.PREFERRED_SIZE, 151, javax.swing.GroupLayout.PREFERRED_SIZE)
                                            .addGap(51, 51, 51)
                                            .addComponent(lblTermino)
                                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                            .addComponent(txtTermino, javax.swing.GroupLayout.PREFERRED_SIZE, 151, javax.swing.GroupLayout.PREFERRED_SIZE)))
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addGap(38, 38, 38)
                                        .addComponent(lblResumen, javax.swing.GroupLayout.PREFERRED_SIZE, 211, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                        .addComponent(lblDetalle, javax.swing.GroupLayout.PREFERRED_SIZE, 211, javax.swing.GroupLayout.PREFERRED_SIZE)))))
                        .addGap(2, 2, 2)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(txtCerrar)
                                .addGap(60, 60, 60)
                                .addComponent(lblFukusuke)
                                .addGap(63, 63, 63))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(60, 60, 60)
                                .addComponent(btnGenerar, javax.swing.GroupLayout.PREFERRED_SIZE, 185, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 228, Short.MAX_VALUE)
                                .addComponent(jLabel1)
                                .addGap(43, 43, 43))))
                    .addComponent(tblDetalle2))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(lblTitulo)
                        .addGap(48, 48, 48)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(lblInicio)
                            .addComponent(txtInicio, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(lblTermino)
                            .addComponent(txtTermino, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(btnGenerar))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(btnResumen)
                            .addComponent(btnDetalle)))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addComponent(lblFukusuke)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel1))
                    .addComponent(txtCerrar))
                .addGap(36, 36, 36)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(lblResumen)
                    .addComponent(lblDetalle))
                .addGap(18, 18, 18)
                .addComponent(tblResumen2, javax.swing.GroupLayout.PREFERRED_SIZE, 526, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(tblDetalle2, javax.swing.GroupLayout.DEFAULT_SIZE, 26, Short.MAX_VALUE)
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

    private void txtCerrarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtCerrarActionPerformed
        // TODO add your handling code here:
        login log = new login();
        log.setVisible(true);
        this.dispose();
    }//GEN-LAST:event_txtCerrarActionPerformed

    
    
    private void btnGenerarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnGenerarActionPerformed
        
        ResumenVentaDAO resumen = new ResumenVentaDAO();
        DetalleVentaDAO detalle = new DetalleVentaDAO();
        
        resumen.resumenVentas(txtInicio.getText(), txtTermino.getText());
        detalle.detalleVentas(txtInicio.getText(), txtTermino.getText());
        
        this.listarResumen();
        this.listarDetalle();     
        
        
        
    }//GEN-LAST:event_btnGenerarActionPerformed

    private void btnResumenActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnResumenActionPerformed
        
        lblDetalle.setVisible(false);
        tblDetalle2.setVisible(false);
        lblResumen.setVisible(true);
        tblResumen2.setVisible(true);
    }//GEN-LAST:event_btnResumenActionPerformed

    private void btnDetalleActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnDetalleActionPerformed
        
        lblDetalle.setVisible(true);
        tblDetalle2.setVisible(true);
        lblResumen.setVisible(false);
        tblResumen2.setVisible(false);
        
    }//GEN-LAST:event_btnDetalleActionPerformed

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
            java.util.logging.Logger.getLogger(reporte.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(reporte.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(reporte.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(reporte.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new reporte().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnDetalle;
    private javax.swing.JButton btnGenerar;
    private javax.swing.JButton btnResumen;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JLabel lblDetalle;
    private javax.swing.JLabel lblFukusuke;
    private javax.swing.JLabel lblInicio;
    private javax.swing.JLabel lblResumen;
    private javax.swing.JLabel lblTermino;
    private javax.swing.JLabel lblTitulo;
    private javax.swing.JTable tblDetalle;
    private javax.swing.JScrollPane tblDetalle2;
    private javax.swing.JTable tblResumen;
    private javax.swing.JScrollPane tblResumen2;
    private javax.swing.JButton txtCerrar;
    private javax.swing.JTextField txtInicio;
    private javax.swing.JTextField txtTermino;
    // End of variables declaration//GEN-END:variables
}
