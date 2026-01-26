import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { EditArticle } from '../../../FoobaraDemo/Blog/EditArticle'

import type EditArticleInputs from '../../../FoobaraDemo/Blog/EditArticle/Inputs'

import type EditArticleResult from '../../../FoobaraDemo/Blog/EditArticle/Result'
import { type Error as EditArticleError } from '../../../FoobaraDemo/Blog/EditArticle/Errors'

export default function EditArticleForm (): JSX.Element {
  const [article, setArticle] = useState<number | undefined>(undefined)

  const [title, setTitle] = useState<string | null | undefined>(undefined)

  const [body, setBody] = useState<string | null | undefined>(undefined)

  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    if (article == null) {
      // TODO: perform some kind of validation error
      return
    }

    if (title == null) {
      // TODO: perform some kind of validation error
      return
    }

    if (body == null) {
      // TODO: perform some kind of validation error
      return
    }

    const inputs: EditArticleInputs = {
      article,
      title,
      body
    }

    const command = new EditArticle(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<EditArticleResult, EditArticleError> = await command.run()

      if (outcome.isSuccess()) {
        const result: EditArticleResult = outcome.result
        setResult(typeof result === 'string' ? result : JSON.stringify(result))
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

          value={article ?? ''}
          onChange={(e) => { setArticle(parseInt(e.target.value)) }}
          placeholder="article"
                  />

        <input

          value={title ?? ''}
          onChange={(e) => { setTitle(e.target.value as string | null) }}
          placeholder="title"
                  />

        <input

          value={body ?? ''}
          onChange={(e) => { setBody(e.target.value as string | null) }}
          placeholder="body"
                  />

        <button onClick={run}>Edit article</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
