import type Result from './Result'

import * as Auth from '../../../Foobara/Auth'

import { LoadedRole } from '../../../Foobara/Auth/Types/Role/Loaded'

import { LoadedUser } from '../../../FoobaraDemo/Blog/Types/User/Loaded'

import { UserAggregate } from '../../../FoobaraDemo/BlogAuth/Types/User/Aggregate'

export default function castJsonResult (json: any): Result {
  if (json?.blog_user !== undefined) {
    json.blog_user = new LoadedUser(json.blog_user)
  }
  json?.auth_user?.roles?.forEach((element: any, index: number, array: any[]) => {
    if (element !== undefined) {
      array[index] = new LoadedRole(element)
    }
  })
  if (json?.auth_user !== undefined) {
    json.auth_user = new Auth.UserAggregate(json.auth_user)
  }
  if (json !== undefined) {
    json = new UserAggregate(json)
  }
  return json
}
