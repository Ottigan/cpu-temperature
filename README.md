# CPU Temperature Monitoring Service

A project which displays current CPU temperature in a webpage

## Installation

1. Clone the project to your local system
   
2. Install [Node.js](https://nodejs.org/en/download/)
   
3. Open Terminal in the ROOT folder of the local project

4. Download project dependencies by typing the following text in the terminal followed by Enter
    ```bash
    npm i
    ```
5. If you have a ```Linux``` system you might need to install the linux sensors package to be able to measure temperature e.g.
   * On Ubuntu and Debian Distros
        ```bash
        sudo apt install lm-sensors
        ```
   * On Fedora 26 and RPM Linux distros
        ```bash
        dnf install lm_sensors
        ```
   * Once the installation is done, run the following command to check your current hardware specifications.
        ```bash
        sudo sensors-detect
        ```
    * It will ask you a few questions. Answer `Yes` for all of them.
6. Launch the application
    ```bash
    npm start
    ```
7. Open the link below in your browser of choice
    ```bash
    http://localhost:3000
    ```

## Limitations

Extremely poor support for Windows machines, based on the motherboard
and how willing was the manufacturer to provide the needed integration with
`WMIC` - Windows Management Interface Command...

Bottom line in most cases,  for Windows machines, the provided temperature reading comes from a random sensor which is nowhere near the CPU and rarely if ever updates.