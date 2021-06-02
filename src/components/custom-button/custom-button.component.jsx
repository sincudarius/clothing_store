import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...defaultprops }) => (
  <CustomButtonContainer {...defaultprops}>{children}</CustomButtonContainer>
);

export default CustomButton;
