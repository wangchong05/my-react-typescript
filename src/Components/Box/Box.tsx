import React from "react";
import styled, { StyledProps } from "styled-components";
// import List from "../List/List";

export interface BoxProps extends StyledProps<any> {
  label?: string;
  // list: Array<object>;
}

const BoxWrapper: React.FC<BoxProps> = styled.div<BoxProps>`
  padding: 10px;
  border: 1px solid gray;
`;

const Box = ({ label, children }: BoxProps) => {

  // return <div data-testid='box'>{ label }</div>;

  return (
    <div>
      <BoxWrapper data-testid='box'>
        { label }
      </BoxWrapper>
    </div>
  );
}

export default Box;