import "./style/App.scss";
import "./style/normalize.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="logo_image">
          <a href="/" className="logo_nerds">
            <svg
              width="208"
              height="35"
              viewBox="0 0 148 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.4214 6.58276C66.667 6.58276 67.6314 6.92158 68.3144 7.60728V3.29944C68.3144 3.0413 68.3626 2.87189 68.4591 2.77508C68.5555 2.67828 68.7484 2.63794 69.0377 2.63794H70.2833C70.5886 2.63794 70.7815 2.68634 70.8699 2.77508C70.9583 2.86382 71.0065 3.0413 71.0065 3.29944V14.0448C71.0065 15.6583 70.5726 16.9087 69.6966 17.788C68.8207 18.6673 67.5671 19.1029 65.9277 19.1029C64.3205 19.1029 63.0589 18.6673 62.1427 17.788C61.2347 16.9087 60.7766 15.7067 60.7766 14.182V11.9635C60.7766 10.2452 61.1784 8.91416 61.974 7.98644C62.7696 7.05872 63.9187 6.58276 65.4214 6.58276ZM63.4526 11.9797V13.7222C63.4526 15.7954 64.2723 16.828 65.9117 16.828C67.5349 16.828 68.3546 15.7954 68.3466 13.7222V11.9958C68.3466 9.91448 67.5349 8.86575 65.9117 8.86575C64.2803 8.87382 63.4526 9.90641 63.4526 11.9797Z"
                fill="black"
              ></path>
              <path
                d="M50.5789 13.5689H44.0296V13.6818C44.0296 14.8112 44.2144 15.618 44.584 16.0939C44.9537 16.5699 45.5644 16.8119 46.4243 16.8119C47.5252 16.8119 48.1922 16.4166 48.4333 15.6341C48.5217 15.3759 48.7307 15.2549 49.0441 15.2549H50.4423C50.6995 15.2549 50.8763 15.2953 50.9888 15.3679C51.0933 15.4405 51.1495 15.5776 51.1495 15.7793C51.1495 16.0697 51.0531 16.4005 50.8682 16.7877C50.6995 17.1426 50.4745 17.4653 50.2013 17.7477C49.7432 18.2075 49.1807 18.5544 48.5619 18.7561C47.8547 18.9981 47.1074 19.111 46.36 19.111C44.7608 19.111 43.5313 18.6593 42.6554 17.7477C41.7795 16.8442 41.3455 15.5534 41.3455 13.8755V12.1007C41.3455 10.3501 41.7795 8.99485 42.6554 8.03486C43.5313 7.07487 44.7689 6.59085 46.3841 6.59892C47.9994 6.59892 49.2209 7.04261 50.0566 7.93806C50.8924 8.83351 51.3102 10.1404 51.3102 11.8587V12.9074C51.3102 13.1655 51.262 13.335 51.1736 13.4318C51.0852 13.5286 50.8763 13.5689 50.5789 13.5689ZM46.4002 8.7609C45.5886 8.7609 44.9939 8.97871 44.6242 9.40627C44.2546 9.83383 44.0537 10.5437 44.0296 11.5279H48.5699C48.5699 10.576 48.3931 9.87417 48.0476 9.43047C47.702 8.98678 47.1476 8.7609 46.4002 8.7609Z"
                fill="black"
              ></path>
              <path
                d="M55.9309 7.5589V8.64796C56.1881 8.13167 56.5818 7.70411 57.072 7.40563C57.5542 7.08294 58.1248 6.91353 58.7114 6.90547H59.2096C59.4346 6.90547 59.5873 6.9458 59.6596 7.02647C59.732 7.10714 59.7721 7.27655 59.7721 7.5347V8.7609C59.7721 9.01905 59.732 9.18846 59.6596 9.26913C59.5873 9.3498 59.4346 9.39821 59.2096 9.39821H58.5748C57.8114 9.39821 57.1845 9.64829 56.7024 10.1565C56.2202 10.6647 55.9791 11.3343 55.9791 12.1652V18.1268C55.9791 18.385 55.9309 18.5544 55.8425 18.6512C55.7541 18.7399 55.5532 18.7883 55.2559 18.7883H54.0103C53.721 18.7883 53.5362 18.7399 53.4317 18.6512C53.3353 18.5625 53.287 18.385 53.287 18.1268V7.5589C53.287 7.30076 53.3353 7.13135 53.4317 7.03454C53.5281 6.9458 53.721 6.8974 54.0103 6.8974H55.2077C55.513 6.8974 55.7059 6.9458 55.7943 7.03454C55.8827 7.13135 55.9309 7.30076 55.9309 7.5589Z"
                fill="black"
              ></path>
              <path
                d="M77.548 19.0949C75.772 19.0949 74.4702 18.6996 73.6425 17.9171C73.0639 17.3604 72.7424 16.586 72.7585 15.7873C72.7585 15.4566 72.9594 15.2872 73.3692 15.2872H74.7675C75.1291 15.2872 75.33 15.4324 75.3782 15.7147C75.4506 16.1665 75.6595 16.4973 75.989 16.6989C76.3185 16.9006 76.8167 17.0055 77.4837 17.0055C78.1909 17.0055 78.6971 16.9006 78.9945 16.6909C79.2998 16.4811 79.4445 16.1423 79.4445 15.6744C79.4525 15.4082 79.3963 15.142 79.2757 14.9C79.1632 14.7064 78.9543 14.5369 78.6569 14.3917C78.231 14.2062 77.7971 14.061 77.3471 13.948L75.8524 13.5608C73.8996 13.0445 72.9192 12.0039 72.9192 10.4308V10.1162C72.9192 8.99483 73.313 8.13165 74.1086 7.51048C74.8961 6.88931 76.0051 6.58276 77.4194 6.58276C79.123 6.58276 80.3686 6.96192 81.1642 7.71216C81.7187 8.26072 81.9999 8.93836 81.9999 9.75314C81.9999 9.96289 81.9517 10.1081 81.8553 10.1807C81.7588 10.2533 81.566 10.2936 81.2767 10.2936H80.1034C79.8463 10.2936 79.6775 10.2614 79.5811 10.2049C79.4846 10.1484 79.4284 10.0274 79.4043 9.84188C79.2837 9.0271 78.5685 8.61568 77.2587 8.61568C76.7042 8.61568 76.2622 8.72862 75.9488 8.9545C75.6354 9.18038 75.4747 9.50306 75.4747 9.93062C75.4747 10.3098 75.6113 10.6002 75.8845 10.818C76.1577 11.0358 76.656 11.2375 77.3712 11.4311L79.2918 11.9313C81.1561 12.4314 82.0883 13.5044 82.0883 15.15V15.6018C82.0883 16.707 81.6865 17.5621 80.891 18.1752C80.0954 18.7883 78.9784 19.0949 77.548 19.0949Z"
                fill="black"
              ></path>
              <path
                d="M86.3876 15.1743C86.9421 15.1743 87.3841 15.3195 87.7216 15.6179C88.051 15.9164 88.2198 16.3198 88.2198 16.828V17.3766C88.2198 17.8929 88.051 18.2962 87.7216 18.5866C87.3921 18.8771 86.9501 19.0303 86.3876 19.0303C85.8331 19.0303 85.3831 18.8851 85.0536 18.5866C84.7241 18.2882 84.5554 17.8848 84.5554 17.3766V16.828C84.5554 16.3117 84.7241 15.9084 85.0536 15.6179C85.3831 15.3275 85.8251 15.1823 86.3876 15.1743Z"
                fill="black"
              ></path>
              <path
                d="M94.7852 2.63795H95.8942C96.1192 2.63795 96.2719 2.67828 96.3442 2.75895C96.4166 2.83962 96.4567 3.00903 96.4567 3.26718V4.2191C96.4567 4.47725 96.4166 4.64666 96.3442 4.72733C96.2719 4.808 96.1192 4.84834 95.8942 4.84834H95.0103C94.4397 4.84834 94.0299 4.95321 93.7888 5.15489C93.5477 5.35656 93.4272 5.75185 93.4272 6.32462V6.88932H95.4362C95.6612 6.88932 95.8139 6.92965 95.8862 7.01032C95.9585 7.091 95.9987 7.2604 95.9987 7.51855V8.47047C95.9987 8.72862 95.9585 8.89803 95.8862 8.9787C95.8139 9.05937 95.6612 9.10778 95.4362 9.10778H93.4272V18.1107C93.4272 18.385 93.3789 18.5624 93.2825 18.6431C93.1861 18.7238 92.9932 18.7641 92.7039 18.7641H91.4664C91.1771 18.7641 90.9922 18.7238 90.8878 18.6431C90.7913 18.5624 90.7431 18.385 90.7431 18.1107V9.12391H89.5698C89.3448 9.12391 89.1922 9.08357 89.1198 8.99484C89.0475 8.9061 89.0073 8.74475 89.0073 8.48661V7.53469C89.0073 7.27654 89.0475 7.10713 89.1198 7.02646C89.1922 6.94579 89.3448 6.90545 89.5698 6.90545H90.7431V6.15521C90.7431 5.29203 90.9199 4.60632 91.2735 4.09003C91.6271 3.57373 92.1334 3.18651 92.72 2.97677C93.3789 2.74282 94.0781 2.62988 94.7852 2.63795Z"
                fill="black"
              ></path>
              <path
                d="M101.511 11.3424C101.857 11.3424 102.251 11.3504 102.701 11.3746C103.151 11.3988 103.561 11.4311 103.954 11.4795V10.8906C103.954 10.0436 103.794 9.46272 103.472 9.13197C103.151 8.80122 102.653 8.64795 101.969 8.64795C101.503 8.64795 101.118 8.72055 100.82 8.86576C100.515 9.01097 100.29 9.27718 100.185 9.59987C100.121 9.77734 100.049 9.89835 99.9605 9.94675C99.8721 9.99516 99.7033 10.0274 99.4622 10.0274H97.9916C97.7505 10.0274 97.5898 9.98709 97.4934 9.89835C97.397 9.80154 97.3487 9.6644 97.3568 9.52726C97.3568 8.93836 97.5898 8.38173 98.0559 7.8735C98.4336 7.46208 98.9238 7.14746 99.5506 6.92158C100.169 6.6957 100.973 6.58276 101.969 6.58276C103.143 6.58276 104.067 6.74411 104.734 7.05872C105.401 7.37334 105.875 7.84123 106.148 8.4624C106.421 9.08357 106.558 9.83381 106.558 10.7051V15.1258C106.558 15.7793 106.429 16.4246 106.172 17.0216C105.915 17.6186 105.473 18.0945 104.854 18.4656C104.228 18.8286 103.352 19.0061 102.227 19.0061H101.592C99.9926 19.0061 98.8193 18.7076 98.0559 18.1107C97.2925 17.5137 96.9148 16.5537 96.9148 15.2226C96.9148 14.2385 97.1237 13.464 97.5336 12.8993C97.9514 12.3346 98.5381 11.9071 99.2051 11.6973C99.9444 11.4553 100.724 11.3343 101.511 11.3424ZM101.648 13.4075C100.941 13.4075 100.41 13.5447 100.057 13.819C99.7033 14.0933 99.5265 14.5531 99.5265 15.1984C99.5265 15.8519 99.7033 16.3036 100.049 16.5618C100.394 16.8199 100.885 16.949 101.519 16.949H101.905C102.644 16.949 103.167 16.7715 103.488 16.4004C103.81 16.0294 103.962 15.4243 103.962 14.5611V13.5447C103.464 13.4882 103.03 13.4479 102.653 13.4317C102.275 13.4156 101.937 13.4075 101.648 13.4075Z"
                fill="black"
              ></path>
              <path
                d="M121.095 6.58276C122.317 6.58276 123.225 6.94578 123.82 7.67989C124.414 8.414 124.712 9.41432 124.712 10.6809V18.1187C124.712 18.393 124.663 18.5705 124.567 18.6512C124.47 18.7318 124.278 18.7722 123.988 18.7722H122.743C122.453 18.7722 122.269 18.7318 122.164 18.6512C122.068 18.5705 122.019 18.393 122.019 18.1187V11.0923C122.019 10.3985 121.891 9.86608 121.626 9.49499C121.36 9.12391 120.886 8.93836 120.195 8.93836C119.536 8.93836 119.006 9.16424 118.612 9.616C118.218 10.0678 118.026 10.6889 118.026 11.4714V18.1107C118.026 18.385 117.977 18.5624 117.881 18.6431C117.784 18.7238 117.592 18.7641 117.302 18.7641H116.057C115.767 18.7641 115.575 18.7238 115.478 18.6431C115.382 18.5624 115.333 18.385 115.333 18.1107V11.0842C115.333 10.3904 115.205 9.85801 114.94 9.48693C114.675 9.11584 114.2 8.93029 113.509 8.93029C112.85 8.93029 112.32 9.15617 111.926 9.60793C111.532 10.0597 111.34 10.6809 111.34 11.4634V18.1026C111.34 18.3769 111.291 18.5544 111.195 18.635C111.098 18.7157 110.906 18.756 110.616 18.756H109.371C109.081 18.756 108.897 18.7157 108.792 18.635C108.696 18.5544 108.647 18.3769 108.647 18.1026V7.55888C108.647 7.2846 108.696 7.10713 108.792 7.02646C108.889 6.94578 109.081 6.90545 109.371 6.90545H110.568C110.857 6.90545 111.05 6.94578 111.147 7.02646C111.243 7.10713 111.291 7.2846 111.291 7.55888V8.01064C111.998 7.05872 113.035 6.58276 114.409 6.58276C115.157 6.58276 115.792 6.72797 116.306 7.01032C116.812 7.29267 117.23 7.72023 117.503 8.23652C117.873 7.70409 118.379 7.27654 118.974 7.01839C119.585 6.72797 120.292 6.58276 121.095 6.58276Z"
                fill="black"
              ></path>
              <path
                d="M39.4008 11.4795C39.4008 13.3511 39.4008 18.1187 39.4008 18.1187C39.4008 18.393 39.3526 18.5705 39.2561 18.6512C39.1597 18.7318 38.9668 18.7722 38.6775 18.7722H37.4319C37.1426 18.7722 36.9498 18.7318 36.8534 18.6512C36.7569 18.5705 36.7087 18.393 36.7087 18.1187V11.0923C36.7087 10.1323 36.5801 9.86608 36.3149 9.49499C36.0497 9.12391 35.5756 8.93836 34.8845 8.93836C34.2256 8.93836 33.6952 9.16424 33.3014 9.616C32.9077 10.0678 32.7148 10.6889 32.7148 11.4714V18.1107C32.7148 18.385 32.6666 18.5624 32.5701 18.6431C32.4737 18.7238 32.2808 18.7641 31.9916 18.7641H30.754C30.4647 18.7641 30.2799 18.7238 30.1754 18.6431C30.079 18.5624 30.0308 18.385 30.0308 18.1107V7.55888C30.0308 7.2846 30.079 7.10713 30.1754 7.02646C30.2718 6.94578 30.4647 6.90545 30.754 6.90545H31.9514C32.2407 6.90545 32.4335 6.94578 32.53 7.02646C32.6264 7.10713 32.6746 7.2846 32.6746 7.55888V8.01064C33.3818 7.05872 34.4184 6.58276 35.7926 6.58276C36.5399 6.58276 37.1748 6.72797 37.6891 7.01032C38.1954 7.29267 38.6132 7.72023 38.8865 8.23652C39.232 8.9303 39.4008 9.91448 39.4008 11.4795Z"
                fill="black"
              ></path>
              <path
                d="M128.73 5.54212C128.263 5.54212 127.894 5.42112 127.613 5.1791C127.331 4.93709 127.195 4.60634 127.195 4.17878V3.70282C127.195 3.2672 127.331 2.92838 127.613 2.69443C127.894 2.46048 128.263 2.33948 128.73 2.33948C129.212 2.33948 129.589 2.45242 129.871 2.69443C130.152 2.92838 130.289 3.2672 130.289 3.70282V4.17878C130.289 4.60634 130.152 4.93709 129.871 5.1791C129.589 5.42112 129.212 5.54212 128.73 5.54212ZM130.055 7.5589V18.1268C130.055 18.4011 130.007 18.5786 129.911 18.6593C129.814 18.7399 129.622 18.7803 129.332 18.7803H128.095C127.805 18.7803 127.621 18.7399 127.516 18.6593C127.42 18.5786 127.371 18.4011 127.371 18.1268V7.5589C127.371 7.28462 127.42 7.10714 127.516 7.02647C127.613 6.9458 127.805 6.90547 128.095 6.90547H129.34C129.63 6.90547 129.814 6.9458 129.919 7.02647C130.007 7.10714 130.055 7.28462 130.055 7.5589Z"
                fill="black"
              ></path>
              <path
                d="M135.52 3.29946V18.1268C135.52 18.4011 135.472 18.5786 135.375 18.6593C135.279 18.7399 135.086 18.7803 134.797 18.7803H133.559C133.27 18.7803 133.077 18.7399 132.981 18.6593C132.884 18.5786 132.836 18.4011 132.836 18.1268V3.29946C132.836 3.02518 132.884 2.8477 132.981 2.76703C133.077 2.68636 133.27 2.64603 133.559 2.64603H134.797C135.086 2.64603 135.271 2.68636 135.375 2.76703C135.472 2.8477 135.528 3.02518 135.52 3.29946Z"
                fill="black"
              ></path>
              <path
                d="M138.71 20.3211H138.887C139.401 20.3211 139.787 20.2727 140.06 20.1839C140.326 20.0952 140.559 19.9177 140.719 19.6838C140.936 19.3449 141.113 18.99 141.258 18.6189L141.435 18.1914L137.256 7.6073C137.216 7.51049 137.192 7.41368 137.192 7.30881C137.192 7.03453 137.368 6.90546 137.73 6.90546H139.241C139.45 6.90546 139.61 6.94579 139.715 7.02646C139.819 7.10713 139.916 7.27654 140.012 7.51049L142.696 14.8596L145.139 7.47015C145.212 7.24428 145.308 7.091 145.412 7.0184C145.517 6.94579 145.686 6.90546 145.911 6.90546H147.405C147.767 6.90546 147.944 7.03453 147.944 7.29268C147.936 7.39755 147.912 7.49436 147.879 7.59116L143.773 18.9739C143.411 19.9419 143.058 20.6922 142.704 21.2327C142.391 21.7409 141.925 22.1281 141.37 22.354C140.832 22.5637 140.133 22.6686 139.257 22.6686H138.71C138.485 22.6686 138.333 22.6283 138.26 22.5476C138.188 22.4669 138.148 22.2975 138.148 22.0394V20.9664C138.148 20.7083 138.188 20.5389 138.26 20.4582C138.333 20.3614 138.485 20.3211 138.71 20.3211Z"
                fill="black"
              ></path>
              <path
                d="M20.9178 25H3.98588C1.784 25 0 23.2091 0 20.9987H5.97882C6.52528 20.9987 6.9753 20.547 6.9753 19.9984V8.00258C6.9753 7.45402 7.42531 7.00226 7.97177 7.00226H9.96471C10.5112 7.00226 10.9612 7.45402 10.9612 8.00258V20.0065C10.9612 20.555 11.4032 21.0068 11.9576 21.0068H19.9294C20.4759 21.0068 20.9259 20.555 20.9259 20.0065V0C23.1278 0 24.9118 1.7909 24.9118 4.00129V21.0068C24.9037 23.2091 23.1197 25 20.9178 25Z"
                fill="black"
              ></path>
              <path
                d="M4.98235 4.00129C4.4359 4.00129 3.98588 4.45305 3.98588 5.00162V17.0055C3.98588 17.5541 3.53586 18.0058 2.98941 18.0058H0V4.00129C0 1.7909 1.784 0 3.98588 0H17.9284V17.0055C17.9284 17.5541 17.4865 18.0058 16.932 18.0058H14.939C14.3926 18.0058 13.9426 17.5541 13.9426 17.0055V5.00162C13.9426 4.45305 13.4925 4.00129 12.9461 4.00129H4.98235Z"
                fill="black"
              ></path>
            </svg>
          </a>
          <a href="/">
            <div className="border_wombat">
              <div className="baby_wombat" />
            </div>
          </a>
        </header>
        <main className="two_columns">
          <section className="left_column both_column">
            <p className="list_tasks">your tasks</p>
            <div className="all_tasks">
              <div className="check_arrow">
                <i class="fa-solid fa-check"></i>
                <li className="correct_task">Application Setup</li>
              </div>
              <div className="check_arrow check_arrow_middle">
                <i class="fa-solid fa-check"></i>
                <li className="correct_task">Static Books List </li>
              </div>
              <div className="check_arrow">
                <i class="fa-solid fa-check"></i>
                <li className="correct_task">Administration Panel </li>
              </div>
              <div className="check_arrow check_arrow_fourth">
                <i class="fa-solid fa-arrow-right"></i>
                <li className="right_arrow_task correct_task">
                  Connect Admin with Frontend
                </li>
              </div>
              <div className="locked check_arrow">
                <i class="fa-solid fa-lock"></i>
                <li className="locked_task correct_task">
                  Book Review Feature
                </li>
              </div>
            </div>
          </section>
          <section className="right_column both_column">
            <div className="header_business_context">
              <i class="fa-regular fa-compass"></i>
              <li className="context">business context</li>
            </div>
            <div className="both_column_right">
              <section className="small_left_column_box">
                <div className="new_task">
                  <div className="up_text_task">
                    <p className="new_button">new</p>
                    <p className="name_task">Olga Nelson</p>
                    <p className="date_send">Dec 17</p>
                  </div>
                  <p className="new_text_task ">
                    New sprint, tasks and intro information.
                  </p>
                  <p className="text_task">
                    Hi Eric, congratulations on completing the previous
                    assignment. This time you will have to focus on..
                  </p>
                </div>
                <div className="new_task">
                  <div className="up_text_task">
                    <p className="name_task">Kristen Aniston</p>
                    <p className="date_send">Dec 17</p>
                  </div>
                  <p className="text_task_title">
                    Application has been accepted 🎉 🙌
                  </p>
                  <p className="text_task">
                    Hi Eric, congratulations on completing the previous
                    assignment. This time you will have to focus on..
                  </p>
                </div>
                <div className="new_task">
                  <div className="up_text_task">
                    <p className="name_task">Olga Nelson</p>
                    <p className="date_send">Dec 17</p>
                  </div>
                  <p className="text_task_title">
                    New sprint, tasks and intro information.
                  </p>
                  <p className="text_task">
                    Hi Eric, congratulations on completing the previous
                    assignment. This time you will have to focus on..
                  </p>
                </div>
              </section>
              <section className="small_right_column">
                <h1 className="title_app">
                  Application has been accepted 🎉 🙌
                </h1>
                <section className="img_message">
                  <div className="profil_img">
                    <div className="profil" />
                  </div>
                  <div className="message_name">
                    <div className="name_date">
                      <p className="nick_name">Kirsten Aniston</p>
                      <p className="date_nick">
                        • Today, 17th December • 11:20
                      </p>
                    </div>
                    <p className="text_kirsten kirsten_first">Hello!</p>
                    <p className="text_kirsten">
                      My name is Kirsten, and I'm super happy to announce that
                      your application to join Coders Family has been accepted!
                      🎉 🙌
                    </p>
                    <p className="text_kirsten">
                      You really impressed us during the interview process, and
                      we'd like to offer you a project with nerds.family. We've
                      been working with nerds.family for quite some time, and
                      it's important for us to keep them satisfied with our
                      services — hence why we believe you'll be a great fit for
                      this job.
                    </p>
                    <p className="text_kirsten">
                      Here's the project overview: You'll be responsible for
                      building a database and page for recording and displaying
                      book ratings. We'd like to work in two week-long sprints,
                      we've already given you a head start and prepared your
                      tasks to deliver in your first sprint.
                    </p>
                  </div>
                </section>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
