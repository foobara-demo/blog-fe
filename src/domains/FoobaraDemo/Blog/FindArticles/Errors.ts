import { type NotAllowedError } from '../../../GlobalDomain/errors/Foobara/CommandConnector/NotAllowedError'

import { type UnauthenticatedError } from '../../../GlobalDomain/errors/Foobara/CommandConnector/UnauthenticatedError'

import { type NotFoundError } from '../../../GlobalDomain/errors/Foobara/Entity/NotFoundError'

import { type CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { type UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

export interface PossibleErrors {

  'data.author.cannot_cast': CannotCastError

  'data.author.not_found': NotFoundError

  'data.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'runtime.not_allowed': NotAllowedError

  'runtime.unauthenticated': UnauthenticatedError

}

export type Error = NotAllowedError |
UnauthenticatedError |
NotFoundError |
CannotCastError |
UnexpectedAttributesError
