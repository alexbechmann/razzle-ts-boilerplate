# razzle-ts-boilerplate

# Develop

## yarn
```
yarn
yarn start
```

or

## docker
```
yarn
docker-compose up --build
```

# Production

## yarn
```
yarn run build
yarn run start:prod
```

or 

## docker
```
docker-compose -f docker-compose.yml up --remove-orphans --build
```