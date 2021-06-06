package dao;

import bd.Conexion;
import entidades.DespachoOrden;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class DespachoOrdenDAO {
    
    private Conexion conexion = new Conexion();
    
    
    public void ordenDespacho(){
        
        Connection conn = conexion.conectar();
        
        try {
            
            CallableStatement stmt = conn.prepareCall("{call SP_ORDEN_DESPACHOS}");
            
            stmt.execute();        
            
        } catch (Exception e) {
            
            System.out.println("Error al mostrar ordenes: " + e.getMessage());
            
        }
    }
    
    
    public ArrayList<DespachoOrden> listarOrden() throws SQLException{
        
        
        ArrayList<DespachoOrden> ordenes = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "select * from ORDEN_DESPACHO_PROCES";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                DespachoOrden t = new DespachoOrden();
                
                t.setId(rs.getInt("ORDEN_DESPACHOID"));
                t.setCliente(rs.getString("NOMBRE_CLIENTE"));
                t.setDireccion(rs.getString("DIRECCION"));
                t.setTelefono(rs.getString("TELEFONO"));
                t.setProducto(rs.getString("NOMBRE_PRODUCTO"));
                t.setCantidad(rs.getInt("CANTIDAD"));
                t.setEstado(rs.getInt("ESTADO"));
                t.setBoleta(rs.getInt("BOLETA_ID"));
                t.setOrden(rs.getInt("ORDEN_DESPACHO_ID"));
                                
                ordenes.add(t);
            }
            
        } catch (Exception e) {
            System.out.println("Error listando DETALLE" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return ordenes;
    }
    
    
    public void editarOrden(int id) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_EDITARORDEN (?)}");
            stmt.setInt(1, id);           
            
            stmt.execute();      
                       
                                    
        } catch (Exception e) {
            
            System.out.println("Error al editar Orden: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
    
    public ArrayList<DespachoOrden> buscarOrden(String id) throws SQLException{
        
        
        ArrayList<DespachoOrden> ordenes = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "SELECT nombre_producto, cantidad FROM orden_despacho_proces WHERE orden_despacho_id = ?";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, id);
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                DespachoOrden t = new DespachoOrden();
                
                t.setProducto(rs.getString("NOMBRE_PRODUCTO"));
                t.setCantidad(rs.getInt("CANTIDAD"));
                                                
                ordenes.add(t);
            }
            
        } catch (SQLException e) {
            System.out.println("Error mostrando DETALLE" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return ordenes;
    }
}
