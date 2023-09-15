import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function Planets() {
  const [planet, setPlanet] = useState({});
  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}/`)
    .then(response => {
      setPlanet(response.data);
    })
    .catch(error => {
      console.error("Error Fetching Planet Data", error);
      props.onError();
    });
  }, [id]);

  return (
    <div>
        <h2>{planet.name}</h2>
        <p>Climate: {planet.climate}</p>
        <p>Gravity: {planet.gravity}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Population: {planet.population}</p>
    </div>
);
}

export default Planets;