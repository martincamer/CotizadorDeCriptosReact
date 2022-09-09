import React from "react";
import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};
