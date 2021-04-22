package dao;

import bd.Conexion;
import entidades.Producto;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.ResultSet;

public class ProductoDAO {
    
    private Conexion conexion = new Conexion();
    
    public void agregarproducto(Producto producto) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_INSERTARPRODUCTO (?,?,?,?,?,?,?)}");
            stmt.setString(1, producto.getName());
            stmt.setString(2, producto.getDescription());
            stmt.setInt(3, producto.getPromotion());                       
            stmt.setInt(4, producto.getStock());
            stmt.setInt(5, producto.getPrice());
            stmt.setInt(6, producto.getState());
            stmt.setString(7, producto.getImage());
            
            ResultSet r = stmt.executeQuery();         
            
            
            
                        
            
        } catch (Exception e) {
            
            System.out.println("Error al agregar producto: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
        
    public ArrayList<Producto> listarProductos() throws SQLException{
        
        
        ArrayList<Producto> productos = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "select * from api_product";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                Producto t = new Producto();
                
                t.setId(rs.getInt("ID"));
                t.setName(rs.getString("NAME"));
                t.setDescription(rs.getString("DESCRIPTION"));
                t.setPromotion(rs.getInt("PROMOTION"));
                t.setStock(rs.getInt("STOCK"));
                t.setPrice(rs.getInt("PRICE"));
                t.setState(rs.getInt("STATE"));
                t.setImage(rs.getString("IMAGE"));
                
                productos.add(t);
            }
            
        } catch (Exception e) {
            System.out.println("Error listando" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return productos;
    }
    
    public ArrayList<Producto> buscarProductos(String nombre) throws SQLException{
        
        
        ArrayList<Producto> productos = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "select * from api_product where name = ?";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, nombre);
            
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                Producto t = new Producto();
                
                t.setId(rs.getInt("ID"));
                t.setName(rs.getString("NAME"));
                t.setDescription(rs.getString("DESCRIPTION"));
                t.setPromotion(rs.getInt("PROMOTION"));
                t.setStock(rs.getInt("STOCK"));
                t.setPrice(rs.getInt("PRICE"));
                t.setState(rs.getInt("STATE"));
                t.setImage(rs.getString("IMAGE"));
                
                productos.add(t);
            }
            
        } catch (Exception e) {
            System.out.println("Error listando" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return productos;
    }
    
    public void editarproducto(Producto producto) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_EDITARPRODUCTO (?,?,?,?,?,?,?,?)}");
            stmt.setInt(1, producto.getId());
            stmt.setString(2, producto.getName());
            stmt.setString(3, producto.getDescription());
            stmt.setInt(4, producto.getPromotion());                       
            stmt.setInt(5, producto.getStock());
            stmt.setInt(6, producto.getPrice());
            stmt.setInt(7, producto.getState());
            stmt.setString(8, producto.getImage());
            
            ResultSet r = stmt.executeQuery();         
            
            
            
                        
            
        } catch (Exception e) {
            
            System.out.println("Error al Editar producto: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
        
    public void eliminarproducto(Producto producto) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_ELIMINARPRODUCTO (?)}");
            stmt.setInt(1, producto.getId());
                      
            ResultSet r = stmt.executeQuery();       
                                                      
            
        } catch (Exception e) {
            
            System.out.println("Error al Eliminar producto: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
    
    
}
