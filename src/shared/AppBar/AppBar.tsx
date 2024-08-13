import * as React from 'react'
import MUIAppBar, { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

export const AppBar = (props: MUIAppBarProps) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <MUIAppBar
          {...props}
          color='default'
          sx={{ boxShadow: '1px 1px  #e0e0e0', background: '#ffffff' }}
        >
          <Toolbar>{props.children}</Toolbar>
        </MUIAppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  )
}
