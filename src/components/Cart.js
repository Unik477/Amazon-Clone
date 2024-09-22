import CartItems from "./CartItems";
import "./cart.css"
export default function Cart(){

    return(
        <div className="cart">
            
            <div className="cart-items">
                <h1>Shopping Cart</h1>
                <p>Deselect all items</p>
            <CartItems image={`${process.env.PUBLIC_URL}/Images/box1_image.jpg`} description = {"Ambrane 85W Fast Charging Powerbank for MacBook, Type C Laptop & Mobile Charging, 20,000mAh Battery, Triple Output, Power Delivery & Quick Charge (Powerlit Ultra lite, Black)"}/>
            <CartItems image={`${process.env.PUBLIC_URL}/Images/box2_image.jpg`} description = {"Ambrane 85W Fast Charging Powerbank for MacBook, Type C Laptop & Mobile Charging, 20,000mAh Battery, Triple Output, Power Delivery & Quick Charge (Powerlit Ultra lite, Black)"}/>
            <CartItems image={`${process.env.PUBLIC_URL}/Images/box3_image.jpg`} description = {"Ambrane 85W Fast Charging Powerbank for MacBook, Type C Laptop & Mobile Charging, 20,000mAh Battery, Triple Output, Power Delivery & Quick Charge (Powerlit Ultra lite, Black)"}/>
            <CartItems image={`${process.env.PUBLIC_URL}/Images/box4_image.jpg`} description = {"Ambrane 85W Fast Charging Powerbank for MacBook, Type C Laptop & Mobile Charging, 20,000mAh Battery, Triple Output, Power Delivery & Quick Charge (Powerlit Ultra lite, Black)"}/>

            </div>
        </div>
    )
}