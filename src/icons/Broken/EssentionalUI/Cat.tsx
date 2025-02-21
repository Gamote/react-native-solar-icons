import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCat = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m19.98 9.063.75.002v-.002zm-15.96 0h-.75v.002zM19.1 10.66l-.573.485.084.1.114.065zm-.272-1.265a.75.75 0 0 0-.888 1.21zM4.02 15h-.75zm2.04-4.395a.75.75 0 1 0-.888-1.21zM12 5.656c-.772 0-1.21.041-1.556.084-.34.042-.512.072-.838.072v1.5c.44 0 .725-.047 1.02-.083.29-.036.666-.073 1.374-.073zm0 1.5c.708 0 1.085.037 1.373.073.296.036.58.083 1.021.083v-1.5c-.326 0-.498-.03-.838-.072A12 12 0 0 0 12 5.656zm2.394.157c.213 0 .412-.061.555-.114.156-.058.317-.134.472-.214.305-.157.659-.367.983-.554.34-.195.66-.373.947-.503.308-.14.484-.178.554-.178v-1.5c-.408 0-.83.157-1.171.31a13 13 0 0 0-1.078.571c-.354.204-.658.385-.922.52q-.194.1-.306.141c-.087.032-.087.02-.034.02zm3.511-1.563c.345 0 .675.103.907.303.212.182.418.51.418 1.135h1.5c0-1-.352-1.766-.939-2.272-.566-.487-1.272-.666-1.886-.666zm1.325 1.438v1.875h1.5V7.188zM9.606 5.813c.053 0 .053.011-.034-.02a3 3 0 0 1-.306-.141c-.264-.136-.568-.317-.922-.52-.34-.196-.716-.408-1.078-.571-.34-.154-.763-.311-1.171-.311v1.5c.07 0 .246.039.554.178.287.13.608.308.947.503.324.187.678.397.983.554.155.08.316.156.472.214.143.053.342.114.555.114zM6.095 4.25c-.614 0-1.32.179-1.886.666-.587.505-.939 1.272-.939 2.271h1.5c0-.625.206-.952.418-1.134.232-.2.563-.303.907-.303zM3.27 7.188v1.875h1.5V7.187zM12 20.75c1.431 0 3.54-.285 5.32-1.104 1.784-.82 3.41-2.273 3.41-4.646h-1.5c0 1.533-1.007 2.58-2.536 3.284s-3.412.966-4.694.966zm7.672-10.574a5 5 0 0 0-.844-.78l-.888 1.208q.358.267.587.54zM19.23 9.06c0 .198-.041.61-.138.895-.055.159-.086.155-.03.11a.42.42 0 0 1 .412-.055l-.749 1.3c.18.104.402.18.65.167.255-.013.466-.114.626-.242.287-.23.432-.566.51-.796.168-.491.218-1.08.22-1.374zM12 19.25c-1.282 0-3.163-.262-4.694-.966C5.776 17.58 4.77 16.533 4.77 15h-1.5c0 2.373 1.626 3.826 3.41 4.646 1.78.82 3.889 1.104 5.32 1.104zM4.77 15c0-.788-.057-1.437.019-2.128.07-.645.253-1.218.684-1.727l-1.145-.97c-.68.805-.938 1.693-1.03 2.534-.087.797-.028 1.66-.028 2.291zm.703-3.855c.154-.182.346-.364.587-.54l-.888-1.21q-.493.364-.844.78zM3.27 9.065c.001.294.051.883.219 1.374.078.23.223.566.51.796.16.128.371.229.625.242.249.012.47-.063.651-.167l-.749-1.3a.419.419 0 0 1 .411.055c.057.045.026.049-.029-.11a3.3 3.3 0 0 1-.138-.895z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12.826 16c0 .172-.361.312-.806.312s-.807-.14-.807-.312c0-.173.361-.313.807-.313.445 0 .806.14.806.313ZM15.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781.217-.781.484-.781.484.35.484.78ZM9.5 13.594c0 .431-.217.781-.484.781s-.484-.35-.484-.781.217-.781.484-.781.484.35.484.78Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 15.469c-.483-.313-2.58-1.094-3.387-1.094M20.387 17.969c-.484-.313-1.613-1.094-2.42-1.094M2 15.469c.484-.313 2.58-1.094 3.387-1.094M3.613 17.969c.484-.313 1.613-1.094 2.42-1.094"
    />
  </Svg>
);
export default SvgCat;
