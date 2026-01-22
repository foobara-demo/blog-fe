import { type Never } from '../../../../base/Entity'
import {
  Role,
  type RolePrimaryKeyType,
  type RoleAttributesType
} from './Ambiguous'

export type UnloadedRoleAttributesType = Never<RoleAttributesType>

export class UnloadedRole extends Role<UnloadedRoleAttributesType> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (primaryKey: RolePrimaryKeyType) {
    super(primaryKey)
  }

  readonly isLoaded: false = false
}
