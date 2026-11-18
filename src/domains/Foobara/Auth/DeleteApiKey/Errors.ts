import { NotAllowedError } from '../../../GlobalDomain/errors/Foobara/CommandConnector/NotAllowedError'

import { UnauthenticatedError } from '../../../GlobalDomain/errors/Foobara/CommandConnector/UnauthenticatedError'

import { NotFoundError } from '../../../GlobalDomain/errors/Foobara/Entity/NotFoundError'

import { CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

import { MissingRequiredAttributeError } from '../../../Types/attributes/errors/MissingRequiredAttributeError'

export interface PossibleErrors {
  'data.cannot_cast': CannotCastError

  'data.missing_required_attribute': MissingRequiredAttributeError

  'data.token.cannot_cast': CannotCastError

  'data.token.missing_required_attribute': MissingRequiredAttributeError

  'data.token.not_found': NotFoundError

  'data.unexpected_attributes': UnexpectedAttributesError

  'runtime.not_allowed': NotAllowedError

  'runtime.unauthenticated': UnauthenticatedError
}

export type Error =
  | NotAllowedError
  | UnauthenticatedError
  | NotFoundError
  | CannotCastError
  | MissingRequiredAttributeError
  | UnexpectedAttributesError
