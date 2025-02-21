import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCrownStar = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 10.75c-.502 0-.814.325-.986.55-.165.214-.33.511-.5.816l-.121.218-.057.1-.099.023-.238.054c-.327.074-.653.148-.903.246-.276.109-.65.32-.795.785-.142.456.037.841.193 1.09.145.23.365.486.59.749l.16.188.083.097-.013.135-.024.25c-.034.352-.067.692-.055.964.012.285.08.717.468 1.01.4.304.84.238 1.12.158.258-.074.563-.215.87-.356l.222-.103.085-.038.037.017.048.021.223.103c.306.141.611.282.869.356.28.08.72.146 1.12-.157.387-.294.456-.726.468-1.011.012-.272-.02-.613-.055-.965l-.024-.249q-.008-.082-.012-.135.03-.039.082-.097l.16-.188c.225-.263.445-.52.59-.75.156-.248.335-.633.193-1.09-.144-.463-.519-.675-.795-.784-.25-.098-.576-.172-.903-.246l-.238-.054-.1-.023-.056-.1-.121-.218c-.17-.305-.335-.602-.5-.816-.172-.225-.484-.55-.986-.55m-.199 2.138q.112-.204.199-.353.086.149.199.353l.098.176.023.04c.078.144.208.382.425.547.221.168.488.226.643.26l.044.01.19.042c.176.04.319.072.44.103-.079.098-.182.219-.316.376l-.13.152-.03.035c-.108.124-.282.325-.363.584-.08.256-.052.52-.035.686l.005.047.02.203c.018.188.032.338.042.46-.105-.045-.223-.1-.364-.165l-.179-.082-.04-.019c-.144-.068-.393-.185-.672-.185s-.528.117-.672.185l-.04.019-.179.082q-.209.097-.364.166c.01-.123.024-.273.042-.461l.02-.203.005-.047c.017-.166.045-.43-.035-.686-.08-.26-.255-.46-.363-.584l-.03-.035-.13-.152a21 21 0 0 1-.316-.376c.121-.03.264-.063.44-.103l.19-.043.044-.01c.155-.033.422-.091.643-.26.217-.164.347-.402.425-.545l.023-.04zm-1.062 4.124v-.003zm2.522 0v-.003z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 1.25c-.706 0-1.155.5-1.457.947-.306.455-.625 1.11-1.004 1.886L7.276 8.72c-.219.448-.36.735-.482.934a1 1 0 0 1-.142.192.2.2 0 0 1-.087.017 1 1 0 0 1-.156-.122c-.162-.15-.364-.379-.684-.743l-.029-.033C5.124 8.313 4.656 7.78 4.27 7.42a3.3 3.3 0 0 0-.623-.477 1.4 1.4 0 0 0-.819-.196c-.473.042-.892.281-1.187.637-.355.429-.395 1.029-.39 1.547.004.56.074 1.303.16 2.227l.238 2.522c.185 1.966.33 3.505.58 4.701.256 1.218.64 2.183 1.375 2.933.745.763 1.66 1.111 2.792 1.277 1.088.159 2.463.159 4.185.159h2.838c1.722 0 3.097 0 4.185-.16 1.132-.165 2.047-.513 2.792-1.276.734-.75 1.119-1.715 1.374-2.933.251-1.196.396-2.735.581-4.701l.238-2.522c.087-.924.157-1.667.16-2.227.005-.518-.035-1.118-.39-1.547a1.74 1.74 0 0 0-1.187-.637 1.4 1.4 0 0 0-.819.196 3.3 3.3 0 0 0-.623.477c-.386.36-.854.893-1.426 1.545l-.03.033c-.32.364-.521.593-.683.743a1 1 0 0 1-.155.122.2.2 0 0 1-.088-.017.9.9 0 0 1-.142-.192c-.122-.199-.263-.486-.482-.934l-2.263-4.637c-.379-.777-.698-1.431-1.004-1.886-.302-.448-.75-.947-1.457-.947m-1.139 3.544c.412-.844.686-1.402.926-1.759.102-.15.172-.226.213-.263.04.037.11.112.213.263.24.357.514.915.926 1.759l2.253 4.616c.198.407.371.76.536 1.03.17.275.392.568.74.743.313.158.666.216 1.016.16.393-.062.691-.285.925-.501.227-.21.48-.498.768-.826l.025-.028c.608-.693 1.027-1.169 1.352-1.472.16-.15.266-.227.331-.263a.3.3 0 0 1 .113.08l.001.007c.01.03.054.172.05.58-.003.487-.066 1.165-.157 2.136l-.23 2.435c-.19 2.024-.328 3.479-.56 4.582-.229 1.09-.53 1.734-.978 2.193-.438.448-1 .704-1.937.84-.967.142-2.232.144-4.027.144h-2.72c-1.795 0-3.06-.002-4.027-.143-.937-.137-1.499-.393-1.937-.841-.448-.459-.75-1.103-.978-2.193-.232-1.103-.37-2.558-.56-4.582l-.23-2.435c-.09-.971-.154-1.65-.158-2.137-.003-.407.042-.55.05-.58l.003-.005a.3.3 0 0 1 .111-.082h.001c.065.037.17.114.331.264.325.303.744.779 1.352 1.472l.025.028c.288.328.541.617.768.826.234.216.532.44.925.502.35.055.703-.003 1.016-.161.348-.175.57-.468.74-.743.165-.27.338-.623.536-1.03zm10.337 3.54.005.006zM12.044 2.74l-.01.004q.01-.006.01-.004m-.079.004-.009-.004q0-.001.01.004"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCrownStar;
