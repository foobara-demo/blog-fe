import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { CreateApiKey } from '../../../Foobara/Auth/CreateApiKey'

import type CreateApiKeyResult from '../../../Foobara/Auth/CreateApiKey/Result'
import { type Error as CreateApiKeyError } from '../../../Foobara/Auth/CreateApiKey/Errors'

export default function CreateApiKeyForm (): JSX.Element {
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    const command = new CreateApiKey()

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<CreateApiKeyResult, CreateApiKeyError> = await command.run()

      if (outcome.isSuccess()) {
        const result: CreateApiKeyResult = outcome.result
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

        <button onClick={run}>Create api key</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
