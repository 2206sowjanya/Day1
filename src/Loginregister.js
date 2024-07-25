import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function Loginregister() {
    const [isLogin, setIsLogin] = useState(true);
    const showLogin = () => { setIsLogin(true); };
    const showRegister = () => { setIsLogin(false); };

    return (
        <div>
            <button onClick={showLogin}>Login</button>
            <button onClick={showRegister}>Register</button>
            {isLogin ?
                <div><Login/></div>
                :
                <div><Register/></div>
            }
        </div>
    );
}

export default Loginregister;
