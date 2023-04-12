const membersModel= require('./memberModel')
const moviesModel= require('./movieModel')
const subscriptionsModel=require('./subscriptionModel')

let subscriptions;

const getalldata=async()=>
{
    subscriptions=[];
    let resp1=await subscriptionsModel.find({})
    let resp2=await membersModel.find({})
    let resp3=await moviesModel.find({})

    resp1.forEach(data=>
        {
            let obj={};
            obj._id=data._id;
            obj.date=data.date;
            
            obj.memberId=data.memberId;
            obj.dataMemberById=[];

            obj.movieId=data.movieId;
            obj.dataMovieById=[];
            
           for (let i = 0; i < resp2.length; i++)
           {
            if(resp2[i]._id==obj.memberId)
            {
                let obj2={};
                obj2.idUserMember=resp2[i]._id
                obj2.fullNameMember=resp2[i].fullName
                obj2.email=resp2[i].email
                obj2.city=resp2[i].city

                obj.dataMemberById.push(obj2)
            }
           }

           for (let i = 0; i < resp3.length; i++) 
           {
            if (resp3[i]._id==obj.movieId)
             {
                let obj3 = {}
                obj3.dataMovieById=resp3[i]._id
                obj3.movieName=resp3[i].name
                obj3.yearPremiered=resp3[i].yearPremiered
                obj3.genres=resp3[i].genres
                obj3.imageURL=resp3[i].imageURL

                obj.dataMovieById.push(obj3);
            }
           }
           subscriptions.push(obj)
        })
        return subscriptions;
}

const getdatabyid = async (id) =>
{
    let subscriptions=[];
    let resp1=await subscriptionsModel.find({})
    let resp2=await membersModel.find({})
    let resp3=await moviesModel.find({})
    let resp4 = resp1.filter(x=>x._id==id)

    resp4.forEach(data=>
        {
            let obj={};
            obj._id=data._id;
            obj.date=data.date;
            
            obj.memberId=data.memberId;
            obj.dataMemberById=[];

            obj.movieId=data.movieId;
            obj.dataMovieById=[];
            
           for (let i = 0; i < resp2.length; i++)
           {
            if(resp2[i]._id==obj.memberId)
            {
                let obj2={};
                obj2.idUserMember=resp2[i]._id
                obj2.fullNameMember=resp2[i].fullName
                obj2.email=resp2[i].email
                obj2.city=resp2[i].city

                obj.dataMemberById.push(obj2)
            }
           }

           for (let i = 0; i < resp3.length; i++) 
           {
            if (resp3[i]._id==obj.movieId)
             {
                let obj3 = {}
                obj3.dataMovieById=resp3[i]._id
                obj3.movieName=resp3[i].name
                obj3.yearPremiered=resp3[i].yearPremiered
                obj3.genres=resp3[i].genres
                obj3.imageURL=resp3[i].imageURL

                obj.dataMovieById.push(obj3);
            }
           }
           subscriptions.push(obj)
        })
        return subscriptions;
}

const addSub=async (obj)=>
{
    const sub=new subscriptionsModel(obj)
    await sub.save();
    return 'Created!';

}
const updateSub = async (id, obj) => {
    
    await subscriptionsModel.findByIdAndUpdate(id, obj);
    return 'Updated!';
};

  const deleteSub= async(id)=>
{
    await subscriptionsModel.findByIdAndDelete(id);
    return 'Deleted!';
}

const deleteSubFromMovie= async(id)=>
{
    // let resp1=await subscriptionsModel.find({})
    let allData=await getalldata()
    // console.log(allData)

    let arrDelite = allData.filter(x=>x.movieId==id)
    for (let i = 0; i < allData.length; i++) 
    {
        for (let k = 0; k < arrDelite.length; k++) 
            {
                if(allData[i].movieId==arrDelite[k].movieId)
                {
                    await subscriptionsModel.findByIdAndDelete(allData[i]._id);
                }
            }
    }
    // return allData;
}

const deleteSubFromMember= async(id)=>
{
    // let resp1=await subscriptionsModel.find({})
    let allData=await getalldata()
    // console.log(allData)

    let arrDelite = allData.filter(x=>x.memberId==id)
    for (let i = 0; i < allData.length; i++) 
    {
        for (let k = 0; k < arrDelite.length; k++) 
            {
                if(allData[i].memberId==arrDelite[k].memberId)
                {
                    await subscriptionsModel.findByIdAndDelete(allData[i]._id);
                }
            }
    }
    // return allData;
}


module.exports = {getalldata,getdatabyid,addSub,updateSub,deleteSub,
                deleteSubFromMovie,
                deleteSubFromMember}

