import React from 'react'
import { useParams } from 'react-router'
import useQuery from './domains/hooks/useQuery'
import { FindArticle } from './domains/FoobaraDemo/Blog/FindArticle'
import './EditArticle.css'
import EditArticleForm from './domains/forms/FoobaraDemo/Blog/EditArticleForm'

function EditArticle () {
  const { id } = useParams()
  const articleId = Number(id)

  const { result: article, isLoading, isSuccess } = useQuery(
    FindArticle,
    isNaN(articleId) ? undefined : { article: articleId }
  )

  if (isNaN(articleId)) {
    return (
      <div className="EditArticle">
        <div className="container">
          <p>Invalid article ID.</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="EditArticle">
        <div className="container">
          <h1>Edit Article #{articleId}</h1>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!isSuccess || article == null) {
    return (
      <div className="EditArticle">
        <div className="container">
          <h1>Edit Article #{articleId}</h1>
          <p>Error loading article.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="EditArticle">
      <div className="container">
        <h1>Edit Article #{articleId}</h1>
        <div className="form-container">
          <EditArticleForm article={article} />
        </div>
      </div>
    </div>
  )
}

export default EditArticle
