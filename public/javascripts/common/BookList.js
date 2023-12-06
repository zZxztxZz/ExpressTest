const {BOOK_LIST_ADD_BOOK_ERROR} = require('../util/Code')
class BookList {
    constructor() {
        this.books=[]
        
    }
    //添加用户
    addBook(bookAdd) {
        if(this.books.length!=0){
            for(var book of this.books){
                if(book.getId()===bookAdd.getId()){
                    throw new Error(BOOK_LIST_ADD_BOOK_ERROR)
                    return;
                }
            }
        }
        this.books.push(bookAdd)
    }
    //删除用户
    deleteBookById(bookId){
        this.books=this.books.filter(book=>{book.getId()!=bookId})
    }
    //通过id查询用户信息
    selectBookById(bookId){
        for(var book of this.books){
            if(book.getId()===bookId){
                return book
            }
        }
    }
}
module.exports=BookList