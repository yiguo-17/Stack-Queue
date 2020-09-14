class Stack{
    constructor(){
        this.array = []
    }
    Push(para){
        this.array.push(para)
    }
    Pop(){
        if(this.array.length ===0){console.log('empty stack')}
        else{this.array.pop()}
    }
    Peek(){
        if(this.array.length ===0){console.log('empty stack')}
        else {console.log(this.array[this.array.length-1])}
    }
    isEmpty(){
        if(this.array.length ===0){return true}
    }
}
class Queue{
    constructor(){
        this.array = []
    }
    Enqueue(para){
        this.array.push(para)
    }
    Dequeue(){
        if(this.array.length ===0){console.log('empty queue')}
        else{this.array.shift()}
    }
    Front(){
        if(this.array.length ===0){console.log('empty queue')}
        else{console.log(this.array[0])}
    }
    isEmpty(){
        if(this.array.length ===0){return true}
    }
    printQueue(){
        return this.array.join(',')
    }
}