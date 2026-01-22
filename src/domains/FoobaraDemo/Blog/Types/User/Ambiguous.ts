import { Entity } from '../../../../base/Entity'

export type UserPrimaryKeyType = number
export const userPrimaryKeyAttributeName: 'id' = 'id'
export interface UserAttributesType {
  id: number
  full_name: string
  blog_slug?: string
  bio: string
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

  get associationPropertyPaths (): string[][] { return [] }
  readonly hasAssociations: false = false

  get full_name (): AttributesType['full_name'] {
    return this.readAttribute('full_name')
  }

  get blog_slug (): AttributesType['blog_slug'] {
    return this.readAttribute('blog_slug')
  }

  get bio (): AttributesType['bio'] {
    return this.readAttribute('bio')
  }
}
