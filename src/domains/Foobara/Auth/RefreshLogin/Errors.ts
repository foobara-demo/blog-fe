import { InvalidRefreshTokenError } from '../../../Foobara/Auth/RefreshLogin/errors/InvalidRefreshTokenError'

import { ExpiredTokenError } from '../../../Foobara/Auth/errors/VerifyToken/ExpiredTokenError'

import { InactiveTokenError } from '../../../Foobara/Auth/errors/VerifyToken/InactiveTokenError'

import { TokenDoesNotExistError } from '../../../Foobara/Auth/errors/VerifyToken/TokenDoesNotExistError'

import { CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

export interface PossibleErrors {
  'data.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'foobara::auth::verify_token>runtime.expired_token': ExpiredTokenError

  'foobara::auth::verify_token>runtime.inactive_token': InactiveTokenError

  'foobara::auth::verify_token>runtime.token_does_not_exist': TokenDoesNotExistError

  'runtime.invalid_refresh_token': InvalidRefreshTokenError
}

export type Error =
  | CannotCastError
  | InvalidRefreshTokenError
  | UnexpectedAttributesError
  | ExpiredTokenError
  | InactiveTokenError
  | TokenDoesNotExistError
