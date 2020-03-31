import React from 'react'
import { DivContainer, FormLogin, DivRow, Input, ButtonBtn } from './StyledComponents'
import { connect } from 'react-redux'
import { login } from '../actions/users'
import _api from '../utils/api/config'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        loggedIn: false
    } 
    componentDidMount = () => {
        if(this.props.users && this.props.users.token){
          _api.defaults.headers.common = {'Authorization': `Bearer ${this.props.users.token}`}
          this.props.history.push('/products')
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.dispatch(login(this.state.email, this.state.password))
        .then(() => {
            this.props.history.push('/products')
        })
        .catch((error)=> console.log("ERROR: ", error))
    }

    render() {    
        return (
        <div>
            <DivContainer>
                <FormLogin onSubmit={this.handleSubmit}>
                    <DivRow>
                        <h1>Login</h1>
                    </DivRow>
                    <DivRow>
                        <label>Email</label>
                        <Input 
                            type="text" 
                            id="email"
                            name="email"
                            autoComplete="off"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </DivRow>
                    <DivRow>
                        <label>Password</label>
                        <Input 
                            type="password" 
                            id="password"
                            name="password"
                            autoComplete="off"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </DivRow>
                    <DivRow>
                        <ButtonBtn type="submit">
                            Login
                        </ButtonBtn>
                    </DivRow>
                </FormLogin>
            </DivContainer>
        </div>
      )
    }
}

function mapStateToProps ({users}){
    return {
      users
    }
}

export default connect(mapStateToProps)(Login)