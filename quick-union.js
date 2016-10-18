/*
Quick Union is an algorithm for solving dynamic connectivity problem;
The data structure to support this algo is an integer array indexed by objects;
Defects: trees can get tall, not scalable on large amout of data
*/


//initialization
//time complexity = O(N)

const QuickUnion = (size) => {
  this._storage = [];
  for (let i = 0; i < size; i++) {
    this._storage[i] = i;
  }
};

//root : chase parent pointers until reach root
//time complexity (worst case)= O(N) 

QuickUnion.prototype.root = (m) => {
  while (m !== this._storage[m]) {
    m = this._storage[m]; 
  }
  return m;
};

//find: if p and q are connected return true
//time complexity = O(N)

QuickUnion.prototype.connected = (x, y) => {
  return this.root(x) === this._root(y);
};

//union: connect p and q;
//time complexity = O(N) or constant time given root
QuickUnion.prototype.union = (x, y) => {
  let xroot = this.root(x);
  let yroot = this.root(y);
  this._storage[xroot] = yroot; //change root of x to point to root of y
};

/*-----------------------------------------IMPROVEMENT ON QUICK UNION---------------------------------
Weighted Quick Union: 
-to avoid tall trees; 
-keep track of size of each tree(number of objs); 
-balance by linking root of smaller tree to root of larger tree
*/


//initialization
//time complexity = O(N)

const weightedQuickUnion = (size) => {
  this._storage = [];
  this._weight = [];
  for (let i = 0; i < size; i++) {
    this._storage[i] = i;
  }
  for (let j = 0; j < size; j++) {
    this._weight[j] = 1;
  }
};

//root: chase parent pointers until reach root
//time complexity (worst case)= O(lg N) 

weightedQuickUnion.prototype.root = (m) => {
  while (m !== this._storage[m]) {
    this._storage[m] = this._storage[this._storage[m]];//this line represents 'path compression' to flatten the tree; parent points to grandparent
    m = this._storage[m]; // child point to parent
  }
  return m;
};


//find: if p and q are connected return true
//time complexity = O(lg N); time proportional to depth of x and y

weightedQuickUnion.prototype.connected = (x, y) => {
  return this.root(x) === this._root(y);
};


//union: connect p and q;
//time complexity = O(N) or constant time given root
weightedQuickUnion.prototype.union = (x, y) => {
  let xroot = this.root(x);
  let yroot = this.root(y);
  if (xroot === yroot) {
    return;
  }
  if (this._weight[xroot] < this._weight[yroot]) { //if xroot tree is smaller than yroot tree; attach xroot tree on yroot and increment size of yroot tree;
    this._storage[xroot] = yroot;
    this._weight[yroot] += this._weight[xroot]; 
  } else {
    this._storage[yroot] = xroot;
    this._weight[xroot] += this._weight[yroot]; 
  }
};
















