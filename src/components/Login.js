import React from 'react'
import { connect } from 'react-redux'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { login } from '../actions/users'

import * as SC from './StyledComponents'


class Login extends React.Component {
    state = {
        email: '',
        password: ''
    } 
    componentDidMount = () => { }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let that = this
        this.props.dispatch(login(this.state.email, this.state.password))
        // .then((user) => {
        // }) 
        // .catch((error)=> {
        //     ToastsStore.error(error.message)
        //     this.setState({
        //         email: '',
        //         password: ''
        //     })
        // })
    }

    render() {   
        return (
            <SC.DivContainer>
                <form onSubmit={this.handleSubmit}>
                    <SC.CenterBlock>
                        <SC.DivRow>
                            <SC.Title>Login</SC.Title>
                        </SC.DivRow>
                        <SC.DivRow>
                            <SC.Label>Email</SC.Label>
                            <SC.Input 
                                type="text" 
                                id="email"
                                name="email"
                                autoComplete="off"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </SC.DivRow>
                        <SC.DivRow>
                            <SC.Label>Password</SC.Label>
                            <SC.Input 
                                type="password" 
                                id="password"
                                name="password"
                                autoComplete="off"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </SC.DivRow>
                        <SC.DivRow>
                            <SC.ButtonBtn type="submit">
                                Login
                            </SC.ButtonBtn>
                        </SC.DivRow>
                    </SC.CenterBlock>
                </form>
                <ToastsContainer store={ToastsStore}/>
            </SC.DivContainer>
      )
    }
}

function mapStateToProps ({users}){
    return {
      users
    }
}

export default connect(mapStateToProps)(Login)