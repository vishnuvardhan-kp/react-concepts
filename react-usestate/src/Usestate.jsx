import React, {useState} from 'react'

function Usestate() {
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed,setIsEmployed] = useState(false);

    const updateName = (name) => {
        setName(name);
    };
    
    const updateAge = () => {
        setAge(age+1);
    };

    const updateIsEmployed = () => {
        setIsEmployed(!isEmployed);
    };

  return (
    <>
        <h2>Name:{name}</h2>
        <button onClick={() => {updateName("Vichu")}}>Setname</button>
        <h2>Age:{age}</h2>
        <button onClick={updateAge}>Increment Age</button>
        <h2>Employment:{isEmployed ? "Yes" : "No"}</h2>
        <button onClick={updateIsEmployed}>Toggle</button>
    </>
  );
}

export default Usestate;