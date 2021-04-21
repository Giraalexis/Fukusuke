package dao;

import entidades.Producto;
import dao.ProductoDAO;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;



public class main {
    
    public static void main(String[] args) {
        
        ProductoDAO tDAO = new ProductoDAO();
        
        //INSERTAR PRODUCTO
//        Producto t = new Producto(1,"sushi java","pollo y cebolla",1,25,3500,1,"prueba");       
//                
//        try {
//            if(tDAO.agregarproducto(t)){
//                System.out.println("Agregado");
//            }else{
//                System.out.println("ha ocurrido un error");
//            }
//        } catch (SQLException ex) {
//            System.out.println(ex.getMessage());
//        }

             //LISTAR PRODUCTOS
        try {
                       
            ArrayList<Producto> productos = tDAO.listarProductos();
            
            for(Producto productoses : productos){
                System.out.println(productoses);
            }
            
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
    }
}
