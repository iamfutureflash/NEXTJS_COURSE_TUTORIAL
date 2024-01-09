import React, { memo } from 'react'

const ProductDetails = ({ params, }: { params: { productId: string }; }) => {
    console.log('sdfksdjfoijso', params);

    return (
        <h1>Detail about product {params.productId}</h1>
    )
}

export default memo(ProductDetails)