
function Renderer(_canvas) {
  
  this.canvas           = _canvas;
  
  if (!this.canvas.getContext) {
    alert("unable to get canvas context");
  }
    
  this.projection       = new Matrix();
  //this.projection.MatrixProjection(1);

  // The mesh to render
  this.mesh             = null;
  // Store the transformed mesh vertices
  this.transformed      = [];
  
  // Various rendering settings
  this.depthSort        = true;
  this.cullBackFace     = true;
  this.renderWireframe  = false;
  this.renderFaces      = true;
  this.lighting         = true;
  
}

Renderer.prototype.setMesh = function(_mesh) {
  
  this.mesh = _mesh;
  
  this.transformed = [];
  
}

Renderer.prototype.setProjection = function(_m) {
  
  this.projection = _m;
  
}

Renderer.prototype.transformMesh = function(_m) {
    
  console.log(this.mesh.triangles);
  
  for (var i = 0; i < this.mesh.triangles.length; i++) {
   
    this.transformed.push(new Triangle(
      this.mesh.triangles[i].v0.transformVector(_m),
      this.mesh.triangles[i].v1.transformVector(_m),
      this.mesh.triangles[i].v2.transformVector(_m)
    ));
    
    // TODO
    //if (this.depthSort)
    //  this.quickSort(this.transformed, 0, this.transformed.length - 1);
  }
}

Renderer.prototype.renderMesh = function(_lightPos) {
 
  var width  = 400 / 2;
  var height = 400 / 2;
  
  var vecToLight   = null;
  var vecToViewer  = null;
  
  var color        = null;
  
  var r, g, b;
  var arrayX = [];
  var arrayY = [];
  
  // Draw each of the triangles, back to front rendering for correct ordering
  for (var i = this.transformed.length - 1; i >= 0; i--) {
  
console.log(    this.transformed[i]);
    
    vecToLight = _lightPos.sub(this.transformed[i].centre)
    vecToLight.normalise();
    vecToViewer = this.transformed[i].centre.sub(new Vector3(0, 0, 0));
    vecToViewer.normalise();
    
    // TODO
    //if (this.cullBackFace) {
    //      
    //}
    
    // Calculate the color of the triangle
    //color = this.calcLight()
    // Transform triangles by projection matrix
    this.transformed[i].v0 = this.transformed[i].v0.transformVector(this.projection);
    this.transformed[i].v1 = this.transformed[i].v1.transformVector(this.projection);
    this.transformed[i].v2 = this.transformed[i].v2.transformVector(this.projection);
    
    if (this.renderFaces) {
      
      var ctx = this.canvas.getContext('2d');

      // Filled triangle
      ctx.beginPath();
      //console.log(this.transformed[i].v0.toString());
      //console.log(this.transformed[i].v1.toString());
      //console.log(this.transformed[i].v2.toString());
      
      ctx.moveTo(this.transformed[i].v0.x, this.transformed[i].v0.y);
      ctx.lineTo(this.transformed[i].v1.x, this.transformed[i].v1.y);
      ctx.lineTo(this.transformed[i].v2.x, this.transformed[i].v2.y);
      ctx.stroke();

        
    }
    
    // TODO
    //if (this.renderMesh) {
    //      
    //}
   
  }
}
