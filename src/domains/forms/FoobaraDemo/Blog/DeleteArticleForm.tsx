import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { DeleteArticle } from '../../../FoobaraDemo/Blog/DeleteArticle'

import type DeleteArticleInputs from '../../../FoobaraDemo/Blog/DeleteArticle/Inputs'

import type DeleteArticleResult from '../../../FoobaraDemo/Blog/DeleteArticle/Result'
import { type Error as DeleteArticleError } from '../../../FoobaraDemo/Blog/DeleteArticle/Errors'

export default function DeleteArticleForm (): JSX.Element {
  const [article, setArticle] = useState<number | undefined>(undefined)

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

    const inputs: DeleteArticleInputs = {
      article
    }

    const command = new DeleteArticle(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<DeleteArticleResult, DeleteArticleError> = await command.run()

      if (outcome.isSuccess()) {
        const result: DeleteArticleResult = outcome.result
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

        <button onClick={run}>Delete article</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
