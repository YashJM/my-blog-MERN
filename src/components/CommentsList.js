import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CommentsList({ comments }) {

    return (
        <div>
            {comments.map((comment, key) => {
                return (<>
                    <div style={{border: "0.5px solid gray", padding:"5px"}} className="commnet" key={key}>
                        <Typography variant="h5" component="h5">
                            {comment.username}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {comment.text}
                        </Typography>
                        <Box p={2}></Box>
                    </div>
                    <Box p={1}></Box></>)
            })}
        </div   >
    )
}

export default CommentsList
