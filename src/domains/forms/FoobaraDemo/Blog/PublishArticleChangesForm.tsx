import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { PublishArticleChanges } from '../../../FoobaraDemo/Blog/PublishArticleChanges'

import type PublishArticleChangesInputs from '../../../FoobaraDemo/Blog/PublishArticleChanges/Inputs'

import type PublishArticleChangesResult from '../../../FoobaraDemo/Blog/PublishArticleChanges/Result'
import { type Error as PublishArticleChangesError } from '../../../FoobaraDemo/Blog/PublishArticleChanges/Errors'

export default function PublishArticleChangesForm (): JSX.Element {
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

    const inputs: PublishArticleChangesInputs = {
      article
    }

    const command = new PublishArticleChanges(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<PublishArticleChangesResult, PublishArticleChangesError> = await command.run()

      if (outcome.isSuccess()) {
        const result: PublishArticleChangesResult = outcome.result
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

        <button onClick={run}>Publish article changes</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
