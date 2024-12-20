import axios from "axios";
import React, { useEffect, useState } from "react";

interface Movies {
  Title: string;
  Runtime: string;
  Year: string;
  Poster: string;
}

export default function Movies() {
  const [myData, setMyData] = useState<Movies[]>([]);
  
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      )
      .then((response) => {
        setMyData(response.data);
      })
      
  }, []);

  return (
   <div>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Poster</th>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">Runtime</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((data, index) => (
            <tr key={index}>
              <td>
                <img src={data.Poster} alt={data.Title} />
              </td>
              <td>{data.Title}</td>
              <td>{data.Year}</td>
              <td>{data.Runtime}</td>
            </tr>
          ))}
        </tbody>
      </table>







   </div>
  )
}
