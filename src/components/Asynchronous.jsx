import React, { useEffect, useState } from "react";
import axios from "axios";

const Asynchronous = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [id, setId] = useState();
    const [searchUser, setSearchUser] = useState({});

    useEffect(() => {
        fetchUser();
        console.log("useEffect ran by count : ", count);
    }, [count]);


    useEffect(() => {
        fetchUserById()
    },[id]);

    const fetchUser = async () => {
        await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((respone) => {
                setUsers(respone.data);
            })
            .catch((err) => {
                console.log("Error : ", err);
            });
    };

    const fetchUserById = async () => {
        await axios
            .get(`https://jsonplaceholder.typicode.com/users/5`)
            .then((respone) => {
                setSearchUser(respone.data);
            })
            .catch((err) => {
                console.log("Error : ", err);
            });
    };

    return (
        <div>
            <p>Search User</p>
            <p>{searchUser}</p>
            <input
                type="text"
                className="border p-2 outline-none"
                placeholder="input user id"
                onChange={(e) => setId(e.target.value)}
            />
            <button className="border p-2 mx-2">search</button>

            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}

            <p>{count}</p>

            <button onClick={() => setCount(count + 1)}>count</button>
        </div>
    );
};

export default Asynchronous;
