"use client";
import { useState, useEffect, ChangeEvent } from "react";
export default function page (){
    const[email,setEmail]=useState("");
    const handleChange= (e:ChangeEvent<HTMLInputElement>)=> {
         setEmail(e.target.value);
    }
    const handleSubmit = () => alert("Submitted email: " + email);
    return (
        <div>
            <label>Email: </label>

            <input className="border p-2"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter you email">
            </input>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
      

