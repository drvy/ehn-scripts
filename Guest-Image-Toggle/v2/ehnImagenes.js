if(isGuest()){ insertMessage(); }

function mostrarImagenes(){
	var css = '.post img {display:inline;}';
	var head = document.head || document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	style.type = 'text/css';
	if(style.styleSheet){style.styleSheet.cssText = css;}
	else { style.appendChild(document.createTextNode(css)); }
	head.appendChild(style);
	document.getElementById('toggleImg').style.display='none';
};

function isGuest(){
	if(typeof document.getElementsByClassName!=='function'){return false;}
	var publi = document.getElementsByClassName('publi_sponsor');
	if(publi.length>0){return true;}else{return false;}
};

function insertMessage(){
	var message = 'Las imagenes para usuarios no registrados, <strong>estan ocultas.</strong> ';
	var button = '<input type="button" onclick="mostrarImagenes();" value="Haz click para mostrarlas." />';
	var style = 'background:#ccc; position:fixed; display:block; width:100%; top:0; padding:2px font-size:1.2em; color:#000; text-align:center;';
	var div = document.createElement('div');
	div.setAttribute('style',style);
	div.setAttribute('id','toggleImg');
	div.innerHTML = message+button;
	body = document.body || document.getElementsByTagName('body')[0];
	body.appendChild(div);
};