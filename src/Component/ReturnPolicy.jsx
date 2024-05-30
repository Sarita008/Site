import React from 'react'
import "../Assets/css/ReturnPolicy.css";

const ReturnPolicy = () => {
  return (
     <>
        <div className='container'>
            <div className='content1'>
                <h2>Delivary and Returns</h2>
            </div>

            <div className='description1'>
                <h3>DELIVERY</h3>
                <ul>
                    <li>Dispatch: Within 24 Hours</li>
                    <li>Free shipping across all products on a minimum purchase of $50.</li>
                    <li>International delivery time - 7-10 business days</li>
                    <li>Cash on delivery might be available</li>
                    <li>Easy 30 days returns and exchanges</li>
                </ul>
            </div>

            <div className='description1'>
                <h3>RETURNS</h3>
                <p>If you do not like the product you can return it within 15 days - no questions asked. This excludes bodysuits, swimwear and clearance sale items. We have an easy and hassle free return policy.<br /> Please look at our Delivery & Returns section for further information.</p>
            </div>
        </div>
     </>
  )
}

export default ReturnPolicy
