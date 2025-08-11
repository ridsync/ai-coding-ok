import * as React from "react";
import type { SVGProps } from "react";
const Component = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}><g xmlns="http://www.w3.org/2000/svg" stroke="#10B981"><path d="M20 20H0V0h20z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.667} d="M6.67 1.667V5M13.33 1.667V5M15.83 3.333H4.17c-.92 0-1.67.746-1.67 1.667v11.667c0 .92.75 1.666 1.67 1.666h11.66c.92 0 1.67-.746 1.67-1.666V5a1.67 1.67 0 0 0-1.67-1.667M2.5 8.333h15" /></g></svg>;
export default Component;