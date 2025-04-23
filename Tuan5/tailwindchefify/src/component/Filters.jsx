import React, { useState } from "react";
import "./style.css";
import Slider2 from "../assets/data/lab02/Slider 2.png";
import Rating18 from "../assets/data/lab02/Rating 18.png";
import Rating19 from "../assets/data/lab02/Rating 19.png";
import Rating20 from "../assets/data/lab02/Rating 20.png";
import Rating16 from "../assets/data/lab02/Rating 16.png";
import Rating17 from "../assets/data/lab02/Rating 17.png";


const Filters = ({ filters, setFilters, ratings, setRatings }) => {
    const ratingImages = {
        16: Rating16,
        17: Rating17,
        18: Rating18,
        19: Rating19,
        20: Rating20,
    };

    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.checked,
        });
    };

    const handleRatingChange = (e) => {
        setRatings({
            ...ratings,
            [e.target.name]: e.target.checked,
        });
    };

    return (
        <aside className="filters" style={{ width: "20%" }}>
            <h3>Filters</h3>
            <div className="filter-section">
                <h4>Type</h4>
                <div className="type-grid">
                    {["Pan-fried", "Grilled", "Roasted", "Steamed", "Baked", "Stir-fried"].map((type, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                name={type.toLowerCase().replace("-", "")}
                                checked={filters[type.toLowerCase().replace("-", "")]}
                                onChange={handleFilterChange}
                            /> {type}
                        </label>
                    ))}
                </div>
            </div>
            <div className="filter-section">
                <h4>Time</h4>
                <div>
                    <span>10 minutes - 60 minutes</span>
                    <img src={Slider2} alt="Slider" className="minutes" />
                </div>
            </div>
            <div className="filter-section">
                <h4>Rating</h4>
                <div className="stars">
                    {[18, 17, 19, 20, 16].map((num, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                name={`rating${index + 1}`}
                                checked={ratings[`rating${index + 1}`]}
                                onChange={handleRatingChange}
                            />
                            <span>
                                <img src={ratingImages[num]} alt={`Rating ${num}`} />
                            </span>
                        </label>
                    ))}
                </div>
            </div>
            <button className="apply-filters">Apply</button>
        </aside>
    );
};
export default Filters