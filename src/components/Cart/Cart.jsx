import './Cart.css'
const Cart = (props) => {
    const {cart} =props
         let total = 0;
         let shippingTotal = 0;
         let quantity = 0;
         for (const product of cart){
            // console.log(product)
            total = total + product.price * product.quantity
            shippingTotal = shippingTotal + product.shipping
            quantity = quantity + product.quantity
        }

        const tax = total*7/100
        const grandTotal = total +shippingTotal + tax
    
    return (
        <div className='cart'>
            <h2>order summery</h2>
             <h4>selected item :{quantity}</h4>
             <p>Total Price :${total}</p>
             <p>Total Shipping :${shippingTotal}</p>
             <p>Tax :${tax.toFixed(2)}</p>
              <h4>GRAND TOTAL:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;