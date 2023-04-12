const Movies=require('./movieModel')
// const subscriptionsModel=require('./subscriptionModel')


const getAllMovies=()=>
{
    return Movies.find({})
}

const getMovie=(id)=>
{
    return Movies.findById({_id: id})
}
const addMovie= async (obj)=>
{
    const mv=new Movies(obj)
    await mv.save();
    return 'Created!'
}

const updateMovie=async (id,obj)=>
{
    await Movies.findByIdAndUpdate(id,obj);
    return 'Updated!';
}

const deleteMovie= async(id)=>
{
    await Movies.findByIdAndDelete(id);
    return 'Deleted!';
}


module.exports=
{
    getAllMovies,
    getMovie,
    addMovie,
    updateMovie,
    deleteMovie
};