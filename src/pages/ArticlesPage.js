import React from 'react'
import articleSource from './Article-content'
import ArticlesList from '../components/ArticlesList'

function ArticlesPage() {
    return ( 
    <div>
        <ArticlesList articles = {articleSource}/>
    </div>
    )
}

export default ArticlesPage