## Process:


### Create the empty Package.json
```
npx init -y
```

### Add tsconfig.json file
```
npx tsc --init
```

### Check for this in the tsconfig.json
```
 "rootDir": "./src",
 "outDir": "./dist"
```

### Add the WebSockets Lib
```
npm i ws @types/ws
```