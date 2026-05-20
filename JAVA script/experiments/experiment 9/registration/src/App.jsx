import react, { useState,useEffect } from "react";
import "./App.css";
function registration(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [error,setError]=useState("");
    const [successMessage,setSuccessMessage]=useState("");

    useEffect(()=>{
        setError("");
        setSuccessMessage("");
    },[name,email,password,confirmPassword]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            setError("Passwords do not match");
            return;
        }
        // Here you can add code to send the registration data to the server
        setSuccessMessage("Registration successful!");
    }

    return(
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                </div>
                {error && <p style={{color:"red"}}>{error}</p>}
                {successMessage && <p style={{color:"green"}}>{successMessage}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default registration;  