import { NotAllowedError } from '../../../GlobalDomain/errors/Foobara/CommandConnector/NotAllowedError'

import { UnauthenticatedError } from '../../../GlobalDomain/errors/Foobara/CommandConnector/UnauthenticatedError'

import { NotFoundError } from '../../../GlobalDomain/errors/Foobara/Entity/NotFoundError'

import { CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

export interface PossibleErrors {
  'data.author.cannot_cast': CannotCastError

  'data.author.not_found': NotFoundError

  'data.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'runtime.not_allowed': NotAllowedError

  'runtime.unauthenticated': UnauthenticatedError
}

export type Error = NotAllowedError | UnauthenticatedError | NotFoundError | CannotCastError | UnexpectedAttributesError
