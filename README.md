# Temtem

Ulitmate desktop app to help you during temtem fights

[image]

## Installation

The project will be release soon

## Fonctionnalities

* Temtem table on damages by type

* Temtem table on resistance by type

* Temtem datatable on every temtem with there types

## For Devs

* Start the project

    ```bash
    git clone https://github.com/TheSmartMonkey/temtem.git
    ```

    ```bash
    npm install
    ```

    ```bash
    npm install -g @angular/cli
    ```

    ```bash
    npm start
    ```

* Create the windows installer

    First suppress all files of exe and installer if you did a previous intaller

    ```bash
    ng build
    ```

    Copy the `package.json` file in the dist folder

    Go to the root of the project and run this command to create the exe

    ```bash
    electron-packager dist temtem --platform=win32 --arch=x64
    ```

    Then at the root of the project create the installer with this command

    ```bash
    node build.js
    ```

    Go in the `temtem-installers` folder. Then click on `Setup.exe`

## What I Learned

* Use a angular project with electron : [angular-electron](https://github.com/maximegris/angular-electron)

* Use a service with BehaviorSubject to share a variable between components

* Parse a API using nodejs

* Resize hundreds of images with a nodejs script

* Discovered a new API : [temtem-api](https://github.com/maael/temtem-api)
