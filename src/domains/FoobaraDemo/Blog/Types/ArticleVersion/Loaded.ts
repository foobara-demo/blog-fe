import {
  ArticleVersion,
  type ArticleVersionAttributesType
} from './Ambiguous'

export class LoadedArticleVersion<T extends ArticleVersionAttributesType = ArticleVersionAttributesType> extends ArticleVersion<T> {
  readonly isLoaded: true = true

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (attributes: T) {
    super(attributes)
  }

  /* eslint-disable @typescript-eslint/class-literal-property-style */
  get isAtom (): true { return true }
  get isAggregate (): true { return true }
  /* eslint-enable @typescript-eslint/class-literal-property-style */
}
