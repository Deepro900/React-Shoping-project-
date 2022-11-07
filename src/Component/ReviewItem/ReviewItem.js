import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemovieItem }) => {
    const { id, name, price, quantity, shipping, img } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt='' />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shopping: ${shipping}</small></p>
                    <p><small>Quantiity:{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemovieItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ReviewItem;