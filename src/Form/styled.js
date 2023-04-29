import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 15px;
  border: 1px solid black;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  border: none;
`;

export const Label = styled.label`
  max-width: 500px;
  width: 100%;
  display: inline-block;
  text-align: center;
  color: black;
  font-size: 18px;
`;

export const LabelText = styled.span`
  font-size: 30px;
  margin: 5px;
`;

export const Input = styled.input`
  flex-basis: 500px;
  width: 100%;
  padding: 5px;
  border: 2px solid #383535;
  border-radius: 20px;
  margin: 10px;
  text-align: center;
  margin: 0 auto;
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-basis: 500px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: teal;
  color: #fff;

  &:hover {
    background-color: hsl(180, 100%, 35%);
  }
`;
export const Select = styled.select`
  padding: 5px;
  border-radius: 20px;
  &:hover {
    background-color: gray;
  }
`;

export const LabelTextResult = styled.p`
  margin-top: 20px;
`;

export const Loading = styled.p`
  color: black;
`;

export const Miss = styled.p`
  color: red;
`;
export const Info = styled.p`
  color: black;
`;
