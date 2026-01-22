import { type Never } from '../../../../base/Entity'
import {
  Article,
  type ArticlePrimaryKeyType,
  type ArticleAttributesType
} from './Ambiguous'

export type UnloadedArticleAttributesType = Never<ArticleAttributesType>

export class UnloadedArticle extends Article<UnloadedArticleAttributesType> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (primaryKey: ArticlePrimaryKeyType) {
    super(primaryKey)
  }

  readonly isLoaded: false = false
}
