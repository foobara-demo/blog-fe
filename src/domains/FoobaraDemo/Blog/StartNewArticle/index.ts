import RequiresAuthCommand from '../../../Foobara/Auth/RequiresAuthCommand'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

import castJsonResult from './castJsonResult'

export class StartNewArticle extends RequiresAuthCommand<Inputs, Result, Error> {
  static readonly organizationName = 'FoobaraDemo'
  static readonly domainName = 'Blog'
  static readonly commandName = 'StartNewArticle'

  castJsonResult (json: any): Result {
    return castJsonResult(json)
  }
}
