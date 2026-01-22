import RequiresAuthCommand from '../../../Foobara/Auth/RequiresAuthCommand'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

export class CreateApiKey extends RequiresAuthCommand<Inputs, Result, Error> {
  static readonly organizationName = 'Foobara'
  static readonly domainName = 'Auth'
  static readonly commandName = 'CreateApiKey'
}
