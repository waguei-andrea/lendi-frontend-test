## Info

./services is the backend API

./app is a frontend app

## How to run this

First of all, start the API

`cd ./services && yarn && yarn start`

Then start the app

`cd ./app && yarn && yarn start`

## The test

You'll start with the app not showing any data
![Screenshot](initial.png)

#### Task 1: Populate the site with brokers and appointments, and show the appointment which is grouped by brokers on the sidebar

- You will be able to call the two APIs to get the brokers and the appointments data when you start the service.

- http://localhost:8080/brokers

- http://localhost:8080/appointments

- ps. you can use axios library to get the data which is pre-install in this project.

#### Task 2: Show the broker name in the order from A to Z on the sidebar

#### Task 3: Show appointment details on right hand side when clicking on an appointment

#### Task 4: Show appointment details on top navigation when clicking on an appointment

- This is the example when you finish task 1 - 4:

![Screenshot](task1-4.png)

#### Task 5: Fix the bad practice (Broker.tsx)

#### Task 6: use the correct semantic tag (Broker.tsx)

#### Task 7: Make AppointmentDetail next to SideBar (AppointmentSelect.tsx)

![Screenshot](task7.png)

#### Task 8: Complete unit test in ./app/src/components/AppointmentSelect/Broker

#### Task 9

1. How would you improve this codebase?
2. What kind of tooling would you use in this repo to help developers collaborate?
