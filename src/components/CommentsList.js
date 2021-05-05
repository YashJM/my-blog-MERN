import React from 'react'

function CommentsList({ comments }) {



    return (
        <div>
            {comments.map((comment, key) => {
                return (<div className="commnet" key={key}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>)
            })}
        </div >
    )
}

export default CommentsList
