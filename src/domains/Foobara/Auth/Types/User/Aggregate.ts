import {
  type UserAttributesType
} from './Ambiguous'
import { LoadedUser } from './Loaded'

import { type LoadedRole } from '../../../../Foobara/Auth/Types/Role/Loaded'

export interface UserAggregateAttributesType extends UserAttributesType {
  id: number
  username: string
  email?: string | null
  roles: LoadedRole[]
}

export class UserAggregate extends LoadedUser<UserAggregateAttributesType> {
  /* eslint-disable @typescript-eslint/class-literal-property-style */
  get isAtom (): false { return false }
  get isAggregate (): true { return true }
  /* eslint-enable @typescript-eslint/class-literal-property-style */
}
