package bd;

import java.sql.Connection;
import java.sql.DriverManager;


public class Conexion {
    
    private Connection conexion;
    
    private String url = "jdbc:oracle:thin:@168.138.146.58:1521/orcl.subnet.vcn.oraclevcn.com";
    private String usuario = "SUSHI";
    private String password = "ORACLE";
    
    public Connection conectar(){
        
        try {
            Class.forName("oracle.jdbc.OracleDriver").newInstance();
            this.conexion = DriverManager.getConnection(this.url, this.usuario, this.password);
            
        } catch (Exception e) {
            System.out.println("Error de conexion: " + e.getMessage());
        }
        
        return this.conexion;
        
    }
    
}
