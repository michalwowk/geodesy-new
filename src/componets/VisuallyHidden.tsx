import React from "react";
import styled from "@emotion/styled/macro";

const HiddenElement = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const VisuallyHidden: React.FC = ({ children }) => {
  return <HiddenElement>{children}</HiddenElement>;
};
