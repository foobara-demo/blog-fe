import { type NotAllowedError } from '../../../Foobara/errors/CommandConnector/NotAllowedError'

import { type UnauthenticatedError } from '../../../Foobara/errors/CommandConnector/UnauthenticatedError'

import { type NotFoundError } from '../../../Foobara/errors/Entity/NotFoundError'

import { type CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { type UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

import { type MissingRequiredAttributeError } from '../../../Types/attributes/errors/MissingRequiredAttributeError'

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

export type Error = NotAllowedError |
UnauthenticatedError |
NotFoundError |
CannotCastError |
MissingRequiredAttributeError |
UnexpectedAttributesError
