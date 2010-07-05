
function Vector4(_x, _y, _z, _w) {
  
  this.x = _x || 1;
  this.y = _y || 1;
  this.z = _z || 1;
  this.w = _w || 1;
  
}

Vector4.prototype.reScale = function() {
  return new Vector3(
    this.x / this.w,
    this.y / this.w,
    this.z / this.w
  );
}

Vector4.prototype.toString = function() {
  return "x: " + this.x + " y: " + this.y + " z: " + this.z + " w: " + this.w;
}