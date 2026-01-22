import { RuntimeError } from '../../../../base/Error'

export class TokenDoesNotExistError extends RuntimeError<Record<string, never>> {
}
