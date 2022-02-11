import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg width={186} height={18} fill="none" {...props}>
    <Path
      d="M10.74 0v14H9.66V1H1.8v13H.74V0h10Zm8.257 3.78c1.44 0 2.66.507 3.66 1.52 1.013 1 1.52 2.233 1.52 3.7s-.507 2.707-1.52 3.72c-1 1-2.22 1.5-3.66 1.5-.947 0-1.8-.227-2.56-.68a4.678 4.678 0 0 1-1.74-1.86V18h-1V4h1v2.32a4.679 4.679 0 0 1 1.74-1.86c.76-.453 1.613-.68 2.56-.68Zm-3.08 8.24c.827.827 1.833 1.24 3.02 1.24s2.187-.413 3-1.24c.827-.827 1.24-1.833 1.24-3.02s-.413-2.193-1.24-3.02c-.813-.827-1.813-1.24-3-1.24s-2.193.413-3.02 1.24c-.813.827-1.22 1.833-1.22 3.02s.407 2.193 1.22 3.02Zm14.95 2.2c-1.466 0-2.713-.5-3.74-1.5-1.013-1.013-1.52-2.253-1.52-3.72s.507-2.7 1.52-3.7c1.027-1.013 2.274-1.52 3.74-1.52 1.454 0 2.687.507 3.7 1.52 1.027 1 1.54 2.233 1.54 3.7s-.513 2.707-1.54 3.72c-1.013 1-2.246 1.5-3.7 1.5Zm-3.02-2.2c.827.827 1.834 1.24 3.02 1.24 1.187 0 2.187-.413 3-1.24.814-.827 1.22-1.833 1.22-3.02s-.406-2.193-1.22-3.02c-.813-.827-1.813-1.24-3-1.24-1.186 0-2.193.413-3.02 1.24-.813.827-1.22 1.833-1.22 3.02s.407 2.193 1.22 3.02ZM44.475 4v.98h-5.26V14h-1V4h6.26Zm6.787-.22c1.44 0 2.66.507 3.66 1.52 1.013 1 1.52 2.233 1.52 3.7s-.507 2.707-1.52 3.72c-1 1-2.22 1.5-3.66 1.5-.947 0-1.8-.227-2.56-.68a4.677 4.677 0 0 1-1.74-1.86V18h-1V4h1v2.32a4.677 4.677 0 0 1 1.74-1.86c.76-.453 1.613-.68 2.56-.68Zm-3.08 8.24c.827.827 1.833 1.24 3.02 1.24s2.187-.413 3-1.24c.827-.827 1.24-1.833 1.24-3.02s-.413-2.193-1.24-3.02c-.813-.827-1.813-1.24-3-1.24s-2.193.413-3.02 1.24c-.813.827-1.22 1.833-1.22 3.02s.407 2.193 1.22 3.02ZM67.351 4h1.02v10h-1.02v-2.26a4.713 4.713 0 0 1-1.76 1.82c-.746.44-1.593.66-2.54.66-1.426 0-2.646-.5-3.66-1.5-1.013-1.013-1.52-2.253-1.52-3.72s.507-2.7 1.52-3.7c1.014-1.013 2.234-1.52 3.66-1.52.947 0 1.794.22 2.54.66a4.713 4.713 0 0 1 1.76 1.82V4Zm-7.24 8.02c.827.827 1.834 1.24 3.02 1.24 1.187 0 2.187-.413 3-1.24.814-.827 1.22-1.833 1.22-3.02s-.406-2.193-1.22-3.02c-.813-.827-1.813-1.24-3-1.24-1.186 0-2.193.413-3.02 1.24-.813.827-1.22 1.833-1.22 3.02s.407 2.193 1.22 3.02ZM80.803 4v10h-1.02V5.52l-3.74 5.9h-.14l-3.76-5.94V14h-1V4h1.18l3.64 5.74L79.602 4h1.2Zm12.435 0v10h-1.02V5.52l-3.74 5.9h-.14l-3.76-5.94V14h-1V4h1.18l3.64 5.74L92.037 4h1.2Zm11.574 0h1.02v10h-1.02v-2.26a4.714 4.714 0 0 1-1.76 1.82c-.747.44-1.593.66-2.54.66-1.427 0-2.647-.5-3.66-1.5-1.013-1.013-1.52-2.253-1.52-3.72s.507-2.7 1.52-3.7c1.013-1.013 2.233-1.52 3.66-1.52.947 0 1.793.22 2.54.66a4.714 4.714 0 0 1 1.76 1.82V4Zm-7.24 8.02c.827.827 1.833 1.24 3.02 1.24s2.187-.413 3-1.24c.813-.827 1.22-1.833 1.22-3.02s-.407-2.193-1.22-3.02-1.813-1.24-3-1.24-2.193.413-3.02 1.24c-.813.827-1.22 1.833-1.22 3.02s.407 2.193 1.22 3.02ZM121.894 4v10h-1.02V4.98h-6.24V14h-1V4h8.26Zm10.167 0h.88v10h-1.02V5.74l-6.36 8.26h-.88V4h1v8.26l6.38-8.26Zm10.668 0v.98h-3.64V14h-1V4.98h-3.64V4h8.28Zm9.918 0h1.02v10h-1.02v-2.26a4.714 4.714 0 0 1-1.76 1.82c-.747.44-1.593.66-2.54.66-1.427 0-2.647-.5-3.66-1.5-1.013-1.013-1.52-2.253-1.52-3.72s.507-2.7 1.52-3.7c1.013-1.013 2.233-1.52 3.66-1.52.947 0 1.793.22 2.54.66a4.714 4.714 0 0 1 1.76 1.82V4Zm-7.24 8.02c.827.827 1.833 1.24 3.02 1.24s2.187-.413 3-1.24c.813-.827 1.22-1.833 1.22-3.02s-.407-2.193-1.22-3.02-1.813-1.24-3-1.24-2.193.413-3.02 1.24c-.813.827-1.22 1.833-1.22 3.02s.407 2.193 1.22 3.02ZM163.678 4h1.02v10h-1.02V9.48h-6.24V14h-1V4h1v4.52h6.24V4Zm11.187 0h.88v10h-1.02V5.74l-6.36 8.26h-.88V4h1v8.26l6.38-8.26Zm10.588 0v10h-1v-3.9h-2.16l-3.14 3.9h-1.3l3.2-3.92c-.813-.093-1.493-.413-2.04-.96-.547-.56-.82-1.247-.82-2.06 0-.893.32-1.627.96-2.2.64-.573 1.42-.86 2.34-.86h3.96Zm-3.96 5.14h2.96V4.98h-2.96c-.64 0-1.18.193-1.62.58-.44.387-.66.887-.66 1.5 0 .627.213 1.133.64 1.52.44.373.987.56 1.64.56Z"
      fill="#828282"
    />
  </Svg>
)

export default SvgComponent