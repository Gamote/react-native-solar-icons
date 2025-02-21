import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBombEmoji = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M9.5 22C13.6421 22 17 18.6421 17 14.5C17 10.3579 13.6421 7 9.5 7C5.35786 7 2 10.3579 2 14.5C2 18.6421 5.35786 22 9.5 22Z"
      fill="black"
    />
    <Path
      d="M17.9811 2.35316C18.1668 1.88228 18.8332 1.88228 19.0189 2.35316L19.6733 4.01242C19.73 4.15618 19.8438 4.26998 19.9876 4.32668L21.6468 4.98108C22.1177 5.16679 22.1177 5.83321 21.6468 6.01892L19.9876 6.67332C19.8438 6.73002 19.73 6.84382 19.6733 6.98758L19.0189 8.64684C18.8332 9.11772 18.1668 9.11772 17.9811 8.64684L17.3267 6.98758C17.27 6.84382 17.1562 6.73002 17.0124 6.67332L15.3532 6.01892C14.8823 5.83321 14.8823 5.16679 15.3532 4.98108L17.0124 4.32668C17.1562 4.26998 17.27 4.15618 17.3267 4.01242L17.9811 2.35316Z"
      fill="black"
    />
    <Path
      opacity={0.7}
      d="M16.4772 6.46222L14.2466 8.69288C14.6344 9.01026 14.9899 9.36572 15.3072 9.75356L17.5378 7.52291L17.3267 6.98758C17.27 6.84381 17.1562 6.73002 17.0124 6.67332L16.4772 6.46222Z"
      fill="black"
    />
    <Path
      d="M12 16.75C12.4142 16.75 12.75 16.4142 12.75 16C12.75 15.5858 12.4142 15.25 12 15.25H10C9.58579 15.25 9.25 15.5858 9.25 16C9.25 16.4142 9.58579 16.75 10 16.75H12Z"
      fill="black"
    />
    <Path
      d="M14 12.5C14 13.3284 13.5523 14 13 14C12.4477 14 12 13.3284 12 12.5C12 11.6716 12.4477 11 13 11C13.5523 11 14 11.6716 14 12.5Z"
      fill="black"
    />
    <Path
      d="M9 14C9.55228 14 10 13.3284 10 12.5C10 11.6716 9.55228 11 9 11C8.44772 11 8 11.6716 8 12.5C8 13.3284 8.44772 14 9 14Z"
      fill="black"
    />
  </Svg>
);
export default SvgBombEmoji;
