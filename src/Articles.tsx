import React from 'react'
import useQuery from './domains/hooks/useQuery'
import { FindArticles } from './domains/FoobaraDemo/Blog/FindArticles'
import './Articles.css'

function Articles () {
  const { result: articles, isLoading, isSuccess } = useQuery(FindArticles)

  let content

  if (isLoading) {
    content = (<p>Loading...</p>)
  } else if (isSuccess) {
    content = (<>
      {articles?.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.current_version.body}</p>
        </div>
      ))}
    </>
    )
  } else {
    content = (<p>Error loading articles</p>)
  }

  return (
    <div className="Articles">
      <div className="container">
        <h1>Articles</h1>
        <div className="placeholder">
          {content}
        </div>
      </div>
    </div>
  )
}

export default Articles
