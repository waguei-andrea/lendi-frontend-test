import React from "react";

export interface BrokerProps {
  broker: {
    name: string;
    id: number;
    appointments: { id: number; brokerId: number; date: string }[];
  };
}

const Broker = (broker: BrokerProps) => {
  return (
    <li>
      [broker name]
      <br />
      appointments:
      <button>Hide appointments</button>
      <ul>
        <li>[appointment date]</li>
      </ul>
    </li>
  );
};

export default Broker;
