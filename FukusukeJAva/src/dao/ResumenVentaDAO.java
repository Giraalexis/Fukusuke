package dao;

import bd.Conexion;
import entidades.ResumenVenta;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class ResumenVentaDAO {
    
    private Conexion conexion = new Conexion();
    
    
    public void resumenVentas(String inicio, String termino){
        
        Connection conn = conexion.conectar();
        
        try {
               
            CallableStatement stmt2 = conn.prepareCall("{call SP_RESUMEN_VENTAS (?,?)}");           
            stmt2.setString(1, inicio);
            stmt2.setString(2, termino);
            stmt2.execute();
            
        } catch (Exception e) {
            
            System.out.println("Error al emitir reporte resumen ventas: " + e.getMessage());
            
        }
    }
    
    
    public ArrayList<ResumenVenta> listarResumen() throws SQLException{
        
        
        ArrayList<ResumenVenta> Resumen = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "select * from RESUMEN_VENTAS";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                ResumenVenta t = new ResumenVenta();
                
                t.setId(rs.getInt("RESUMENID"));
                t.setFecha(rs.getDate("FECHA"));
                t.setNombre(rs.getString("NOMBRE"));
                t.setStock(rs.getInt("STOCK"));
                t.setCantidad(rs.getInt("CANTIDAD"));
                t.setMonto(rs.getInt("GANANCIA"));
                                
                Resumen.add(t);
            }
            
        } catch (Exception e) {
            System.out.println("Error listando RESUMEN" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return Resumen;
    }
}
