import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { GetApiKeySummaries } from '../../../Foobara/Auth/GetApiKeySummaries'

import type GetApiKeySummariesResult from '../../../Foobara/Auth/GetApiKeySummaries/Result'
import { type Error as GetApiKeySummariesError } from '../../../Foobara/Auth/GetApiKeySummaries/Errors'

export default function GetApiKeySummariesForm (): JSX.Element {
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    const command = new GetApiKeySummaries()

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<GetApiKeySummariesResult, GetApiKeySummariesError> = await command.run()

      if (outcome.isSuccess()) {
        const result: GetApiKeySummariesResult = outcome.result
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

        <button onClick={run}>Get api key summaries</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
