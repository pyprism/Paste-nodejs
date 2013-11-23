var sys = require('util'),
    rest = require('restler');

/**var key = "ur";
var paste = " test from nodejs";

var apipas = "paste";

var name = "hirenTest" ;

var hiren = new Object();

  hiren.api_dev_key =key,
  hiren.api_option = apipas,
  hiren.api_paste_code = paste,
  hiren.api_paste_name;

var x = rest.post('http://pastebin.com/api/api_post.php', {
 // method : "POST" ,
  data : hiren
}).on('complete', function(data) {
  console.log(data);
});
**/
/** Main Part **/
//Create a new paste
exports.newPaste = function(key,code,userKey,pasteName,pasteFormat,pastePrivate, expireDate){
	if (typeof expireDate == "undefined"){
		expireDate = 'N';
	}
	var hiren = new Object() ;
	hiren.api_dev_key = key;
	hiren.api_option = 'paste';
	hiren.api_paste_code = code ;
	hiren.api_user_key = userKey ;
	hiren.api_paste_name = pasteName ;
	//hiren.api_paste_format = pasteFormat;
	//hiren.api_paste_private = pastePrivate ;
	hiren.api_paste_expire_date = expireDate ;

	rest.post('http://pastebin.com/api/api_post.php', {
		data : hiren
	}).on('complete', function(data) {
		console.log(data);
		return data ;
	});
}