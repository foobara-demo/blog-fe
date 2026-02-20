import type Result from './Result'

import { ArticleAggregate } from '../../../FoobaraDemo/Blog/Types/Article/Aggregate'

import { LoadedArticleVersion } from '../../../FoobaraDemo/Blog/Types/ArticleVersion/Loaded'

import { LoadedUser } from '../../../FoobaraDemo/Blog/Types/User/Loaded'

export default function castJsonResult (json: any): Result {
  if (json?.author !== undefined) {
    json.author = new LoadedUser(json.author)
  }
  if (json?.current_version?.created_at !== undefined) {
    json.current_version.created_at = new Date(json.current_version.created_at)
  }
  if (json?.current_version?.modified_at !== undefined) {
    json.current_version.modified_at = new Date(json.current_version.modified_at)
  }
  if (json?.current_version !== undefined) {
    json.current_version = new LoadedArticleVersion(json.current_version)
  }
  if (json?.current_published_version?.created_at !== undefined) {
    json.current_published_version.created_at = new Date(json.current_published_version.created_at)
  }
  if (json?.current_published_version?.modified_at !== undefined) {
    json.current_published_version.modified_at = new Date(json.current_published_version.modified_at)
  }
  if (json?.current_published_version !== undefined) {
    json.current_published_version = new LoadedArticleVersion(json.current_published_version)
  }
  if (json?.current_draft?.created_at !== undefined) {
    json.current_draft.created_at = new Date(json.current_draft.created_at)
  }
  if (json?.current_draft?.modified_at !== undefined) {
    json.current_draft.modified_at = new Date(json.current_draft.modified_at)
  }
  if (json?.current_draft !== undefined) {
    json.current_draft = new LoadedArticleVersion(json.current_draft)
  }
  json?.past_published_versions?.forEach((element: any, index: number, array: any[]) => {
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
  if (json?.published_at !== undefined) {
    json.published_at = new Date(json.published_at)
  }
  if (json?.unpublished_at !== undefined) {
    json.unpublished_at = new Date(json.unpublished_at)
  }
  if (json?.originally_published_at !== undefined) {
    json.originally_published_at = new Date(json.originally_published_at)
  }
  if (json?.last_edited_at !== undefined) {
    json.last_edited_at = new Date(json.last_edited_at)
  }
  if (json !== undefined) {
    json = new ArticleAggregate(json)
  }
  return json
}
