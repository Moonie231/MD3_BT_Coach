const connect = require("../models/dbconnect");
const fs = require ('fs');

class BaseController {
   static async readFile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile (path, 'utf-8', (err, data) =>{
                if (err) {
                    console.log(err)
                }
                resolve(data)
            })
        })
    }
   static async querySQL(sql){
        return new Promise((resolve, reject) => {
            connect.query(sql, (err, result) =>{
                if (err){
                    reject(err);
                }
                resolve(result);
            })
        })
    }

}

module.exports = BaseController;