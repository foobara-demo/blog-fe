import { type Never } from '../../../../base/Entity'
import {
  ArticleVersion,
  type ArticleVersionPrimaryKeyType,
  type ArticleVersionAttributesType
} from './Ambiguous'

export type UnloadedArticleVersionAttributesType = Never<ArticleVersionAttributesType>

export class UnloadedArticleVersion extends ArticleVersion<UnloadedArticleVersionAttributesType> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (primaryKey: ArticleVersionPrimaryKeyType) {
    super(primaryKey)
  }

  readonly isLoaded: false = false
}
