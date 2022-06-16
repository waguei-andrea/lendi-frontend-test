import { screen, render } from "@testing-library/react";

import Broker from "./Broker";

const testBroker = {
  name: "bob",
  id: 1,
  appointments: [{ brokerId: 1, date: "24/11/2021", id: 1 }],
};

describe("Broker Component", () => {
  test("should hide and show appointments on button click", () => {
    render(<Broker broker={testBroker} />);

    const showAppointmentsButton = screen.getByTestId(
      "broker-show-appointments-button"
    );
    const hideAppointmentsButton = screen.getByTestId(
      "broker-hide-appointments-button"
    );
    const appointmentsList = screen.getByTestId("broker-appointments-list");
  });
});
