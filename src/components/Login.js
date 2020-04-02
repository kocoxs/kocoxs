import React from 'react'
import { DivContainer, CenterBlock, DivRow, Input, ButtonBtn, Title, Label } from './StyledComponents'
import { connect } from 'react-redux'
import { login } from '../actions/users'


class Login extends React.Component {
    state = {
        email: '',
        password: '',
        loggedIn: false
    } 
    componentDidMount = () => { }

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
            <DivContainer>
                <form onSubmit={this.handleSubmit}>
                    <CenterBlock>
                        <DivRow>
                            <Title>Login</Title>
                        </DivRow>
                        <DivRow>
                            <Label>Email</Label>
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
                            <Label>Password</Label>
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
      )
    }
}

function mapStateToProps ({users}){
    return {
      users
    }
}

export default connect(mapStateToProps)(Login)