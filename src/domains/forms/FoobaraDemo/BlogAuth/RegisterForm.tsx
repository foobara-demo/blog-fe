import React, { useState, type JSX } from 'react'

import { type Outcome } from '../../../base/Outcome'

import { Register } from '../../../FoobaraDemo/BlogAuth/Register'

import type RegisterInputs from '../../../FoobaraDemo/BlogAuth/Register/Inputs'

import type RegisterResult from '../../../FoobaraDemo/BlogAuth/Register/Result'
import { type Error as RegisterError } from '../../../FoobaraDemo/BlogAuth/Register/Errors'

export default function RegisterForm (): JSX.Element {
  const [username, setUsername] = useState<string | undefined>(undefined)

  const [email, setEmail] = useState<string | null | undefined>(undefined)

  const [plaintextPassword, setPlaintextPassword] = useState<string | null | undefined>(undefined)

  const [fullName, setFullName] = useState<string | undefined>(undefined)

  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function toVoid (fn: () => Promise<void>): () => void {
    return (): void => {
      void (async (): Promise<void> => { await fn() })()
    }
  }

  const run = toVoid(async (): Promise<void> => {
    if (username == null) {
      // TODO: perform some kind of validation error
      return
    }

    if (email == null) {
      // TODO: perform some kind of validation error
      return
    }

    if (plaintextPassword == null) {
      // TODO: perform some kind of validation error
      return
    }

    if (fullName == null) {
      // TODO: perform some kind of validation error
      return
    }

    const inputs: RegisterInputs = {
      username,
      email,
      plaintext_password: plaintextPassword,
      full_name: fullName
    }

    const command = new Register(inputs)

    try {
      setResult('Thinking...')
      setError(null)
      const outcome: Outcome<RegisterResult, RegisterError> = await command.run()

      if (outcome.isSuccess()) {
        const result: RegisterResult = outcome.result
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

          value={username ?? ''}
          onChange={(e) => { setUsername(e.target.value) }}
          placeholder="username"
                  />

        <input

          value={email ?? ''}
          onChange={(e) => { setEmail(e.target.value as string | null) }}
          placeholder="email"
                  />

        <input
          type="password"
          value={plaintextPassword ?? ''}
          onChange={(e) => { setPlaintextPassword(e.target.value as string | null) }}
          placeholder="plaintext password"
                  />

        <input

          value={fullName ?? ''}
          onChange={(e) => { setFullName(e.target.value) }}
          placeholder="full name"
                  />

        <button onClick={run}>Register</button>
      </div>

      {(result != null) && <p>{result}</p>}
      {(error != null) && <p className="error-message">{error}</p>}
    </div>
  )
}
