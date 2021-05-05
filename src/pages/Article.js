import React, { useState, useEffect } from 'react'
import articleSource from './Article-content';
import ArticlesList from '../components/ArticlesList'
import CommentsList from "../components/CommentsList";
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from "../components/AddCommentForm";

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Article({ match }) {

    const name = match.params.name; //passed from the route
    const article = articleSource.find(article => article.name === name)
    const otherArticles = articleSource.filter(article => article.name !== name)
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`)
            const body = await result.json();

            setArticleInfo(body);
        }

        fetchData();
    }, [name]);

    return (
        !article ? <div>Article does not exist</div> :
            <Container maxWidth="lg" text>
                <Typography variant="h3" component="h3">
                    {article.title}
                </Typography>
                <Box p={2}></Box>
                {article.content.map((paragraph, key) => (
                    <Typography variant="body1" key={key}>{paragraph}</Typography>
                ))}
                <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
                <Box p={2}></Box>
                <Box p={2}></Box>

                <div style={{ textAlign: "left" }}>
                    <Typography variant="h4" component="h4">
                        Recent Commnets:
                </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
                        </Grid>
                        <Grid item xs={8}>
                        <CommentsList comments={articleInfo.comments} />
                        </Grid>
                    </Grid>
                </div>
                {/* <ArticlesList articles={otherArticles} /> */}
            </Container>
    )

}

export default Article
