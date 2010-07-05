
/**
 * Class to represent an r, g, b color in the range 0 - 1. The reason
 * for not using the color class provided by java is that it only returns
 * the color values as integers in the range 0 - 255. This would require
 * conversion to floats in the range 0 - 1 when the phong shading model is used.
 */
function Color(_r, _g, _b) {

  this.r = _r || 0.5;
  this.g = _g || 0.5;
  this.b = _b || 0.5;
        
  this.clipColor();
  
}
   
Color.prototype.clipColor = function() {
  
  if (this.r < 0)       this.r = 0;
  else if (this.r > 1)  this.r = 1;
  
  if (this.g < 0)       this.g = 0;
  else if (this.g > 1)  this.g = 1;
          
  if (this.b < 0)       this.b = 0;
  else if (this.b > 1)  this.b = 1;
        
}

