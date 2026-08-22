import { DataError } from '../../../base/Error'

export class NotFoundError extends DataError<{
  entity_class?: string
  criteria?: any
  data_path?: string
}> {
}
