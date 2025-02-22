import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlobus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 9.68699C22 6.63263 20.6722 3.88838 18.5623 2M4 16.5623C5.88838 18.6722 8.63263 20 11.687 20C15.8429 20 19.4247 17.5418 21.0576 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7 4.55263C7.58518 5.10525 8.79066 6.61576 8.93111 8.2368C9.06238 9.75203 10.0268 10.9832 11.5 10.9999C12.0662 11.0063 12.6388 10.5822 12.6373 9.99503C12.6368 9.81346 12.6079 9.62782 12.5627 9.45703C12.4998 9.21948 12.4942 8.94619 12.625 8.66662C13.0824 7.68861 13.982 7.42589 14.6949 6.89475C15.0111 6.65918 15.2995 6.41067 15.4266 6.2105C15.7777 5.65788 16.1289 4.55263 15.9533 4"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M19 11C18.7804 11.6207 18.625 13.25 16.1455 13.2759C16.1455 13.2759 13.9497 13.2759 13.291 14.5172C12.764 15.5103 13.0714 16.5862 13.291 17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 22V20"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 22H10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 22H12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5.93648 13.5C5.34088 12.4704 5 11.275 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10C19 13.866 15.866 17 12 17C10.725 17 9.52961 16.6591 8.5 16.0635"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgGlobus;
