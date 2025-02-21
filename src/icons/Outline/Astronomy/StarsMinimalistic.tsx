import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarsMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.48039 1.90311C5.48039 1.90314 5.48038 1.90308 5.48039 1.90311C5.43387 1.66838 5.2275 1.49919 4.98818 1.5C4.7488 1.50081 4.54359 1.67116 4.49873 1.90628L4.49839 1.908L4.49648 1.91758C4.49467 1.92655 4.49179 1.94056 4.48782 1.95905C4.47987 1.99608 4.46761 2.05092 4.45092 2.11918C4.41742 2.25622 4.3667 2.44478 4.29809 2.65065C4.1534 3.08484 3.95627 3.51076 3.73001 3.73856C3.50374 3.96635 3.07917 4.16636 2.64596 4.31398C2.44056 4.38398 2.25235 4.43597 2.11554 4.4704C2.04739 4.48755 1.99264 4.50018 1.95566 4.50838C1.93719 4.51247 1.9232 4.51545 1.91425 4.51732L1.90468 4.51929L1.90311 4.51961C1.6683 4.56606 1.49919 4.77245 1.5 5.01182C1.50081 5.2512 1.67116 5.45641 1.90628 5.50127L1.908 5.50161L1.91758 5.50352C1.92655 5.50533 1.94056 5.50821 1.95905 5.51218C1.99608 5.52013 2.05092 5.53239 2.11918 5.54908C2.25622 5.58258 2.44478 5.6333 2.65065 5.70191C3.08484 5.8466 3.51076 6.04373 3.73856 6.27C3.96635 6.49626 4.16636 6.92083 4.31398 7.35404C4.38398 7.55944 4.43597 7.74765 4.4704 7.88446C4.48755 7.95261 4.50018 8.00736 4.50838 8.04434C4.51247 8.06281 4.51545 8.0768 4.51732 8.08575L4.51929 8.09532L4.51961 8.09689C4.56606 8.3317 4.77245 8.50081 5.01182 8.5C5.2512 8.49919 5.45641 8.32884 5.50127 8.09372L5.50161 8.092L5.50352 8.08242C5.50533 8.07345 5.50821 8.05944 5.51218 8.04095C5.52013 8.00392 5.53239 7.94908 5.54908 7.88082C5.58258 7.74378 5.6333 7.55522 5.70191 7.34935C5.8466 6.91516 6.04373 6.48924 6.27 6.26144C6.49626 6.03365 6.92083 5.83364 7.35404 5.68602C7.55944 5.61602 7.74765 5.56403 7.88446 5.5296C7.95261 5.51245 8.00736 5.49982 8.04434 5.49162C8.06281 5.48753 8.0768 5.48455 8.08575 5.48268L8.09532 5.48071L8.09689 5.48039C8.09684 5.4804 8.09694 5.48038 8.09689 5.48039C8.33159 5.43385 8.50081 5.22748 8.5 4.98818C8.49919 4.7488 8.32884 4.54359 8.09372 4.49873L8.092 4.49839L8.08242 4.49648C8.07345 4.49467 8.05944 4.49179 8.04095 4.48782C8.00392 4.47987 7.94908 4.46761 7.88082 4.45092C7.74378 4.41742 7.55522 4.3667 7.34935 4.29809C6.91516 4.1534 6.48924 3.95627 6.26144 3.73001C6.03365 3.50374 5.83364 3.07917 5.68602 2.64596C5.61602 2.44056 5.56403 2.25235 5.5296 2.11554C5.51245 2.04739 5.49982 1.99264 5.49162 1.95566C5.48753 1.93719 5.48455 1.9232 5.48268 1.91425L5.48071 1.90468L5.48039 1.90311ZM6.39614 4.99528C6.09334 4.85303 5.78918 4.67039 5.55673 4.4395C5.32428 4.20861 5.13958 3.90569 4.99528 3.60386C4.85303 3.90666 4.67039 4.21082 4.4395 4.44327C4.20861 4.67572 3.90569 4.86042 3.60386 5.00472C3.90666 5.14697 4.21082 5.32961 4.44327 5.5605C4.67572 5.79139 4.86042 6.09431 5.00472 6.39614C5.14697 6.09334 5.32961 5.78918 5.5605 5.55673C5.79139 5.32428 6.09431 5.13958 6.39614 4.99528Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 3.25C19.4142 3.25 19.75 3.58579 19.75 4V4.25H20C20.4142 4.25 20.75 4.58579 20.75 5C20.75 5.41421 20.4142 5.75 20 5.75H19.75V6C19.75 6.41421 19.4142 6.75 19 6.75C18.5858 6.75 18.25 6.41421 18.25 6V5.75H18C17.5858 5.75 17.25 5.41421 17.25 5C17.25 4.58579 17.5858 4.25 18 4.25H18.25V4C18.25 3.58579 18.5858 3.25 19 3.25ZM11.9875 6.18028C11.659 6.60921 11.2858 7.27467 10.7353 8.2623L10.4567 8.76198C10.4388 8.79421 10.421 8.82627 10.4033 8.8581C10.1521 9.31057 9.92501 9.71966 9.55768 9.99851C9.18594 10.2807 8.73368 10.3821 8.24389 10.492C8.20945 10.4997 8.17482 10.5075 8.14001 10.5154L7.59912 10.6377C6.52827 10.88 5.81264 11.0441 5.32543 11.2361C4.85236 11.4226 4.78896 11.5612 4.76498 11.6383C4.73845 11.7236 4.71654 11.8899 5.00039 12.3408C5.28934 12.7998 5.77932 13.3758 6.50808 14.228L6.87683 14.6592C6.89985 14.6861 6.92275 14.7128 6.94548 14.7393C7.28266 15.1323 7.58345 15.4829 7.72165 15.9274C7.85893 16.3688 7.81339 16.8314 7.76172 17.3562C7.75824 17.3916 7.75473 17.4273 7.75124 17.4633L7.69549 18.0386C7.58541 19.1745 7.51263 19.9446 7.53721 20.4964C7.56173 21.0469 7.67706 21.1584 7.73036 21.1988C7.77142 21.23 7.8816 21.3108 8.37411 21.1697C8.87625 21.0258 9.54795 20.7189 10.5507 20.2572L11.0571 20.0241C11.0903 20.0087 11.1234 19.9934 11.1563 19.9782C11.6116 19.7675 12.0358 19.5711 12.5 19.5711C12.9642 19.5711 13.3884 19.7675 13.8437 19.9782C13.8766 19.9934 13.9097 20.0087 13.9429 20.0241L14.4494 20.2572C15.452 20.7189 16.1238 21.0258 16.6259 21.1697C17.1184 21.3108 17.2286 21.23 17.2696 21.1988C17.3229 21.1584 17.4383 21.0469 17.4628 20.4964C17.4874 19.9446 17.4146 19.1745 17.3045 18.0386L17.2488 17.4633C17.2453 17.4273 17.2418 17.3916 17.2383 17.3562C17.1866 16.8314 17.1411 16.3688 17.2783 15.9274C17.4166 15.4829 17.7173 15.1323 18.0545 14.7393C18.0773 14.7128 18.1001 14.6861 18.1232 14.6592L18.4919 14.228C19.2207 13.3758 19.7107 12.7998 19.9996 12.3408C20.2835 11.8899 20.2615 11.7236 20.235 11.6383C20.211 11.5612 20.1476 11.4226 19.6746 11.2361C19.1874 11.0441 18.4717 10.88 17.4009 10.6377L16.86 10.5153C16.8252 10.5075 16.7905 10.4997 16.7561 10.492C16.2663 10.3821 15.8141 10.2807 15.4423 9.99851C15.075 9.71966 14.8479 9.31056 14.5967 8.8581C14.579 8.82627 14.5612 8.79421 14.5433 8.76197L14.2647 8.26229C13.7142 7.27467 13.341 6.60921 13.0125 6.18028C12.6844 5.75183 12.5427 5.75 12.5 5.75C12.4573 5.75 12.3156 5.75183 11.9875 6.18028ZM10.7966 5.26828C11.208 4.73103 11.7379 4.25 12.5 4.25C13.2621 4.25 13.792 4.73103 14.2034 5.26828C14.6066 5.79476 15.0321 6.5582 15.5447 7.47781L15.8534 8.03162C16.192 8.63894 16.2654 8.7401 16.3493 8.80376C16.4284 8.86385 16.5324 8.90332 17.191 9.05233L17.794 9.18876C18.7864 9.41326 19.6168 9.60111 20.2245 9.8406C20.859 10.0906 21.4426 10.4702 21.6674 11.1929C21.8895 11.9073 21.6357 12.5575 21.269 13.14C20.9144 13.7033 20.3505 14.3627 19.6716 15.1565L19.2632 15.6341C18.8176 16.1551 18.7454 16.2612 18.7107 16.3728C18.675 16.4875 18.6745 16.6241 18.7418 17.3186L18.8033 17.9537C18.9062 19.0147 18.9912 19.892 18.9613 20.5631C18.9308 21.2481 18.7744 21.9397 18.1766 22.3936C17.5665 22.8567 16.8618 22.7977 16.2127 22.6117C15.5864 22.4322 14.8093 22.0744 13.8803 21.6466L13.3156 21.3866C12.6964 21.1015 12.5919 21.0711 12.5 21.0711C12.4081 21.0711 12.3036 21.1015 11.6844 21.3866L11.1197 21.6466C10.1907 22.0744 9.41362 22.4322 8.78727 22.6117C8.13822 22.7977 7.43346 22.8567 6.82339 22.3936C6.22557 21.9397 6.06921 21.2481 6.03869 20.5631C6.0088 19.892 6.09384 19.0147 6.19668 17.9538L6.25823 17.3186C6.32553 16.6241 6.325 16.4875 6.28931 16.3728C6.25462 16.2612 6.18236 16.1551 5.73683 15.6341L5.32838 15.1565C4.64953 14.3627 4.08562 13.7033 3.73098 13.14C3.36434 12.5575 3.11045 11.9073 3.33264 11.1929C3.55736 10.4702 4.141 10.0906 4.77547 9.8406C5.38317 9.60112 6.21361 9.41326 7.20603 9.18876L7.80899 9.05233C8.46758 8.90332 8.57157 8.86385 8.65072 8.80376C8.73458 8.7401 8.80801 8.63894 9.14655 8.03162L9.45527 7.47781C9.96786 6.5582 10.3934 5.79476 10.7966 5.26828Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgStarsMinimalistic;
