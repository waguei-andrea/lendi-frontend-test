import axios from "axios";
import styled from "styled-components";

import Broker from "./Broker";

const Wrapper = styled.div``;

// TODO: Add AppointmentDetail next to SideBar
const SideBar = styled.div`
  width: 250px;
`;

const AppointmentDetail = styled.div``;

const Heading = styled.strong.attrs({ role: "heading", level: 2 })`
  display: block;
  font-size: 20px;
`;

type BrokerAppointments = {
  id: number;
  name: string;
  appointments: { id: number; brokerId: number; date: string }[];
}[];

const AppointmentSelect = () => {
  return (
    <Wrapper>
      <SideBar>
        <Heading>Sidebar</Heading>
        {/* TODO: populate brokers */}
        <ul>
          {/* {brokerAppointments.map((broker) => (
            <Broker broker={broker} />
          ))} */}
        </ul>
      </SideBar>
      <AppointmentDetail>
        <Heading>Appointment details</Heading>
        {/* TODO: Get appointment details when clicking on one from the left side */}
      </AppointmentDetail>
    </Wrapper>
  );
};

export default AppointmentSelect;
