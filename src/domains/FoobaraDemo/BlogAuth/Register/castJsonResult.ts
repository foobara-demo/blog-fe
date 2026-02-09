import type Result from './Result'

import { UserAtom } from '../../../FoobaraDemo/BlogAuth/Types/User/Atom'

export default function castJsonResult (json: any): Result {
  if (json !== undefined) {
    json = new UserAtom(json)
  }
  return json
}
