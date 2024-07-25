import { useEffect, useRef, useState } from "react";
import './Login.css'; 

function Login() {
  const [message, setMessage] = useState("");
  const CollegeidRef = useRef(null);
  const PasswordidRef = useRef(null);

  useEffect(() => {
    CollegeidRef.current.focus();
  }, []);

  const btnclick = (event) => {
    event.preventDefault();
    if (CollegeidRef.current.value === PasswordidRef.current.value) {
      setMessage("Success");
    } else {
      setMessage("Invalid");
    }
    CollegeidRef.current.value = "";
    PasswordidRef.current.value = "";
  };

  return (
    <div className="card-container">
      <div className="card" style={{ width: '500px', padding: '20px' }}>
        <header className="login">
          <form onSubmit={btnclick}>
            <div className="text">
              <h1>Login</h1>
              <p>Provide your details to login</p>
            </div>
            <div>
              College ID<br />
              <input type="text" placeholder="College ID" ref={CollegeidRef} /><br />
            </div>
            <div>
              Password<br />
              <input type="password" placeholder="Password" ref={PasswordidRef} /><br />
            </div>
            <button type="submit">Login</button>
          </form>
          <h1>{message}</h1>
        </header>
      </div>
    </div>
  );
}

export default Login;
