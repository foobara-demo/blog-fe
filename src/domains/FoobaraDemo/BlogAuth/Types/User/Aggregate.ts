import {
  type UserAttributesType
} from './Ambiguous'

import type * as Auth from '../../../../Foobara/Auth'

import type * as Blog from '../../../../FoobaraDemo/Blog'

import { LoadedUser } from '../../../../FoobaraDemo/BlogAuth/Types/User/Loaded'

export interface UserAggregateAttributesType extends UserAttributesType {
  id: number
  blog_user: Blog.LoadedUser
  auth_user: Auth.UserAggregate
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
