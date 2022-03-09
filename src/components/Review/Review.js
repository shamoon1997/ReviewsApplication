import React from 'react'
import People from '../../Data/Data'
import { useState } from 'react';
import './Review.css';
import { FaQuoteRight } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
function Review() {
    const [Index, setIndex] = useState(0);
    const { name, image, review } = People[Index]
    const checkNumber = (number) => {
        if (number > People.length - 1) {
            return 0;
        }
        else if (number < 0) {
            return People.length - 1;
        }
        return number;
    }
    const nextPerson = () => {
        setIndex((index) => {
            return checkNumber(index + 1);
        })
    }
    const prevPerson = () => {
        setIndex((index) => {
            return checkNumber(index - 1);
        })
    }
    const displayRandomReview = () => {
        let randomNumber = Math.floor(Math.random() * People.length);
        if (randomNumber === Index) {
            setIndex((index) => {
                return checkNumber(randomNumber + 1);
            })
        }
        else {
            setIndex(randomNumber);
        }
    }
    return (
        <div className="review-container">
            <div className="sub-container">
                <img src={image} alt="Name " />
                <span>
                    <FaQuoteRight className="inverted-comma-icon" />
                </span>
            </div>
            <h4>{name}</h4>
            <div className="review-description">
                <p>{review}</p>
            </div>
            <div className="chevron-buttons">
                <span className="span-left" onClick={prevPerson}><BsChevronLeft /></span>
                <span className="span-right" onClick={nextPerson}><BsChevronRight /></span>
            </div>
            <div className="show-random">
                <button onClick={displayRandomReview}>Show random</button>
            </div>

        </div>
    )
}

export default Review
