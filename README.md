## Read Sensor Data
### Usage:
##### 1 - Command Line:
a. Read sensor data for a specific box ID:
```commandline
npx tsc

./lib/commandHandler.js read_sensor_data --box='Box-A1' --from='2021-04-07T09:00:00' --to='2021-04-13T12:00:00'
```
b. Read aggregated sensor data for a specific box ID:
```commandline
npx tsc

./lib/commandHandler.js read_sensor_data --box='Box-A1' --from='2021-04-07T09:00:00' --to='2021-04-13T12:00:00' --aggregate=true
```

##### 2 - HTTP endpoint:
```commandline
 npm run server
```
```http request
http://localhost:6060/readings/Box-A2/2021-04-07T09:00:00/2021-04-08T09:00:00
```
### Database configuration:
Database is configured in the `.env` file, which is then loaded by Prisma acting as an ORM in this project.