import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchiveDown = (props: SvgProps) => (
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
      d="M3.955 2.25h16.09c.433 0 .83 0 1.152.043.356.048.731.16 1.04.47s.422.684.47 1.04c.043.323.043.72.043 1.152v.09c0 .433 0 .83-.043 1.152-.048.356-.16.731-.47 1.04-.293.294-.647.41-.987.462v5.357c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-1.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V7.7c-.34-.052-.694-.168-.987-.462-.31-.309-.422-.684-.47-1.04-.043-.323-.043-.72-.043-1.152v-.09c0-.433 0-.83.043-1.152.048-.356.16-.731.47-1.04s.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043m.295 5.5V13c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h1c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289V7.75h-7v6.296l1.693-1.881a.75.75 0 0 1 1.114 1.003l-3 3.334a.75.75 0 0 1-1.114 0l-3-3.334a.75.75 0 0 1 1.114-1.003l1.693 1.88V7.75zM20 6.25c.493 0 .787-.002.997-.03a.7.7 0 0 0 .177-.042l.003-.001.001-.003.005-.01a.7.7 0 0 0 .037-.167c.028-.21.03-.504.03-.997s-.002-.787-.03-.997a.7.7 0 0 0-.042-.177l-.001-.003-.003-.001-.01-.005a.7.7 0 0 0-.167-.037c-.21-.028-.504-.03-.997-.03H4c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042l-.003.001-.001.003-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997s.002.787.03.997a.7.7 0 0 0 .042.177l.001.003.003.001.01.005c.022.009.07.024.167.037.21.028.504.03.997.03zM2.823 6.177"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgArchiveDown;
