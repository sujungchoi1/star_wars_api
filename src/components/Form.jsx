import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
// import Planet from './Planet';
// import People from './People';

const Form = (props) => {
    
    const [select, setSelect] = useState("people");
    const [id, setId] = useState("1");

    // const [people, setPeople] = useState([]);
    // const [planet, setPlanet] = useState([]);

    const fetchApi = (e) => {
        e.preventDefault();
        // navigate('/:select/:id')
        navigate(`/${select}/${id}`);
    };

    return (
        <div>
            <h1>The Star Wars API</h1>
            <form onSubmit={fetchApi}  className="form-inline row justify-content-center">
                <label htmlFor="select">Search for:</label>
                {/* apply onchange only for select  */}
                <select onChange={(e)=>setSelect(e.target.value)} name="select" >
                    <option value="people" >People</option>
                    <option value="planet">Planet</option>
                </select>

                <label htmlFor="id">ID:</label>
                <input onChange={(e)=>setId(e.target.value)} type="text" name="id"></input>

                <button type="submit" className="btn btn-warning mb-2">Search</button>
            </form>
        </div>
        
    )
}

export default Form;