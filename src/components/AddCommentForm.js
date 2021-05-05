import React, { useState } from 'react'

function AddCommentForm({ setArticleInfo, articleName }) {
    const [username, setusername] = useState("");
    const [commentText, setCommentText] = useState("");

    const addCommnet = async () => {

        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await result.json();
        setArticleInfo(body);

        setusername("");
        setCommentText("");
    }

    return (
        <div className='add-comment'>
            <label>
                Name:<input type='text' value={username} onChange={(e) => setusername(e.target.value)}></input>
            </label>
            <label>
                Comment:<textarea value={commentText} onChange={(e) => setCommentText(e.target.value)}></textarea>
            </label>
            <button onClick={addCommnet}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm
