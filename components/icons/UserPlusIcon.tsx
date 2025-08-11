import * as React from "react";
import type { SVGProps } from "react";
const Component = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}><g xmlns="http://www.w3.org/2000/svg" stroke="#000"><path d="M20 20H0V0h20z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.667} d="M13.333 17.5v-1.667A3.333 3.333 0 0 0 10 12.5H5a3.333 3.333 0 0 0-3.333 3.333V17.5M7.5 9.167A3.334 3.334 0 1 0 7.499 2.5 3.334 3.334 0 0 0 7.5 9.167M15.833 6.667v5M18.333 9.167h-5" /></g></svg>;
export default Component;