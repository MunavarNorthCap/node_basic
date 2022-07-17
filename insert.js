const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert([
        {
            name: 'max 1',
            brand: 'micromax',
            price: 27500,
            category: 'Mobile'
        },
        {
            name: 'max 2',
            brand: 'micromax',
            price: 7500,
            category: 'Mobile'
        },
        {
            name: 'max 5',
            brand: 'micromax',
            price: 97500,
            category: 'Mobile'
        }
    ]);
    // console.log(result);

    if(result.acknowledged) {
        console.log(("data inserted"));
    }
}

insert();