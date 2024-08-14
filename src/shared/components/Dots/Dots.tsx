import { Box, BoxProps } from '@mui/material'
import { FC, ReactNode } from 'react'

export const Dots: FC<{ children: ReactNode } & BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
      }}
      {...props}
    >
      <Box
        sx={{
          backgroundImage: 'radial-gradient(circle, #d3d3d3 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          height: '100%',
          maskImage: 'linear-gradient(to bottom right, #fff, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom right, #fff, transparent)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
