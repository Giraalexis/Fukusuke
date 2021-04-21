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
    
    public boolean agregarproducto(Producto producto) throws SQLException{
        
        boolean fueAgregado = false;
        Connection conn = conexion.conectar();
        
        try {
            
            String sql = "insert into api_product values(?,?,?,?,?,?,?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setInt(1, producto.getId());
            stmt.setInt(2, producto.getPromotion());
            stmt.setString(3, producto.getDescription());
            stmt.setInt(4, producto.getPromotion());
            stmt.setInt(5, producto.getStock());
            stmt.setInt(6, producto.getPrice());
            stmt.setInt(7, producto.getState());
            stmt.setString(8, producto.getImage());
            
            int cantidad = stmt.executeUpdate();
            
            fueAgregado = (cantidad > 0);
            
            
        } catch (Exception e) {
            
            System.out.println("Error al agregar producto: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        return fueAgregado;
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
}
