import { Entity } from '../../../../base/Entity'

import * as Auth from '../../../../Foobara/Auth'

import type * as Blog from '../../../../FoobaraDemo/Blog'

export type UserPrimaryKeyType = number
export const userPrimaryKeyAttributeName: 'id' = 'id'
export interface UserAttributesType {
  id: number
  blog_user: Blog.User
  auth_user: Types.User
  username?: string
  email?: string | null
  full_name?: string
  blog_slug?: string
}

export class User<
  AttributesType extends UserAttributesType = UserAttributesType
> extends Entity<UserPrimaryKeyType, AttributesType> {
  static readonly modelName: string = 'User'
  static readonly entityName: string = 'User'
  static readonly primaryKeyAttributeName: 'id' = 'id'

  get id (): UserPrimaryKeyType {
    return this.primaryKey
  }

  get associationPropertyPaths (): string[][] { return [['auth_user', 'roles', '#'], ['blog_user']] }
  readonly hasAssociations: true = true

  get blog_user (): AttributesType['blog_user'] {
    return this.readAttribute('blog_user')
  }

  get auth_user (): AttributesType['auth_user'] {
    return this.readAttribute('auth_user')
  }

  get username (): AttributesType['username'] {
    return this.readAttribute('username')
  }

  get email (): AttributesType['email'] {
    return this.readAttribute('email')
  }

  get full_name (): AttributesType['full_name'] {
    return this.readAttribute('full_name')
  }

  get blog_slug (): AttributesType['blog_slug'] {
    return this.readAttribute('blog_slug')
  }
}
