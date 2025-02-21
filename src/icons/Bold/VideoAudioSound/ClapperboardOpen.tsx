import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClapperboardOpen = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M4 11h12c1.886 0 2.828 0 3.414.586S20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16zM13.918 3.166 9.15 4.444a.8.8 0 0 1 .017.269l-.604 5.064 4.779-1.28a.8.8 0 0 1-.024-.297zM14.841 8.095l3.408-.913c.224-.06.336-.09.425-.134a1 1 0 0 0 .555-.962c-.006-.098-.036-.21-.096-.435-.18-.673-.271-1.01-.402-1.275a3 3 0 0 0-2.887-1.666 3 3 0 0 0-.413.062q.03.125.014.258zM7.063 10.18a.8.8 0 0 1-.023-.298l.6-5.034-.103.028C5.73 5.36 4.829 5.602 4.26 6.17a3 3 0 0 0-.776 1.345C3.276 8.29 3.517 9.195 4 11z"
    />
  </Svg>
);
export default SvgClapperboardOpen;
