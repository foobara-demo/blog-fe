import { Entity } from '../../../../base/Entity'

import { type ArticleVersion } from '../../../../FoobaraDemo/Blog/Types/ArticleVersion/Ambiguous'

import { type User } from '../../../../FoobaraDemo/Blog/Types/User/Ambiguous'

export type ArticlePrimaryKeyType = number
export const articlePrimaryKeyAttributeName: 'id' = 'id'
export interface ArticleAttributesType {
  id: number
  author: User
  is_published: boolean
  current_version: ArticleVersion
  current_published_version?: ArticleVersion | null
  current_draft?: ArticleVersion | null
  past_published_versions: ArticleVersion[]
  published_at?: Date | null
  unpublished_at?: Date | null
  originally_published_at?: Date | null
  last_edited_at?: Date
  title: string
  body: string
}

export class Article<
  AttributesType extends ArticleAttributesType = ArticleAttributesType
> extends Entity<ArticlePrimaryKeyType, AttributesType> {
  static readonly modelName: string = 'Article'
  static readonly entityName: string = 'Article'
  static readonly primaryKeyAttributeName: 'id' = 'id'

  get id (): ArticlePrimaryKeyType {
    return this.primaryKey
  }

  get associationPropertyPaths (): string[][] { return [['author'], ['current_draft'], ['current_published_version'], ['current_version'], ['past_published_versions', '#']] }
  readonly hasAssociations: true = true

  get author (): AttributesType['author'] {
    return this.readAttribute('author')
  }

  get is_published (): AttributesType['is_published'] {
    return this.readAttribute('is_published')
  }

  get current_version (): AttributesType['current_version'] {
    return this.readAttribute('current_version')
  }

  get current_published_version (): AttributesType['current_published_version'] {
    return this.readAttribute('current_published_version')
  }

  get current_draft (): AttributesType['current_draft'] {
    return this.readAttribute('current_draft')
  }

  get past_published_versions (): AttributesType['past_published_versions'] {
    return this.readAttribute('past_published_versions')
  }

  get published_at (): AttributesType['published_at'] {
    return this.readAttribute('published_at')
  }

  get unpublished_at (): AttributesType['unpublished_at'] {
    return this.readAttribute('unpublished_at')
  }

  get originally_published_at (): AttributesType['originally_published_at'] {
    return this.readAttribute('originally_published_at')
  }

  get last_edited_at (): AttributesType['last_edited_at'] {
    return this.readAttribute('last_edited_at')
  }

  get title (): AttributesType['title'] {
    return this.readAttribute('title')
  }

  get body (): AttributesType['body'] {
    return this.readAttribute('body')
  }
}
