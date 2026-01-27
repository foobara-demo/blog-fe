export * as config from './config'

export const isGlobal = false
export const organizationName = 'FoobaraDemo'
export const domainName = 'BlogAuth'

export { GetCurrentUser } from '../../FoobaraDemo/BlogAuth/GetCurrentUser'

export { Register } from '../../FoobaraDemo/BlogAuth/Register'

// TODO: put these on an entities module so that commands can be the only top-level interface.

export { User } from '../../FoobaraDemo/BlogAuth/Types/User/Ambiguous'

export { UnloadedUser } from '../../FoobaraDemo/BlogAuth/Types/User/Unloaded'

export { LoadedUser } from '../../FoobaraDemo/BlogAuth/Types/User/Loaded'

export { UserAtom } from '../../FoobaraDemo/BlogAuth/Types/User/Atom'

export { UserAggregate } from '../../FoobaraDemo/BlogAuth/Types/User/Aggregate'
