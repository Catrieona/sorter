class Sorter {
  constructor() {
   this.memory=[]
   this.comparator = ''
  }

  add(element) {
  this.memory.push(element)
  return this
  }

  at(index) {
    return this.memory[index]
  }

  get length() {
   return this.memory.length
  }

  toArray() {
    return this.memory
  }

  sort(indices) {

    let temp = this.memory.map((v,i) => [v,i]);
    temp.sort(function(a,b){
      if(indices.indexOf(a[1]) != -1 && indices.indexOf(b[1]) !== -1){
        return a[0]-b[0];
        }
      }
    );
    this.memory = temp.map((v) => v[0])
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction
  }
}

module.exports = Sorter;