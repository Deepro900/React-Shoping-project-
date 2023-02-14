import React, { useState } from 'react';
function LessonFour() {
    const [user, setUser] = useState({

    })
}

const handleInput = (event) => {
    console.log(event.target.name);
    setUser((current) => {
        return { ...current }
    })
}

const Just = () => {
    const [post, setPost] = useState();
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPost.(data));
    return (
        <div>
            <div className='title'>
                <h1 className='title-1'>{post.title}</h1>

            </div>
        </div>
    );
};

export default Just;