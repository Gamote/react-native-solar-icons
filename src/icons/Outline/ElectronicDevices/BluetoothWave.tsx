import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBluetoothWave = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9098 2.77415L13.7426 4.07569C14.2829 4.4593 14.7547 4.79434 15.0842 5.10946C15.435 5.44493 15.75 5.87398 15.75 6.45883C15.75 7.04368 15.435 7.47272 15.0842 7.8082C14.7547 8.12332 14.2829 8.45836 13.7426 8.84197L9.29535 12.0001L13.7426 15.1582C14.2829 15.5418 14.7547 15.8769 15.0842 16.192C15.435 16.5274 15.75 16.9565 15.75 17.5413C15.75 18.1262 15.435 18.5552 15.0842 18.8907C14.7547 19.2058 14.2829 19.5409 13.7426 19.9245L11.9098 21.226C11.1803 21.7441 10.5644 22.1815 10.0535 22.4421C9.5333 22.7075 8.89823 22.9071 8.26305 22.5822C7.62606 22.2563 7.41913 21.6232 7.33368 21.0463C7.24992 20.4808 7.24996 19.7277 7.25 18.837L7.25 13.4406L3.4301 16.1145C3.09076 16.352 2.62312 16.2695 2.38558 15.9302C2.14804 15.5908 2.23057 15.1232 2.56991 14.8857L6.69216 12.0001L2.56991 9.11451C2.23057 8.87698 2.14804 8.40933 2.38558 8.06999C2.62312 7.73065 3.09076 7.64813 3.4301 7.88566L7.25 10.5596V5.22466C7.25 5.20408 7.25 5.18358 7.25 5.16315C7.24996 4.27246 7.24992 3.51937 7.33368 2.95389C7.41913 2.37699 7.62606 1.74391 8.26305 1.41801C8.89823 1.09303 9.5333 1.29272 10.0535 1.55807C10.5644 1.81866 11.1803 2.25608 11.9098 2.77415ZM8.75 13.4526V18.7755C8.75 19.7444 8.75201 20.3844 8.81749 20.8265C8.84918 21.0405 8.88909 21.1531 8.91864 21.2092C8.93162 21.2339 8.94088 21.2434 8.94088 21.2434C8.94088 21.2434 8.94134 21.2443 8.94626 21.2468C8.95075 21.2491 8.95297 21.2494 8.95297 21.2494C8.95498 21.2497 8.96797 21.2515 8.99655 21.2476C9.06127 21.2386 9.17789 21.2049 9.37194 21.1059C9.77265 20.9015 10.2983 20.5306 11.0911 19.9677L12.829 18.7335C13.4278 18.3083 13.8071 18.0365 14.0474 17.8067C14.1611 17.698 14.2119 17.6274 14.2343 17.5867C14.2502 17.5578 14.2501 17.5479 14.25 17.5423V17.5404C14.2501 17.5348 14.2502 17.5249 14.2343 17.4959C14.2119 17.4553 14.1611 17.3847 14.0474 17.276C13.8071 17.0462 13.4278 16.7744 12.829 16.3492L8.75 13.4526ZM8.75 10.5476V5.22466C8.75 4.25579 8.75201 3.61576 8.81749 3.17367C8.84918 2.95971 8.88909 2.84705 8.91864 2.79096C8.93162 2.76632 8.94088 2.75681 8.94088 2.75681C8.94088 2.75681 8.94134 2.7559 8.94626 2.75338C8.95075 2.75108 8.95296 2.75078 8.95296 2.75078C8.95497 2.75048 8.96797 2.74867 8.99655 2.75261C9.06127 2.76153 9.17789 2.7953 9.37194 2.89428C9.77265 3.09867 10.2983 3.46957 11.0911 4.03251L12.829 5.26669C13.4278 5.69187 13.8071 5.96364 14.0474 6.19347C14.1611 6.30221 14.2119 6.37282 14.2343 6.41343C14.2502 6.4424 14.2501 6.4523 14.25 6.45784V6.45982C14.2501 6.46536 14.2502 6.47526 14.2343 6.50423C14.2119 6.54484 14.1611 6.61544 14.0474 6.72419C13.8071 6.95402 13.4278 7.22579 12.829 7.65097L8.75 10.5476ZM18.4828 4.45698C18.7827 4.17132 19.2574 4.1829 19.5431 4.48285L19.0249 4.97641C19.5431 4.48285 19.5431 4.48285 19.5431 4.48285L19.5444 4.48418L19.5458 4.48571L19.5493 4.48938L19.5583 4.49911C19.5652 4.50667 19.574 4.51637 19.5845 4.52824C19.6055 4.55197 19.6333 4.58437 19.6669 4.62561C19.7343 4.70809 19.825 4.82596 19.9311 4.98063C20.1432 5.29007 20.4166 5.74646 20.6866 6.36079C21.2278 7.59201 21.75 9.44466 21.75 12.0001C21.75 14.5555 21.2278 16.4082 20.6866 17.6394C20.4166 18.2537 20.1432 18.7101 19.9311 19.0195C19.825 19.1742 19.7343 19.2921 19.6669 19.3746C19.6333 19.4158 19.6055 19.4482 19.5845 19.4719C19.574 19.4838 19.5652 19.4935 19.5583 19.5011L19.5493 19.5108L19.5458 19.5145L19.5444 19.516C19.5444 19.516 19.5431 19.5173 19.0249 19.0238L19.5431 19.5173C19.2574 19.8173 18.7827 19.8289 18.4828 19.5432C18.1841 19.2587 18.1713 18.7868 18.4533 18.4866L18.4556 18.4842L18.4549 18.4849L18.4533 18.4866L18.4604 18.4787C18.4688 18.4693 18.4839 18.4518 18.5049 18.426C18.547 18.3745 18.6125 18.29 18.694 18.1713C18.8568 17.9338 19.0834 17.559 19.3134 17.0358C19.7722 15.992 20.25 14.3447 20.25 12.0001C20.25 9.65551 19.7722 8.00817 19.3134 6.96439C19.0834 6.44121 18.8568 6.06636 18.694 5.82892C18.6125 5.71015 18.547 5.62568 18.5049 5.57417C18.4839 5.54842 18.4688 5.53092 18.4604 5.52149L18.4536 5.51387L18.4549 5.51523L18.4558 5.51618M18.4828 4.45698C18.1841 4.74146 18.1716 5.21373 18.4536 5.51387ZM16.6507 7.3364C17.0172 7.14348 17.4708 7.28423 17.6637 7.65078L17 8.00009C17.6637 7.65078 17.6637 7.65078 17.6637 7.65078L17.6645 7.65231L17.6657 7.65455L17.6691 7.66111L17.68 7.68246C17.6891 7.70029 17.7016 7.72529 17.717 7.75701C17.748 7.82044 17.7908 7.91094 17.8416 8.02517C17.943 8.25329 18.0768 8.57789 18.2103 8.97181C18.4751 9.75308 18.75 10.8389 18.75 12.0001C18.75 13.1613 18.4751 14.2471 18.2103 15.0284C18.0768 15.4223 17.943 15.7469 17.8416 15.975C17.7908 16.0892 17.748 16.1797 17.717 16.2432C17.7016 16.2749 17.6891 16.2999 17.68 16.3177L17.6691 16.3391L17.6657 16.3456L17.6645 16.3479L17.6639 16.3491C17.6639 16.3491 17.6637 16.3494 17 16.0001L17.6639 16.3491C17.4709 16.7156 17.0172 16.8567 16.6507 16.6638C16.2845 16.471 16.1436 16.0181 16.3358 15.6518M16.3363 15.6508L16.3425 15.6388C16.3481 15.6277 16.357 15.6099 16.3689 15.5855C16.3926 15.5368 16.4279 15.4625 16.4709 15.3658C16.557 15.172 16.6732 14.8904 16.7897 14.5468C17.0249 13.8531 17.25 12.9389 17.25 12.0001C17.25 11.0613 17.0249 10.1471 16.7897 9.45337C16.6732 9.10979 16.557 8.82814 16.4709 8.63438C16.4279 8.53767 16.3926 8.46333 16.3689 8.41465C16.357 8.39032 16.3481 8.37244 16.3425 8.36141L16.3367 8.35009L16.3362 8.34912C16.1435 7.98263 16.2842 7.52927 16.6507 7.3364"
      fill="black"
    />
  </Svg>
);
export default SvgBluetoothWave;
