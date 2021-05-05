import React from 'react'
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

function UpvotesSection({ articleName, upvotes, setArticleInfo }) {

    const upvoteArticle = async () => {
        const result = await fetch(`https://my-blog-mern.herokuapp.com/api/articles/${articleName}/upvote`, { method: 'post' });
        const body = await result.json();

        setArticleInfo(body);
    }
    return (
        <div style={{ textAlign: "left" }} className='upvotes-section'>
            <Typography variant="overline" gutterBottom>
                Upvotes:{upvotes}
            </Typography>
            {" "}
            <Button
                variant="contained"
                color="primary"
                startIcon={<ArrowUpwardIcon />}
                onClick={upvoteArticle}
                size="sm"
            >
                Upvote
            </Button>
            {"   "}
            <Button to="/ArticlesPage" variant="contained" color="primary">
                <Link className='links' to="/ArticlesPage">Back to Articles</Link>
            </Button>
        </div>
    )
}

export default UpvotesSection
