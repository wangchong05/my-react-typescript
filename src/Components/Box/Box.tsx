import React from "react";
import styled, { StyledProps } from "styled-components";

export interface BoxProps extends StyledProps<any> {
  label?: string;
}

const BoxWrapper: React.FC<BoxProps> = styled.div<BoxProps>`
  padding: 10px;
  border: 1px solid gray;
`;

const Box = ({ label, children }: BoxProps) => {

  // return <div data-testid='box'>{ label }</div>;

  return (
    <BoxWrapper data-testid='box'>
      { label }
    </BoxWrapper>
  );
}

export default Box;