const BookList = require("../public/javascripts/common/BookList");
const Book = require("../public/javascripts/common/Book")
const {BOOK_LIST_ADD_BOOK_ERROR} = require("../public/javascripts/util/Code")

var book_list = new BookList()

//查询所有书
exports.book_get_list = (req,res)=>{
    res.json(book_list)
}


//添加书
exports.book_add_post = (req,res)=>{
    const reqData=req.body
    const bookId=reqData.id
    const bookName=reqData.bookName
    if(bookId===undefined||bookName===undefined||bookId===""||bookName===""){
        return res.status(400).json({code:"400",message:"Wrong params in book add"})
    }
    var book = new Book(bookId,bookName)
    try{
        book_list.addBook(book)
    }catch(err){
        if(err.message===BOOK_LIST_ADD_BOOK_ERROR){
            return res.status(400).json({code:"400",message:BOOK_LIST_ADD_BOOK_ERROR})
        }
    }

    res.send(`新增书ID：${bookId}  书名：${bookName}`)
}


//删除书（通过id）
exports.book_delete_post = (req,res)=>{
    const reqData=req.body
    const bookId=reqData.id
    if(bookId===undefined||bookId===""){
        return res.status(400).json({code:"400",message:"Wrong params in book delete"})
    }
    book_list.deleteBookById(bookId)
    res.json({code:"200",message:"Delete book Success"})
}


//查询用户(通过URL路径参数传递ID查询)
exports.book_check_get =(req,res)=>{
    var bookId=req.params.bookId
    res.json(book_list.selectBookById(bookId))
}