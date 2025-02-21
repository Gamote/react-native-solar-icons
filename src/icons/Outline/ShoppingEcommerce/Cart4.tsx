import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCart4 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M10 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M14.665 2.33a.75.75 0 0 1 1.006.335l1.813 3.626q.641.031 1.17.106c1.056.152 1.93.477 2.551 1.246.621.768.757 1.69.684 2.755-.07 1.03-.35 2.331-.698 3.957l-.451 2.106c-.235 1.097-.426 1.986-.666 2.681-.25.724-.579 1.32-1.142 1.774-.562.455-1.214.653-1.974.745-.73.09-1.64.09-2.76.09H9.803c-1.122 0-2.031 0-2.761-.09-.76-.092-1.412-.29-1.974-.745-.563-.454-.892-1.05-1.142-1.774-.24-.695-.43-1.584-.666-2.68l-.451-2.107c-.348-1.626-.627-2.926-.698-3.957-.073-1.065.063-1.987.684-2.755.62-.769 1.495-1.094 2.55-1.246q.53-.074 1.17-.106L8.33 2.665a.75.75 0 0 1 1.342.67L8.212 6.253q.546-.003 1.149-.002h5.278q.603 0 1.149.002l-1.459-2.916a.75.75 0 0 1 .336-1.007M5.732 7.858l-.403.806a.75.75 0 0 0 1.342.67l.787-1.574c.57-.01 1.22-.01 1.964-.01h5.156c.744 0 1.394 0 1.964.01l.787 1.575a.75.75 0 1 0 1.342-.671l-.403-.806.174.023c.884.127 1.317.358 1.597.704.275.34.41.802.356 1.664H3.605c-.054-.862.081-1.324.356-1.664.28-.346.714-.577 1.597-.704zM4.288 14.1a81 81 0 0 1-.481-2.35h16.386c-.12.66-.284 1.43-.481 2.35l-.429 2c-.247 1.155-.42 1.954-.627 2.553-.2.579-.404.885-.667 1.097-.262.212-.604.348-1.212.422-.629.077-1.447.078-2.628.078H9.852c-1.181 0-2-.001-2.628-.078-.607-.074-.95-.21-1.212-.422-.263-.212-.468-.518-.667-1.097-.207-.599-.38-1.398-.627-2.553z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCart4;
