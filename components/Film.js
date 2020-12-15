import React from "react";

const Film =({name}, {url}) => {

    return(
        <>
            <h3>{name}</h3>
            <li>
                <a href={url} className="FilmLink"></a>
            </li>
        </>
    )
};

export default Film;