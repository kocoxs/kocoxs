import React from 'react'
import { useHistory } from "react-router-dom";
import userApi from '../utils/api/users.js'

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        loggedIn: false
    }
    
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const resp = await userApi({ ...this.state })
        
        if(resp.error)
            return console.log(resp.error)
        
        this.props.history.push('/products')
    }

    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Email</label>
                    <input 
                        type="text" 
                        id="email"
                        name="email"
                        autoComplete="off"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        autoComplete="off"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
      )
    }
  }