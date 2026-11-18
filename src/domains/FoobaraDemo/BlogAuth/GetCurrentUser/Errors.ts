import { UnauthenticatedError } from '../../../GlobalDomain/errors/Foobara/CommandConnector/UnauthenticatedError'

import { NotFoundError } from '../../../GlobalDomain/errors/Foobara/Entity/NotFoundError'

import { CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

export interface PossibleErrors {
  'data.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'data.user.not_found': NotFoundError

  'runtime.unauthenticated': UnauthenticatedError
}

export type Error = UnauthenticatedError | NotFoundError | CannotCastError | UnexpectedAttributesError
