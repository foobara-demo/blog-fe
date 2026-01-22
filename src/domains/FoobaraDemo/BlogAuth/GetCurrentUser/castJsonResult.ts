import type Result from './Result'

import * as Auth from '../../../Foobara/Auth'

import { LoadedRole } from '../../../Foobara/Auth/Types/Role/Loaded'

import { LoadedUser } from '../../../FoobaraDemo/Blog/Types/User/Loaded'

import * as BlogAuth from '../../../FoobaraDemo/BlogAuth'

export default function castJsonResult (json: any): Result {
  json.blog_user = new LoadedUser(json.blog_user)
  json.auth_user.roles?.forEach((element: any, index: number, array: any[]) => {
    array[index] = new LoadedRole(element)
  })
  json.auth_user = new Types.UserAggregate(json.auth_user)
  json = new BlogAuth.UserAggregate(json)
  return json
}
