# agenix-website

[Live Website on IPFS](https://cloudflare-ipfs.com/ipfs/QmbBXHR9awfJ6baButt9SmpWtBfXTSFaAHVhrhCZqbDbjz/)

### Install

```
yarn install
```

### Serve
```
yarn start
```

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