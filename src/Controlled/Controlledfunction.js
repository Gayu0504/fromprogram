import { useState } from "react";

function Controlledfunction(){



let[name,setName]= useState("gayatri");
let[email,setEmail]= useState("gayatri@gmail.com");


function handleName(e){
    e.preventDefault();
    setName(e.target.value);
}

    function handleEmail(e){
        e.preventDefault();
        setEmail(e.target.value);
    }


function submit(e){
    e.preventDefault();
    alert(name);
    alert(email);
}




    return(
        <div>
            <h2>Controlled function Component</h2>
            <form onSubmit={submit}>
                <input type="text" value={name} onChange={handleName}/>
                <input type="email" value={email} onChange={handleEmail}/>
                <br/>
                <input type="submit" value="Submit"/>
                
                <h3>{name}</h3>
               
            </form>
        </div>
    )
}
export default Controlledfunction;