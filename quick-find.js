/*
Quick-find is an algorithm for solving dynamic connectivity problem;
The data structure to support this algo is an integer array indexed by objects;
The intepretation is two objects, m and n, are only connected if their entries in the array are the same (id[m] === id[n]);
*/

//initialization
//time complexity: O(N)
const QuickFind = (size) => {
  this._id = [];
  for (let i = 0; i < size; i++) {
    this._id[i] = i;
  }
};

//Union: connect two objects
//time complexity: O(N)
QuickFind.prototype.union = (x, y) => {
  let size = this._id.length;
  let xid = this._id[x];
  let yid = this._id[y];
  for (let i = 0; i < size; i++) {
    if (this._id[i] === xid) {
      this._id[i] = yid;
    }
  }
};

//Find: check if two objects are connected
//time complexity: O(1)
QuickFind.prototype.connected = (x, y) => {
  return this._id[x] === this._id[y];
};