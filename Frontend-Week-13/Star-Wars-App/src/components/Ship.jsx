
import Ships from "./Ships";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Ship() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships").then((res) => {
      setShips(res.data.results);       
    })
}, []);
console.log(ships);

  return <Ships ships={ships}/>;
}

