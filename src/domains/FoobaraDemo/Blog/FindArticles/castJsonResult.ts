import type Result from './Result'

import { UnloadedArticle } from '../../../FoobaraDemo/Blog/Types/Article/Unloaded'

export default function castJsonResult (json: any): Result {
  json?.forEach((element: any, index: number, array: any[]) => {
    array[index] = new UnloadedArticle(element)
  })
  return json
}
