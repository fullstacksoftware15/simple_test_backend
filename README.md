# simple_test_backend
A simple NodeJS backend, that will use MongoDB and Facebook Marketing API.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Replace .env.example with your information (I'll provide it).
2. Install your dependencies

    ```
    yarn install
    ```
4. Start your app

    ```
    yarn start
    ```

## Testing

- /create will create a Facebook Ad Campaign while taking the campaign name and type (objective) as query parameters. The created campaign ID needs to be stored in a database.
- /delete will remove all the created Facebook Ad Campaigns based on database data

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).