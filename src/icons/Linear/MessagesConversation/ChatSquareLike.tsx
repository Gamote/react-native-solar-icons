import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatSquareLike = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m13.087 21.388.645.382zm.542-.916-.646-.382zm-3.258 0-.645.382zm.542.916.646-.382zm-8.532-5.475.693-.287zm5.409 3.078-.013.75zm-2.703-.372-.287.693zm16.532-2.706.693.287zm-5.409 3.078-.012-.75zm2.703-.372.287.693zm.7-15.882-.392.64zm1.65 1.65.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56.541-.916-1.29-.764-.543.916zm-4.007-.916.542.916 1.29-.764-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037.198.022.275.054.32.08l.754-1.297c-.293-.17-.598-.24-.909-.274-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08.212-.023.49-.03.93-.037zM10.99 14.308l.445-.604zM12 8.106l-.536.525a.75.75 0 0 0 1.072 0zm1.01 6.202-.445-.604zM12 14.81v-.75zm-.565-1.106c-.644-.474-1.468-1.147-2.123-1.896-.68-.775-1.062-1.502-1.062-2.093h-1.5c0 1.16.699 2.242 1.433 3.081.758.865 1.679 1.613 2.362 2.116zM8.25 9.715c0-1.107.495-1.69 1.003-1.88.518-.194 1.342-.09 2.211.797l1.072-1.05C11.38 6.401 9.955 5.97 8.728 6.428 7.493 6.89 6.75 8.145 6.75 9.715zm5.205 5.198c.683-.504 1.604-1.25 2.362-2.116.734-.839 1.433-1.92 1.433-3.081h-1.5c0 .591-.383 1.318-1.062 2.093-.655.749-1.48 1.422-2.123 1.896zm3.795-5.197c0-1.57-.743-2.825-1.978-3.287-1.227-.458-2.652-.027-3.808 1.153l1.072 1.05c.869-.888 1.694-.99 2.21-.798.51.19 1.004.774 1.004 1.882zm-6.705 5.197c.392.289.83.648 1.455.648v-1.5c-.015 0-.032.003-.101-.035a5 5 0 0 1-.464-.32zm2.02-1.208c-.243.18-.366.268-.464.321-.07.038-.086.035-.101.035v1.5c.625 0 1.063-.36 1.455-.648z"
    />
  </Svg>
);
export default SvgChatSquareLike;
