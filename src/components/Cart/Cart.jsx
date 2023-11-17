import './Cart.css'
const Cart = (props) => {
    const {cart} =props
         let total = 0;
         let shippingTotal = 0;
         for (const product of cart){
            console.log(product)
            total = total + product.price
            shippingTotal = shippingTotal + product.shipping
        }

        const tax = total*7/100
        const grandTotal = total +shippingTotal + tax
    
    return (
        <div className='cart'>
            <h2>order summery</h2>
             <h4>selected item :{cart.length}</h4>
             <p>Total Price :${total}</p>
             <p>Total Shipping :${shippingTotal}</p>
             <p>Tax :${tax.toFixed(2)}</p>
              <h4>GRAND TOTAL:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;