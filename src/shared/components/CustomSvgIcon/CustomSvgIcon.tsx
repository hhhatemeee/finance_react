import { CSSProperties } from 'react'
import { Icon, IconProps, SxProps, Theme } from '@mui/material'

type SvgIconProps = {
  src: string
  alt?: string
  onClick?: () => void
  sx?: SxProps<Theme>
  imgStyle?: CSSProperties
  imgClassName?: string
} & IconProps

export const CustomSvgIcon = ({
  src,
  alt,
  imgStyle = { width: '100%' },
  imgClassName,
  ...props
}: SvgIconProps): JSX.Element => (
  <Icon
    sx={{
      ...props.sx,
      ':hover': {
        cursor: 'pointer',
      },
    }}
    onClick={props.onClick}
    {...props}
  >
    <img alt={alt} className={imgClassName} src={src} style={imgStyle} />
  </Icon>
)
