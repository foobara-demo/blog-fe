import { FindArticle } from '../../../FoobaraDemo/Blog/FindArticle'

import { FindArticles } from '../../../FoobaraDemo/Blog/FindArticles'

import RequiresAuthCommand from '../../../Foobara/Auth/RequiresAuthCommand'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

import castJsonResult from './castJsonResult'

export class UnpublishArticle extends RequiresAuthCommand<Inputs, Result, Error> {
  static readonly organizationName = 'FoobaraDemo'
  static readonly domainName = 'Blog'
  static readonly commandName = 'UnpublishArticle'

  castJsonResult (json: any): Result {
    return castJsonResult(json)
  }

  dirties (): Array<[any] | [any, string, any]> {
    const queries: Array<[any] | [any, string, any]> = [

      [FindArticles]

    ]

    if (this.outcome?.result?.id != null) {
      queries.push([
        FindArticle,
        'article',
        this.outcome.result.id
      ])
    }

    return queries
  }
}
