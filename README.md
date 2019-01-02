# Develop

```
yarn
yarn start
```

or

```
yarn
docker-compose up --build
```

# Production

```
yarn run build
yarn run start:prod
```

or 

```
docker-compose -f docker-compose.yml up --remove-orphans --build
```