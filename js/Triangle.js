
function Triangle(_v0, _v1, _v2, _normal) {
  
  // Triangle Vertices
  this.v0 = _v0 || new Vector3();
  this.v1 = _v1 || new Vector3();
  this.v2 = _v2 || new Vector3();
  
  //this.normal = _normal || this.calcNormal();
  
  // Centre of triangle
  this.centre =  this.calcCentre();
  
}

Triangle.prototype.calcNormal = function() {
  
  var vecA = new Vector3(
    this.v1.x - this.v0.x,
    this.v1.y - this.v0.y,
    this.v1.z - this.v0.z
  );
  
  var vecB = new Vector3(
    this.v2.x - this.v1.x,
    this.v2.y - this.v1.y,
    this.v2.z - this.v1.z
  );
  
  return this.normal = vecA.crossProduct(vecB);
  //this.normal.normalise();
  
}

Triangle.prototype.calcCentre = function() {
  

  return this.centre = new Vector3(
    (this.v0.x + this.v1.x + this.v2.x) / 3,
    (this.v0.y + this.v1.y + this.v2.y) / 3,
    (this.v0.z + this.v1.z + this.v2.z) / 3
  );

}

Triangle.prototype.toString = function() {
  return
    "v0: " + this.v0.toString() + "\n" +
    "v1: " + this.v1.toString() + "\n" +
    "v2: " + this.v2.toString() + "\n";
}