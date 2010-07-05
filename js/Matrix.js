
function Matrix() {
  
  this.m00; this.m01; this.m02; this.m03;
  this.m10; this.m11; this.m12; this.m13;
  this.m20; this.m21; this.m22; this.m23;
  this.m30; this.m31; this.m32; this.m33;
  
  this.identity();
  
}

Matrix.prototype.identity = function() {
  
  this.m00 = 1;    this.m01 = 0;     this.m02 = 0;    this.m03 = 0;
  this.m10 = 0;    this.m11 = 1;     this.m12 = 0;    this.m13 = 0;
  this.m20 = 0;    this.m21 = 0;     this.m22 = 1;    this.m23 = 0;
  this.m30 = 0;    this.m31 = 0;     this.m32 = 0;    this.m33 = 1;
  
}

Matrix.prototype.translation = function(_x, _y, _z) {
  
  this.m00 =  1;    this.m01 =  0;     this.m02 =  0;    this.m03 = 0;
  this.m10 =  0;    this.m11 =  1;     this.m12 =  0;    this.m13 = 0;
  this.m20 =  0;    this.m21 =  0;     this.m22 =  1;    this.m23 = 0;
  this.m30 = _x;    this.m31 = _y;     this.m32 = _z;    this.m33 = 1;
  
}

Matrix.prototype.scale = function(_x, _y, _z) {
  
  this.m00 = _x;    this.m01 =  0;     this.m02 =  0;    this.m03 = 0;
  this.m10 =  0;    this.m11 = _y;     this.m12 =  0;    this.m13 = 0;
  this.m20 =  0;    this.m21 =  0;     this.m22 = _z;    this.m23 = 0;
  this.m30 =  0;    this.m31 =  0;     this.m32 =  0;    this.m33 = 1;
  
}

/**
* Set a rotation matrix around X axis by _theta amount
* @param _theta
*/
Matrix.prototype.MatrixRotationX = function(_theta) {

   var  cosTheta = Math.cos(_theta);
   var  sinTheta = Math.sin(_theta);
   
   this.m00 = 1;    this.m01 = 0;          this.m02 = 0;         this.m03 = 0;
   this.m10 = 0;    this.m11 = cosTheta;   this.m12 = sinTheta;  this.m13 = 0;
   this.m20 = 0;    this.m21 = -sinTheta;  this.m22 = cosTheta;  this.m23 = 0;
   this.m30 = 0;    this.m31 = 0;          this.m32 = 0;         this.m33 = 1;
   
}

/**
* Set a rotation matrix around Y axis by _theta amount
* @param _theta
*/
Matrix.prototype.MatrixRotationY = function(_theta) {
   
   var  cosTheta = Math.cos(_theta);
   var  sinTheta = Math.sin(_theta);
   
   this.m00 = cosTheta;  this.m01 = 0;  this.m02 = -sinTheta;  this.m03 = 0;
   this.m10 = 0;         this.m11 = 1;  this.m12 = 0;          this.m13 = 0;
   this.m20 = sinTheta;  this.m21 = 0;  this.m22 = cosTheta;   this.m23 = 0;
   this.m30 = 0;         this.m31 = 0;  this.m32 = 0;          this.m33 = 1;
   
}

/**
* Set a rotation matrix around Z axis by _theta amount
* @param _theta
*/
Matrix.prototype.MatrixRotationZ = function(_theta) {
   
   var  cosTheta = Math.cos(_theta);
   var  sinTheta = Math.sin(_theta);
   
   this.m00 = cosTheta;   this.m01 = sinTheta;  this.m02 = 0;  this.m03 = 0;
   this.m10 = -sinTheta;  this.m11 = cosTheta;  this.m12 = 0;  this.m13 = 0;
   this.m20 = 0;          this.m21 = 0;         this.m22 = 1;  this.m23 = 0;
   this.m30 = 0;          this.m31 = 0;         this.m32 = 0;  this.m33 = 1;
   
}

