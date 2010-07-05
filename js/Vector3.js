
/**
 * Construct a new Vector
 * @param _x The x component
 * @param _y The y component
 * @param _z The z component
 */
function Vector3(_x, _y, _z) {
  
  this.x = _x;
  this.y = _y;
  this.z = _z;
  
}

/**
 * Normalise the vector by dividing each component by its lenght.
 */
Vector3.prototype.normalise = function() {
  var lenSq = this.x*this.x + this.y*this.y + this.z*this.z;
  if (lenSq > 0) {
    // Get 1/len for speed as / is slow
    var oneOverLen = 1 / Math.sqrt(lenSq);
    this.x *= oneOverLen;
    this.y *= oneOverLen;
    this.z *= oneOverLen;
  }
}

Vector3.prototype.add = function(_vec) {
  return new Vector3(
    this.x + _vec.x,
    this.y + _vec.y,
    this.z + _vec.z
  );
}

Vector3.prototype.sub = function(_vec) {
  return new Vector3(
    this.x - _vec.x,
    this.y - _vec.y,
    this.z - _vec.z
  );
}

Vector3.prototype.multipy = function(_vec) {
  return new Vector3(
    this.x * _vec.x,
    this.y * _vec.y,
    this.z * _vec.z
  );
}

Vector3.prototype.crossProduct = function(_vec) {
  var temp = new Vector3(
    this.y * _vec.z - this.z * _vec.y,
    this.z * _vec.x - this.x * _vec.z,
    this.x * _vec.y - this.y * _vec.x
  );
  
  return temp.normalise();
}


Vector3.prototype.dotProduct = function(_vec) {
  return (this.x * _vec.x) + (this.y * _vec.y) + (this.z * _vec.z);
}

Vector3.prototype.transformVector = function(_m) {
  
  // Need a homogeneous vertex to be able to multiply by the matrix
  var v4    = new Vector4(this.x, this.y, this.z);
  // Vertex to hold the result of vertex tranfrom 
  var v4out = new Vector4();

  v4out.x = (v4.x * _m.m00) + (v4.y * _m.m10) + (v4.z * _m.m20) + (v4.w * _m.m30);
  v4out.y = (v4.x * _m.m01) + (v4.y * _m.m11) + (v4.z * _m.m21) + (v4.w * _m.m31);
  v4out.z = (v4.x * _m.m02) + (v4.y * _m.m12) + (v4.z * _m.m22) + (v4.w * _m.m32);
  v4out.w = (v4.x * _m.m03) + (v4.y * _m.m13) + (v4.z * _m.m23) + (v4.w * _m.m33);
  
  //return this;
  
  // Return a Vertex3 that has been reScale (i.e. not a homogeneous vertex)
  return v4out.reScale();
    
}
    
/** 
 * Get a string representation of the object
 * @return String representation
 */ 
Vector3.prototype.toString = function() {
  return "x: " + this.x + " y: " + this.y + " z: " + this.z;
}
