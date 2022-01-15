import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  &:hover {
    background: grey;
  }
  cursor: pointer;
  &:focus {
    background: red;
  }
`;
