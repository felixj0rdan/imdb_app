import React, { useState } from 'react'
import Fetch from './Fetch'
import "./Header.css"

export default function Header() {
    const [name, setName] = useState("")
    const [state, setstate] = useState("")
    function change(e){
        // e.preventDefault()
        setName(e.target.value);
        
    }
    function myFunction(val) {
        name=val;
      }
      const handleSubmit = event => {
        event.preventDefault();
        // setName(event.target.value)
        alert(`You have submitted the form ${name}`)
        
        
      }
    // const [stat, setstat] = useState(initialState)
    const handleChange = (e) => {
        setName(e.target.value)
        
    }
    return (
        
        <div>
            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            </div>
            <form onSubmit={handleSubmit}>
            <fieldset>
            <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} type="text"/>
            </label>
            </fieldset>
            <button type="Submit" >Submit</button>
            </form>
            <p>{name}</p>
            {/* <div><Fetch name={name}/></div> */}
            <p>{state}</p>
        </div>
    )
}
