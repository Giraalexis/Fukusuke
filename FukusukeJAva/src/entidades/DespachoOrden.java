package entidades;


public class DespachoOrden {
    
    private int id;
    private String cliente;
    private String direccion;
    private String telefono;
    private String producto;
    private int cantidad;
    private int estado;
    private int boleta;
    private int orden;

    public DespachoOrden() {
    }

    public DespachoOrden(int id, String cliente, String direccion, String telefono, String producto, int cantidad, int estado, int boleta, int orden) {
        this.setId(id);
        this.setCliente(cliente);
        this.setDireccion(direccion);
        this.setTelefono(telefono);
        this.setProducto(producto);
        this.setCantidad(cantidad);
        this.setEstado(estado);
        this.setBoleta(boleta);
        this.setOrden(orden);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public int getBoleta() {
        return boleta;
    }

    public void setBoleta(int boleta) {
        this.boleta = boleta;
    }

    public int getOrden() {
        return orden;
    }

    public void setOrden(int orden) {
        this.orden = orden;
    }

    @Override
    public String toString() {
        return "DespachoOrden{" + "id=" + id + ", cliente=" + cliente + ", direccion=" + direccion + ", telefono=" + telefono + ", producto=" + producto + ", cantidad=" + cantidad + ", estado=" + estado + ", boleta=" + boleta + ", orden=" + orden + '}';
    }
    
    
    
}
