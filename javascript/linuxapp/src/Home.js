import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Import useNavigate
    const[status,setStatus] =useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const add = () => {
        dispatch({
            type: "add"
        });
    };

    const sub = () => {
        dispatch({
            type: "sub"
        });
    };

    const storeMyDetails = () => {
        dispatch({
            type: "saveDetails",
            data: { name, email }
        });
        navigate("/about"); // Ensure navigation happens
    };
    

    return (
        <div>
            {(status)?<p className="red">This is Paragraph</p>:null}
            <h1>This is home Page {counterVal}</h1>
            <input type="button" value="Add" onClick={add} />
            <input type="button" value="Sub" onClick={sub} />
            
            {/* Input fields for name and email */}
            <div>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <input type="button" value="Store My Details" onClick={storeMyDetails} />
        </div>
    );
}

export default Home;
