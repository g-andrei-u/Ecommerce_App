import React from "react";
import '../../Style/Heading.css';


export default function Heading({ title, description}) {
    return (
    <>
        <div className="heading">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </>
    )
};