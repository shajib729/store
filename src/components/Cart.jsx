import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./css/Cart.css"
import Product from './Product'
import { RiDeleteBin6Line } from 'react-icons/ri';

const Cart = () => {
    const dispatch=useDispatch()

    const { addedProducts, totalQty, totalPrice } = useSelector(state => state.products)
    
    useEffect(() => {
        localStorage.setItem('totalQty', JSON.stringify(totalQty))
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
        localStorage.setItem('addedProducts', JSON.stringify(addedProducts))
    }, [totalPrice,totalQty,addedProducts])

    return (
        <section className="cart_section">
            <div className="container">
                    {
                        addedProducts.length?
                        (
                            <div className="row">
                            <div className="col-lg-8">
                                {
                                    addedProducts.map(product=>(
                                        <div className="row added_product">
                                            <div className="col-2 col-md-1 product_img">
                                                <img src={product.image} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-3 col-md-4 product_title">
                                                <p>{product.title}</p>
                                            </div>
                                            <div className="col-2 product_price">
                                                <p>{(product.price*product.qty).toFixed(2) }</p>
                                            </div>
                                            <div className="col-3 product_qty">
                                                <p className="inc" onClick={()=>dispatch({type:"INC",product:product})}>+</p>
                                                <p className="qty">{product.qty}</p>
                                                <p className="dec" onClick={()=>dispatch({type:"DEC",product:product})}>-</p>
                                            </div>
                                            <div className="col-2 product_delete">
                                                <p onClick={()=>dispatch({type:"DELETE_PRODUCT",product:product})}><RiDeleteBin6Line/></p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-lg-4 ">
                                <div className="checout_section">
                                <h2>Order Summary</h2>
                                <div className="total_items">
                                    <p>Total Items : </p>
                                    <p>{totalQty}</p>
                                </div>
                                <div className="total_price">
                                    <p>Total Price : </p>
                                    <p>$ {totalPrice.toFixed(2)}</p>
                                </div>
                                <a className="checkout_btn">
                                    PROCEED TO CHECKOUT
                                </a>
                                </div>
                            </div>
                            </div>
                        )
                        :
                        <h1>No Product...</h1>
                    }
            </div>
        </section>
    )
}

export default Cart
