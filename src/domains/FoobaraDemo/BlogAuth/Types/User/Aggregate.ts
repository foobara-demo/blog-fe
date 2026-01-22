import {
  type UserAttributesType
} from './Ambiguous'
import { LoadedUser } from './Loaded'

import { type UserAggregate } from '../../../../Foobara/Auth/Types/User/Aggregate'

import { LoadedUser } from '../../../../FoobaraDemo/Blog/Types/User/Loaded'

export interface UserAggregateAttributesType extends UserAttributesType {
  id: number
  blog_user: LoadedUser
  auth_user: UserAggregate
  username?: string
  email?: string | null
  full_name?: string
  blog_slug?: string
}

export class UserAggregate extends LoadedUser<UserAggregateAttributesType> {
  /* eslint-disable @typescript-eslint/class-literal-property-style */
  get isAtom (): false { return false }
  get isAggregate (): true { return true }
  /* eslint-enable @typescript-eslint/class-literal-property-style */
}
