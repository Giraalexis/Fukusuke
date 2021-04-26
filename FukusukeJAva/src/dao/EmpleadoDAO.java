package dao;

import bd.Conexion;
import entidades.Empleado;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.ResultSet;

public class EmpleadoDAO {
    
    private Conexion conexion = new Conexion();
    
    public void agregarEmpleado(Empleado empleado) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_INSERTAREMPLEADO (?,?,?,?,?,?,?,?,?,?)}");
            stmt.setString(1, empleado.getName());
            stmt.setString(2, empleado.getRut());
            stmt.setDate(3, empleado.getDate_burn());                       
            stmt.setInt(4, empleado.getTelphone());
            stmt.setString(5, empleado.getEmail());
            stmt.setString(6, empleado.getPassword());
            stmt.setInt(7, empleado.getState());
            stmt.setInt(8, empleado.getCommune_id());
            stmt.setInt(9, empleado.getRol_id());
            stmt.setInt(10, empleado.getSex_id());
            
            ResultSet r = stmt.executeQuery();         
            
            
            
                        
            
        } catch (Exception e) {
            
            System.out.println("Error al agregar Empleado: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
    
    public ArrayList<Empleado> listarEmpleados() throws SQLException{
        
        
        ArrayList<Empleado> empleados = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "select * from api_employee";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                Empleado t = new Empleado();
                
                t.setId(rs.getInt("ID"));
                t.setName(rs.getString("NAME"));
                t.setRut(rs.getString("RUT"));
                t.setDate_burn(rs.getDate("DATE_BURN"));
                t.setTelphone(rs.getInt("TELPHONE"));
                t.setEmail(rs.getString("EMAIL"));
                t.setPassword(rs.getString("PASSWORD"));
                t.setState(rs.getInt("STATE"));
                t.setCommune_id(rs.getInt("COMMUNE_ID"));
                t.setRol_id(rs.getInt("ROLE_ID"));
                t.setSex_id(rs.getInt("SEX_ID"));
                
                empleados.add(t);
            }
            
        } catch (Exception e) {
            System.out.println("Error listando" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return empleados;
    }
    
    public ArrayList<Empleado> buscarEmpleado(String rut) throws SQLException{
        
        
        ArrayList<Empleado> empleados = new ArrayList<>();
        Connection conn = conexion.conectar();
        
        try {
            String sql = "select * from api_employee where rut = ?";
            
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, rut);
            
            ResultSet  rs = stmt.executeQuery();
            
            while(rs.next()){
                Empleado t = new Empleado();
                
                t.setId(rs.getInt("ID"));
                t.setName(rs.getString("NAME"));
                t.setRut(rs.getString("RUT"));
                t.setDate_burn(rs.getDate("DATE_BURN"));
                t.setTelphone(rs.getInt("TELPHONE"));
                t.setEmail(rs.getString("EMAIL"));
                t.setPassword(rs.getString("PASSWORD"));
                t.setState(rs.getInt("STATE"));
                t.setCommune_id(rs.getInt("COMMUNE_ID"));
                t.setRol_id(rs.getInt("ROLE_ID"));
                t.setSex_id(rs.getInt("SEX_ID"));
                
                empleados.add(t);
                
                
                
            }
            
        } catch (Exception e) {
            System.out.println("Error buscando" + e.getMessage());
            
        }finally{
            conn.close();
        }
        
        return empleados;
    }
    
    public void editarEmpleado(Empleado empleado) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_EDITAREMPLEADO (?,?,?,?,?,?,?,?,?,?,?)}");
            stmt.setInt(1, empleado.getId());
            stmt.setString(2, empleado.getName());
            stmt.setString(3, empleado.getRut());
            stmt.setDate(4, empleado.getDate_burn());                       
            stmt.setInt(5, empleado.getTelphone());
            stmt.setString(6, empleado.getEmail());
            stmt.setString(7, empleado.getPassword());
            stmt.setInt(8, empleado.getState());
            stmt.setInt(9, empleado.getCommune_id());
            stmt.setInt(10, empleado.getRol_id());
            stmt.setInt(11, empleado.getSex_id());
            
            ResultSet r = stmt.executeQuery();         
            
            
            
                        
            
        } catch (Exception e) {
            
            System.out.println("Error al Editar empleado: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
    
    public void eliminarEmpleado(Empleado empleado) throws SQLException{
        
        
        Connection conn = conexion.conectar();
        
        try {
            
            
            PreparedStatement stmt = conn.prepareStatement("{call SP_ELIMINAREMPLEADO (?)}");
            stmt.setInt(1, empleado.getId());
                      
            ResultSet r = stmt.executeQuery();       
                                                      
            
        } catch (Exception e) {
            
            System.out.println("Error al Eliminar empleado: " + e.getMessage());
            
        }finally{
            
            conn.close();
            
        }
        
        
    }
    
    public boolean validarLogin (Empleado emp){
        
        PreparedStatement ps = null;
        ResultSet rs = null;
        Connection conn = conexion.conectar();
        
        String sql = "Select ID, NAME, RUT, PASSWORD, STATE, ROLE_ID FROM api_employee WHERE RUT = ?";
        
        
        try {
            
            ps = conn.prepareStatement(sql);
            ps.setString(1, emp.getRut());
            rs = ps.executeQuery();
            
            if(rs.next()){
                
                if(emp.getPassword().equals(rs.getString(4))) {
                    
                    emp.setId(rs.getInt(1));
                    emp.setName(rs.getString(2));
                    emp.setRol_id(rs.getInt(6));
                    
                    return true;
                }else{
                    return false;
                }               
            }            
            return false;
        } catch (Exception e) {
            
            
        }        
        
        return false;
    }
    
}


    