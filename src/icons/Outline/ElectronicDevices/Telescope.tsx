import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTelescope = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M17.8 3.297c.447-.253.717-.405.927-.49a.8.8 0 0 1 .183-.055.1.1 0 0 1 .033 0c.004 0 .01.002.027.015a.8.8 0 0 1 .127.135c.137.175.294.438.552.877l1.048 1.786c.258.44.412.704.497.908.04.093.051.146.055.171v.021l-.011.016a.8.8 0 0 1-.138.125c-.178.135-.447.29-.894.543l-3.735 2.12c-.423.24-.675.381-.87.46a.7.7 0 0 1-.16.05h-.015l-.003-.001-.009-.007a.7.7 0 0 1-.115-.123c-.129-.165-.277-.414-.523-.833l-1.12-1.907c-.253-.43-.403-.689-.486-.888a.7.7 0 0 1-.054-.176v-.003l.001-.002.003-.003.004-.006a.7.7 0 0 1 .128-.117c.172-.13.43-.279.865-.525zm1.525-1.996c-.428-.113-.816-.023-1.16.116-.313.126-.671.33-1.066.553l-3.762 2.136c-.382.216-.731.414-.993.614-.287.218-.56.504-.675.927l-3.48 1.975-.04.022c-.381.217-.73.415-.993.615-.287.218-.56.504-.675.928l-3.428 1.945-.039.022c-.394.224-.753.428-1.021.631-.294.223-.572.513-.69.944-.118.432-.023.822.119 1.163.13.309.337.662.564 1.05l.046.078c.227.387.435.74.643 1.005.228.29.522.56.951.674s.817.023 1.16-.115c.313-.127.672-.33 1.066-.554l3.455-1.96.019.004c.417.112.795.025 1.124-.108l.145-.062-3.286 7.805a.75.75 0 1 0 1.382.582L12 14.433l3.309 7.858a.75.75 0 1 0 1.382-.582l-3.818-9.069 2.145-1.217.02.005c.417.112.795.025 1.124-.108.299-.12.64-.314 1.01-.525l3.814-2.164c.394-.223.753-.427 1.021-.63.294-.223.572-.513.69-.944.117-.432.023-.823-.119-1.163-.13-.31-.337-.663-.564-1.05L20.942 3.02l-.023-.04c-.227-.387-.435-.74-.642-1.004-.229-.292-.522-.562-.952-.675M3.794 12.437l2.997-1.702c.106.199.23.41.361.632l.023.04.618 1.052c.116.196.226.384.334.555l-2.976 1.69c-.447.252-.717.404-.927.489a.8.8 0 0 1-.182.056c-.023.002-.03 0-.034 0-.004-.002-.01-.003-.027-.016a.8.8 0 0 1-.127-.135c-.137-.175-.293-.438-.551-.877-.258-.44-.412-.704-.497-.908a.7.7 0 0 1-.055-.171l-.001-.017v-.002l.001-.002q0-.001.011-.016a.8.8 0 0 1 .138-.125c.178-.136.447-.29.894-.543m8.185-5.241-3.05 1.73c-.434.247-.693.396-.864.526a.7.7 0 0 0-.135.126l-.001.002v.014a.7.7 0 0 0 .054.165c.083.2.233.457.485.888l.596 1.014c.246.42.394.668.524.833a.7.7 0 0 0 .123.13l.003.001h.014a.7.7 0 0 0 .161-.05c.195-.079.447-.22.87-.46l.774-.44.754-.427 1.551-.88c-.108-.171-.218-.359-.333-.555L12.34 7.829c-.131-.223-.255-.435-.361-.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTelescope;
