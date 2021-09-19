const path = require('path');

const absPath = path.format({
	root: '/ignored',
	dir: '/home/user/dir',
	base: 'file.txt'
});

console.log(absPath);

const myPath = '/home/user/dir/file.sh';

console.log(path.parse(myPath));
