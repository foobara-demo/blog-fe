import {
  type UserAttributesType
} from './Ambiguous'
import { LoadedUser } from './Loaded'

import { type UnloadedRole } from '../../../../Foobara/Auth/Types/Role/Unloaded'

export interface UserAtomAttributesType extends UserAttributesType {
  id: number
  username: string
  email?: string | null
  roles: UnloadedRole[]
}

export class UserAtom extends LoadedUser<UserAtomAttributesType> {
  /* eslint-disable @typescript-eslint/class-literal-property-style */
  get isAtom (): true { return true }
  get isAggregate (): false { return false }
  /* eslint-enable @typescript-eslint/class-literal-property-style */
}
