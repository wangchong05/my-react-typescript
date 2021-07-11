import React from 'react';
import styled, { StyledProps } from "styled-components";

export interface propsProps extends StyledProps<any> {
  props: object;
  list: Array<object>;
}

const List = (props: propsProps) => {
  const { list } = props;
  return (
    list.map((item, index) => {
      return (
        <div key={index}>{item}</div>
      )
    })
  );
}

export default List;
