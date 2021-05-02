# Temtem

Ulitmate desktop app to help you during temtem fights

[DOWNLOAD](https://github.com/TheSmartMonkey/temtem/releases)

![APP IMAGE](https://github.com/TheSmartMonkey/temtem/blob/master/.github/temtem-app.PNG)

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

* Create the installer

    ```bash
    npm electron:build
    ```

    Go in the `release` folder. Then click on `temtem Setup 9.0.7.exe`

    It should install the app

## What I Learned

* Use a angular project with electron : [angular-electron](https://github.com/maximegris/angular-electron)

* Use a service with BehaviorSubject to share a variable between components

* Parse a API using nodejs

* Resize hundreds of images with a nodejs script

* Discovered a new API : [temtem-api](https://github.com/maael/temtem-api)

* Create a installer of an angular-electron project
