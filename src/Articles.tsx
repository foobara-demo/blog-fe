import React from 'react'
import useQuery from './domains/hooks/useQuery'
import { FindArticles } from './domains/FoobaraDemo/Blog/FindArticles'
import './Articles.css'

function Articles () {
  const { result: articles, isLoading, isSuccess } = useQuery(FindArticles)

  const formatDate = (date: Date | null | undefined) => {
    if (date == null) return '—'
    return new Date(date).toLocaleDateString()
  }

  let content

  if (isLoading) {
    content = (<p>Loading...</p>)
  } else if (isSuccess) {
    content = (
      <table className="articles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
            <th>Published At</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {articles?.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title}</td>
              <td>{article.author.full_name}</td>
              <td>{article.is_published ? 'Yes' : 'No'}</td>
              <td>{formatDate(article.published_at)}</td>
              <td>{formatDate(article.last_edited_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  } else {
    content = (<p>Error loading articles</p>)
  }

  return (
    <div className="Articles">
      <div className="container">
        <h1>Articles</h1>
        {content}
      </div>
    </div>
  )
}

export default Articles
