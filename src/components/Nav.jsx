import React from 'react'
import './css/nav.css'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';

const Nav = () => {
    
    const { products, addedProducts,totalQty } = useSelector(state => state.products)
    
    return (
        <section className="navbar">
            <nav className="container d-flex justify-content-between">
                <NavLink to="/" className="logo">LOGO</NavLink>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink className="add_to_cart" to="/Cart"><FiShoppingCart /><p>{totalQty?totalQty:"0"}</p></NavLink>
                </ul>
            </nav>
        </section>
    )
}

export default Nav
