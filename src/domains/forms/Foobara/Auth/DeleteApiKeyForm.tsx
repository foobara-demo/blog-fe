import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { DeleteApiKey } from '../../../Foobara/Auth/DeleteApiKey'

import type DeleteApiKeyInputs from '../../../Foobara/Auth/DeleteApiKey/Inputs'

import type DeleteApiKeyResult from '../../../Foobara/Auth/DeleteApiKey/Result'
import { type Error as DeleteApiKeyError } from '../../../Foobara/Auth/DeleteApiKey/Errors'

export default function DeleteApiKeyForm (): JSX.Element {
  const [token, setToken] = useState<string | undefined>(undefined)

  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    if (token == null) {
      // TODO: perform some kind of validation error
      return
    }

    const inputs: DeleteApiKeyInputs = {
      token
    }

    const command = new DeleteApiKey(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<DeleteApiKeyResult, DeleteApiKeyError> = await command.run()

      if (outcome.isSuccess()) {
        const result: DeleteApiKeyResult = outcome.result
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

          value={token ?? ''}
          onChange={(e) => { setToken(e.target.value) }}
          placeholder="token"
                  />

        <button onClick={run}>Delete api key</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
