package entidades;

import java.sql.Date;


public class DetalleVenta {
    
    private int id;
    private Date fecha;
    private int folio;
    private String nombre;
    private int cantidad;
    private int precio;
    private String empleado;
    private String pago;

    public DetalleVenta() {
    }

    public DetalleVenta(int id, Date fecha, int folio, String nombre, int cantidad, int precio, String empleado, String pago) {
        this.setId(id);
        this.setFecha(fecha);
        this.setFolio(folio);
        this.setNombre(nombre);
        this.setCantidad(cantidad);
        this.setPrecio(precio);
        this.setEmpleado(empleado);
        this.setPago(pago);
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

    public int getFolio() {
        return folio;
    }

    public void setFolio(int folio) {
        this.folio = folio;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public String getEmpleado() {
        return empleado;
    }

    public void setEmpleado(String empleado) {
        this.empleado = empleado;
    }

    public String getPago() {
        return pago;
    }

    public void setPago(String pago) {
        this.pago = pago;
    }

    @Override
    public String toString() {
        return "DetalleVenta{" + "id=" + id + ", fecha=" + fecha + ", folio=" + folio + ", nombre=" + nombre + ", cantidad=" + cantidad + ", precio=" + precio + ", empleado=" + empleado + ", pago=" + pago + '}';
    }
    
    
    
    
    
    
}
