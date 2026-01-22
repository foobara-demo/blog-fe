import { RuntimeError } from '../../../../base/Error'

export class NeitherTitleNorBodyProvidedError extends RuntimeError<Record<string, never>> {
}
