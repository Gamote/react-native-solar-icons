import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDumbbells = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.9407 10.5127L12.5574 11.1516L12.9407 10.5127ZM12.4106 8.0218L13.1534 8.12516C13.2033 7.71396 12.9111 7.33434 12.5009 7.27725L12.4106 8.0218ZM12.3164 9.6443L11.5911 9.81699L11.5911 9.81699L12.3164 9.6443ZM16.0918 10.1696L16.7518 10.5351L16.7518 10.5351L16.0918 10.1696ZM15.2811 10.8383L15.4992 11.561L15.2811 10.8383ZM16.116 3.95431L16.4993 3.31533L16.116 3.95431ZM16.7403 4.82267L17.4656 4.64998L17.4656 4.64998L16.7403 4.82267ZM13.7756 3.62863L13.5575 2.90597L13.7756 3.62863ZM12.6689 5.89173L12.5786 6.63628C12.9889 6.69336 13.3619 6.4063 13.4118 5.9951L12.6689 5.89173ZM12.9649 4.29732L12.3049 3.93186L12.3049 3.93186L12.9649 4.29732ZM2.83194 9.106L2.44868 9.74498L2.83194 9.106ZM2.20767 8.23764L1.4824 8.41033L2.20767 8.23764ZM6.27904 7.16858L6.36934 6.42403C5.95908 6.36694 5.58607 6.65401 5.5362 7.06521L6.27904 7.16858ZM5.98305 8.76299L6.64305 9.12845L5.98305 8.76299ZM5.17235 9.43167L5.39047 10.1543L5.17235 9.43167ZM6.00727 2.54765L6.39053 1.90867L6.00727 2.54765ZM6.53738 5.03851L5.79454 4.93514C5.74467 5.34634 6.03682 5.72597 6.44708 5.78306L6.53738 5.03851ZM6.63155 3.41601L7.35682 3.24332L6.63155 3.41601ZM3.66686 2.22198L3.44875 1.49931L3.66686 2.22198ZM2.85617 2.89066L2.19617 2.5252L2.85617 2.89066ZM15.9463 5.98679L15.6019 8.82688L17.0876 9.03361L17.432 6.19353L15.9463 5.98679ZM14.1881 10.039C13.8684 9.99456 13.6684 9.96626 13.5181 9.93408C13.3755 9.90354 13.3349 9.8804 13.3239 9.87368L12.5574 11.1516C12.777 11.2869 13.0061 11.3563 13.23 11.4042C13.4462 11.4505 13.7095 11.4867 14.0075 11.5281L14.1881 10.039ZM11.6677 7.91843C11.6282 8.24466 11.585 8.59921 11.5613 8.90756C11.5406 9.17728 11.5214 9.54021 11.5911 9.81699L13.0417 9.4716C13.047 9.49269 13.0395 9.47094 13.0389 9.37599C13.0384 9.2917 13.0432 9.1823 13.0535 9.04852C13.0742 8.77979 13.1127 8.46058 13.1534 8.12516L11.6677 7.91843ZM13.3239 9.87368C13.1957 9.79467 13.0878 9.65489 13.0417 9.4716L11.5911 9.81699C11.7297 10.367 12.071 10.852 12.5574 11.1516L13.3239 9.87368ZM15.6019 8.82688C15.5606 9.16724 15.5335 9.38757 15.5023 9.55488C15.4721 9.71644 15.4467 9.77638 15.4318 9.80419L16.7518 10.5351C16.8694 10.316 16.9303 10.0871 16.9735 9.85607C17.0155 9.63082 17.0486 9.3549 17.0876 9.03361L15.6019 8.82688ZM14.0075 11.5281C14.3055 11.5696 14.5687 11.6067 14.7888 11.6211C15.0166 11.636 15.2546 11.6317 15.4992 11.561L15.063 10.1157C15.0508 10.1192 15.006 10.1304 14.8608 10.1209C14.7079 10.1109 14.5078 10.0835 14.1881 10.039L14.0075 11.5281ZM15.4318 9.80419C15.3434 9.96877 15.2058 10.0744 15.063 10.1157L15.4992 11.561C16.041 11.4044 16.4866 11.029 16.7518 10.5351L15.4318 9.80419ZM14.8686 4.42792C15.1883 4.47241 15.3883 4.50071 15.5386 4.53288C15.6812 4.56342 15.7219 4.58657 15.7328 4.59329L16.4993 3.31533C16.2797 3.18005 16.0506 3.11071 15.8268 3.06277C15.6105 3.01647 15.3472 2.9803 15.0492 2.93883L14.8686 4.42792ZM17.432 6.19353C17.471 5.87224 17.5048 5.59642 17.5179 5.36714C17.5313 5.13202 17.527 4.894 17.4656 4.64998L16.015 4.99536C16.0228 5.02634 16.0331 5.09125 16.0237 5.2557C16.014 5.426 15.9876 5.64643 15.9463 5.98679L17.432 6.19353ZM15.7328 4.59329C15.861 4.67229 15.9689 4.81207 16.015 4.99536L17.4656 4.64998C17.327 4.09992 16.9857 3.61498 16.4993 3.31533L15.7328 4.59329ZM15.0492 2.93883C14.7512 2.89737 14.488 2.86027 14.2679 2.84586C14.0401 2.83094 13.8021 2.83529 13.5575 2.90597L13.9937 4.3513C14.0059 4.34779 14.0507 4.33653 14.1959 4.34604C14.3488 4.35606 14.5489 4.38343 14.8686 4.42792L15.0492 2.93883ZM13.4118 5.9951C13.4524 5.65968 13.4913 5.34052 13.5354 5.07506C13.5574 4.94291 13.5788 4.83581 13.5994 4.75446C13.6226 4.66282 13.6351 4.64384 13.6249 4.66277L12.3049 3.93186C12.1715 4.18037 12.1035 4.5365 12.0592 4.80294C12.0085 5.10754 11.9656 5.46213 11.9261 5.78836L13.4118 5.9951ZM13.5575 2.90597C13.0157 3.06254 12.5701 3.43798 12.3049 3.93186L13.6249 4.66277C13.7133 4.4982 13.8509 4.39258 13.9937 4.3513L13.5575 2.90597ZM3.00162 7.07352L3.34607 4.23343L1.86039 4.0267L1.51593 6.86678L3.00162 7.07352ZM4.07934 8.63239C3.75962 8.5879 3.55964 8.5596 3.40937 8.52742C3.26675 8.49688 3.22611 8.47374 3.2152 8.46702L2.44868 9.74498C2.66829 9.88026 2.89735 9.9496 3.12121 9.99754C3.33743 10.0438 3.60073 10.08 3.89874 10.1215L4.07934 8.63239ZM1.51593 6.86678C1.47696 7.18807 1.44315 7.46389 1.43007 7.69317C1.41664 7.92829 1.42093 8.1663 1.4824 8.41033L2.93294 8.06495C2.92513 8.03397 2.91485 7.96906 2.92424 7.80461C2.93396 7.63431 2.96033 7.41388 3.00162 7.07352L1.51593 6.86678ZM3.2152 8.46702C3.08694 8.38802 2.9791 8.24824 2.93294 8.06495L1.4824 8.41033C1.62094 8.96039 1.96221 9.44533 2.44868 9.74498L3.2152 8.46702ZM5.5362 7.06521C5.49552 7.40063 5.45666 7.71979 5.41252 7.98525C5.39054 8.1174 5.36913 8.2245 5.34853 8.30585C5.32532 8.39749 5.31288 8.41647 5.32304 8.39754L6.64305 9.12845C6.77647 8.87993 6.8445 8.52381 6.88881 8.25737C6.93946 7.95277 6.98232 7.59818 7.02188 7.27195L5.5362 7.06521ZM3.89874 10.1215C4.19674 10.1629 4.45993 10.2 4.68002 10.2144C4.90788 10.2294 5.14587 10.225 5.39047 10.1543L4.95424 8.70901C4.94209 8.71252 4.89728 8.72378 4.7521 8.71427C4.59915 8.70425 4.39905 8.67688 4.07934 8.63239L3.89874 10.1215ZM5.32304 8.39754C5.23469 8.56211 5.09708 8.66773 4.95424 8.70901L5.39047 10.1543C5.93227 9.99777 6.37789 9.62233 6.64305 9.12845L5.32304 8.39754ZM4.75988 3.02126C5.07959 3.06575 5.27957 3.09405 5.42984 3.12623C5.57247 3.15677 5.61311 3.17991 5.62401 3.18663L6.39053 1.90867C6.17092 1.77339 5.94187 1.70405 5.71801 1.65612C5.50179 1.60981 5.23848 1.57364 4.94048 1.53218L4.75988 3.02126ZM7.28023 5.14188C7.31979 4.81565 7.36294 4.4611 7.38663 4.15274C7.40735 3.88303 7.42653 3.5201 7.35682 3.24332L5.90628 3.5887C5.90097 3.56762 5.90847 3.58937 5.90904 3.68432C5.90956 3.76861 5.90471 3.87801 5.89443 4.01179C5.87379 4.28052 5.83522 4.59972 5.79454 4.93514L7.28023 5.14188ZM5.62401 3.18663C5.75227 3.26563 5.86011 3.40541 5.90628 3.5887L7.35682 3.24332C7.21828 2.69326 6.877 2.20832 6.39053 1.90867L5.62401 3.18663ZM4.94048 1.53218C4.64248 1.49071 4.37928 1.45362 4.1592 1.4392C3.93133 1.42428 3.69334 1.42863 3.44875 1.49931L3.88498 2.94464C3.89713 2.94113 3.94194 2.92987 4.08711 2.93938C4.24007 2.9494 4.44016 2.97677 4.75988 3.02126L4.94048 1.53218ZM3.34607 4.23343C3.38735 3.89307 3.41443 3.67274 3.44566 3.50543C3.47581 3.34387 3.50124 3.28393 3.51617 3.25611L2.19617 2.5252C2.07853 2.74431 2.01761 2.97324 1.9745 3.20424C1.93246 3.42949 1.89935 3.7054 1.86039 4.0267L3.34607 4.23343ZM3.44875 1.49931C2.90695 1.65588 2.46132 2.03132 2.19617 2.5252L3.51617 3.25611C3.60452 3.09154 3.74213 2.98592 3.88498 2.94464L3.44875 1.49931ZM6.44708 5.78306L12.5786 6.63628L12.7592 5.14719L6.62769 4.29397L6.44708 5.78306ZM12.5009 7.27725L6.36934 6.42403L6.18874 7.91312L12.3203 8.76634L12.5009 7.27725Z"
      fill="black"
    />
    <Path
      d="M11.3307 21.0114L11.7874 21.5942L11.7874 21.5942L11.3307 21.0114ZM11.5487 18.4673L10.8278 18.6742C10.7273 18.2724 10.9685 17.854 11.3667 17.7398L11.5487 18.4673ZM11.8423 20.0623L12.58 20.134L11.8423 20.0623ZM7.04032 20.1319C6.9398 19.7301 7.18107 19.3117 7.57921 19.1974C7.97735 19.0831 8.38159 19.3163 8.48211 19.7181L7.04032 20.1319ZM8.16493 21.1177L7.55955 21.575L8.16493 21.1177ZM9.05105 21.6657L8.92756 22.415L8.92756 22.415L9.05105 21.6657ZM7.37368 14.9604L6.91695 14.3776L6.91695 14.3776L7.37368 14.9604ZM7.59981 15.9813C7.5487 16.3972 7.17697 16.7022 6.76953 16.6625C6.36209 16.6229 6.07323 16.2536 6.12435 15.8377L7.59981 15.9813ZM9.65334 14.3061L9.77684 13.5567L9.77684 13.5567L9.65334 14.3061ZM11.0297 16.3926L11.2117 17.1201C10.8135 17.2344 10.4093 17.0013 10.3088 16.5995L11.0297 16.3926ZM10.5395 14.8541L11.1448 14.3968L10.5395 14.8541ZM21.1771 18.1854L21.6338 18.7682L21.6338 18.7682L21.1771 18.1854ZM21.6887 17.2363L22.4264 17.308L21.6887 17.2363ZM17.5211 16.7532L17.3391 16.0256C17.7372 15.9114 18.1414 16.1445 18.242 16.5463L17.5211 16.7532ZM18.0113 18.2917L17.4059 18.749L18.0113 18.2917ZM18.8974 18.8397L18.7739 19.589L18.7739 19.589L18.8974 18.8397ZM17.22 12.1344L16.7633 11.5516L16.7633 11.5516L17.22 12.1344ZM17.0021 14.6784L17.7229 14.4715C17.8235 14.8734 17.5822 15.2917 17.1841 15.406L17.0021 14.6784ZM16.7084 13.0835L15.9707 13.0117L16.7084 13.0835ZM19.4997 11.4801L19.6232 10.7307L19.6232 10.7307L19.4997 11.4801ZM20.3858 12.0281L20.9912 11.5708L20.3858 12.0281ZM10.0352 20.7163C10.3465 20.6269 10.5416 20.5704 10.6869 20.5171C10.825 20.4665 10.8632 20.4374 10.874 20.4286L11.7874 21.5942C11.5872 21.7588 11.3696 21.8596 11.1541 21.9386C10.9458 22.015 10.6896 22.0881 10.3992 22.1714L10.0352 20.7163ZM12.2696 18.2604C12.3491 18.5782 12.4356 18.9236 12.4972 19.2261C12.551 19.4904 12.6151 19.8486 12.58 20.134L11.1046 19.9905C11.1018 20.0129 11.1066 19.9909 11.0955 19.8969C11.0857 19.8136 11.0674 19.706 11.0407 19.575C10.9871 19.3118 10.9095 19.001 10.8278 18.6742L12.2696 18.2604ZM10.874 20.4286C10.9926 20.3311 11.0816 20.1771 11.1046 19.9905L12.58 20.134C12.5104 20.7005 12.2314 21.2293 11.7874 21.5942L10.874 20.4286ZM8.48211 19.7181C8.56507 20.0497 8.61905 20.264 8.67056 20.4251C8.72027 20.5806 8.7526 20.6357 8.77032 20.6604L7.55955 21.575C7.41538 21.3737 7.32646 21.1547 7.25509 20.9314C7.18553 20.7138 7.11859 20.4448 7.04032 20.1319L8.48211 19.7181ZM10.3992 22.1714C10.1088 22.2548 9.85287 22.3287 9.63684 22.3741C9.41331 22.421 9.17776 22.4503 8.92756 22.415L9.17454 20.9164C9.18798 20.9183 9.23468 20.9229 9.3779 20.8928C9.52863 20.8612 9.72391 20.8056 10.0352 20.7163L10.3992 22.1714ZM8.77032 20.6604C8.87728 20.8097 9.02635 20.8955 9.17454 20.9164L8.92756 22.415C8.3727 22.3368 7.88427 22.0283 7.55955 21.575L8.77032 20.6604ZM8.66918 15.2555C8.35788 15.3449 8.16282 15.4013 8.01751 15.4546C7.87943 15.5053 7.84116 15.5343 7.83041 15.5432L6.91695 14.3776C7.11716 14.213 7.33481 14.1122 7.55031 14.0331C7.75859 13.9567 8.01479 13.8837 8.30517 13.8003L8.66918 15.2555ZM7.83041 15.5432C7.71182 15.6406 7.62275 15.7947 7.59981 15.9813L6.12435 15.8377C6.19397 15.2712 6.47295 14.7425 6.91695 14.3776L7.83041 15.5432ZM8.30517 13.8003C8.59554 13.717 8.85152 13.6431 9.06755 13.5977C9.29109 13.5507 9.52663 13.5215 9.77684 13.5567L9.52985 15.0554C9.51641 15.0535 9.46971 15.0488 9.32649 15.0789C9.17577 15.1106 8.98048 15.1662 8.66918 15.2555L8.30517 13.8003ZM10.3088 16.5995C10.227 16.2727 10.1492 15.962 10.0727 15.7053C10.0346 15.5776 10.0003 15.4747 9.9699 15.3972C9.93566 15.3099 9.92123 15.2934 9.93408 15.3113L11.1448 14.3968C11.3085 14.6252 11.4202 14.9697 11.4969 15.2274C11.5848 15.5224 11.6711 15.8679 11.7506 16.1857L10.3088 16.5995ZM9.77684 13.5567C10.3317 13.635 10.8201 13.9435 11.1448 14.3968L9.93408 15.3113C9.82711 15.162 9.67805 15.0763 9.52985 15.0554L9.77684 13.5567ZM20.7606 16.194L20.0686 13.4277L21.5104 13.0139L22.2024 15.7802L20.7606 16.194ZM19.8816 17.8903C20.1929 17.8009 20.3879 17.7445 20.5332 17.6912C20.6713 17.6405 20.7096 17.6114 20.7203 17.6026L21.6338 18.7682C21.4336 18.9328 21.2159 19.0336 21.0004 19.1126C20.7922 19.189 20.536 19.2621 20.2456 19.3454L19.8816 17.8903ZM22.2024 15.7802C22.2807 16.0931 22.3483 16.362 22.3897 16.5877C22.4321 16.8192 22.4573 17.0566 22.4264 17.308L20.9509 17.1645C20.9547 17.1336 20.957 17.0686 20.9275 16.9073C20.8969 16.7401 20.8436 16.5257 20.7606 16.194L22.2024 15.7802ZM20.7203 17.6026C20.8389 17.5051 20.928 17.3511 20.9509 17.1645L22.4264 17.308C22.3568 17.8745 22.0778 18.4033 21.6338 18.7682L20.7203 17.6026ZM18.242 16.5463C18.3237 16.8731 18.4016 17.1837 18.478 17.4404C18.5161 17.5682 18.5505 17.6711 18.5808 17.7486C18.6151 17.8359 18.6295 17.8523 18.6167 17.8344L17.4059 18.749C17.2423 18.5206 17.1306 18.1761 17.0538 17.9184C16.9659 17.6234 16.8796 17.2778 16.8002 16.9601L18.242 16.5463ZM20.2456 19.3454C19.9552 19.4288 19.6992 19.5027 19.4832 19.5481C19.2597 19.5951 19.0241 19.6243 18.7739 19.589L19.0209 18.0904C19.0343 18.0923 19.081 18.0969 19.2243 18.0668C19.375 18.0352 19.5703 17.9796 19.8816 17.8903L20.2456 19.3454ZM18.6167 17.8344C18.7236 17.9837 18.8727 18.0695 19.0209 18.0904L18.7739 19.589C18.219 19.5108 17.7306 19.2023 17.4059 18.749L18.6167 17.8344ZM18.5155 12.4295C18.2042 12.5189 18.0092 12.5753 17.8639 12.6286C17.7258 12.6793 17.6875 12.7083 17.6768 12.7172L16.7633 11.5516C16.9635 11.387 17.1812 11.2862 17.3967 11.2071C17.6049 11.1307 17.8611 11.0577 18.1515 10.9743L18.5155 12.4295ZM16.2812 14.8853C16.2017 14.5676 16.1151 14.2221 16.0535 13.9196C15.9997 13.6553 15.9356 13.2972 15.9707 13.0117L17.4462 13.1553C17.4489 13.1329 17.4441 13.1549 17.4552 13.2489C17.4651 13.3322 17.4833 13.4397 17.51 13.5708C17.5636 13.834 17.6412 14.1448 17.7229 14.4715L16.2812 14.8853ZM17.6768 12.7172C17.5582 12.8146 17.4691 12.9687 17.4462 13.1553L15.9707 13.0117C16.0403 12.4453 16.3193 11.9165 16.7633 11.5516L17.6768 12.7172ZM18.1515 10.9743C18.4419 10.891 18.6979 10.8171 18.9139 10.7717C19.1374 10.7247 19.373 10.6955 19.6232 10.7307L19.3762 12.2294C19.3628 12.2275 19.3161 12.2228 19.1728 12.2529C19.0221 12.2846 18.8268 12.3402 18.5155 12.4295L18.1515 10.9743ZM20.0686 13.4277C19.9857 13.096 19.9317 12.8818 19.8802 12.7206C19.8305 12.5651 19.7981 12.5101 19.7804 12.4853L20.9912 11.5708C21.1354 11.772 21.2243 11.9911 21.2956 12.2143C21.3652 12.4319 21.4322 12.701 21.5104 13.0139L20.0686 13.4277ZM19.6232 10.7307C20.178 10.809 20.6665 11.1175 20.9912 11.5708L19.7804 12.4853C19.6735 12.336 19.5244 12.2503 19.3762 12.2294L19.6232 10.7307ZM17.1841 15.406L11.2117 17.1201L10.8477 15.665L16.82 13.9509L17.1841 15.406ZM11.3667 17.7398L17.3391 16.0256L17.7031 17.4808L11.7307 19.1949L11.3667 17.7398Z"
      fill="black"
    />
  </Svg>
);
export default SvgDumbbells;
