import React, { useEffect, useState } from 'react'

export default function Fetch({name}) {
    
    const [data, setData] = useState([])
    var first="http://www.omdbapi.com/?t=", sec="&apikey=e63f31d7";
    // var name="dolittle"
    const url=`http://www.omdbapi.com/?t=${name}&apikey=e63f31d7`
    const fetchData = () => {
    fetch(url, {"method":"GET"})
    .then(data => data.json())
    .then(data => setData(data))
    .then(console.log(data))
    .catch(err => console.log(err)) 
  }
  useEffect(() => {
    fetchData()
  }, [name])
    return (
        <div>
            <p>{data.Title}</p>
            <p>{data.Year}</p>
            <img src={data.Poster} />
            <p>{data.imdbRating}</p>
        </div>
    )
}
