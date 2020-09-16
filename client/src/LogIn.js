import React, { Component, useState } from "react";
import axios from "axios";

export default class LogIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password} = this.state;
        axios.post(
                "http://localhost:4000/user/login",
                {
                    email: email,
                    password: password
                }
                //{withCredentials: true}
            )
            .then(response =>{
                if(response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(err => {
                console.log("login error", err);
            });
        event.preventDefault();
    }

    render(){
        return(

           <form className="form-main" onSubmit={this.handleSubmit}>
                <h1>Log In</h1>
                <div className="form-ip">
                    <div className="form-group">
                        <label className="form-label">User name</label>
                        <input type="email" className="form-control" placeholder="Enter name" onChange={event=> this.setState({email: event.target.value})} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={event=> this.setState({password: event.target.value})} /> 
                    </div>
                 
                    <button type="submit" className="button">Log In</button>
                    <p className="forgot-password text-right">
                        <a href="#">Forgot password?</a>
                    </p>
                </div>

            </form>
        )
    }
}