const fs = require ('fs');
const BaseController = require("./basecontroller");

class Homecontroller extends BaseController {

    static showList = async (req, res) => {
        let dataHTML = await BaseController.readFile('./view/home.html');
        let homeHTML = '';
        let sql = `select * from user`;
        let request = await BaseController.querySQL(sql);

        request.forEach((item) => {
            homeHTML +=
                `<tr>
                    <td>${item.ID}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.birthday}</td>
                    <td>${item.phone}</td>
                    <td><a href="/edit"><button type="button" class="btn btn-primary">Edit</button></a> </td>
                    <td><a href="/delete"><button type="button" class="btn btn-danger">Delete</button></a> </td>
                </tr>`
        })
        res.writeHead(200, 'Content-Type', 'text/html');
        dataHTML = dataHTML.replace('{list}', homeHTML);
        res.write(dataHTML);
        res.end()
    }
}


module.exports = Homecontroller
