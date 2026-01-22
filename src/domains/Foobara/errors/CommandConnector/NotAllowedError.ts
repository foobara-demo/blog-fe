import { RuntimeError } from '../../../base/Error'

export class NotAllowedError extends RuntimeError<{
  rule_symbol: string
  explanation: string
}> {
}
