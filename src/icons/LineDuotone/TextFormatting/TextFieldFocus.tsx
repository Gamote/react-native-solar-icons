import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextFieldFocus = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M8.25 15.5a.75.75 0 0 0 1.5 0zm3.414-6.748.498-.56zm-.414 1.673a.75.75 0 0 0 1.5 0zm.498-1.59.56-.497zm-5.412-.083-.498-.56zM5.25 10.425a.75.75 0 0 0 1.5 0zm1.002-1.59-.56-.497zM7 14.75a.75.75 0 0 0 0 1.5zm4 1.5a.75.75 0 0 0 0-1.5zm-3.075-7H9v-1.5H7.925zM9 9.25h1.075v-1.5H9zm.75 6.25v-7h-1.5v7zm.325-6.25c.455 0 .726.001.922.026.177.022.186.052.17.037l.995-1.121c-.3-.268-.651-.364-.98-.405-.31-.038-.691-.037-1.107-.037zm2.675 1.175c0-.416.001-.797-.037-1.107-.041-.329-.137-.68-.405-.98l-1.121.996c-.015-.017.015-.008.037.17.025.195.026.466.026.921zm-1.584-1.112.02.02 1.122-.995a2 2 0 0 0-.146-.146zM7.925 7.75c-.416 0-.797-.001-1.107.037-.329.041-.68.137-.98.405l.996 1.121c-.017.015-.008-.015.17-.037.195-.025.466-.026.921-.026zM6.75 10.425c0-.455.001-.726.026-.922.022-.177.052-.186.037-.17l-1.121-.995c-.268.3-.364.651-.405.98-.038.31-.037.691-.037 1.107zm-.912-2.233q-.077.069-.146.146l1.121.996.02-.02zM7 16.25h4v-1.5H7z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 4h-2C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172C22 6.343 22 8.229 22 12s0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20"
      opacity={0.5}
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M15 2v20" />
  </Svg>
);
export default SvgTextFieldFocus;
