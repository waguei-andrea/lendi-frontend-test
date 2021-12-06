import { useState } from "react";
import styled from "styled-components";
export interface BrokerProps {
  broker: {
    name: string;
    id: number;
    appointments: { id: number; brokerId: number; date: string }[];
  };
}

const AppointmentList = styled.ul<{ isExpanded: boolean }>`
  transform-origin: top;
  transition: transform 0.26s ease;
  transform: ${({ isExpanded }) => (isExpanded ? `scaleY(1)` : `scaleY(0)`)};
`;

const Broker = (broker: BrokerProps) => {
  const [showAppointments, setShowAppointments] = useState(false);
  const onToggle = () => {
    // TODO: Refactor to use better practice
    setShowAppointments(!showAppointments);
  };

  return (
    // TODO: Update to use the correct semantic tag
    <span>
      <button
        onClick={onToggle}
        data-testid={
          showAppointments
            ? "broker-hide-appointments-button"
            : "broker-show-appointments-button"
        }
      >
        [broker name]
      </button>
      <br />
      <AppointmentList
        isExpanded={showAppointments}
        data-testid="broker-appointments-list"
      >
        <li>[appointment date]</li>
      </AppointmentList>
    </span>
  );
};

export default Broker;
