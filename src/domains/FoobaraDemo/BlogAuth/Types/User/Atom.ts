import {
  type UserAttributesType
} from './Ambiguous'
import { LoadedUser } from './Loaded'

import type * as Auth from '../../../../Foobara/Auth'

import type * as Blog from '../../../../FoobaraDemo/Blog'

export interface UserAtomAttributesType extends UserAttributesType {
  id: number
  blog_user: Blog.UnloadedUser
  auth_user: Auth.UnloadedUser
  username?: string
  email?: string | null
  full_name?: string
  blog_slug?: string
}

export class UserAtom extends LoadedUser<UserAtomAttributesType> {
  /* eslint-disable @typescript-eslint/class-literal-property-style */
  get isAtom (): true { return true }
  get isAggregate (): false { return false }
  /* eslint-enable @typescript-eslint/class-literal-property-style */
}
