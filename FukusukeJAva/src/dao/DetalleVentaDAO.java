package dao;

import bd.Conexion;
import entidades.DetalleVenta;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class DetalleVentaDAO {
    
    private Conexion conexion = new Conexion();
    
    
    public void detalleVentas(String inicio, String termino){
        
        Connection conn = conexion.conectar();
        
        try {
               
            CallableStatement stmt2 = conn.prepareCall("{call SP_DETALLE_VENTAS (?,?)}");
            stmt2.setString(1, inicio);
            stmt2.setString(2, termino);
            stmt2.execute();
            
        } catch (Exception e) {
            
            System.out.println("Error al emitir reporte detalle ventas: " + e.getMessage());
            
        }
    }
    
    
    public ArrayList<DetalleVenta> listarDetalle() throws SQLException{
        
        
        ArrayList<DetalleVenta> Detalles = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "select * from DETALLE_VENTA_PROCE";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                DetalleVenta t = new DetalleVenta();
                
                t.setId(rs.getInt("DETALLE_VENTA_PROCEID"));
                t.setFecha(rs.getDate("FECHA_BOLETA"));
                t.setFolio(rs.getInt("FOLIO"));
                t.setNombre(rs.getString("NOMBRE_PRODUCTO"));
                t.setCantidad(rs.getInt("CANTIDAD"));
                t.setPrecio(rs.getInt("PRECIO_PRODUCTO"));
                t.setEmpleado(rs.getString("EMPLEADO"));
                t.setPago(rs.getString("TIPO_PAGO"));
                                
                Detalles.add(t);
            }
            
        } catch (Exception e) {
            System.out.println("Error listando DETALLE" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return Detalles;
    }
}
