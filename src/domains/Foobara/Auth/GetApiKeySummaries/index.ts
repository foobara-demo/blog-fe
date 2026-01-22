import RequiresAuthCommand from '../../../Foobara/Auth/RequiresAuthCommand'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

import castJsonResult from './castJsonResult'

export class GetApiKeySummaries extends RequiresAuthCommand<Inputs, Result, Error> {
  static readonly organizationName = 'Foobara'
  static readonly domainName = 'Auth'
  static readonly commandName = 'GetApiKeySummaries'

  castJsonResult (json: any): Result {
    return castJsonResult(json)
  }
}
