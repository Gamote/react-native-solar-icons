import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartShine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m10.785 15.354.469-.585zM12 9.9l-.545.516a.75.75 0 0 0 1.09 0zm1.215 5.453.47.585zm-1.961-.585c-.633-.507-1.246-.945-1.738-1.508-.466-.533-.766-1.123-.766-1.881h-1.5c0 1.218.504 2.144 1.136 2.868.607.694 1.385 1.255 1.93 1.691zm-2.504-3.39c0-.714.397-1.283.891-1.513.444-.206 1.105-.199 1.814.55l1.09-1.03c-1.091-1.153-2.43-1.394-3.536-.88-1.056.49-1.759 1.611-1.759 2.874zm1.566 4.56c.2.16.444.356.7.508.253.15.59.303.984.303v-1.5c-.007 0-.069-.004-.219-.093a5 5 0 0 1-.527-.388zm3.368 0c.545-.436 1.323-.997 1.93-1.691.632-.723 1.136-1.65 1.136-2.868h-1.5c0 .758-.3 1.348-.766 1.881-.492.563-1.105 1-1.738 1.508zm3.066-4.56c0-1.262-.703-2.383-1.759-2.873-1.106-.514-2.445-.273-3.536.88l1.09 1.03c.709-.749 1.37-.756 1.814-.55.494.23.891.799.891 1.514zm-4.004 3.39c-.214.172-.378.3-.527.388s-.212.093-.219.093v1.5c.393 0 .731-.153.985-.303.255-.152.499-.347.7-.508z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v2M12 20v2M2 12h2M20 12h2M6 18l.343-.343M17.657 6.344 18 6M18 18l-.343-.343M6.343 6.344 6 6"
    />
  </Svg>
);
export default SvgHeartShine;
