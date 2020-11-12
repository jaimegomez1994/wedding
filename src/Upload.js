import React, { useState } from "react";
import { db } from "./services/firebase";



const Upload = () => { 
    const [id, setID] = useState('');
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [name3, setName3] = useState('');
    const [name4, setName4] = useState('');
    const [invitados, setInvitados] = useState([]);

    

    const handleID = (e) => { 
        setID(e.target.value)
    }
    const handleName1 = (e) => { 
        setName1(e.target.value)
    }
    const handleName2 = (e) => { 
        setName2(e.target.value)
    }
    const handleName3 = (e) => { 
        setName3(e.target.value)
    }
    const handleName4 = (e) => { 
        setName4(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('test');
        db.collection("invitados").doc(id).set(
            {
                invitados: [
                    {confirmar: false, dateUpdated: new Date(), name: name1 },
                    {confirmar: false, dateUpdated: new Date(), name: name2 }
                ]
            }).then((querySnapshot) => {
                console.log('querySnapshot', querySnapshot);
                setID('');
                setName1('');
                setName2('');
            });
    }

    return (
        <form className="d-flex flex-column" onSubmit={submitHandler}>
            <div>
            <label className="" htmlFor="code">
                Code
            </label>
            <input
                type="string"
                name="code"
                value={id}
                onChange={(e) => handleID(e)}
                ></input>
            </div>
            <div>
            <label className="" htmlFor="name1">
                Name 1
            </label>
            <input
                type="string"
                name="name1"
                value={name1}
                onChange={(e) => handleName1(e)}
                ></input>
            </div>
            <div>
            <label className="" htmlFor="name2">
                Name 2
            </label>
            <input
                type="string"
                name="name2"
                value={name2}
                onChange={(e) => handleName2(e)}
                ></input>
            </div>
            <div>
            <label className="" htmlFor="name3">
                Name 3
            </label>
            <input
                type="string"
                name="name3"
                value={name3}
                onChange={(e) => handleName3(e)}
                ></input>
            </div>
            <div>
            <label className="" htmlFor="name4">
                Name 4
            </label>
            <input
                type="string"
                name="name4"
                value={name4}
                onChange={(e) => handleName4(e)}
                ></input>
            </div>
            <button>submit</button>
        </form>
    );
}

export default Upload;