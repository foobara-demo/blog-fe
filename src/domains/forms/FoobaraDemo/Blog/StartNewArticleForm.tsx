import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { StartNewArticle } from '../../../FoobaraDemo/Blog/StartNewArticle'

import type StartNewArticleInputs from '../../../FoobaraDemo/Blog/StartNewArticle/Inputs'

import type StartNewArticleResult from '../../../FoobaraDemo/Blog/StartNewArticle/Result'
import { type Error as StartNewArticleError } from '../../../FoobaraDemo/Blog/StartNewArticle/Errors'

export default function StartNewArticleForm (): JSX.Element {
  const [author, setAuthor] = useState<number | undefined>(undefined)

  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    if (author == null) {
      // TODO: perform some kind of validation error
      return
    }

    const inputs: StartNewArticleInputs = {
      author
    }

    const command = new StartNewArticle(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<StartNewArticleResult, StartNewArticleError> = await command.run()

      if (outcome.isSuccess()) {
        const result: StartNewArticleResult = outcome.result
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

          value={author ?? ''}
          onChange={(e) => { setAuthor(parseInt(e.target.value)) }}
          placeholder="author"
                  />

        <button onClick={run}>Start new article</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
