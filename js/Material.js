
function Material(_ambient, _diffuce, _specular, _glossiness) {
  
  this.ambient    = _ambient    || new Color();
  this.diffuse    = _diffuce    || new Color();
  this.specular   = _specular   || new Color();
  this.glossiness = _glossiness || 0;
  
}
