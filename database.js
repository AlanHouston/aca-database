let fs = require("fs");

exports.create = function(type,data,doneCallback){  
    
}
exports.find = function(type,id,doneCallback){
    //type = "user"
    fs.readFile("db.json", (err,data) => {
        let parsedData = JSON.parse(data);
        let users = parsedData(type);
        let user = users.find(u=>user.id == id)
        doneCallback(user);
    });
}

