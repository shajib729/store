import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { SkeletonProduct } from '../Skeleton/SkeletonProduct'
import './css/home.css'

const Home = () => {

    const dispatch=useDispatch()

    const {products,addedProducts,totalQty,totalPrice} = useSelector(state => state.products)
    // console.log(addedProducts);    

    const getProducts = async () => {
        const res=await fetch('https://fakestoreapi.com/products')
        const data=await res.json()
        dispatch({type:'ADD_PRODUCTS',payload:data})
    }

    const AddProduct = (e) => {
        dispatch({ type: "ADD_TO_CART", payload: e })
    }

    useEffect(() => {
       getProducts()
        localStorage.setItem('addedProducts',JSON.stringify(addedProducts))
        localStorage.setItem('totalQty', JSON.stringify(totalQty))
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
    },[addedProducts])
    
    return (
        <section className="home mt-5">
            
            {/* <div className="banner"></div> */}
            
            <div className="container">
                <div className="row products">
                {
                    products.length?(
                    products.map(product => (
                        <div className="mt-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="p-5 product">
                            <NavLink to={`/product/${product.id}`} className="thumb">
                                <img src={product.image} className="img-fluid" alt="" />
                            </NavLink>
                            <NavLink to={`/product/${product.id}`} className="title">{product.title.slice(0,27)}</NavLink>
                            <h4 className="price">$ {product.price}</h4>
                            {addedProducts.filter(p=>p.id==product.id).length==0?<a onClick={()=>AddProduct(product)} className="add_cart">Add To Cart</a>:<a className="added_cart">Added !</a>}
                            </div>
                        </div>
                    ))
                    ) : 
                    
                    [1,2,3,4,5,6,7,8].map(a=>(
                    <div className="mt-5 col-lg-3 col-md-4 col-sm-6">
                        <SkeletonProduct/>
                    </div>
                    ))
                    
                    
                }
                </div>
            </div>
        </section>
    )
}

export default Home
