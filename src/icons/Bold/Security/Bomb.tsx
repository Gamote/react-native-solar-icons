import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBomb = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 10.3579 5.35786 7 9.5 7C13.6421 7 17 10.3579 17 14.5Z"
      fill="black"
    />
    <Path
      d="M17.9811 2.35316C18.1668 1.88228 18.8332 1.88228 19.0189 2.35316L19.6733 4.01242C19.73 4.15618 19.8438 4.26998 19.9876 4.32668L21.6468 4.98108C22.1177 5.16679 22.1177 5.83321 21.6468 6.01892L19.9876 6.67332C19.8438 6.73002 19.73 6.84382 19.6733 6.98758L19.0189 8.64684C18.8332 9.11772 18.1668 9.11772 17.9811 8.64684L17.3267 6.98758C17.27 6.84382 17.1562 6.73002 17.0124 6.67332L15.3532 6.01892C14.8823 5.83321 14.8823 5.16679 15.3532 4.98108L17.0124 4.32668C17.1562 4.26998 17.27 4.15618 17.3267 4.01242L17.9811 2.35316Z"
      fill="black"
    />
    <Path
      d="M16.0175 9.04328L16.7669 8.29386L16.4669 7.53312L15.7063 7.23315L14.9568 7.98261C15.3407 8.30436 15.6957 8.6594 16.0175 9.04328Z"
      fill="black"
    />
  </Svg>
);
export default SvgBomb;
