package entidades;

public class Producto {
    
    private int id;
    private String name;
    private String description;
    private int promotion; 
    private int stock;
    private int price;
    private int state;
    private String image;

    public Producto() {
    }

    public Producto(int id, String name, String description, int promotion, int stock, int price, int state, String image) {
        this.setId(id);
        this.setName(name);
        this.setDescription(description);
        this.setPromotion(promotion);
        this.setStock(stock);
        this.setPrice(price);
        this.setState(state);
        this.setImage(image);
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {        
        this.description = description;
    }

    public int getPromotion() {
        return promotion;
    }

    public void setPromotion(int promotion) {
        this.promotion = promotion;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {        
        this.image = image;
    }

    @Override
    public String toString() {
        return "Producto{" + "id=" + id + ", name=" + name + ", description=" + description + ", promotion=" + promotion + ", stock=" + stock + ", price=" + price + ", state=" + state + ", image=" + image + '}';
    }


    
    
    
}
