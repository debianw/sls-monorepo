# TestSmarter Serverless Architecture

### Install 

Clean install:

```
npx lerna clean && yarn
```

Install a package

```
yarn workspace ts-api add <package-name> -D
```

Install a global package

```
yarn add -W <package-name> -D
```


### Commands

Deploy:

```
yarn --cwd=services/ts-api serverless deploy
```

Info:

```
yarn --cwd=services/ts-api serverless info
```

Remove:

```
yarn --cwd=services/ts-api serverless remove
```