// Each file is a module. Thing defined here cannot be reached from the outside


function getSomeData(url = 'google.com') {
	console.log(`getting data from ${url}`);
}

// make function available outside of this module
// attaching it to the exports object

module.exports.getSomeData = getSomeData;
