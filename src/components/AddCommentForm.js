import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            <TextField id="outlined-basic" label="Name" variant="outlined" value={username} onChange={(e) => setusername(e.target.value)} />
            <br></br>
            <Box p={1}></Box>
            <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={4}
                variant="outlined"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
            />
            <br></br>
            <Box p={1}></Box>
            <Button variant="contained" color="primary" onClick={addCommnet}>Add Comment</Button>
        </div>
    )
}

export default AddCommentForm