Matrix.prototype.MatrixProjection = function(_focal) {

   this.m00 = 1;    this.m01 = 0;     this.m02 = 0;    this.m03 = 0;
   this.m10 = 0;    this.m11 = 1;     this.m12 = 0;    this.m13 = 0;
   this.m20 = 0;    this.m21 = 0;     this.m22 = 1;    this.m23 = 1 / _focal;
   this.m30 = 0;    this.m31 = 0;     this.m32 = 0;    this.m33 = 0;
   
}
   
/**
* Multiplies 2 matricies together, and return the result as a
* new matrix.
* @param _a
* @param _b
* @return
*/
Matrix.MatrixMultiply = function(_a, _b) {

   var matrix = new Matrix();
   
   // Column 1 in new matrix
   matrix.m00 = (_a.m00 * _b.m00) + (_a.m01 * _b.m10) + (_a.m02 * _b.m20) + (_a.m03 * _b.m30);
   matrix.m10 = (_a.m10 * _b.m00) + (_a.m11 * _b.m10) + (_a.m12 * _b.m20) + (_a.m13 * _b.m30);
   matrix.m20 = (_a.m20 * _b.m00) + (_a.m21 * _b.m10) + (_a.m22 * _b.m20) + (_a.m23 * _b.m30);
   matrix.m30 = (_a.m30 * _b.m00) + (_a.m31 * _b.m10) + (_a.m32 * _b.m20) + (_a.m33 * _b.m30);
   
   // Column 2 in new matrix
   matrix.m01 = (_a.m00 * _b.m01) + (_a.m01 * _b.m11) + (_a.m02 * _b.m21) + (_a.m03 * _b.m31);
   matrix.m11 = (_a.m10 * _b.m01) + (_a.m11 * _b.m11) + (_a.m12 * _b.m21) + (_a.m13 * _b.m31);
   matrix.m21 = (_a.m20 * _b.m01) + (_a.m21 * _b.m11) + (_a.m22 * _b.m21) + (_a.m23 * _b.m31);
   matrix.m31 = (_a.m30 * _b.m01) + (_a.m31 * _b.m11) + (_a.m32 * _b.m21) + (_a.m33 * _b.m31);
   
   // Column 3 in new matrix
   matrix.m02 = (_a.m00 * _b.m02) + (_a.m01 * _b.m12) + (_a.m02 * _b.m22) + (_a.m03 * _b.m32);
   matrix.m12 = (_a.m10 * _b.m02) + (_a.m11 * _b.m12) + (_a.m12 * _b.m22) + (_a.m13 * _b.m32);
   matrix.m22 = (_a.m20 * _b.m02) + (_a.m21 * _b.m12) + (_a.m22 * _b.m22) + (_a.m23 * _b.m32);
   matrix.m32 = (_a.m30 * _b.m02) + (_a.m31 * _b.m12) + (_a.m32 * _b.m22) + (_a.m33 * _b.m32);
   
   // Colum 4 in new matrix
   matrix.m03 = (_a.m00 * _b.m03) + (_a.m01 * _b.m13) + (_a.m02 * _b.m23) + (_a.m03 * _b.m33);
   matrix.m13 = (_a.m10 * _b.m03) + (_a.m11 * _b.m13) + (_a.m12 * _b.m23) + (_a.m13 * _b.m33);
   matrix.m23 = (_a.m20 * _b.m03) + (_a.m21 * _b.m13) + (_a.m22 * _b.m23) + (_a.m23 * _b.m33);
   matrix.m33 = (_a.m30 * _b.m03) + (_a.m31 * _b.m13) + (_a.m32 * _b.m23) + (_a.m33 * _b.m33); 

   return matrix;
   
}
    
Matrix.prototype.toString = function() {
  return "" +
    this.m00 + " " +  this.m01 + " " + this.m02 + " " + this.m03 + " " + "\n" +
    this.m10 + " " +  this.m11 + " " + this.m12 + " " + this.m13 + " " + "\n" +
    this.m20 + " " +  this.m21 + " " + this.m22 + " " + this.m23 + " " + "\n" +
    this.m30 + " " +  this.m31 + " " + this.m32 + " " + this.m33 + " " + "\n";
}