import {
  type ArticleAttributesType
} from './Ambiguous'

import { LoadedArticle } from '../../../../FoobaraDemo/Blog/Types/Article/Loaded'

import { type LoadedArticleVersion } from '../../../../FoobaraDemo/Blog/Types/ArticleVersion/Loaded'

import { type LoadedUser } from '../../../../FoobaraDemo/Blog/Types/User/Loaded'

export interface ArticleAggregateAttributesType extends ArticleAttributesType {
  id: number
  author: LoadedUser
  is_published: boolean
  current_version: LoadedArticleVersion
  current_published_version?: LoadedArticleVersion | null
  current_draft?: LoadedArticleVersion | null
  past_published_versions: LoadedArticleVersion[]
  published_at?: Date | null
  unpublished_at?: Date | null
  originally_published_at?: Date | null
  last_edited_at?: Date
  title: string
  body: string
}

export class ArticleAggregate extends LoadedArticle<ArticleAggregateAttributesType> {
  /* eslint-disable @typescript-eslint/class-literal-property-style */
  get isAtom (): false { return false }
  get isAggregate (): true { return true }
  /* eslint-enable @typescript-eslint/class-literal-property-style */
}
