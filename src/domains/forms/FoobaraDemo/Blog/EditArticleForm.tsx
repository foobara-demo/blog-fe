import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { EditArticle } from '../../../FoobaraDemo/Blog/EditArticle'

import type EditArticleInputs from '../../../FoobaraDemo/Blog/EditArticle/Inputs'

import type EditArticleResult from '../../../FoobaraDemo/Blog/EditArticle/Result'
import type { LoadedArticle } from '../../../FoobaraDemo/Blog/Types/Article/Loaded'
import { type Error as EditArticleError } from '../../../FoobaraDemo/Blog/EditArticle/Errors'

export default function EditArticleForm ({ article }: { article: LoadedArticle }): JSX.Element {
  const [title, setTitle] = useState<string>(article.title)
  const [body, setBody] = useState<string>(article.body)

  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    const inputs: EditArticleInputs = {
      article: article.id,
      title,
      body
    }

    const command = new EditArticle(inputs)

    try {
      setResult('Saving...')
      setError(null)
      const outcome: Outcome<EditArticleResult, EditArticleError> = await command.run()

      if (outcome.isSuccess()) {
        setResult('Article updated successfully!')
      } else {
        setError(outcome.errorMessage)
        setResult(null)
      }
    } catch (error) {
      setError(`Error executing command: ${JSON.stringify(error)}`)
      setResult(null)
    }
  })

  return (
    <div className="CommandForm">
      <div>
        <input
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          placeholder="Title"
        />

        <textarea
          value={body}
          onChange={(e) => { setBody(e.target.value) }}
          placeholder="Body"
        />

        <button onClick={run}>Save Changes</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
