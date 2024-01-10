import React from 'react'
import { notFound } from 'next/navigation'
const ReviewDetails = ({ params: { productId, reviewId } }: { params: { productId: string, reviewId: string } }) => {
    console.log(productId, reviewId);
    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <h1>Review {reviewId} for Product {productId}</h1>
    )
}

export default ReviewDetails