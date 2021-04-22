package dao;

import bd.Conexion;
import entidades.Cliente;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ClienteDAO {
    
    private Conexion conexion = new Conexion();
    
    public void agregarCliente(Cliente cliente) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_INSERTARCLIENTE (?,?,?,?,?,?,?,?,?,?)}");
            stmt.setString(1, cliente.getName());
            stmt.setString(2, cliente.getAdress());
            stmt.setString(3, cliente.getRut());
            stmt.setDate(4, cliente.getDate_burn());                       
            stmt.setInt(5, cliente.getTelphone());
            stmt.setString(6, cliente.getEmail());
            stmt.setString(7, cliente.getPassword());
            stmt.setInt(8, cliente.getState());
            stmt.setInt(9, cliente.getCommune_id());            
            stmt.setInt(10, cliente.getSex_id());
            
            ResultSet r = stmt.executeQuery();         
            
            
            
                        
            
        } catch (Exception e) {
            
            System.out.println("Error al agregar Cliente: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
    
    public ArrayList<Cliente> listarClientes() throws SQLException{
        
        
        ArrayList<Cliente> Clientes = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "select * from api_client";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                Cliente t = new Cliente();
                
                t.setId(rs.getInt("ID"));
                t.setName(rs.getString("NAME"));
                t.setAdress(rs.getString("ADRESS"));
                t.setRut(rs.getString("RUT"));
                t.setDate_burn(rs.getDate("DATE_BURN"));
                t.setTelphone(rs.getInt("TELPHONE"));
                t.setEmail(rs.getString("EMAIL"));
                t.setPassword(rs.getString("PASSWORD"));
                t.setState(rs.getInt("STATE"));
                t.setCommune_id(rs.getInt("COMMUNE_ID"));                
                t.setSex_id(rs.getInt("SEX_ID"));
                
                Clientes.add(t);
            }
            
        } catch (Exception e) {
            System.out.println("Error listando" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return Clientes;
    }
    
    public ArrayList<Cliente> buscarCliente(String rut) throws SQLException{
        
        
        ArrayList<Cliente> clientes = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "select * from api_client where rut = ?";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, rut);
            
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                Cliente t = new Cliente();
                
                t.setId(rs.getInt("ID"));
                t.setName(rs.getString("NAME"));
                t.setRut(rs.getString("RUT"));
                t.setAdress(rs.getString("ADRESS"));
                t.setDate_burn(rs.getDate("DATE_BURN"));
                t.setTelphone(rs.getInt("TELPHONE"));
                t.setEmail(rs.getString("EMAIL"));
                t.setPassword(rs.getString("PASSWORD"));
                t.setState(rs.getInt("STATE"));
                t.setCommune_id(rs.getInt("COMMUNE_ID"));                
                t.setSex_id(rs.getInt("SEX_ID"));
                
                clientes.add(t);
            }
            
        } catch (Exception e) {
            System.out.println("Error listando" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return clientes;
    }
    
    public void editarCliente(Cliente cliente) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_EDITARCLIENTE (?,?,?,?,?,?,?,?,?,?,?)}");
            stmt.setInt(1, cliente.getId());
            stmt.setString(2, cliente.getName());
            stmt.setString(3, cliente.getAdress());
            stmt.setString(4, cliente.getRut());
            stmt.setDate(5, cliente.getDate_burn());                       
            stmt.setInt(6, cliente.getTelphone());
            stmt.setString(7, cliente.getEmail());
            stmt.setString(8, cliente.getPassword());
            stmt.setInt(9, cliente.getState());
            stmt.setInt(10, cliente.getCommune_id());            
            stmt.setInt(11, cliente.getSex_id());
            
            ResultSet r = stmt.executeQuery();         
            
            
            
                        
            
        } catch (Exception e) {
            
            System.out.println("Error al editar Cliente: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
    
    public void eliminarCliente(Cliente cliente) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_ELIMINARCLIENTE (?)}");
            stmt.setInt(1, cliente.getId());
                      
            ResultSet r = stmt.executeQuery();       
                                                      
            
        } catch (Exception e) {
            
            System.out.println("Error al eliminar Cliente: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
    
}
