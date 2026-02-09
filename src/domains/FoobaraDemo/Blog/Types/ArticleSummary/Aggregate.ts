import {
  ArticleSummary,
  type ArticleSummaryAttributesType
} from './ArticleSummary'

import { type LoadedUser } from '../../../../FoobaraDemo/Blog/Types/User/Loaded'

export interface ArticleSummaryAggregateAttributesType extends ArticleSummaryAttributesType {
  article_id: number
  author: LoadedUser
  is_published: boolean
  published_at?: Date | null
  unpublished_at?: Date | null
  current_title: string
  originally_published_at?: Date | null
  last_edited_at?: Date
}

export class ArticleSummaryAggregate extends ArticleSummary<ArticleSummaryAggregateAttributesType> {
}
