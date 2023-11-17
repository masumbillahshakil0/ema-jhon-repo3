import './product.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (product) => {
    
    const { img, name, price, seller, ratings } =product.product;
    const handleAddToCart = product.handleAddToCart
    // console.log(product)
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'> {name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer {seller}</p>
                <p>Rattig {ratings} Star</p>
            </div>
            <button onClick={() => handleAddToCart(product.product)} className='btn-cart'>Add to Cart
            {/* <FontAwesomeIcon icon={faShoppingCart} /> */}

            </button>
        </div>
    );
};

export default Product;