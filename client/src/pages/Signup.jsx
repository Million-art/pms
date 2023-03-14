import styled from "styled-components"
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios"
 
const Container=styled.div`

display: flex;
flex-direction: column;
margin-top:100px;
align-items: center;
justify-content: center;
form{
  border: 1px solid black;
  padding: 20px;
  h4{
      text-align: center;
      margin:10px 5px;
  }
  input{
      margin: 5px 0px;
      width: 300px;
      height: 40px;
  }
  button{
    margin: 15px 0px;
    width: 100%;
    height: 40px;
    background-color: #0077b6;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #023e8a;
    }
  }
`

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !userName || !email || !password || !c_password || !phoneNumber) {
      setError("All fields are required");
      return;
    }

    if (password !== c_password) {
      setError("Passwords don't match");
      return;
    }

    // Check if phone number is valid
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Invalid phone number");
      return;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    // Send user data to register the user
    axios.post("url", { firstName, lastName, userName, email, password }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        window.location.href = "/login";
      }
    });
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <h4>Create Account</h4>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <label>
            <p>First Name</p>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>
          <label>
            <p>Last Name</p>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>
          <label>
            <p>Username</p>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Email</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            <p>Mobile</p>
            <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <label>
            <p>Confirm password</p>
            <input type="password" value={c_password} onChange={(e) => setC_Password(e.target.value)} />
          </label>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </Container>
      <Footer />
    </>
  );
}