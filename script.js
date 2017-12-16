function compile(){
	var abc = 5
	eval(document.getElementById('code').value)
	document.getElementById('response').value=abc
	//alert(document.getElementById('code').value)
}