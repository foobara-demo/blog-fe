import { Model } from '../../../../base/Model'

import { type token_state } from '../../../../Foobara/Auth/Types/token_state'

export interface ApiKeySummaryAttributesType {
  token_id: string
  state: token_state
  expires_at?: Date | null
  created_at: Date
}

export class ApiKeySummary<
  AttributesType extends ApiKeySummaryAttributesType = ApiKeySummaryAttributesType
> extends Model<AttributesType> {
  static readonly modelName: string = 'ApiKeySummary'

  get token_id (): AttributesType['token_id'] {
    return this.readAttribute('token_id')
  }

  get state (): AttributesType['state'] {
    return this.readAttribute('state')
  }

  get expires_at (): AttributesType['expires_at'] {
    return this.readAttribute('expires_at')
  }

  get created_at (): AttributesType['created_at'] {
    return this.readAttribute('created_at')
  }
}
