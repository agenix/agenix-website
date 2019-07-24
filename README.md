# agenix-website

[Live Website on IPFS](https://cloudflare-ipfs.com/ipfs/QmbBXHR9awfJ6baButt9SmpWtBfXTSFaAHVhrhCZqbDbjz/)

# Prerequisites

Make sure IPFS and Node.js are installed

* Install Node.js: https://nodejs.org/en/
* Install Docker: https://docs.ipfs.io/guides/guides/install/

The DApp and eosio will occupy the port 3000. Make sure nothing else is already running on these ports.

# Quick Start
In this section we provide a number of command scripts to run all the commands needed to start build and deploy the app.

### Install

```
yarn install
```

### Serve
```
yarn start
```

# Publish
In this section we provide a number of command scripts to build, push and pin to IPFS and lastly how to change the DNS to point the domain at the latest hash.

### Build
```
yarn build
```

### Start IPFS
```
ipfs daemon
```

### Push to IPFS
```
ipfs add -r /[path to build]
```

### Pin to IPFS
```
ipfs pin add <IPFS Hash>
```

### Make Live
Update the DNS TXT record with the name of _dnslink


## Project structure

```js
agenix // project directory
├── public
│   ├── images // All static images for the project
│   ├── favicon.ico
│   ├── index.html // initial page and meta tags
│   └── manifest.json 
├── src
│    ├── components // self contained components
│    ├── images // images needing importing
│    ├── routes // routes and grid layouts
│    ├── scss // Sass nested styles
│    │   └──  components // Sass for each component
│    └── tests
├── index.tsx
└── serviceWorker.tsx

```

## License

[MIT](./LICENSE)