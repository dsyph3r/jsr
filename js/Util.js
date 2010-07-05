
Util = {}

Util.trim = function(_toTrim) {
  return Util.ltrim(Util.rtrim(_toTrim));
}

Util.ltrim = function(_toTrim, chars) {
	chars = chars || "\\s";
	return _toTrim.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
Util.rtrim = function(_toTrim, chars) {
	chars = chars || "\\s";
	return _toTrim.replace(new RegExp("[" + chars + "]+$", "g"), "");
}