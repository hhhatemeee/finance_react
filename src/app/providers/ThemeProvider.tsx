import { FC, ReactNode } from 'react'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { alpha, createTheme, CssBaseline } from '@mui/material'

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5771f0',
        light: alpha('#5771f0', 0.5),
        dark: alpha('#5771f0', 0.9),
      },
    },
    typography: {
      h1: {
        color: '#5771f0',
      },
    },
  })

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
