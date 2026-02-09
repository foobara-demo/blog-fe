import type Result from './Result'

import { ArticleAtom } from '../../../FoobaraDemo/Blog/Types/Article/Atom'

export default function castJsonResult (json: any): Result {
  if (json !== undefined) {
    json = new ArticleAtom(json)
  }
  return json
}
