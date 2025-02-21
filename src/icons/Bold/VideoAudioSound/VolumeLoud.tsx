import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVolumeLoud = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2.003 11.716c.037-1.843.056-2.764.668-3.552.112-.144.276-.315.413-.431.752-.636 1.746-.636 3.733-.636.71 0 1.065 0 1.403-.092q.105-.03.209-.067c.33-.121.627-.33 1.22-.746 2.338-1.645 3.508-2.467 4.489-2.11.188.069.37.168.533.29.848.635.913 2.115 1.042 5.073.048 1.096.08 2.034.08 2.555s-.032 1.46-.08 2.555c-.13 2.958-.194 4.438-1.042 5.073-.163.122-.345.221-.533.29-.982.357-2.15-.465-4.49-2.11-.592-.416-.889-.625-1.22-.746a3 3 0 0 0-.208-.067c-.338-.092-.693-.092-1.403-.092-1.987 0-2.98 0-3.733-.636a3 3 0 0 1-.413-.43c-.612-.79-.63-1.71-.668-3.552a14 14 0 0 1 0-.57"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M19.49 5.552a.66.66 0 0 1 .97.094l-.529.471.53-.47.002.002.003.004.007.009.079.112q.072.107.186.305c.149.264.339.652.526 1.171C21.64 8.291 22 9.851 22 12s-.36 3.71-.736 4.75c-.187.52-.377.907-.526 1.172a5 5 0 0 1-.265.417l-.007.009-.003.003-.001.002s-.001.001-.531-.47l.53.471a.66.66 0 0 1-.971.094.77.77 0 0 1-.09-1.035l.03-.041q.04-.06.125-.207a6 6 0 0 0 .422-.943c.314-.871.644-2.253.644-4.222s-.33-3.35-.644-4.222a6 6 0 0 0-.422-.942 3 3 0 0 0-.157-.253M17.757 8.416c.333-.197.753-.07.938.286l-.603.357.603-.357.001.002.002.003.003.007.01.018.024.053q.028.063.07.17c.053.145.12.35.185.62.13.54.252 1.337.252 2.425 0 1.089-.122 1.886-.252 2.426-.065.27-.132.475-.186.619a3 3 0 0 1-.094.223l-.009.018-.003.007-.002.003v.002s-.001.001-.604-.356l.603.357c-.185.355-.605.483-.938.286-.33-.196-.45-.638-.272-.991l.004-.01.035-.085c.032-.086.08-.23.13-.438.1-.416.208-1.09.208-2.06 0-.971-.108-1.645-.208-2.06a4 4 0 0 0-.165-.524l-.004-.01c-.179-.354-.058-.795.272-.991"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgVolumeLoud;
