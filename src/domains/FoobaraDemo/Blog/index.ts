export * as config from './config'

export const isGlobal = false
export const organizationName = 'FoobaraDemo'
export const domainName = 'Blog'

export { DeleteArticle } from '../../FoobaraDemo/Blog/DeleteArticle'

export { EditArticle } from '../../FoobaraDemo/Blog/EditArticle'

export * as EditArticleErrors from '../../FoobaraDemo/Blog/EditArticle/errors'

export { FindArticle } from '../../FoobaraDemo/Blog/FindArticle'

export { FindArticleSummaries } from '../../FoobaraDemo/Blog/FindArticleSummaries'

export { FindArticles } from '../../FoobaraDemo/Blog/FindArticles'

export { PublishArticle } from '../../FoobaraDemo/Blog/PublishArticle'

export { PublishArticleChanges } from '../../FoobaraDemo/Blog/PublishArticleChanges'

export { StartNewArticle } from '../../FoobaraDemo/Blog/StartNewArticle'

export { UnpublishArticle } from '../../FoobaraDemo/Blog/UnpublishArticle'

// TODO: put these on an entities module so that commands can be the only top-level interface.

export { Article } from '../../FoobaraDemo/Blog/Types/Article/Ambiguous'

export { UnloadedArticle } from '../../FoobaraDemo/Blog/Types/Article/Unloaded'

export { LoadedArticle } from '../../FoobaraDemo/Blog/Types/Article/Loaded'

export { ArticleAtom } from '../../FoobaraDemo/Blog/Types/Article/Atom'

export { ArticleAggregate } from '../../FoobaraDemo/Blog/Types/Article/Aggregate'

export { ArticleVersion } from '../../FoobaraDemo/Blog/Types/ArticleVersion/Ambiguous'

export { UnloadedArticleVersion } from '../../FoobaraDemo/Blog/Types/ArticleVersion/Unloaded'

export { LoadedArticleVersion } from '../../FoobaraDemo/Blog/Types/ArticleVersion/Loaded'

export { User } from '../../FoobaraDemo/Blog/Types/User/Ambiguous'

export { UnloadedUser } from '../../FoobaraDemo/Blog/Types/User/Unloaded'

export { LoadedUser } from '../../FoobaraDemo/Blog/Types/User/Loaded'

export { ArticleSummary } from '../../FoobaraDemo/Blog/Types/ArticleSummary/ArticleSummary'

export { ArticleSummaryAtom } from '../../FoobaraDemo/Blog/Types/ArticleSummary/Atom'

export { ArticleSummaryAggregate } from '../../FoobaraDemo/Blog/Types/ArticleSummary/Aggregate'
