import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBlackHole = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#000" opacity={0.5}>
      <Path d="M12.735 14.654a.75.75 0 0 1-.23-1.44c.224-.094.441-.237.645-.44a.75.75 0 0 1 .996-.058.75.75 0 0 1 .705.954c-.21.746-.6 1.477-1.105 2.147a.75.75 0 0 1-1.197-.903q.098-.13.186-.26M10.487 14.695a.75.75 0 0 0 .953-.707.75.75 0 0 0-.058-.994 2 2 0 0 1-.442-.646.75.75 0 0 0-1.438.23 7 7 0 0 1-.26-.186.75.75 0 0 0-.903 1.198c.67.505 1.4.894 2.148 1.105M6.676 11.946a.75.75 0 0 0 1.18-.925 8 8 0 0 1-1.01-1.677.75.75 0 1 0-1.372.604c.317.72.728 1.394 1.202 1.998M4.84 7.672a.75.75 0 0 0 1.49-.178 5.1 5.1 0 0 1 .108-1.862.75.75 0 0 0-1.454-.366 6.6 6.6 0 0 0-.144 2.406M6.008 3.08a.75.75 0 1 0 1.218.875q.265-.37.62-.727a.75.75 0 0 0-1.06-1.061 7.4 7.4 0 0 0-.778.912M11.763 9.086a7 7 0 0 0-.187.26.75.75 0 0 1 .23 1.439 2 2 0 0 0-.645.441.75.75 0 0 1-.995.058.752.752 0 0 1-.706-.954c.211-.746.6-1.477 1.105-2.147a.75.75 0 0 1 1.198.903M13.825 9.305a.75.75 0 0 0-.954.707.75.75 0 0 0 .059.994c.204.204.347.421.441.645a.75.75 0 0 0 1.439-.23q.13.09.26.187a.75.75 0 0 0 .902-1.198c-.67-.505-1.4-.894-2.147-1.105M17.635 12.054a.75.75 0 1 0-1.18.925c.4.511.746 1.079 1.01 1.677a.75.75 0 0 0 1.372-.604 9.4 9.4 0 0 0-1.202-1.998M19.472 16.328a.75.75 0 1 0-1.49.178 5.1 5.1 0 0 1-.109 1.862.75.75 0 0 0 1.455.366 6.6 6.6 0 0 0 .143-2.406M18.304 20.92a.75.75 0 0 0-1.218-.875 6 6 0 0 1-.621.727.75.75 0 0 0 1.06 1.06q.44-.439.779-.911M12.082 7.573a.75.75 0 0 1 .127-1.053 9.4 9.4 0 0 1 1.998-1.202.75.75 0 0 1 .604 1.373 8 8 0 0 0-1.677 1.01.75.75 0 0 1-1.053-.128M15.828 5.517a.75.75 0 0 1 .656-.833 6.6 6.6 0 0 1 2.405.143.75.75 0 1 1-.366 1.455 5.1 5.1 0 0 0-1.862-.109.75.75 0 0 1-.834-.656M20.03 6.023a.75.75 0 0 1 1.046-.171q.472.339.912.778a.75.75 0 1 1-1.06 1.06 6 6 0 0 0-.728-.62.75.75 0 0 1-.17-1.047M12.103 17.48a.75.75 0 0 0-.926-1.18c-.511.4-1.078.746-1.677 1.01a.75.75 0 1 0 .604 1.372 9.4 9.4 0 0 0 1.999-1.202M7.828 19.316a.75.75 0 1 0-.178-1.49 5.1 5.1 0 0 1-1.862-.108.75.75 0 1 0-.366 1.454 6.6 6.6 0 0 0 2.406.144M3.236 18.148a.75.75 0 1 0 .875-1.218 6 6 0 0 1-.727-.62.75.75 0 0 0-1.06 1.06q.439.44.912.778" />
    </G>
    <Path
      fill="#000"
      d="M8.928 12.453c.406.836 1.016 1.541 1.825 1.942-.793.183-1.71.22-2.648.087C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968 1.612.228 3.27.042 4.558-.584.868-.422 1.596-1.065 1.988-1.921.142.741.162 1.578.041 2.432-.395 2.79-2.198 5.355-5.482 5.355a.75.75 0 0 0 0 1.5c4.316 0 6.513-3.436 6.968-6.645.228-1.612.042-3.27-.584-4.558-.346-.712-.84-1.33-1.48-1.745a7.7 7.7 0 0 1 1.99.027c2.792.396 5.356 2.198 5.356 5.483a.75.75 0 0 0 1.5 0c0-4.316-3.436-6.513-6.645-6.968-1.612-.228-3.27-.043-4.558.584-.692.336-1.294.812-1.709 1.425a7.6 7.6 0 0 1-.009-2.248c.396-2.79 2.198-5.355 5.483-5.355a.75.75 0 0 0 0-1.5c-4.316 0-6.513 3.436-6.968 6.645-.228 1.612-.043 3.27.584 4.558"
    />
  </Svg>
);
export default SvgBlackHole;
