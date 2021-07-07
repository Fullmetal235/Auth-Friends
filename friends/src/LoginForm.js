import React, {useState} from 'react'
import axios from 'axios'

const LoginForm = () => {

    const[user, setUser]= useState({username: '', password: ''})

    const handleSubmit = e => {
        e.preventDefault();
        axios
          .post('http://localhost:5000/api/login', this.state.credentials)
          .then(res => {
            localStorage.setItem('token', res.data.payload);
          })
          .catch(err => console.log(err.response));
      };

    const handleChange = event => {
        setUser({
            ...user, 
            [event.target.name]: event.target.value
        })
    }


    return(
        <form onsubmit={handleSubmit}>
            <label>UserName</label>
            <input
            type = 'text'
            name= 'username'
            value = {user.username}
            onChnage={handleChange}
            />
            <label>Password</label>
            <input
            type = 'password'
            name = 'password'
            value = {user.password}
            onChange = {handleChange}
            />
            <button>Let's Rock!!</button>
        </form>
    )
}