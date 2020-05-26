import  React,  {Component} from 'react';
import CartItem from './Cart/CartItem';



export default function CartList ({value}) {
    const {cart} = value
    
     return(
            <div className = "contaner-fluid">
                {cart.map(item => {
                    return <CartItem key ={item.id} item = {item} value  = {value}/>
                })}
            
                        
             </div>
            

        );
    }
