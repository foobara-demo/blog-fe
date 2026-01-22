import { type CannotCastError } from '../../../GlobalDomain/errors/Foobara/Value/Processor/Casting/CannotCastError'

import { type UnexpectedAttributesError } from '../../../Types/attributes/errors/UnexpectedAttributesError'

import { type MissingRequiredAttributeError } from '../../../Types/attributes/errors/MissingRequiredAttributeError'

import { type CannotExceed64CharactersError } from '../../../Types/email/errors/CannotExceed64CharactersError'

import { type CannotHaveMultipleAtSignsError } from '../../../Types/email/errors/CannotHaveMultipleAtSignsError'

import { type DomainCannotStartWithOrEndWithAHyphenError } from '../../../Types/email/errors/DomainCannotStartWithOrEndWithAHyphenError'

import { type FirstPartCannotBeEmptyError } from '../../../Types/email/errors/FirstPartCannotBeEmptyError'

import { type FirstPartCannotStartWithOrEndWithADotOrHaveTwoDotsInARowError } from '../../../Types/email/errors/FirstPartCannotStartWithOrEndWithADotOrHaveTwoDotsInARowError'

import { type FirstPartHasBadCharactersError } from '../../../Types/email/errors/FirstPartHasBadCharactersError'

import { type MustHaveAnAtSignError } from '../../../Types/email/errors/MustHaveAnAtSignError'

import { type SecondPartCannotBeEmptyError } from '../../../Types/email/errors/SecondPartCannotBeEmptyError'

import { type SecondPartHasBadCharactersError } from '../../../Types/email/errors/SecondPartHasBadCharactersError'

export interface PossibleErrors {

  'data.cannot_cast': CannotCastError

  'data.email.cannot_cast': CannotCastError

  'data.email.cannot_exceed64_characters': CannotExceed64CharactersError

  'data.email.cannot_have_multiple_at_signs': CannotHaveMultipleAtSignsError

  'data.email.domain_cannot_start_with_or_end_with_a_hyphen': DomainCannotStartWithOrEndWithAHyphenError

  'data.email.first_part_cannot_be_empty': FirstPartCannotBeEmptyError

  'data.email.first_part_cannot_start_with_or_end_with_a_dot_or_have_two_dots_in_a_row': FirstPartCannotStartWithOrEndWithADotOrHaveTwoDotsInARowError

  'data.email.first_part_has_bad_characters': FirstPartHasBadCharactersError

  'data.email.must_have_an_at_sign': MustHaveAnAtSignError

  'data.email.second_part_cannot_be_empty': SecondPartCannotBeEmptyError

  'data.email.second_part_has_bad_characters': SecondPartHasBadCharactersError

  'data.missing_required_attribute': MissingRequiredAttributeError

  'data.plaintext_password.cannot_cast': CannotCastError

  'data.unexpected_attributes': UnexpectedAttributesError

  'data.username.cannot_cast': CannotCastError

  'data.username.missing_required_attribute': MissingRequiredAttributeError

}

export type Error = CannotExceed64CharactersError |
CannotHaveMultipleAtSignsError |
DomainCannotStartWithOrEndWithAHyphenError |
FirstPartCannotBeEmptyError |
FirstPartCannotStartWithOrEndWithADotOrHaveTwoDotsInARowError |
FirstPartHasBadCharactersError |
CannotCastError |
MissingRequiredAttributeError |
MustHaveAnAtSignError |
SecondPartCannotBeEmptyError |
SecondPartHasBadCharactersError |
UnexpectedAttributesError
