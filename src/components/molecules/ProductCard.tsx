import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Image from '../atoms/Image';
import HighlightText from '../atoms/HighlightText';
import DescriptionText from '../atoms/DescriptionText';
import InfoText from "../atoms/InfoText";
import { Keyboard } from '../../data/keyboard';

interface ProductCardProps {
    product: Keyboard;
    addToCart: () => void;
  }
  
  const CardContainer = styled.div`
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    max-width: 240px;
    border-radius: 10px;
    display:flex;
    flex-direction: column;

    span:nth-of-type(1){
      font-size: 0.75rem;
      height: 0.625rem;
      line-height: 1.375rem;
      font-weight: 400;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      color: rgb(127, 133, 141);
      text-decoration: line-through;
    }
    span:nth-of-type(2){
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      margin-bottom: 0.25rem;
      margin-top: 0.25rem;
      font-size: 1.25rem;
      line-height: 1.875rem;
      font-weight: 700;
      height: 1.25rem;
      text-decoration: none;
      color: rgb(255, 101, 0);
    }
    span:nth-of-type(3){
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 400;
      height: 0.75rem;
      color: rgb(127, 133, 141);
    }
  `;
  
 const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    return (
      <CardContainer>
        <HighlightText>{product.name}</HighlightText>
        <DescriptionText>{product.quantity} unidades</DescriptionText>
        <InfoText> R${product.oldPrice.toFixed(2)}</InfoText>
        <InfoText> R${product.newPrice.toFixed(2)}</InfoText>
        <InfoText> À vista no PIX</InfoText>
        <Button onClick={addToCart}>Add to Cart</Button>
      </CardContainer>
    );
  };
  
  export default ProductCard;