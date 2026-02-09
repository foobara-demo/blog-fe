import { Model as FoobaraModel } from '../../../../base/Model'

import { type User } from '../../../../FoobaraDemo/Blog/Types/User/Ambiguous'

export interface ArticleSummaryAttributesType {
  article_id: number
  author: User
  is_published: boolean
  published_at?: Date | null
  unpublished_at?: Date | null
  current_title: string
  originally_published_at?: Date | null
  last_edited_at?: Date
}

export class ArticleSummary<
  AttributesType extends ArticleSummaryAttributesType = ArticleSummaryAttributesType
> extends FoobaraModel<AttributesType> {
  static readonly modelName: string = 'ArticleSummary'

  get article_id (): AttributesType['article_id'] {
    return this.readAttribute('article_id')
  }

  get author (): AttributesType['author'] {
    return this.readAttribute('author')
  }

  get is_published (): AttributesType['is_published'] {
    return this.readAttribute('is_published')
  }

  get published_at (): AttributesType['published_at'] {
    return this.readAttribute('published_at')
  }

  get unpublished_at (): AttributesType['unpublished_at'] {
    return this.readAttribute('unpublished_at')
  }

  get current_title (): AttributesType['current_title'] {
    return this.readAttribute('current_title')
  }

  get originally_published_at (): AttributesType['originally_published_at'] {
    return this.readAttribute('originally_published_at')
  }

  get last_edited_at (): AttributesType['last_edited_at'] {
    return this.readAttribute('last_edited_at')
  }
}
