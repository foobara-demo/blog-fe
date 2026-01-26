import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { PublishArticle } from '../../../FoobaraDemo/Blog/PublishArticle'

import type PublishArticleInputs from '../../../FoobaraDemo/Blog/PublishArticle/Inputs'

import type PublishArticleResult from '../../../FoobaraDemo/Blog/PublishArticle/Result'
import { type Error as PublishArticleError } from '../../../FoobaraDemo/Blog/PublishArticle/Errors'

export default function PublishArticleForm (): JSX.Element {
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

    const inputs: PublishArticleInputs = {
      article
    }

    const command = new PublishArticle(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<PublishArticleResult, PublishArticleError> = await command.run()

      if (outcome.isSuccess()) {
        const result: PublishArticleResult = outcome.result
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

        <button onClick={run}>Publish article</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
