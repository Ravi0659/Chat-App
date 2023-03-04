import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./Sign.css";
import {Card} from 'react-bootstrap';
 import firebase from '../../Services/firebase';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LoginString from "../Login/LoginStrings";

export default class Signup extends Component{
    constructor(){
        super();
        this.state = {
            email:" ",
            password:" ",
            name:" ",
            error:null
        }
        this.handlechange = this.handlechange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handlechange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async handleSubmit(event){
        const {name,password,email}=this.state;
        event.preventDefault();
        try{
          firebase.auth().createUserWithAndPassword(email,password)
          .then(async result => {
            firebase.firebase().collection('users')
            .add({
                name,
                id: result.user.uid,
                email,
                password,
                URL: '',
                description: '',
                message:[{Notification:"",number:0}]
            }).then((docRef)=>{
            localStorage.setItem(LoginString.ID, result.user.uid);
            localStorage.setItem(LoginString.Name, name);
            localStorage.setItem(LoginString.Email, email);
            localStorage.setItem(LoginString.Password, password);
            localStorage.setItem(LoginString.PhotoURL, "");
            localStorage.setItem(LoginString.UPLOAD_CHANGED, 'state_changed');
            localStorage.setItem(LoginString.Description, "");
            localStorage.setItem(LoginString.FirebaseDocumentId, docRef.id );

            this.setState({
             name:'',
             password:'',
             url:'',
            });

            this.props.history.push("/chat")
            })
            .catch((error) =>{
                console.error("Error adding document", error)
            })
          })
        }
        catch(error){
            document.getElementById('1').innerHTML = "Error in siging up please try again"

        }
    }
    render(){
        const Signinsee = {
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            backgroundColor:"#1ebea",
            width:'100%',
            boxShadow: "0 5px 5px #808888",
            height: "10rem",
            paddingTop:"48px",
            opacity:"0.5",
            borderBottom:"5px xolid greeen",
        }
        return(
            <div>
                <CssBaseline/>
                <Card style={Signinsee}>
                    <div>
                        <Typography Component="h1" varient="h5">
                            Sign Up 
                            To
                        </Typography>
                    </div>
                    <div>
                        <Link to="/">
                            <button class="btn"><i class="fa fa-home"> </i>WebChat</button>
                        </Link>
                    </div>
                </Card>

                <Card className="formacontrooutside">
                    <form className="customform" noValidate onSubmit={this.handleSubmit}>

                        <TextField 
                        varient="outlined"
                        margin="normal"
                        required
                        fullwidth
                        id="email"
                        label="Email Address-example:abc@gmail.com"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={this.handlechange}
                        value={this.state.email}
                        />
                        <div>
                            <p style={{color:'grey',fontsize:'15px',marginLeft:'0'}}> password shoulde be greater than 6 digit</p>
                        </div>

                        <TextField 
                        varient="outlined"
                        margin="normal"
                        required
                        fullwidth
                        id="password"
                        label="password"
                        name="password"
                        typr="password"
                        autoComplete="current-password"
                        autoFocus
                        onChange={this.handlechange}
                        value={this.state.password}
                        />

                            <TextField 
                        varient="outlined"
                        margin="normal"
                        required
                        fullwidth
                        id="name"
                        label="Your Name"
                        name="name"
                        typr="name"
                        autoComplete="name"
                        autoFocus
                        onChange={this.handlechange}
                        value={this.state.name}
                        />

<div>
                            <p style={{color:'grey',fontsize:'15px'}}> Please fill all field</p>
                        </div>

                        <div className="CenterAliningItems">
                     <button class="button1" type="submit">
                        <span>Sign Up</span>
                     </button>
                        </div>
                    <div>
                        <p style={{color:'grey'}}>Already have an account</p>
                        <Link to="/login">
                            Login In
                        </Link>
                    </div>
                    </form>
                      
                </Card>
            </div>
        )
    }
}