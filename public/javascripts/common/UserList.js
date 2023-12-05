const {USER_LIST_ADD_USER_ERROR} = require('../util/Code')
class UserList {
    constructor() {
        this.users=[]
        
    }
    //添加用户
    addUser(userAdd) {
        if(this.users.length!=0){
            for(var user of this.users){
                if(user.getId()===userAdd.getId()){
                    throw new Error(USER_LIST_ADD_USER_ERROR)
                    return;
                }
            }
        }
        this.users.push(userAdd)
    }
    //删除用户
    deleteUserById(userId){
        this.users=this.users.filter(user=>{user.getId()!=userId})
    }
    //通过id查询用户信息
    selectUserById(userId){
        for(var user of this.users){
            if(user.getId()===userId){
                return user
            }
        }
    }
}
module.exports=UserList