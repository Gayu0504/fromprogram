import { createRef } from "react";

function UnControlledfunction(){

let nameRef=createRef();
let emailRef=createRef();
function submit(e){
    e.preventDefault();
    alert(nameRef.current.value);
    alert(emailRef.current.value);
}

return(
    <div>
        <h2>UnControlled function component</h2>
        <form onSubmit={submit}>
            <input type="text" name="name" ref={nameRef} defaultValue="gayu"/>
            <input type="email" name="email" ref={emailRef} defaultValue="gayu@gmail.com"/>
            <input type="submit" value="Submit"/>

        </form>
    </div>
)
}
export default UnControlledfunction;