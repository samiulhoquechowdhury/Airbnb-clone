import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function registerUser(ev) {
    ev.preventDefault();
    axios.post('/register', {
      name,
      email,
      Password,
    })
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@gmail.com"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={Password}
            onChange={ev => setPassword(ev.target.value)}
          />
          <button className="primary mt-1">Register</button>
          <div className="text-center p-2 text-gray-500">
            Already have an acoount?
            <Link className="text-black underline" to={"/login"}>
              Login Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
