class Book{
    constructor(id,name){
        this.id=id
        this.bookName=name
    }
    getId(){
        return this.id
    }
    setId(id){
        this.id=id
    }
    getName(){
        return this.bookName
    }
    setName(){
        this.bookName=this.name
    }
}
module.exports=Book