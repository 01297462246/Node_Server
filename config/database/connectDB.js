const mongoose = require('mongoose');

var test = async () => {
    await mongoose.connect('mongodb://localhost/demo_mongoDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;

    const accountShema = new Schema({
        // _id: ObjectId,
        username: String,
        password: String,
        info: {
            type: String,
            ref: 'info',
        }
    }, {
        collection: "account",//Định nghĩa collection-nếu ko có dòng này thi 
        //khi get model nó sẽ auto sửa tên thành số nhiều
    });

    const AccountModel = mongoose.model('account', accountShema);//account ở đây là tên bảng trong collections

    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    // console.log(AccountModel.toString);
    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    //Method Create
    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    // console.log("Create");
    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    // await AccountModel.create({
    //     username: "DemoCreate",
    //     password: "123456"
    // })
    //     .then((data) => console.log("Create done: " + data))
    //     .catch((err) => console.log("Create fail: " + err));
    // //Method Find
    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    // console.log("Find");
    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    // await AccountModel.find({})//find with object
    //     .then((data) => console.log("Find done: " + data))
    //     .catch((err) => console.log("Find ERROR: " + err));
    // //Method Update
    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    // console.log("Update");
    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    // //Update one object => just update first element found
    // await AccountModel.updateOne({ username: "DemoCreate", password: "123456" }, { username: "demo123" })
    //     .then((data) => console.log("Update done: " + JSON.stringify(data, null, 2)))
    //     .catch((err) => console.log("Update error: " + err));
    // //Update many object
    // await AccountModel.updateMany({ username: "DemoCreate", password: "123456" }, { username: "demo123" })
    //     .then((data) => console.log("Update done: " + JSON.stringify(data, null, 2)))
    //     .catch((err) => console.log("Update error: " + err));
    // //Method Delete
    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    // console.log("Delete");
    // console.log(">>>>>>>>>>>>>>>>>>>>>");
    //Delete one object => just delete first element found
    // await AccountModel.deleteOne({ username: "demo123", password: "123456" })
    //     .then((data) => console.log("Delete done: " + JSON.stringify(data, null, 2)))
    //     .catch((err) => console.log("Delete error: " + err));
    // // Delete many object
    // await AccountModel.deleteMany({ username: "demo123", password: "123456" })
    //     .then((data) => console.log("Delete done: " + JSON.stringify(data, null, 2)))
    //     .catch((err) => console.log("Delete error: " + err));
    //find dùng điều kiện nâng cao
    await AccountModel.find({
        // username:{$gte:20},// lớn hơn hoặc bằng
        // username:{$lte:20},// bé hơn hoặc bằng
        // username:{$lt:20},// bé hơn 
        // username:{$gt:20},// lớn hơn 
        // Dấu , tượng trưng cho dấu và &&
        // $or: [{ username: { $gt: 20 } }, { password: { $lt: 10 } }],// mẫu cho dấu hoặc ||
        // $in:[3000,4000,5000] // thuộc trong cái mảng điều kiện
        // salary:{$in:[1000,1200]},
        username: /demo123/
    })
        // .sort('password')//sort by password
        // .skip(1)//Skip 1 step
        // .limit(2)//max element got = 2
        .then((data) => console.log("DATA: " + data))
        .catch((err) => console.log("ERR: " + err));


    const infoShema = new Schema({
        // _id: ObjectId,
        fullname: String,
        age: Number,
        sex: Boolean,
        account: {
            type: String,
            ref: 'account',
        }
    }, {
        collection: "info",
    });
    const InfoModel = mongoose.model('info', infoShema);
    InfoModel.find({
        fullname: "Huynh Duy Quoc",
        age: 21,
        sex: true,
        account: "60a7cf4d683276079055e7e8",
    })
        .populate('account')//used to ref
        // .populate('bank')//if u wanna to get ref more
        // .populate({
        //     path: 'account',
        //     populate: { path: 'info' }
        // })// =>populate 2 times // gọi lại thông tin account có trong infok
        .then(data => console.log("Info: " + data))
        .catch(err => console.log("ERR: " + err));
}

test();