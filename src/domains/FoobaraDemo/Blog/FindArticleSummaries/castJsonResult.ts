import type Result from './Result'

import { ArticleSummaryAggregate } from '../../../FoobaraDemo/Blog/Types/ArticleSummary/Aggregate'

import { LoadedUser } from '../../../FoobaraDemo/Blog/Types/User/Loaded'

export default function castJsonResult (json: any): Result {
  json?.forEach((element: any, index: number, array: any[]) => {
    if (element?.author !== undefined) {
      element.author = new LoadedUser(element.author)
    }
    if (element?.published_at !== undefined) {
      element.published_at = new Date(element.published_at)
    }
    if (element?.unpublished_at !== undefined) {
      element.unpublished_at = new Date(element.unpublished_at)
    }
    if (element?.originally_published_at !== undefined) {
      element.originally_published_at = new Date(element.originally_published_at)
    }
    if (element?.last_edited_at !== undefined) {
      element.last_edited_at = new Date(element.last_edited_at)
    }
    if (element !== undefined) {
      array[index] = new ArticleSummaryAggregate(element)
    }
  })
  return json
}
