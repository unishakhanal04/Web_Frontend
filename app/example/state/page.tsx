"use client";//important(if state is used)
import { useEffect, useState } from "react";
export default function page (){
    const[count, setCount]=useState(1);
    //count->variable,setCount-> setter, (1)-> default value
    const handlerDecreament = ()=>{
        setCount(count-1);
    }
    useEffect(
        ()=>{
            alert ("Page Started")
        },//function
        []//dependencies (if empty, runs once when page loads)
    )

    useEffect(
        ()=>{
            alert("Count value changed:"+count)
        },
        [count]//runs when count changes
    )

    // create a new state count2, setCount2
    // make 3 button to change count2 value (increment, decrement, reset)
    // increment, decrement -> +2, -2, reset -> 0
    // useEffect to alert when count2 changes
    // if count > 10 alert "Count is greater than 10"
    // if count < 0 alert "Count is less than 0"

    const Counter =()=>{
        const[count2,setCount2] = useState(0);

    useEffect(()=>{
        
    })
    }



    return(
        <div>
            <div>
                Count value:{count}
                <button
                className="border"
                onClick={()=> setCount(count+1)}>
                    Increment
                </button>
                <button
                className="border"
                onClick={handlerDecreament}>
                Decrement
                </button>
            </div>
        </div>
    );
}