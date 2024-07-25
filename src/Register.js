import { useState } from "react";

import './Register.css';

function Register() {
  const [collegeIdValue, setCollegeIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [branchValue, setBranchValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [GenderValue, setgenderValue] = useState("");
  const [user,setuser]=useState("");

  const CollegeIdChangevalue = (event) => {
    setCollegeIdValue(event.target.value);
    console.log(event.target.value);
  };

  const PasswordChange = (event) => {
    setPasswordValue(event.target.value);
    console.log(event.target.value);
  };

  const EmailChange = (event) => {
    setEmailValue(event.target.value);
    console.log(event.target.value);
  };

  const BranchChange = (event) => {
    setBranchValue(event.target.value);
    console.log(event.target.value);
  };

  const YearChange = (event) => {
    setYearValue(event.target.value);
    console.log(event.target.value);
  };
  const GenderChange = (event) => {
    setgenderValue(event.target.value);
    console.log(event.target.value);
  };


  const Submit = (event) => {
    event.preventDefault();
    const obj={
      collegeIdValue,passwordValue,emailValue,branchValue,GenderValue
    }
    setuser(obj);
    console.log(user);
    console.log(obj);
    
    console.log("Form submitted:", {
      collegeIdValue,
      passwordValue,
      emailValue,
      branchValue,
      yearValue,
      GenderValue
      
    });
  };
     

  return (
    <div className="card-container">
      <div className="card" style={{ width: '500px', padding: '20px' }}>
        <form onSubmit={Submit}>
          <div className="text">
            <h1>Register</h1>
            <p>Provide your details to login</p>
          </div>
          College ID<br />
          <input type="text" placeholder="College ID" onChange={CollegeIdChangevalue} /><br />
          Password<br />
          <input type="password" placeholder="Password" onChange={PasswordChange} /><br />
          Email address<br />
          <input type="email" placeholder="Email address" onChange={EmailChange} /><br />
          Branch<br />
          <select onChange={BranchChange}>
          <option value="IT">select</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="AI">AI</option>
          </select><br />
          Year<br />
          <select onChange={YearChange}>
          <option value="select">select</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
          </select><br />
          <div style={{display:'flex'}}>
          <h4>Gender</h4><br />
          <input type="radio" value="Female" onChange={GenderChange}/>Female
          <input type="radio"  value="male" onChange={GenderChange}/>Male
          </div>
          
          
          <br />
          <button type="submit">Register</button>
        </form>
        
      </div>
    </div>
  );
}

export default Register;
