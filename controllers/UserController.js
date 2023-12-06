const UserList = require("../public/javascripts/common/UserList");
const User = require("../public/javascripts/common/User")
const {USER_LIST_ADD_USER_ERROR} = require("../public/javascripts/util/Code")

var user_list = new UserList()

//查询全体用户
exports.user_get_list = (req,res)=>{
    res.json(user_list)
}


//添加用户
exports.user_add_post = (req,res)=>{
    const reqData=req.body
    const userId=reqData.id
    const userName=reqData.name
    if(userId===undefined||userName===undefined||userId===""||userName===""){
        return res.status(400).json({code:"400",message:"Wrong params in user add"})
    }
    var user = new User(userId,userName)
    try{
        user_list.addUser(user)
    }catch(err){
        if(err.message===USER_LIST_ADD_USER_ERROR){
            return res.status(400).json({code:"400",message:USER_LIST_ADD_USER_ERROR})
        }
    }

    res.send(`新增用户ID：${userId}  用户名：${userName}`)
}


//删除用户（通过id）
exports.user_delete_post = (req,res)=>{
    const reqData=req.body
    const userId=reqData.id
    if(userId===undefined||userId===""){
        return res.status(400).json({code:"400",message:"Wrong params in user delete"})
    }
    user_list.deleteUserById(userId)
    res.json({code:"200",message:"Delete User Success"})
}


//查询用户(通过URL路径参数传递ID查询)
exports.user_check_get =(req,res)=>{
    var userId=req.params.userId
    res.json(user_list.selectUserById(userId))
}