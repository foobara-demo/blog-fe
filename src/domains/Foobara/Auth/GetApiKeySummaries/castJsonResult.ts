import type Result from './Result'

import { ApiKeySummary } from '../../../Foobara/Auth/Types/ApiKeySummary/ApiKeySummary'

export default function castJsonResult (json: any): Result {
  json?.forEach((element: any, index: number, array: any[]) => {
    if (element?.expires_at !== undefined) {
      element.expires_at = new Date(element.expires_at)
    }
    if (element?.created_at !== undefined) {
      element.created_at = new Date(element.created_at)
    }
    if (element !== undefined) {
      array[index] = new ApiKeySummary(element)
    }
  })
  return json
}
