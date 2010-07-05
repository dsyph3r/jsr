

function Mesh(_material) {
  
  this.triangles    = [];
  this.numTriangles = 0;
  this.numVertices  = 0;
  this.numIndexes   = 0;
  
  this.loaded       = false;
  
  this.material  = _material || new Material();
  
  //Log.output(this.triangles);
  
}

Mesh.prototype.loadMesh = function(_mesh) {
  
 // var this = this;
  //$.get('/resources/meshes/'+_mesh, function(rawMesh) {
    
    var rawMesh = "" +
"8\n" +
"50.0 50.0 300.0\n" +
"200 50.0 200\n" +
"200 50.0 50.0\n" +
"50.0 50.0 50.0\n" +
"50.0 200 200\n" +
"200 200 200\n" +
"200 200 50.0\n" +
"50.0 200 50.0\n" +
"12\n" +
"3 0 1 2\n" +
"3 0 2 3\n" +
"3 0 4 5\n" +
"3 0 5 1\n" +
"3 1 5 6\n" +
"3 1 6 2\n" +
"3 2 6 7\n" +
"3 2 7 3\n" +
"3 3 7 4\n" +
"3 3 4 0\n" +
"3 4 7 6\n" +
"3 4 6 5"
    var lineIndex = 0;
    
    //Log.output(rawMesh);
    
    // Explode to lines
    var rawMeshLines = rawMesh.split("\n");
    //Log.output(rawMeshLines);
    
    // Read the first line. This will give is the number of vertices following
    this.numVertices = parseInt(Util.trim(rawMeshLines[lineIndex++]));
    //Log.output(this.numVertices);

    var vertices = [];
    
    // Read in the vertices
    var start = lineIndex;
    //console.log(lineIndex);
    for (; lineIndex < (start + this.numVertices); lineIndex++) {
      
      //Log.output(lineIndex);
      var vertex = Util.trim(rawMeshLines[lineIndex]).split(" ");
      //Log.output(vertex.length);
      
      if (vertex.length != 3) 
        return false;

      var vector = new Vector3(
        parseFloat(vertex[0]), parseFloat(vertex[1]), parseFloat(vertex[2])
      );
      vertices.push(vector);
    }  
    //Log.output("vertices" + vertices);

    
    // Read in the indexes to create the triangles
    this.numIndexes = parseInt(Util.trim(rawMeshLines[lineIndex++]));
    //Log.output(this.numIndexes);
    
    this.triangles = [];
    
    //Log.output("triangles " + this.triangles);
    
    start = lineIndex;
    
    var index = 0;
    for (; lineIndex < (start + this.numIndexes); lineIndex++) {
      
      var indexData = Util.trim(rawMeshLines[lineIndex]).split(" ");
      // Get the number of indicies per in this line
      var countIndexes = parseInt(indexData[0]);
      
      if (countIndexes != 3)
        return false;
      
      /*console.log(vertices[indexData[1]].toString());
      console.log(vertices[indexData[2]].toString());
      console.log(vertices[indexData[3]].toString());*/

      var triangle = new Triangle(
        vertices[indexData[1]], vertices[indexData[2]], vertices[indexData[3]]
      );
      this.triangles[index++] = triangle;
      
      //lineIndex = 200;
      
    }
    
    this.numTriangles = this.triangles.length;
    //console.log(this.triangles);
    this.loaded = true;
    
    //return true;
    
  //});

  //this.waitForLoad();

  return true;

}

Mesh.prototype.waitForLoad = function() {
  
  if (!this.loaded)
    setTimeout("this.waitForLoad", "1000");
  else
    return;
  
  //alert(this.loaded);
  
}
