import React from 'react'
import {prodcutsData} from "./data"
import {
    ProductContainer,
    ProductHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProdcutInfo,
    ProductName,
    ProductIngredients,
    ProductPrice,
    ProductButton,
} from "./ProductsComponents"

function Products({heading, data}) {
    return (
        <ProductContainer>
        <ProductHeading>{heading}</ProductHeading>
        <ProductWrapper>
        {prodcutsData.map((product, index) => {
            return (
                <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProdcutInfo>
                    <ProductName>{product.name}</ProductName>
                    <ProductIngredients>{product.ingredients}</ProductIngredients>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ProductButton>{product.button}</ProductButton>
                </ProdcutInfo>
                </ProductCard>
            )
        })}
        </ProductWrapper>
        </ProductContainer>
    )
}

export default Products
