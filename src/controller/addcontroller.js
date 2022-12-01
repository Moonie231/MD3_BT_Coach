const BaseController = require("./basecontroller");
const qs = require('qs')

class AddController  extends BaseController{
    static async sqlAddRoom(name, email, birthday, phone) {
        let sql = `insert into user (name, email, birthday, phone)
                            values ('${name}', '${email}', '${birthday}', '${phone}')`;
        let request = await BaseController.querySQL(sql);
        return request
    }

    static async addUser(req,res){
        if (req.method === 'GET') {
            let dataHTML = await BaseController.readFile('./view/add.html');
            res.write(dataHTML);
            res.end()
        } else {
            let data ='';
            req.on('data', chunk => {
                data += chunk;
            })
            req.on('end', async () => {
                let user = qs.parse(data)
              await  this.sqlAddRoom(user.name, user.email, user.birthday, user.phone);
                res.writeHead(301, { Location: '/' });
                res.end()
            })
        }
    }
}

module.exports = AddController;