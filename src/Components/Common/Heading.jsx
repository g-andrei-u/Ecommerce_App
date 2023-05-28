import React from "react";
import '../../Style/Heading.css';


export default function Heading({ title, description}) {
    return (
    <>
        <div className="heading">
            <h2>{title}</h2>
            <p style={{ color: 'rgba(179, 0, 0, 1)'}}>{description}</p>
        </div>
    </>
    )
};