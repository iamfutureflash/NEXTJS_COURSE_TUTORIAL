import React from 'react'

const ReviewDetails = ({ params: { productId, reviewId } }) => {
    console.log(productId, reviewId);

    return (
        <h1>Review {reviewId} for Product {productId}</h1>
    )
}

export default ReviewDetails