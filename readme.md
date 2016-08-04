

> Modified promise-free version of [public-ip]

Queries the DNS records of OpenDNS which has an entry with your IP address.

## Usage

```js
const publicIp = require('./publicIp')

publicIp('v4', function(ip) {
	console.log(ip);
	//=> '46.5.21.123'
})

publicIp('v6', function(ip) {
	console.log(ip);
	//=> 'fe80::200:f8ff:fe21:67cf'
})
```


## API

Does not handle errors at all -- trusts that OpenDNS will be available and respond correctly (it might not).

### publicIp('v4', callback)

Invokes callback with your public IPv4 ip as the first argument.

### publicIp('v6', callback)

Invokes callback with your public IPv6 ip as the first argument.


## Related

- [public-ip](https://github.com/sindresorhus/public-ip) - Original of this module, with promises
- [internal-ip](https://github.com/sindresorhus/internal-ip) - Get your internal IP address
