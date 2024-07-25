import { useState } from "react";

function Ten(){
    const [review,setReview]=useState('');
    const [reviewToDisplay,setDisplay]=useState('');
    const addReview=()=>{
        console.log("Add review")
        setDisplay(review);
        reviewToDisplay(review)
    }

    const inputValueChange=(event)=>{
        console.log(event.target.value);
        setReview(event.target.value)
    }
    const addreview=()=>{
        console.log("adding review.......")
        setDisplay(review)
        
    }
return(
  <div>
    <input type="text" placeholder="enter a reviwe" onChange={inputValueChange}></input>
    <button className="btn btn-light btn-sm" onClick={addreview}>Add review</button>
    <p>{review}</p>
    
  </div>
  
)}
export default Ten;