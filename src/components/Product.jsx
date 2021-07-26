import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { SkeletonProduct } from '../Skeleton/SkeletonProduct'
import './css/product.css'

const Product = () => {

    const [product, setproduct] = useState()

    // const [inc, setInc] = useState(product.qty)

    const { id } = useParams()

    const dispatch = useDispatch()

    const { addedProducts } = useSelector(state => state.products)
    const addedProduct=addedProducts.find(p=>p.id==id)
    // console.log(product.id,Number(id));

    const getProducts = async () => {
        const res=await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        // console.log(res);
        // console.log(data);
        setproduct({...data,qty: addedProduct?addedProduct.qty : 1})
    }
    
    useEffect(() => {
       getProducts()
    }, [])
    

    return (
    
        <section className="container product_section">
            <div className="row col-lg-10">
            {
              product?(
                  product.id==Number(id)? (
                    <div className="row">
                    <div className="col-6">
                        <img className="img-fluid" src={product.image} alt="Product I" />
                    </div>
                    <div className="col-6 product_details">
                        <p className='product_title'>{product.title}</p>
                        <p className='product_des'>{product.description}</p>
                        <p className='product_price'>$ {product.price}</p>
                        <div className="product_qty d-flex">
                            <div className="quantity">Quantity : </div>
                            <div className='d-flex ml-5'>
                                <a className={addedProduct?"none":''} onClick={()=>setproduct({...product,qty:product.qty+1})}>+</a>
                                <p>{product.qty}</p>
                                <a className={addedProduct?"none":''} onClick={()=>setproduct({...product,qty:product.qty>1?product.qty-1:1})}>-</a>
                            </div>
                        </div>
                        {addedProducts.filter(p=>p.id==id).length==0?<a onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})} className="add_to_btn">Add To Cart</a>:<a className="added_to_btn">Added !</a>}
                    </div>
                    </div>
                        ) : <h1>No product is available with the ID of {id}</h1>
              )
              : <SkeletonProduct product="product"/>
            }
            </div>
        </section>
    )
}

export default Product
