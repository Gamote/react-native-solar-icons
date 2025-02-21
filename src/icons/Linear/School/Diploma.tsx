import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiploma = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={16} r={3} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m12 19.26-2.263 2.17c-.324.31-.486.465-.623.519-.313.122-.66.018-.824-.25-.072-.116-.095-.327-.14-.75-.025-.238-.038-.357-.077-.457a.83.83 0 0 0-.5-.48c-.104-.037-.229-.05-.477-.073-.44-.044-.661-.065-.783-.134a.617.617 0 0 1-.26-.79c.056-.132.218-.287.542-.598L8.073 17l1.04-1.04M12 19.26l2.263 2.17c.324.31.486.465.623.519.313.122.66.018.824-.25.072-.116.095-.327.14-.75.025-.238.038-.357.077-.457a.83.83 0 0 1 .5-.48c.105-.037.229-.05.477-.073.44-.044.661-.065.783-.134a.617.617 0 0 0 .26-.79c-.056-.132-.218-.287-.542-.598L15.926 17 15 16.073"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M17.32 17.996c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v4c0 2.828 0 4.243.879 5.121.768.769 1.946.865 4.121.877"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 6h6M7 9.5h10"
    />
  </Svg>
);
export default SvgDiploma;
