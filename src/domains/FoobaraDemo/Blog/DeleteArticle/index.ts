import RequiresAuthCommand from '../../../Foobara/Auth/RequiresAuthCommand'

import { FindArticle } from '../../../FoobaraDemo/Blog/FindArticle'

import { FindArticles } from '../../../FoobaraDemo/Blog/FindArticles'

import type Inputs from './Inputs'
import type Result from './Result'
import { type Error } from './Errors'

export class DeleteArticle extends RequiresAuthCommand<Inputs, Result, Error> {
  static readonly organizationName = 'FoobaraDemo'
  static readonly domainName = 'Blog'
  static readonly commandName = 'DeleteArticle'

  dirties (): Array<[any] | [any, string, any]> {
    const queries: Array<[any] | [any, string, any]> = [

      [FindArticles]

    ]

    if (this.inputs?.article != null) {
      queries.push([
        FindArticle,
        'article',
        this.inputs.article
      ])
    }

    return queries
  }
}
