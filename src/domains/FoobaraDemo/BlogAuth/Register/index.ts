import { GetCurrentUser } from '../../../FoobaraDemo/BlogAuth/GetCurrentUser'

import RemoteCommand from '../../../base/RemoteCommand'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

import castJsonResult from './castJsonResult'

export class Register extends RemoteCommand<Inputs, Result, Error> {
  static readonly organizationName = 'FoobaraDemo'
  static readonly domainName = 'BlogAuth'
  static readonly commandName = 'Register'

  castJsonResult (json: any): Result {
    return castJsonResult(json)
  }

  dirties (): Array<[any] | [any, string, any]> {
    const queries: Array<[any] | [any, string, any]> = [

      [GetCurrentUser]

    ]

    return queries
  }
}
