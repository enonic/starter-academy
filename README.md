# Enonic Academy starter

This starter kit serves as the base for all our developer courses at the Enonic Academy. It kickstarts the students with a few parts, content-types, a page, and also some content. It's loosely based on "[My First App](http://xp.readthedocs.org/en/6.13/tutorials/my-first-app/index.html)" from the documentation.

This software is made available as-is.

## How to use

Use this starter with the "init-project" feature in the Enonic XP toolbox. Or just download the zip-file of the project from Github and unpack anywhere locally, then run `gradlew deploy` command from any command line tool (make sure `$XP_HOME` variable is set first).

## Releases and Compatibility

| Version        | XP version |
| ------------- | ------------- |
| 2.1.0 | 7.8.0 |
| 2.0.0 | 7.0.0 |
| 1.2.6 | 6.13.1 |
| 1.2.5 | 6.13.1 |
| 1.2.4 | 6.12.1 |
| 1.2.3 | 6.9.0 |
| 1.2.2 | 6.9.0 |
| 1.2.1 | 6.9.0 |
| 1.2.0 | 6.8.0 |
| 1.1.0 | 6.7.0 |
| 1.0.0 | 6.5.0 |

## Changelog

**2.0.0** Updated to support enonic XP 7

**1.2.6**

* Removed java plugin from gradle file

**1.2.5**

* Improve comments around Gradle-code.
* Upgrade to 6.13.
* Upgrade all Gradle-code to latest.
* Improve Thymeleaf examples.

**1.2.4**

* Upgraded to Gradle 4
* New `build.gradle` format
* Minor fixes to CSS to be more Bootstrap-friendly

**1.2.3**

* Gradients and styling for header and footer elements
* Ability to toggle border colors on or off (standard off)

**1.2.2**

* Remove placeholder in page component (simplified code)
* Improved logging examples
* Removed obsolete "data-portal"-attributes from Thymeleaf

**1.2.1**

* Fixed broken XP fragment handling in default page component
* Improvements, styling and bug fixes to part "Banner"
* Added site filter to ImageSelector in part "Banner"
* Minor adjustments and comments
* Upgraded to Enonic XP 6.9

**1.2.0**

* Updated for Enonic XP 6.8
* Added new part: Banner
* Added new layout: 2 Columns
* Simplified existing example's code
* Added stylesheet with some basic styling

**1.1.0**

* Updated for Enonic XP 6.7

**1.0.0**

* First release
