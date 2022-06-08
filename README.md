## Info

./services is the backend API
./app is a frontend app

## How to run this

First you want to start the API

cd ./services && yarn && yarn start

Then you want to start the app

cd ./app && yarn && yarn start

## The test

You'll start with the app not showing any data

### Task 1: Populate the site with brokers and appointments, and show the appointment which is grouped by brokers on the side bar

You will be able to call the two API to get brokers and appointments data when you start the service.
http://localhost:8080/brokers
http://localhost:8080/appointments
ps. you can use axios library to get the data which is pre-install in this project.

### Task 2: Show appointment details on right hand side when clicking on an appointment

### Task 3: Show appointment details on top navigation when clicking on an appointment

### Task 4: Fix the bad practice (Broker.tsx)

### Task 5: use the correct semantic tag (Broker.tsx)

### Task 6: Make AppointmentDetail next to SideBar (AppointmentSelect.tsx)

### Task 7: Modify the appointments API to sort by date in a descending order then by broker id in ascending order

### Task 8: Complete unit test in ./app/src/components/AppointmentSelect/Broker
