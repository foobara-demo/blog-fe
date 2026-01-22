import type Result from './Result'

import { ApiKeySummary } from '../../../Foobara/Auth/Types/ApiKeySummary/ApiKeySummary'

export default function castJsonResult (json: any): Result {
  json?.forEach((element: any, index: number, array: any[]) => {
    element.expires_at = new Date(element.expires_at)
    element.created_at = new Date(element.created_at)
    array[index] = new ApiKeySummary(element)
  })
  return json
}
