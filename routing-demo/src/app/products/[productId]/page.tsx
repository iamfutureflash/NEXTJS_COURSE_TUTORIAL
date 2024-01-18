import React, { memo } from 'react'
import { Metadata } from "next"
type Props = { params: { productId: string; }; };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve, reject) => { setTimeout(() => { resolve(`iPhone ${params.productId}`) }, 100) });
    return { title: `Detail about product ${title}`, };
};

const ProductDetails = ({ params, }: Props) => {
    console.log('sdfksdjfoijso', params);
    return <h1>Detail about product {params.productId}</h1>
}

export default memo(ProductDetails)