#Team Product Test

UI test code for Team. This is a copy of the ui test code in team product, not a fork. Tests are run against prestaging.

##Instructions

### Prequisites

* [Java](https://www.java.com) (needed by Selenium server)
* [Chrome](https://www.google.com/chrome)

###Install

* cd uitests
* yarn install
* in /uitests/nightwatch.json
	* userLogin: set userEmail and userPassword to the values supplied to you
	* managerLogin: set userEmail and userPassword to the values supplied to you

###Ensure the code passes lint

* cd uitests
* yarn lint-fix

###Run all tests

* cd uitests
* yarn tc-test-prestaging

### Run a specific test file

* cd uitests
* yarn nightwatch tc-test-prestaging --test tests\your-test.js


