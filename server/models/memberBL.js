const Members=require('./memberModel')

const getAllMembers=()=>
{
    return Members.find({})
}

const getMember=(id)=>
{
    return Members.findById({_id: id})
}
const addMember= async (obj)=>
{
    const m=new Members(obj)
    await m.save();
    return 'Created!'
}

const updateMember=async (id,obj)=>
{
    await Members.findByIdAndUpdate(id,obj);
    return 'Updated!';
}

const deleteMember= async(id)=>
{
    await Members.findByIdAndDelete(id);
    return 'Deleted!';
}

module.exports=
{
    getAllMembers,
    getMember,
    addMember,
    updateMember,
    deleteMember
};