import React, { useContext, useState, useEffect } from "react";
import { store } from "../../App";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Profile = () => {
    const navigate = useNavigate();
    const [token, setToken] = useContext(store);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!token) {
            navigate('/login', { replace: true });
        } else {
            axios.get('http://localhost:5000/myprofile', {
                headers: {
                    'x-token': token
                }
            }).then(res => setData(res.data)).catch((err) => console.log(err));
        }
    }, [token, navigate]);

    const handleLogout = () => {
        setToken(null);
    };

    return (
        <div>
            {data ?
                <center>
                    Welcome user {data.username}<br/>
                    <button onClick={handleLogout}>LogOut</button>
                </center> :
                <h1>Error</h1>
            }
        </div>
    );
};

export default Profile;
