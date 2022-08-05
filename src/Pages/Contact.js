import React, { useState } from "react";
import Links from "../Components/Links";
import '../static/contact.css';
import emailjs from '@emailjs/browser';
import EmailPush from "../Components/emailpush";
const Contact=()=>{
    const [emailDetails,setEmailDetails]=useState({to_name:"surjeetrajput433@gmail.com",from_name:"",message:"",subject:""});
    const [emailState,setEmailState]=useState({type:"error",message:"Email Receieved Successfully",state:false});
    function handleSubmit(e){
    e.preventDefault();
//    console.log(emailDetails,e);
    //const [{to_name:to_name,from_name:from_name,message:message},subject]=emailDetails;
      emailjs.send(SERVICE_ID,TEMPLATE_ID,emailDetails,PUBLIC_KEY)
        .then(async(response)=>{
        setEmailState({type:"success",message:"Email Receieved Successfully",state:true});
        setEmailDetails({to_name:"surjeetrajput433@gmail.com",from_name:"",message:"",subject:""});       
        }).catch((error)=>{
        //    console.log(error);
        setEmailState({type:"error",message:"There was some error while sending mail",state:true});
        })

    }
    return (
        <>
{emailState.state&&<EmailPush obj={emailState} setEmailState={setEmailState} />}
<div className="contact-container">
<h1>Send Email</h1>
<form onSubmit={handleSubmit}>
    <div className="form-control">
    <input type="email" onChange={(e)=>{setEmailDetails({...emailDetails,from_name:e.target.value})}} required/>
    <label>{"Your Email".split("").map((l,i)=>(<span  style={{transitionDelay:(i*50+"ms")}}>{l}</span>))
    }</label>    
    </div>
    <div className="form-control">
    <input type="text" onChange={(e)=>{setEmailDetails({...emailDetails,subject:e.target.value})}} required/>
    <label>{"Subject".split("").map((l,i)=>(<span style={{transitionDelay:(i*50+"ms")}}>{l}</span>))
    }</label>    
    </div>
    <div className="form-control">
    <input type="text" onChange={(e)=>{setEmailDetails({...emailDetails,message:e.target.value})}} required/>
    <label>{"Message".split("").map((l,i)=>(<span style={{transitionDelay:(i*50+"ms")}}>{l}</span>))
    }</label>    
    </div>
    <button className="btn">Submit</button>
</form>
</div>
<Links props={[["https://github.com/surjeetlodhirajput","g"],["https://linkedin.com/in/surjeetlodhirajput","l"],["https://www.instagram.com/lordsurjeetlodhi/","i"],["https://www.youtube.com/channel/UCfNpSjjtMjGxtaeX36xzzsw","y"]]} />

</>
    );
}
const SERVICE_ID='';
const TEMPLATE_ID='';
const PUBLIC_KEY='';
export default Contact;