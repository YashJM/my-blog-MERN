import React, { useState, useEffect } from 'react'
import articleSource from './Article-content';
import ArticlesList from '../components/ArticlesList'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import CommentsList from "../components/CommentsList";
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from "../components/AddCommentForm";
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

    console.log(articleInfo)
    return (
        !article ? <div>Article does not exist</div> :
            <div>
                <h1> {article.title}</h1>
                {article.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
                <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
                <h3>Commnets:</h3>
                <CommentsList comments={articleInfo.comments} />
                <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
                <h3>Other Articles:</h3>
                <ArticlesList articles={otherArticles} />

            </div>
    )

}

export default Article
