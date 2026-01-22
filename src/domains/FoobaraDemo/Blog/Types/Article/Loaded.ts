import {
  Article,
  type ArticleAttributesType
} from './Ambiguous'

export class LoadedArticle<T extends ArticleAttributesType = ArticleAttributesType> extends Article<T> {
  readonly isLoaded: true = true

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (attributes: T) {
    super(attributes)
  }
}
