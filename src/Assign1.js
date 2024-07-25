import React from 'react';

function Assign1(props) {
    
    return (
        <div className='card-body' style={{width:'200px'}}>
            <img 
                src="download.jpeg" 
                
                style={{ border: '10px solid #FF0000', borderRadius: '20px' }} 
                alt=""
            />
       
            <h1>{props.program}</h1>
            <h1>{props.col}</h1>
            <h1>{props.user.name}</h1> 
            <h1>{props.user.college}</h1>
            <h1>{props.user.year}</h1>
            
             
           
            <button type="button" class="btn btn-primary">Primary</button></div>
        
    );
}

export default Assign1;
