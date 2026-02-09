import {
  ArticleSummary,
  type ArticleSummaryAttributesType
} from './ArticleSummary'

import { type UnloadedUser } from '../../../../FoobaraDemo/Blog/Types/User/Unloaded'

export interface ArticleSummaryAtomAttributesType extends ArticleSummaryAttributesType {
  article_id: number
  author: UnloadedUser
  is_published: boolean
  published_at?: Date | null
  unpublished_at?: Date | null
  current_title: string
  originally_published_at?: Date | null
  last_edited_at?: Date
}

export class ArticleSummaryAtom extends ArticleSummary<ArticleSummaryAtomAttributesType> {
}
