import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 56px;
  background: #212121;
  display: flex;
  justify-content: space-between;
`;

Wrap.Form = styled.form`
  width: 600px;
  height: 45px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 2px 0px 0px 2px;
`;

Wrap.Input = styled.input`
  width: 83%;
  height: 100%;
  outline: none;
  background: #000000;
  color: white;
`;
