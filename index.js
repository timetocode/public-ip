var dgram = require('dgram')
var dns = require('dns-socket')

var type = {
	v4: {
		server: '208.67.222.222',
		question: {
			name: 'myip.opendns.com',
			type: 'A'
		}
	},
	v6: {
		server: '2620:0:ccc::2',
		question: {
			name: 'myip.opendns.com',
			type: 'AAAA'
		}
	}
};

var query = function(version, callback) {
	var data = type[version]
	
	var socket = dns({
		socket: dgram.createSocket(version === 'v6' ? 'udp6' : 'udp4')
	})
	
	socket.query({
		questions: [data.question]
	}, 53, data.server, function(err, res) {
		var ip = res.answers[0] && res.answers[0].data
		socket.destroy()
		callback(ip)
	})
}

module.exports = query
