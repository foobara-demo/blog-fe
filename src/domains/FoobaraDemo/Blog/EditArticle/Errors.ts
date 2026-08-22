import { type NotAllowedError } from '../../../Foobara/errors/CommandConnector/NotAllowedError'

import { type UnauthenticatedError } from '../../../Foobara/errors/CommandConnector/UnauthenticatedError'

import { type NotFoundError } from '../../../Foobara/errors/Entity/NotFoundError'

import { type CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { type NeitherTitleNorBodyProvidedError } from '../../../FoobaraDemo/Blog/EditArticle/errors/NeitherTitleNorBodyProvidedError'

import { type UnchangedError } from '../../../FoobaraDemo/Blog/EditArticle/errors/UnchangedError'

import { type UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

import { type MissingRequiredAttributeError } from '../../../Types/attributes/errors/MissingRequiredAttributeError'

export interface PossibleErrors {

  'data.article.cannot_cast': CannotCastError

  'data.article.missing_required_attribute': MissingRequiredAttributeError

  'data.article.not_found': NotFoundError

  'data.body.cannot_cast': CannotCastError

  'data.cannot_cast': CannotCastError

  'data.missing_required_attribute': MissingRequiredAttributeError

  'data.title.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'runtime.neither_title_nor_body_provided': NeitherTitleNorBodyProvidedError

  'runtime.not_allowed': NotAllowedError

  'runtime.unauthenticated': UnauthenticatedError

  'runtime.unchanged': UnchangedError

}

export type Error = NotAllowedError |
UnauthenticatedError |
NotFoundError |
CannotCastError |
MissingRequiredAttributeError |
NeitherTitleNorBodyProvidedError |
UnchangedError |
UnexpectedAttributesError
