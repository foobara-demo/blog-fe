import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { UnpublishArticle } from '../../../FoobaraDemo/Blog/UnpublishArticle'

import type UnpublishArticleInputs from '../../../FoobaraDemo/Blog/UnpublishArticle/Inputs'

import type UnpublishArticleResult from '../../../FoobaraDemo/Blog/UnpublishArticle/Result'
import { type Error as UnpublishArticleError } from '../../../FoobaraDemo/Blog/UnpublishArticle/Errors'

export default function UnpublishArticleForm (): JSX.Element {
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

    const inputs: UnpublishArticleInputs = {
      article
    }

    const command = new UnpublishArticle(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<UnpublishArticleResult, UnpublishArticleError> = await command.run()

      if (outcome.isSuccess()) {
        const result: UnpublishArticleResult = outcome.result
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

        <button onClick={run}>Unpublish article</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
