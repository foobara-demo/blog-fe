import {
  User,
  type UserAttributesType
} from './Ambiguous'

export class LoadedUser<T extends UserAttributesType = UserAttributesType> extends User<T> {
  readonly isLoaded: true = true

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (attributes: T) {
    super(attributes)
  }
}
