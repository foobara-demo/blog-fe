import { type UnauthenticatedError } from '../../../Foobara/errors/CommandConnector/UnauthenticatedError'

import { type NotFoundError } from '../../../Foobara/errors/CommandPatternImplementation/Concerns/Runtime/NotFoundError'

import { type CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { type UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

export interface PossibleErrors {

  'data.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'data.user.not_found': NotFoundError

  'runtime.unauthenticated': UnauthenticatedError

}

export type Error = UnauthenticatedError |
NotFoundError |
CannotCastError |
UnexpectedAttributesError
