// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Name from './Name'

export default function Character () {

    const [data, setCharacter] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(response => {
                console.log(response.data)
                setCharacter(response.data)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        data.map(character => {
            return (
                <div>
                    {data && <Name name={character}/>}
                </div>
            )
        })
    )
}
