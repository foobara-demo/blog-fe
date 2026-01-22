import { RuntimeError } from '../../../../base/Error'

export class UnchangedError extends RuntimeError<Record<string, never>> {
}
