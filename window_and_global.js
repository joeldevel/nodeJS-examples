// Whithin node there is no window object

try {
	window.console.log(window);
} catch(e) {
	global.console.log("window object does not exists, use global");	
	global.setTimeout(()=>global.console.log("Bang!"),1200);
}



