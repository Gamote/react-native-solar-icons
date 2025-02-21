import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeadphonesSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21 18v-6c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3q-1.1-.002-2 .007M3 18v-6c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 3.955c.283-.205.591-.367.939-.493M22 15.5v2M2 15.5v2"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"
    />
  </Svg>
);
export default SvgHeadphonesSquare;
