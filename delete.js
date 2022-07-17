const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    // console.warn(data);  // <pending> a promise

    let result = await data.deleteMany({
        name: 'max pro 2'
    });
    console.warn(result);
    
    // use deleteOne() -> 1 data to remove

    if(result.acknowledged) {
        console.warn("record deleted")
    }
};

deleteData();
