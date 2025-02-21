import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextField = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M7.884 7.75c-.4 0-.766 0-1.066.037-.329.041-.68.137-.98.405a2 2 0 0 0-.146.146c-.268.3-.364.651-.405.98-.037.3-.037.666-.037 1.066v.041a.75.75 0 0 0 1.5 0c0-.455.001-.726.026-.922.024-.195.227-.227.227-.227.196-.025.467-.026.922-.026h.325v5.5H7a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H9.75v-5.5h.325c.455 0 .726.001.922.026 0 0 .203.032.227.227.025.196.026.467.026.922a.75.75 0 0 0 1.5 0v-.041c0-.4 0-.766-.037-1.066-.041-.329-.137-.68-.405-.98a2 2 0 0 0-.146-.146c-.3-.268-.651-.364-.98-.405-.3-.037-.666-.037-1.066-.037z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M14.056 3.25H9.944c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153M3.702 5.702c.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812s.677 1.003.812 2.009c.138 1.028.14 2.382.14 4.289s-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.009.812c-1.027.138-2.382.14-4.289.14h-4c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.138-1.028-.14-2.382-.14-4.289s.002-3.261.14-4.29c.135-1.005.389-1.585.812-2.008"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTextField;
