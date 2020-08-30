import React from 'react'
import Svg, { Defs, Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style */

const CloseIcon = props => (
  <Svg id="prefix__close"  viewBox="0 0 48 48" {...props}>
    <Defs></Defs>
    <Path
      id="prefix__\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A_12"
      data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 12"
      className="prefix__cls-1"
      d="M36.64 121.031L75.531 82.14a2 2 0 112.828 2.828l-38.89 38.892a2 2 0 11-2.829-2.829z"
      transform="translate(-36.031 -81.563)"
    />
    <Path
      id="prefix__\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A_12_\u043A\u043E\u043F\u0438\u044F"
      data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 12 \u043A\u043E\u043F\u0438\u044F"
      className="prefix__cls-1"
      d="M39.445 82.579l38.976 38.976a2 2 0 01-2.835 2.835L36.61 85.414a2 2 0 112.835-2.835z"
      transform="translate(-36.031 -81.563)"
    />
  </Svg>
)

export default CloseIcon;
