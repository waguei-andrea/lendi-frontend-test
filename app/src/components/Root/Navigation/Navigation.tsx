import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #e7e7e7;
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
  box-shadow: 1px 1px 1px #b8b8b8;
  margin-bottom: 48px;
  align-items: center;
  font-size: 14px;
`;

const SelectedAppointment = styled.div``;

const EmphasizedText = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <SelectedAppointment>
        Currently selected appointment:
        <EmphasizedText>[appointment date] with [broker name]</EmphasizedText>
      </SelectedAppointment>
      <EmphasizedText>Welcome to Lendi</EmphasizedText>
    </Wrapper>
  );
};

export default Navigation;
