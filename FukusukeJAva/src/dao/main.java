package dao;

import entidades.Producto;
import dao.ProductoDAO;
import java.sql.SQLException;



public class main {
    
    public static void main(String[] args) {
        
        
        
        Producto t = new Producto(1,"sushi java","pollo y cebolla",1,25,3500,1,"prueba");
        
        ProductoDAO tDAO = new ProductoDAO();
        
        try {
            if(tDAO.agregarproducto(t)){
                System.out.println("Agregado");
            }else{
                System.out.println("ha ocurrido un error");
            }
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }
}
