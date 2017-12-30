function _getStringFromDiv(divName) {
    var domString = "",
        temp = "";
    $(String.format('#{0}', divName)).each(function() {
        temp = $(this).html();
        domString += ((temp == "<br>") ? "" : temp);
    });
    return domString;
}
if (!String.format) {
    String.format = function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

$(document).ready(function() {
    $('#input').on("input", function() {
        _spanDiv();
    });
});

function _spanDiv() {
    var original = $('#input');
    var obj = $('#input');
    var text = obj.text();
    text = text.split(" ");
    var parsed = "";
    obj.empty();
    for (var i = 0; i < text.length; i++) {
        var tag = document.createElement('span');
        tag.setAttribute('class', 'vtag');
        tag.innerHTML = text[i] + " ";
        var key = isKey(text[i]);
        if(key){
        	tag.setAttribute('style', 'color:red;');
        }
        
        
        
        obj.append(tag);
    }
}

function isKey(word) {
    var jskeywords = ['alert','abstract', 'arguments', 'await', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield'];
    if (jskeywords.includes(word))
    	return true;
    else
    	return false;
}