import {
  type ArticleAttributesType
} from './Ambiguous'
import { LoadedArticle } from './Loaded'

import { type UnloadedArticleVersion } from '../../../../FoobaraDemo/Blog/Types/ArticleVersion/Unloaded'

import { type UnloadedUser } from '../../../../FoobaraDemo/Blog/Types/User/Unloaded'

export interface ArticleAtomAttributesType extends ArticleAttributesType {
  id: number
  author: UnloadedUser
  is_published: boolean
  current_version: UnloadedArticleVersion
  current_published_version?: UnloadedArticleVersion | null
  current_draft?: UnloadedArticleVersion | null
  past_published_versions: UnloadedArticleVersion[]
  published_at?: Date | null
  unpublished_at?: Date | null
  originally_published_at?: Date | null
  last_edited_at?: Date
  title: string
  body: string
}

export class ArticleAtom extends LoadedArticle<ArticleAtomAttributesType> {
  /* eslint-disable @typescript-eslint/class-literal-property-style */
  get isAtom (): true { return true }
  get isAggregate (): false { return false }
  /* eslint-enable @typescript-eslint/class-literal-property-style */
}
