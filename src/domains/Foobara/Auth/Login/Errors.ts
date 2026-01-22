import { type UserNotFoundError } from '../../../Foobara/Auth/errors/FindUser/UserNotFoundError'

import { type InvalidPasswordError } from '../../../Foobara/Auth/Login/errors/InvalidPasswordError'

import { type NoUserIdEmailOrUsernameGivenError } from '../../../Foobara/Auth/Login/errors/NoUserIdEmailOrUsernameGivenError'

import { type CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { type UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

import { type MissingRequiredAttributeError } from '../../../Types/attributes/errors/MissingRequiredAttributeError'

export interface PossibleErrors {

  'data.cannot_cast': CannotCastError

  'data.missing_required_attribute': MissingRequiredAttributeError

  'data.plaintext_password.cannot_cast': CannotCastError

  'data.plaintext_password.missing_required_attribute': MissingRequiredAttributeError

  'data.unexpected_attributes': UnexpectedAttributesError

  'data.username_or_email.cannot_cast': CannotCastError

  'foobara::auth::find_user>runtime.user_not_found': UserNotFoundError

  'runtime.invalid_password': InvalidPasswordError

  'runtime.no_user_id_email_or_username_given': NoUserIdEmailOrUsernameGivenError

}

export type Error = UserNotFoundError |
CannotCastError |
InvalidPasswordError |
MissingRequiredAttributeError |
NoUserIdEmailOrUsernameGivenError |
UnexpectedAttributesError
