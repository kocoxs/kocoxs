import React from 'react'
import { DivContainer, CenterBlock, DivRow, Input, ButtonBtn } from './StyledComponents'
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
            if(this.props.users.user.Rol.id == 1)
                this.props.history.push('/admin')
            if(this.props.users.user.Rol.id == 2) 
                this.props.history.push('/makeorder')
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
            
        })
        .catch((error)=> console.log("ERROR: ", error))
    }

    render() {    
        if(this.props.users && this.props.users.user && this.props.users.user.Rol.id == 1)
            this.props.history.push('/admin')
        if(this.props.users && this.props.users.user && this.props.users.user.Rol.id == 2) 
            this.props.history.push('/products')

        return (
        <div>
            <DivContainer>
                <form onSubmit={this.handleSubmit}>
                    <CenterBlock>
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
                    </CenterBlock>
                </form>
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