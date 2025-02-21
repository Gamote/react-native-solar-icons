import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStars = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4221 3.07123C12.0479 3.42653 11.594 4.00042 10.9207 4.85639L10.5803 5.28906C10.5579 5.31757 10.5357 5.34596 10.5135 5.3742C10.2082 5.76387 9.92645 6.12349 9.53058 6.33471C9.12816 6.54943 8.67723 6.57441 8.20247 6.60071C8.16811 6.60261 8.13362 6.60452 8.09902 6.60651L7.5716 6.63684C6.5258 6.69698 5.83206 6.73909 5.3485 6.84356C4.88256 6.94422 4.81264 7.06139 4.78277 7.12156C4.74721 7.19316 4.69886 7.3445 4.89387 7.81891C5.09246 8.30205 5.46122 8.92913 6.01202 9.86018L6.29057 10.331C6.30806 10.3606 6.32548 10.3899 6.34278 10.4191C6.59739 10.8479 6.82654 11.2338 6.88683 11.6834C6.94664 12.1294 6.8304 12.5663 6.69941 13.0586C6.69051 13.0921 6.68153 13.1258 6.67254 13.1598L6.5296 13.7004C6.24727 14.7681 6.05799 15.491 5.99436 16.0208C5.9307 16.5508 6.02302 16.6697 6.05987 16.7095C6.0604 16.71 6.06096 16.7106 6.06156 16.7113C6.0859 16.7379 6.16713 16.8269 6.63372 16.773C7.08183 16.7213 7.68494 16.5627 8.56223 16.321C8.27738 16.0838 8.03042 15.8642 7.83799 15.6576C7.49803 15.2925 7.1756 14.8085 7.26467 14.1833C7.35441 13.5534 7.80376 13.1828 8.23534 12.9345C8.64882 12.6965 9.22397 12.4713 9.8858 12.2122L10.3071 12.0472C10.5194 11.964 10.6376 11.9171 10.7232 11.8754C10.7717 11.8517 10.7912 11.8383 10.7969 11.8338C10.8013 11.8279 10.8143 11.8084 10.837 11.76C10.8772 11.674 10.922 11.5554 11.0015 11.3421L11.1593 10.9187C11.4069 10.254 11.6223 9.67599 11.8533 9.25903C12.0949 8.82304 12.4581 8.36917 13.0858 8.26854C13.7083 8.16874 14.198 8.48018 14.5705 8.81299C14.9292 9.13357 15.3285 9.61137 15.7901 10.1638L16.0823 10.5134C16.2298 10.6899 16.3134 10.7891 16.3818 10.8589C16.4123 10.8901 16.431 10.9061 16.4414 10.9142C16.4464 10.9181 16.4494 10.9201 16.4508 10.921L16.4534 10.9225L16.456 10.9236C16.4574 10.9241 16.4607 10.9253 16.4666 10.9269C16.4789 10.9303 16.5025 10.9357 16.5453 10.9414C16.6413 10.9543 16.7698 10.9618 16.9985 10.9742L17.4518 10.9987C17.666 11.0103 17.8716 11.0214 18.0672 11.0339C18.5366 10.6206 18.8497 10.3167 19.0452 10.0614C19.2545 9.78797 19.2566 9.66436 19.247 9.59255C19.2375 9.52137 19.2053 9.38476 18.7962 9.13466C18.3719 8.87528 17.729 8.60536 16.7599 8.20206L16.271 7.99861C16.2391 7.98534 16.2073 7.97219 16.1757 7.9591C15.7344 7.77654 15.3179 7.60418 15.0079 7.26957C14.7031 6.94063 14.5528 6.50962 14.3888 6.03919C14.377 6.0054 14.3652 5.97141 14.3532 5.93724L14.1702 5.41542C13.8082 4.38345 13.5628 3.68957 13.3225 3.22878C13.0865 2.7763 12.9599 2.75625 12.9361 2.75248C12.9356 2.75239 12.9351 2.75231 12.9346 2.75224C12.9342 2.75216 12.9336 2.75206 12.933 2.75194C12.9108 2.74774 12.7873 2.72443 12.4221 3.07123ZM19.8916 11.3732C20.02 11.2376 20.1356 11.1046 20.2362 10.9732C20.5795 10.5248 20.816 10.0071 20.7337 9.3932C20.6355 8.66071 20.1413 8.19889 19.5786 7.85487C19.0428 7.52727 18.2896 7.2139 17.3948 6.84157L16.8473 6.61374C16.2495 6.36498 16.1671 6.31375 16.1082 6.25016C16.0437 6.18051 15.9918 6.07715 15.7686 5.44077L15.5654 4.86119C15.2289 3.90189 14.949 3.10367 14.6525 2.53514C14.3512 1.95748 13.9232 1.39902 13.1865 1.27354C12.4477 1.14768 11.8608 1.53575 11.3892 1.98345C10.926 2.42324 10.4051 3.08561 9.77987 3.88049L9.40136 4.36168C8.98559 4.89026 8.90508 4.96829 8.82447 5.01131C8.75085 5.05059 8.65886 5.07184 8.01291 5.10898L7.48548 5.13931C7.46415 5.14054 7.44289 5.14176 7.4217 5.14298C6.45684 5.19842 5.64395 5.24512 5.03175 5.37738C4.38848 5.51636 3.76896 5.79052 3.43928 6.45443C3.1153 7.10689 3.25305 7.77259 3.5065 8.38919C3.7515 8.98524 4.17812 9.70632 4.69042 10.5722L4.99957 11.0948C5.3366 11.6645 5.38557 11.7741 5.40014 11.8828C5.41522 11.9952 5.39514 12.123 5.22238 12.7764L5.06436 13.374C4.80093 14.3701 4.58272 15.1953 4.50506 15.8419C4.42595 16.5007 4.46246 17.1923 4.95951 17.7289C5.47112 18.2811 6.15973 18.3377 6.8057 18.2631C7.42603 18.1915 8.21529 17.9733 9.15261 17.7142L9.28101 17.6787L9.87862 17.3883C9.89408 17.402 9.90822 17.4148 9.92136 17.4271C9.95323 17.4571 9.96956 17.4754 9.97781 17.4856C9.98174 17.4904 9.98377 17.4934 9.98465 17.4947L9.98607 17.497L9.98709 17.4993C9.98762 17.5006 9.98882 17.5037 9.99051 17.5094C9.99407 17.5214 9.9998 17.5446 10.0063 17.587C10.0209 17.6823 10.0308 17.81 10.0473 18.038L10.0802 18.49C10.1319 19.2023 10.1767 19.8199 10.2812 20.2878C10.3904 20.7768 10.6083 21.3108 11.1706 21.5932C11.7349 21.8766 12.2931 21.7295 12.7484 21.5217C13.1829 21.3234 13.6995 20.9869 14.294 20.5998L14.6722 20.3536C14.8629 20.2294 14.9694 20.1607 15.0531 20.1154C15.0902 20.0953 15.1114 20.0862 15.1223 20.0822C15.1274 20.0803 15.1302 20.0795 15.131 20.0792L15.132 20.079L15.1334 20.0789C15.1345 20.0788 15.1377 20.0787 15.1436 20.0789C15.156 20.0794 15.1799 20.0815 15.2226 20.089C15.3181 20.1059 15.4432 20.1379 15.6655 20.1958L16.106 20.3104C16.8007 20.4912 17.4024 20.6477 17.8792 20.6995C18.3737 20.7533 18.9568 20.7215 19.4022 20.2691C19.8482 19.816 19.8696 19.2323 19.8066 18.739C19.746 18.2639 19.5781 17.6664 19.3843 16.9769L19.2614 16.5393C19.1994 16.3186 19.1651 16.1946 19.1465 16.0999C19.1381 16.0576 19.1357 16.034 19.135 16.0219C19.1347 16.0162 19.1348 16.0132 19.1348 16.0123C19.1348 16.0122 19.1349 16.0113 19.135 16.011C19.1351 16.0103 19.1358 16.0076 19.1376 16.0026C19.1414 15.9919 19.15 15.9708 19.1695 15.9334C19.2133 15.8493 19.2801 15.7419 19.4011 15.5494L19.6412 15.1675C20.0183 14.5677 20.3462 14.046 20.5371 13.6089C20.7373 13.1506 20.8752 12.5893 20.58 12.0298C20.4124 11.712 20.1646 11.5082 19.8916 11.3732ZM13.3016 9.74886C13.3014 9.7482 13.3051 9.74811 13.3133 9.75058C13.306 9.75075 13.3019 9.74951 13.3016 9.74886ZM13.3259 9.75507C13.3611 9.76932 13.4372 9.81197 13.571 9.93147C13.8378 10.1699 14.1668 10.5605 14.6761 11.1699L14.9313 11.4753C14.9494 11.497 14.9676 11.5189 14.9859 11.5408C15.2087 11.8091 15.4466 12.0954 15.7802 12.2629C16.1146 12.4308 16.4861 12.4499 16.8328 12.4676C16.8612 12.469 16.8894 12.4705 16.9174 12.472L17.313 12.4934C18.1025 12.5361 18.6092 12.5655 18.9579 12.6365C19.1244 12.6703 19.2061 12.705 19.2425 12.7261C19.2453 12.7277 19.2476 12.7291 19.2497 12.7304C19.2496 12.7315 19.2495 12.7327 19.2494 12.734C19.2463 12.7722 19.2293 12.8557 19.1625 13.0086C19.0223 13.3295 18.7575 13.7547 18.3401 14.4188L18.1312 14.7511C18.1163 14.7749 18.1012 14.7987 18.0859 14.8228C17.9026 15.1125 17.7028 15.4281 17.6498 15.7999C17.5971 16.1701 17.6994 16.5299 17.794 16.8626C17.8018 16.8903 17.8096 16.9178 17.8173 16.945L17.9245 17.3266C18.1385 18.0884 18.2739 18.5775 18.3187 18.9288C18.3391 19.0888 18.334 19.1723 18.3271 19.2113C18.2881 19.219 18.2039 19.226 18.0412 19.2083C17.6878 19.1699 17.1948 19.0437 16.4275 18.8441L16.0432 18.7441C16.0157 18.7369 15.9881 18.7297 15.9603 18.7223C15.6248 18.634 15.2634 18.5388 14.8946 18.5979C14.5238 18.6574 14.2118 18.8619 13.9246 19.0502C13.9008 19.0658 13.8772 19.0813 13.8538 19.0965L13.5244 19.3109C12.8666 19.7393 12.4451 20.0113 12.1256 20.1571C11.9735 20.2265 11.8896 20.2452 11.8506 20.2491C11.8484 20.2494 11.8464 20.2495 11.8446 20.2496C11.8431 20.2475 11.8415 20.245 11.8397 20.242C11.8182 20.2064 11.782 20.126 11.7452 19.9609C11.6679 19.6148 11.6292 19.1104 11.572 18.3235L11.5434 17.9294C11.5414 17.9014 11.5394 17.8732 11.5374 17.8449C11.5134 17.4996 11.4875 17.1283 11.3127 16.7971C11.1386 16.467 10.8472 16.2348 10.5745 16.0175C10.5521 15.9997 10.5298 15.9819 10.5077 15.9642L10.197 15.7152C9.57702 15.2182 9.17953 14.8972 8.93572 14.6353C8.81649 14.5073 8.7718 14.4329 8.75603 14.3974C8.78148 14.3693 8.84343 14.3151 8.98342 14.2346C9.28745 14.0597 9.75496 13.8744 10.4875 13.5875L10.8541 13.4439C10.8804 13.4336 10.9069 13.4233 10.9336 13.4129C11.2537 13.2887 11.6028 13.1533 11.8659 12.886C12.1292 12.6185 12.2588 12.2673 12.3775 11.9458C12.3874 11.9189 12.3972 11.8923 12.407 11.8659L12.5443 11.4976C12.8186 10.7616 12.9957 10.2922 13.1654 9.98606C13.2449 9.84253 13.2984 9.78011 13.3259 9.75507ZM8.74843 14.3717C8.74908 14.3719 8.75043 14.376 8.7505 14.3833C8.7478 14.3752 8.74777 14.3715 8.74843 14.3717ZM8.74646 14.409C8.74393 14.4166 8.74106 14.4204 8.74026 14.4204C8.73947 14.4205 8.74073 14.4166 8.74646 14.409ZM18.318 19.2404C18.3175 19.2398 18.3188 19.2354 18.3231 19.229C18.3206 19.2377 18.3184 19.241 18.318 19.2404ZM18.3448 19.2069C18.351 19.2025 18.3552 19.2012 18.3558 19.2016C18.3564 19.202 18.3533 19.2042 18.3448 19.2069ZM13.336 9.74656C13.3436 9.74068 13.3475 9.73938 13.3475 9.7402C13.3475 9.74102 13.3437 9.74396 13.336 9.74656Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgStars;
