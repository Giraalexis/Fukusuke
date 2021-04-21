package entidades;

import java.sql.Date;



public class Empleado {
    
    private int id;
    private String name;
    private String rut;
    private Date date_burn;
    private int telphone;
    private String email;
    private String password;
    private int state;
    private int commune_id;
    private int rol_id;
    private int sex_id;

    public Empleado() {
    }

    public Empleado(int id, String name, String rut, Date date_burn, int telphone, String email, String password, int state, int commune_id, int rol_id, int sex_id) {
        this.setId(id);
        this.setName(name);
        this.setRut(rut);
        this.setDate_burn(date_burn);
        this.setTelphone(telphone);
        this.setEmail(email);
        this.setPassword(password);
        this.setState(state);
        this.setCommune_id(commune_id);
        this.setRol_id(rol_id);
        this.setSex_id(sex_id);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRut() {
        return rut;
    }

    public void setRut(String rut) {
        this.rut = rut;
    }

    public Date getDate_burn() {
        return date_burn;
    }

    public void setDate_burn(Date date_burn) {
        this.date_burn = date_burn;
    }

    public int getTelphone() {
        return telphone;
    }

    public void setTelphone(int telphone) {
        this.telphone = telphone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getCommune_id() {
        return commune_id;
    }

    public void setCommune_id(int commune_id) {
        this.commune_id = commune_id;
    }

    public int getRol_id() {
        return rol_id;
    }

    public void setRol_id(int rol_id) {
        this.rol_id = rol_id;
    }

    public int getSex_id() {
        return sex_id;
    }

    public void setSex_id(int sex_id) {
        this.sex_id = sex_id;
    }

    @Override
    public String toString() {
        return "Empleado{" + "id=" + id + ", name=" + name + ", rut=" + rut + ", date_burn=" + date_burn + ", telphone=" + telphone + ", email=" + email + ", password=" + password + ", state=" + state + ", commune_id=" + commune_id + ", rol_id=" + rol_id + ", sex_id=" + sex_id + '}';
    }
    
    
    
    
    
}
