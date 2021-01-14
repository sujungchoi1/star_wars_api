import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form'

// component: PascalCase
// variable: camelCase

const People = (props) => {

    const [people, setPeople] = useState([]);
    const [error, setError] = useState(null);

    // useEffect run when [] gets updated
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response => {
                setPeople(response.data);
                console.log(response);
            })
            // .catch( err =>console.log(err))
            .catch((err) => {
                setError("These aren't the droids you're looking for")
            })
    }, [props.id]);
    // can't search for other id's if [] is empty

        const displayPeople = () => {
            return (
                <div className="peopleDisplay">
                    <Form />
                    <h2 style={{"color": "rgb(60, 59, 59)"}}>{people.name}</h2>
                    <div className="divider"></div>
                    <h3>Height: <span>{people.height} cm</span> </h3>
                    <h3>Mass: <span>{people.mass} kg</span> </h3>
                    <h3>Hair Color: <span>{people.hair_color}</span> </h3>
                    <h3>Skin Color: <span>{people.skin_color}</span> </h3>
                    <h3>Eye Color: <span>{people.eye_color}</span> </h3>
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
            <div> { error == null ? displayPeople() : displayError() } </div>
        )

}

export default People;
