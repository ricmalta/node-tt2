var	
	Template = require('../lib/tt2').Template;
	t = new Template({INCLUDE_PATH:"test/view"});

t.process("vars.tt2",{variable: process.version},function(err,output){
	process.stdout.write(output);
});
