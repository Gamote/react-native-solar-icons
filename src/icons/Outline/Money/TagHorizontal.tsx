import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTagHorizontal = (props: SvgProps) => (
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
      d="M10.663 3.25h2.733c1.081 0 1.948 0 2.658.07.735.073 1.36.225 1.948.562.587.336 1.04.8 1.486 1.403.432.583.89 1.34 1.464 2.29l.72 1.192c.48.793.869 1.437 1.133 1.996.276.584.445 1.13.445 1.737s-.169 1.153-.445 1.737c-.264.56-.653 1.203-1.133 1.996l-.72 1.192c-.574.95-1.032 1.707-1.465 2.29-.446.602-.898 1.067-1.485 1.403s-1.213.489-1.948.562c-.71.07-1.576.07-2.658.07h-2.733c-1.889 0-3.385 0-4.556-.163-1.207-.168-2.179-.521-2.942-1.31-.76-.786-1.098-1.78-1.258-3.017-.157-1.206-.157-2.748-.157-4.705v-.11c0-1.957 0-3.5.157-4.705.16-1.236.498-2.23 1.258-3.017.763-.789 1.735-1.142 2.942-1.31 1.171-.163 2.667-.163 4.556-.163m-4.35 1.648c-1.03.144-1.63.413-2.07.868-.444.46-.709 1.089-.849 2.167-.143 1.098-.144 2.543-.144 4.567s.001 3.469.144 4.567c.14 1.078.405 1.708.85 2.167.44.455 1.038.724 2.07.867 1.056.147 2.447.149 4.407.149h2.637c1.128 0 1.92 0 2.548-.063.611-.06 1.008-.175 1.35-.37.343-.197.65-.487 1.027-.995.385-.52.807-1.216 1.404-2.205l.681-1.126c.505-.835.853-1.413 1.082-1.896.22-.466.3-.787.3-1.095s-.08-.629-.3-1.095c-.229-.483-.577-1.061-1.082-1.896l-.68-1.126c-.598-.988-1.02-1.685-1.405-2.205-.377-.508-.684-.798-1.027-.994s-.739-.31-1.35-.371c-.628-.062-1.42-.063-2.548-.063h-2.637c-1.96 0-3.351.002-4.407.148m1.187 2.347a.75.75 0 0 1 .75.75V17a.75.75 0 0 1-1.5 0V7.995a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTagHorizontal;
