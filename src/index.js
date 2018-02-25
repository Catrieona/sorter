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
    var temp = []
    for(let i=0;i<indices.length;i++){
      temp.push(this.memory[indices[i]])
    }    
    if(this.comparator){
      temp.sort(this.comparator)
    } else {
      temp.sort(function(a,b){
        return a-b
      });
    }    
    if(indices[0] > indices[1]){
      temp.reverse()
    }    
    for(let j = 0; j<temp.length;j++){
      this.memory[indices[j]] = temp[j]
    }      
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction
    
  }
}

module.exports = Sorter;