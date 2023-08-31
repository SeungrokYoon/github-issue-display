import { Theme } from './DefaultTheme'
import 'styled-components'

type ExtendedTheme = typeof Theme

declare module 'styled-components' {
  interface DefaultTheme extends ExtendedTheme {
    [key: keyof Theme]
  }
}
