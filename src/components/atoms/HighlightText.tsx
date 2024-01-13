import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  margin: 0px;
  padding: 0px;
  border: none;
  list-style: none;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
  margin-top: 0.5rem;
  color: rgb(66, 70, 77);
  min-height: 3.375rem;
`;
interface HighlightTextProps {
  children: React.ReactNode;
}

const HighlightText: React.FC<HighlightTextProps> = ({ children }) => {
  return <H2>{children}</H2>;
};

export default HighlightText;
