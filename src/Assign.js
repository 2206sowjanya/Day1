function Assign(){
  const names=["Sowji","swathi"]
  return(
    <div>
      
        {names.map((names,index)=>
        <li key={index}>{names}</li>)}

        
    </div>)
}
export default Assign;