import React from "react";
import { useTheme } from "@material-ui/core";

interface LumadaLogoPropTypes {
  width: number;
}

const LumadaLogo: React.FC<LumadaLogoPropTypes> = ({
  width,
}: LumadaLogoPropTypes) => {
  const theme: any = useTheme();
  const { acce1, acce3 } = theme.hv.palette.accent;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      viewBox="0 0 400 100"
      version="1.1"
      width={width}
    >
      <g transform="matrix(1.3333333,0,0,-1.3333333,0,92.506667)">
        <g transform="scale(0.1)">
          <path
            fill={acce3}
            d="M 523.797,304.223 C 499.563,205.324 399.75,144.801 300.848,169.039 201.953,193.266 141.426,293.078 165.656,391.977 189.887,490.875 289.711,551.402 388.602,527.168 487.504,502.938 548.031,403.117 523.797,304.223 M 551,379.398 539.063,424 l 29.441,29.422 c -5.863,12.433 -12.746,24.371 -20.586,35.676 l -40.203,-10.758 -32.637,32.656 10.801,40.262 c -11.168,7.765 -23.066,14.668 -35.641,20.582 l -29.488,-29.453 -44.582,11.965 -10.777,40.257 c -13.856,1.176 -27.606,1.153 -41.153,0.024 l -10.808,-40.27 -44.602,-11.933 -29.414,29.437 c -12.441,-5.863 -24.383,-12.742 -35.684,-20.578 l 10.762,-40.207 -32.668,-32.637 -40.258,10.797 c -7.757,-11.16 -14.668,-23.062 -20.586,-35.633 l 29.458,-29.484 -11.954,-44.59 -40.2692,-10.777 c -1.1757,-13.84 -1.1523,-27.606 -0.0234,-41.156 l 40.2696,-10.809 11.937,-44.602 -29.441,-29.414 c 5.859,-12.441 12.746,-24.382 20.578,-35.683 l 40.207,10.773 32.637,-32.668 -10.805,-40.273 c 11.176,-7.754 23.071,-14.668 35.645,-20.567 l 29.48,29.454 44.59,-11.961 10.113,-37.864 h 42.45 l 10.175,37.832 44.602,11.946 29.418,-29.446 c 12.441,5.86 24.383,12.754 35.683,20.598 l -10.761,40.195 32.656,32.637 40.27,-10.801 c 7.761,11.168 14.664,23.067 20.582,35.645 l -29.465,29.472 11.965,44.598 40.261,10.774 c 1.18,13.843 1.157,27.601 0.02,41.164 L 551,379.398"
          />
          <path
            fill={acce1}
            d="m 464.668,315.91 c -17.77,-66.238 -85.875,-105.523 -152.121,-87.762 -66.242,17.786 -105.531,85.887 -87.762,152.125 17.778,66.247 85.883,105.536 152.117,87.762 66.246,-17.773 105.539,-85.875 87.766,-152.125 M 381.449,497.949 C 298.684,518.227 215.16,467.578 194.883,384.813 174.602,302.055 225.254,218.531 308.012,198.258 c 82.758,-20.285 166.285,30.371 186.562,113.125 20.278,82.758 -30.371,166.281 -113.125,186.566"
          />
          <path
            fill={acce3}
            d="m 346.836,693.816 c -8.207,0.039 -14.883,-6.586 -14.918,-14.789 l -0.195,-46.054 c -0.035,-8.203 6.586,-14.879 14.789,-14.91 8.203,-0.04 14.883,6.585 14.918,14.789 l 0.195,46.054 c 0.035,8.203 -6.586,14.879 -14.789,14.91"
          />
          <path
            fill={acce3}
            d="m 346.836,75.7656 c -8.207,0.0313 -14.883,-6.5898 -14.918,-14.7929 L 331.723,14.918 C 331.688,6.71484 338.309,0.0351563 346.512,0.00390625 354.715,-0.0351563 361.395,6.58594 361.43,14.7891 l 0.195,46.0547 c 0.035,8.2031 -6.586,14.8828 -14.789,14.9218"
          />
          <path
            fill={acce3}
            d="m 589.578,592.07 c -5.773,5.828 -15.18,5.864 -21.012,0.086 L 535.867,559.73 c -5.824,-5.777 -5.863,-15.179 -0.086,-21.003 5.774,-5.829 15.184,-5.868 21.004,-0.09 l 32.707,32.422 c 5.821,5.777 5.863,15.183 0.086,21.011"
          />
          <path
            fill={acce3}
            d="m 154.98,161.129 c -5.777,5.828 -15.179,5.859 -21.007,0.086 L 101.27,128.793 c -5.8208,-5.781 -5.8677,-15.184 -0.09,-21.016 5.777,-5.82 15.187,-5.859 21.011,-0.086 l 32.7,32.43 c 5.828,5.774 5.867,15.188 0.089,21.008"
          />
          <path
            fill={acce3}
            d="m 687.793,348.48 c 0.031,8.204 -6.594,14.879 -14.797,14.918 l -46.055,0.192 c -8.203,0.039 -14.878,-6.59 -14.91,-14.793 -0.035,-8.195 6.586,-14.875 14.789,-14.914 l 46.055,-0.195 c 8.203,-0.032 14.879,6.585 14.918,14.792"
          />
          <path
            fill={acce3}
            d="m 75.7617,351.063 c 0.0313,8.203 -6.5898,14.878 -14.7929,14.917 l -46.0547,0.192 C 6.71094,366.211 0.0390625,359.586 0,351.383 -0.0351563,343.184 6.58594,336.5 14.793,336.465 l 46.0508,-0.195 c 8.207,-0.036 14.8828,6.585 14.9179,14.793"
          />
          <path
            fill={acce3}
            d="m 587.523,105.727 c 5.829,5.781 5.864,15.187 0.086,21.007 l -32.421,32.704 c -5.774,5.82 -15.18,5.871 -21.008,0.089 -5.821,-5.773 -5.867,-15.187 -0.09,-21.007 l 32.426,-32.704 c 5.777,-5.8238 15.187,-5.859 21.007,-0.089"
          />
          <path
            fill={acce3}
            d="m 156.582,540.324 c 5.828,5.778 5.863,15.184 0.086,21.008 l -32.422,32.707 c -5.773,5.82 -15.18,5.863 -21.012,0.086 -5.8238,-5.777 -5.8629,-15.184 -0.086,-21.012 l 32.422,-32.699 c 5.778,-5.824 15.192,-5.863 21.012,-0.09"
          />
          <path
            fill={acce1}
            d="m 793.145,537.973 h 34.418 V 218.238 H 990.176 V 187.309 H 793.145 v 350.664"
          />
          <path
            fill={acce1}
            d="m 1088.9,537.973 h 34.91 V 310.016 c 0,-60.356 38.91,-96.77 99.27,-96.77 60.35,0 99.76,36.414 99.76,97.774 v 226.953 h 34.42 V 309.516 c 0,-77.813 -54.37,-128.192 -133.68,-128.192 -79.81,0 -134.68,50.379 -134.68,128.192 v 228.457"
          />
          <path
            fill={acce1}
            d="m 1521.32,537.973 h 35.92 l 91.77,-206.004 c 7.98,-17.961 16.97,-42.903 16.97,-42.903 h 0.99 c 0,0 9.47,24.942 17.46,42.903 l 91.78,206.004 h 35.41 l 27.94,-350.664 h -34.42 l -19.46,245.414 c -1.48,18.957 -0.99,48.882 -0.99,48.882 h -1 c 0,0 -10.47,-30.925 -18.46,-48.882 l -82.3,-180.071 h -32.42 l -82.31,180.071 c -7.98,17.457 -18.94,49.879 -18.94,49.879 h -1 c 0,0 0.49,-30.922 -1.01,-49.879 L 1527.8,187.309 h -34.41 l 27.93,350.664"
          />
          <path
            fill={acce1}
            d="m 2082.41,501.559 c 0,0 -7.48,-28.934 -13.47,-45.391 l -46.89,-127.199 h 120.72 l -45.9,127.199 c -5.97,16.457 -13.46,45.391 -13.46,45.391 z m 70.83,-202.512 h -141.16 l -39.91,-111.738 h -36.41 l 128.69,350.664 h 36.92 l 128.69,-350.664 h -36.41 l -40.41,111.738"
          />
          <path
            fill={acce1}
            d="m 2446.99,218.238 c 86.29,0 143.65,50.879 143.65,144.653 0,93.277 -57.85,144.156 -143.65,144.156 h -75.31 V 218.238 Z m -109.74,319.735 h 113.24 c 105.24,0 176.07,-64.344 176.07,-175.082 0,-111.735 -70.83,-175.582 -176.07,-175.582 h -113.24 v 350.664"
          />
          <path
            fill={acce1}
            d="m 2856.46,501.559 c 0,0 -7.48,-28.934 -13.47,-45.391 L 2796.1,328.969 h 120.72 l -45.89,127.199 c -5.99,16.457 -13.47,45.391 -13.47,45.391 z m 70.82,-202.512 h -141.15 l -39.91,-111.738 h -36.42 l 128.69,350.664 h 36.92 L 3004.1,187.309 h -36.41 l -40.41,111.738"
          />
        </g>
      </g>
    </svg>
  );
};

export default LumadaLogo;
