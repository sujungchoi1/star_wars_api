import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form'

const Planet = (props) => {

    const [planet, setPlanet] = useState([]);
    const [error, setError] = useState(null);

    // useEffect run when [] gets updated; w/o [], runs indefinitely
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => {
                // setPlanet(response.data);
                setPlanet(response.data)
                console.log(response.data);
            })
            .catch((err) => {
                setError("These aren't the droids you're looking for")
            })
    }, [props.id])

    const displayPlanet = () => {
        return (
        <div className="planetDisplay">
            <Form />
            <h2 style={{"color": "rgb(60, 59, 59)"}}>{planet.name}</h2>
            <div className="divider"></div>
            <h3>Climate: <span>{planet.climate}</span> </h3>
            <h3>Terrain: <span>{planet.terrain}</span> </h3>
            <h3>Surface Water: <span>{planet.surface_water}</span> </h3>
            <h3>Population: <span>{planet.population}</span> </h3>
            <h3>Gravity: <span>{planet.gravity}</span> </h3>
        </div>
        )
    }

    const displayError = () => {
        return (
            <div>
                <h1 style={{"width": "80%"}}>{error}</h1>
                <img src="https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif" alt="obiwan" />
            </div>
        )
    }

    return (
        <div> { error == null ? displayPlanet() : displayError() } </div>
    )
}

export default Planet;