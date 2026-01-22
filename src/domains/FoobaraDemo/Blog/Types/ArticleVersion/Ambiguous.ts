import { Entity } from '../../../../base/Entity'

export type ArticleVersionPrimaryKeyType = number
export const articleVersionPrimaryKeyAttributeName: 'id' = 'id'
export interface ArticleVersionAttributesType {
  id: number
  title: string
  body: string
  created_at: Date
  modified_at: Date
}

export class ArticleVersion<
  AttributesType extends ArticleVersionAttributesType = ArticleVersionAttributesType
> extends Entity<ArticleVersionPrimaryKeyType, AttributesType> {
  static readonly modelName: string = 'ArticleVersion'
  static readonly entityName: string = 'ArticleVersion'
  static readonly primaryKeyAttributeName: 'id' = 'id'

  get id (): ArticleVersionPrimaryKeyType {
    return this.primaryKey
  }

  get associationPropertyPaths (): string[][] { return [] }
  readonly hasAssociations: false = false

  get title (): AttributesType['title'] {
    return this.readAttribute('title')
  }

  get body (): AttributesType['body'] {
    return this.readAttribute('body')
  }

  get created_at (): AttributesType['created_at'] {
    return this.readAttribute('created_at')
  }

  get modified_at (): AttributesType['modified_at'] {
    return this.readAttribute('modified_at')
  }
}
