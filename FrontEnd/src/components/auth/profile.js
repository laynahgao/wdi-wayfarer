import React from 'react';
import axios from 'axios';
import './profile.css'

class Profile extends React.Component {

    state = {
        user: ""
    }

    componentDidMount = () => {  
        let email = localStorage.getItem('user') 
        console.log('user', JSON.stringify(email));
        axios.get('http://localhost:3090/api/get/user/'+ email)
        .then(response => {
            console.log(response.data);
            this.setState({user: response.data})
        })
    }

    handleCity = (event) => {
        let user = this.state.user;
        user.city = event.target.value
        this.setState({user: user})
    }

    handlePassword = (event) => {
        let user = this.state.user;
        user.password = event.target.value
        this.setState({user: user})
    }
    handleName = (event) => {
        let user = this.state.user;
        user.name = event.target.value
        this.setState({user: user})
    }


    editUser = (event) => {
        event.preventDefault();
        let pwd = this.refs.password.value;
        let location = this.refs.city.value;
        let contact = this.state.user.email;
        let un = this.refs.name.value;

        axios.put('http://localhost:3090/api/put/user', {
            email: contact,
            password: pwd,
            city: location,
            name: un
        })
        .then(response => {
            console.log('edituser response', response.data);
            this.setState({user: response.data})
    })

        return   
    };

    render(){
        console.log('in render')
        return(
            <div id="profileModal" >
                <div className="modalContent">
                    {/* <div id="userProfile">
                    </div> */}
                    <form id="editUserForm" onSubmit={this.editUser}>
                    <div className="heading"><h2>Required</h2></div>
                    <hr/>
                    Email:
                    <p>{this.state.user.email}</p>
                    User Name:
                    <input value={this.state.user.name} onChange={this.handleName} type="text" ref="name" placeholder="name" pattern=".{1,}"   required title="1 characters minimum"/>                    
                    Password:
                    <input value={this.state.user.password} onChange={this.handlePassword} type="text" ref="password" placeholder="Password" pattern=".{1,}"   required title="1 characters minimum"/>
                    City:                   
                    <input value={this.state.user.city} onChange={this.handleCity} type="text" ref="city" placeholder="location" pattern=".{1,}"   required title="1 characters minimum"/>                    
                    Join Date:
                    <p>{this.state.user.date}</p>
                    <button type="submit" name="submit" id="editSubmit">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile