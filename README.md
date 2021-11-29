# SignUpCodingChallenge

I was asked to do web coding challenge with description below:
* Build a single page app with a sign-up form.
* The form should allow users to enter first name, last name, email, and password.
* All fields are required.
* Password validation:
    * Should be a minimum of eight characters,
    * Should contain lower and uppercase letters,
    * Should not contain user’s first or last name.
* Email should be validated but there are various ways of accomplishing this. So, show us what
you consider as a proper email validation.
* The form should send a POST request to https://demo-api.now.sh/users. The request body
example:
```
{
    firstName: "Thomas",
    lastName: "Shelby",
    email: "thomas@shelby.co.uk"
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). Furthermore, run `ng test --code-coverage` to enable test coverage. I have to mention that, because I do not know return type of the web API. I did not write any test cases for signUp service.