import { useRef } from "react";
function Eleven() {
  const firstref=useRef(null)
  const btnclick = (event)=>{
    event.preventDefault();
    console.log("Form submitted");
    
    console.log(firstref.current.value);
    firstref.current.value=" ";//clear the value
  }
return(
        <div>
           <form onSubmit={btnclick}>
          <input type="text" ref={firstref}/>
          <button type="submit">Submit</button>
          </form>
        </div>
    )
}
export default Eleven;