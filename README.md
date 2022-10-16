# ArticlesChallenge

Before init you should have Redis running in your machine. Then set the environment variables REDIS_PORT and REDIS_HOST on `apps/articles-microservice/.env`.

Then Run `npx nx run-many --target=serve`.

For client http://localhost:4200
For Api Gateway http://localhost:3001

## Running unit tests

Run `npx nx run-many --all --target=test` to execute the unit tests via [Jest](https://jestjs.io).
