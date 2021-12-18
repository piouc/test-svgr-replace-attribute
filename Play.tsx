import * as React from "react";
import { SVGProps } from "react";

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      style={{
        fill: "#f0f",
      }}
      d="M16 8 2.144 0v16L16 8z"
    />
  </svg>
);

export default SvgPlay;
