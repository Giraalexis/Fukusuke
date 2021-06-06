package entidades;

import java.sql.Date;


public class ResumenVenta {
    
    private int id;
    private Date fecha;
    private String nombre;
    private int stock;
    private int cantidad;
    private int monto;

    public ResumenVenta() {
    }

    public ResumenVenta(int id, Date fecha, String nombre, int stock, int cantidad, int monto) {
        this.setId(id);
        this.setFecha(fecha);
        this.setNombre(nombre);
        this.setStock(stock);
        this.setCantidad(cantidad);
        this.setMonto(monto);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getMonto() {
        return monto;
    }

    public void setMonto(int monto) {
        this.monto = monto;
    }

    @Override
    public String toString() {
        return "ResumenVenta{" + "id=" + id + ", fecha=" + fecha + ", nombre=" + nombre + ", stock=" + stock + ", cantidad=" + cantidad + ", monto=" + monto + '}';
    }
    
    
    
}
