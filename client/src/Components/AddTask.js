import { useState } from "react"

import { addTask } from "../Slices/Taskslice";
import { useDispatch } from "react-redux";

export const AddTask = () => {
const [input,setInput] = useState("");
const dispatch = useDispatch();
function handleAdd(){
    if(input){
        dispatch(addTask(input));
        setInput("");
    }
}

    return (
    
       <div>
        <h1>Add your tasks here!.....</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button type="submit" onClick={handleAdd}>Add</button>
       </div>
       
    );
    
}