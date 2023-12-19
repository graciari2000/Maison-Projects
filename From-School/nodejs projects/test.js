const http = require("http");
const fileSys = require("fs");


http
  .createServer((req, res) => {


    switch (req.url) {
      case "/url1":
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf8" });
        const fileTSync = fileSys.readFileSync(__dirname + "/page1.txt", {
            encoding: "utf8",
            flag: 'r'
        })
        res.end(fileTSync);
        break;


      case "/url2":
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf8" });
        fileSys.readFile(__dirname + "/page2.txt", {
            encoding: "utf8",
            flag: 'r'
        }, function(err, data) {
            if(err) console.log(err)
            else res.end(data)
        })
        break;


        case "/url3":
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf8" });
            fileSys.readFile(__dirname + "/page2.txt", {
                encoding: "utf8",
                flag: 'r'
            }, function(err, data) {
                if(err) console.log(err)
                else console.log(data)
            })
            const fileTSync2 = fileSys.readFileSync(__dirname + "/page1.txt", {
                encoding: "utf8",
                flag: 'r'
            })
            console.log(fileTSync2)
            break;


      default:
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf8" });
        res.end("erreur 404 page non trouvé");
        break;
    }
  })
  .listen(8885);
