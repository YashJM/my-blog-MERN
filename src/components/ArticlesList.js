import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function ArticlesList({ articles }) {
    return (
        <Container maxWidth="sm" text>
            <Typography variant="h3" component="h2">
                Recent Articles
                <Box p={2}>
                </Box>
            </Typography>
            {articles.map((article, key) => (
                <Link component="p" >
                    <Typography variant="h4" component="h4"> {article.title} </Typography> <p> {article.content[0].substring(0.150)}... </p>
                    <Box p={1}></Box>
                    <Button variant="contained" color="primary">
                        <Link style={{ textDecoration: 'none', color: "white" }} key={key} to={`/article/${article.name}`}>View Article</Link>
                    </Button>
                    <Box p={2}></Box>
                </Link>
            ))
            }
        </Container>
    )
}

export default ArticlesList
