import { type Never } from '../../../../base/Entity'
import {
  User,
  type UserPrimaryKeyType,
  type UserAttributesType
} from './Ambiguous'

export type UnloadedUserAttributesType = Never<UserAttributesType>

export class UnloadedUser extends User<UnloadedUserAttributesType> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (primaryKey: UserPrimaryKeyType) {
    super(primaryKey)
  }

  readonly isLoaded: false = false
}
