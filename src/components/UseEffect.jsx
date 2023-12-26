import axios from "axios";
import { useEffect, useState } from "react";

const UseEffect = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((respone) => {
                setComments(respone.data);
            })
            // console.log('use effect ran');
    }, []);

    return (
        <div>
            {comments.map((item, index) => {
                return (
                    <div key={index} className="border rounded-md p-3 my-3">
                        <p>Id: {item.postId}</p>
                        <p>Author: {item.name}</p>
                        <p>Comment: {item.body}</p>
                        <p>Email: {item.email}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default UseEffect;
