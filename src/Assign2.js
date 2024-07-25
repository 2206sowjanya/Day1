import React, { useState } from 'react';
import './Assignment1.css'; 
function Assign2() {
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([
        { reviewer: 'SOWJI', text: 'This product is good.' },
        { reviewer: 'LADDU', text: 'This product is not great.' },
    ]);

    const addReview = () => {
        if (review.trim() !== '') {
            setReviews([...reviews, { reviewer: 'SWATHI', text: review }]);
            setReview('');
        }
    };

    const inputValueChange = (event) => {
        setReview(event.target.value);
    };

    return (
        <div className="product-page">
            <main className="main-content">
                <h1>MOBILES</h1>
                <div className="product-details">
                    <div className="product-image">
                        <img src="images.JPEG" alt="Product" />
                    </div>
                    <div className="product-info">
                        <h2>Product Name</h2>
                        <p className="product-description">
                        vivo V27 5G 256GB 8GB RAM Gsm Unlocked Phone Mediatek Dimensity 7200 50MP
                        Bank Offer5% Cashback on Flipkart Axis Bank CardT&C

Special PriceGet extra ₹4000 off (price inclusive of cashback/coupon)T&C

FreebieFlat ₹1000 off on Cleartrip hotels booking along with 300 supercoins on bookingT&C

FreebieSpotify Premium - 12M at ₹699T&C

Extra ₹100 off on Combo PurchaseT&C

Extra ₹100 off on Combo PurchaseT&C

Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*Know More


                        </p>
                        <p className="product-price">₹500.00</p>
                        <button className="add-to-cart-button">Add to cart</button>
                    </div>
                </div>

                <div className="product-specifications">
                    <h2>Product specifications</h2>
                    <p>
                         Good memory.high performance,camera quality is also good.All are Good
                         Good memory.high performance,camera quality is also good.All are Good
                         Good memory.high performance,camera quality is also good.All are Good
                         Good memory.high performance,camera quality is also good.All are Good
                    </p>
                </div>

                <div className="reviews-section">
                    <h2>Reviews</h2>
                    <input
                        type="text"
                        value={review}
                        placeholder="Type to review"
                        onChange={inputValueChange}
                        className="review-input"
                    />
                    <button className="add-review-button" onClick={addReview}>Add review</button>

                    {reviews.map((rev, index) => (
                        <div key={index} className="review">
                            <h3>{rev.reviewer}</h3>
                            <p>{rev.text}</p>
                           
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Assign2;