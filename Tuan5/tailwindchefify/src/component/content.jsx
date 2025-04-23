import React, { useState } from "react";
import "./style.css";
import Filters from "./Filters";
import notice from "../assets/data/lab02/Image 105.png";

function Content() {
    const [filters, setFilters] = useState({
        panFried: false,
        grilled: false,
        roasted: false,
        steamed: false,
        baked: false,
        stirFried: false,
    });

    const [ratings, setRatings] = useState({
        rating1: false,
        rating2: false,
        rating3: false,
        rating4: false,
        rating5: false,
    });

    return (
        <main className="content">
            <Filters filters={filters} setFilters={setFilters} ratings={ratings} setRatings={setRatings} />
            <section className="no-results">
                <div className="message">
                    <h2>
                        Sorry, no results were found for "<span className="query">cakescascsa</span>"
                    </h2>
                    <img src={notice} alt="No Results" />
                    <p>We have all your Independence Day sweets covered.</p>
                    <div className="suggestions">
                        {[{ name: "Sweet Cake", bgColor: "rgb(241, 164, 188)", textColor: "rgb(235, 64, 129)" },
                        { name: "Black Cake", bgColor: "rgb(204, 208, 245)", textColor: "rgb(50, 53, 243)" },
                        { name: "Pizza Varie", bgColor: "rgb(255, 199, 217)", textColor: "rgb(235, 64, 129)" },
                        { name: "Healthy food", bgColor: "rgb(187, 245, 237)", textColor: "rgb(11, 70, 60)" }].map((tag, index) => (
                            <a key={index} href="#" className="tag" style={{ backgroundColor: tag.bgColor, color: tag.textColor }}>
                                {tag.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Content;
