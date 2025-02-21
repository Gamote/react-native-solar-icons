import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCondicioner = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 7.57143C2 5.15731 2 3.95025 2.65451 3.12953C2.79456 2.9539 2.9539 2.79456 3.12953 2.65451C3.95025 2 5.15731 2 7.57143 2H16.4286C18.8427 2 20.0497 2 20.8705 2.65451C21.0461 2.79456 21.2054 2.9539 21.3455 3.12953C22 3.95025 22 5.15731 22 7.57143C22 10.7902 22 12.3997 21.1273 13.494C20.9406 13.7281 20.7281 13.9406 20.494 14.1273C19.3997 15 17.7903 15 14.5714 15H9.42857C6.20975 15 4.60034 15 3.50604 14.1273C3.27187 13.9406 3.05942 13.7281 2.87267 13.494C2 12.3997 2 10.7903 2 7.57143Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M7.00008 17.5L6.69345 17.9599C6.30444 18.5435 6.43904 19.3292 7.00008 19.75C7.56111 20.1708 7.69571 20.9565 7.3067 21.5401L7.00008 22M12.0001 17.5L11.6935 17.9599C11.3044 18.5435 11.439 19.3292 12.0001 19.75C12.5611 20.1708 12.6957 20.9565 12.3067 21.5401L12.0001 22M17.0001 17.5L16.6935 17.9599C16.3044 18.5435 16.439 19.3292 17.0001 19.75C17.5611 20.1708 17.6957 20.9565 17.3067 21.5401L17.0001 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M18.0001 14.5C18.0001 14.0353 18.0001 13.803 17.9616 13.6098C17.8038 12.8164 17.1836 12.1962 16.3902 12.0384C16.197 12 15.9647 12 15.5001 12H9.00005C8.06817 12 7.60223 12 7.23468 12.1522C6.74463 12.3552 6.35528 12.7446 6.15229 13.2346C6.03009 13.5297 6.00598 13.8881 6.00122 14.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 8.5H18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 6H18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgCondicioner;
