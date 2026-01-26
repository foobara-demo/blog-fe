import React from 'react'
import './CreateArticle.css'
import StartNewArticleForm from './domains/forms/FoobaraDemo/Blog/StartNewArticleForm'

function CreateArticle () {
  return (
    <div className="CreateArticle">
      <div className="container">
        <h1>Create New Article</h1>
        <div className="form-container">
          <StartNewArticleForm />
        </div>
      </div>
    </div>
  )
}

export default CreateArticle
