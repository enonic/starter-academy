# My First App

Enonic XP app - "[My First App](http://xp.readthedocs.org/en/6.4/tutorials/my-first-app/index.html)" - from the documentation.

This software is made available as-is. It's just to demonstrate a simple app for Enonic XP. On installation it will automatically create the site and populate it with some demo content.

## Building and deploying

There are two options. One is to simply download the app [JAR file](http://repo.enonic.com/public/com/enonic/app/myfirstapp/1.0.1/myfirstapp-1.0.1.jar) and move it to the XP installation's `$XP_HOME/deploy` folder.

Or you can build this app with Gradle. In the terminal, from the root of the project, enter `./gradlew build`. On Windows, just enter `gradlew build`
in the command line from the project root. Next, move the JAR file from `build/libs` to your `$XP_HOME/deploy` directory. This app will now be available
to add to your websites through the Content Studio admin tool.

If you are upgrading to a newer version of this app, make sure to remove the old version's JAR file from the `$XP_HOME/deploy` directory.

## Releases and Compatibility

| Version        | XP version |
| ------------- | ------------- |
| 1.0.1 | 6.4.0 |
| ~~1.0.0~~ | ~~6.4.0~~ |

## Changelog

**1.0.1**

* Fixed critical import bug (content import didn't work).

**1.0.0**

* First release - **don't use this version!**
