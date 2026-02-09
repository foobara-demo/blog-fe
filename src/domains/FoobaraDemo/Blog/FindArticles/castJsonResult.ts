import type Result from './Result'

import { ArticleAggregate } from '../../../FoobaraDemo/Blog/Types/Article/Aggregate'

import { LoadedArticleVersion } from '../../../FoobaraDemo/Blog/Types/ArticleVersion/Loaded'

import { LoadedUser } from '../../../FoobaraDemo/Blog/Types/User/Loaded'

export default function castJsonResult (json: any): Result {
  json?.forEach((element: any, index: number, array: any[]) => {
    if (element?.author !== undefined) {
      element.author = new LoadedUser(element.author)
    }
    if (element?.current_version?.created_at !== undefined) {
      element.current_version.created_at = new Date(element.current_version.created_at)
    }
    if (element?.current_version?.modified_at !== undefined) {
      element.current_version.modified_at = new Date(element.current_version.modified_at)
    }
    if (element?.current_version !== undefined) {
      element.current_version = new LoadedArticleVersion(element.current_version)
    }
    if (element?.current_published_version?.created_at !== undefined) {
      element.current_published_version.created_at = new Date(element.current_published_version.created_at)
    }
    if (element?.current_published_version?.modified_at !== undefined) {
      element.current_published_version.modified_at = new Date(element.current_published_version.modified_at)
    }
    if (element?.current_published_version !== undefined) {
      element.current_published_version = new LoadedArticleVersion(element.current_published_version)
    }
    if (element?.current_draft?.created_at !== undefined) {
      element.current_draft.created_at = new Date(element.current_draft.created_at)
    }
    if (element?.current_draft?.modified_at !== undefined) {
      element.current_draft.modified_at = new Date(element.current_draft.modified_at)
    }
    if (element?.current_draft !== undefined) {
      element.current_draft = new LoadedArticleVersion(element.current_draft)
    }
    element?.past_published_versions?.forEach((element: any, index: number, array: any[]) => {
      if (element?.created_at !== undefined) {
        element.created_at = new Date(element.created_at)
      }
      if (element?.modified_at !== undefined) {
        element.modified_at = new Date(element.modified_at)
      }
      if (element !== undefined) {
        array[index] = new LoadedArticleVersion(element)
      }
    })
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
      array[index] = new ArticleAggregate(element)
    }
  })
  return json
}
