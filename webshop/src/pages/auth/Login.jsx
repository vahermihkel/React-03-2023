import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../store/AuthContext'
import { useNavigate } from 'react-router-dom';

function Login() {
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwP6JvKLgJQ0cg4wXziYYSgeTbWhGjBb4";
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");

  const login = () => {
    const data = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
      "returnSecureToken": true
    };
    fetch(url, {"method": "POST", "body": JSON.stringify(data)})
      .then(res => res.json())
      .then(json => {

        if (json.error === undefined) {
          setLoggedIn(true);
          navigate("/admin");
          sessionStorage.setItem("token", json.idToken)
        } else {
          setMessage(json.error.message);
        }


      });
  }

  return (
    <div>
      <div>{message}</div>
      <label>E-mail</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label> <br />
      <input ref={passwordRef} type="text" /> <br />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login