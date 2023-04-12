const User=require('./userModel')
const allData=require('../confing/database')


const getAllUsers=()=>
{
    return User.find({})
}

const getUser=(username,password)=>
{
    allData.usrs
}
const addUser= async (obj)=>
{
    const us=new User(obj)
    await us.save();
    return 'Created!'
}

const updateUser=async (id,obj)=>
{
    await User.findByIdAndUpdate(id,obj);
    return 'Updated!';
}

const deleteUser= async(id)=>
{
    await User.findByIdAndDelete(id);
    return 'Deleted!';
}


module.exports=
{
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
};