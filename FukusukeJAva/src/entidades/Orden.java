package entidades;

public class Orden {
    
    private int id;
    private String adress;
    private int state;
    private int ticket_id;

    public Orden() {
    }

    public Orden(int id, String adress, int state, int ticket_id) {
        this.setId(id);
        this.setAdress(adress);
        this.setState(state);
        this.setTicket_id(ticket_id);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public int getTicket_id() {
        return ticket_id;
    }

    public void setTicket_id(int ticket_id) {
        this.ticket_id = ticket_id;
    }

    @Override
    public String toString() {
        return "Orden{" + "id=" + id + ", adress=" + adress + ", state=" + state + ", ticket_id=" + ticket_id + '}';
    }
    
    
    
}
