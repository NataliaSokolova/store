import  React,  {Component} from 'react';
import styled from "styled-components";
import { ProductConsumer} from "../context";
import { ButtonContainer } from "./Button";
import { Link} from "react-router-dom";

export default class Modal extends Component {
    render(){
        return(
            <ProductConsumer>
                {(value) =>{
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null; 
                    }
                    else{
                        return(
                        <ModalContainer>
                            <div className = "container">
                                <div className = "row">
                                    <div 
                                    id = "modal"
                                    className = "col-8 mx-auto col-md-6 col-lg-6 text-center text-capitalize">
                                        
                                        
                                        <img src = {img} className = "img-fluid"
                                        alt = "product" />
                                        <h6>{title}</h6>
                                         <h6 className = "text-muted">price : ${price}  </h6>
                                        <Link to = '/'>
                                            <ButtonContainer onClick = {()=> closeModal()}>
                                                back to store 
                                            </ButtonContainer>
                                            </Link>
                                            <Link to = '/cart'>
                                            <ButtonContainer cart onClick = {()=> closeModal()}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>

                                    </div>

                                </div>
                            </div>

                        </ModalContainer>

                        );
                    }
                }}
            </ProductConsumer>

        );
    }
}

const ModalContainer = styled.div`
width: 100%;

position:fixed;
top:0 ;
left:0 ;
rigth:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;

#modal{
    margin-top:20px;  
  margin-bottom:20px;
  background: var(--mainWhite);
}

`;