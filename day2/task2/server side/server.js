const http = require("http");
const fs = require("fs");

let MainFileHTML = fs.readFileSync("../client side/main.html").toString();
// let WelcomeFileHTML = fs.readFileSync("../client side/welcome.html").toString();
let WelcomeFileHTML = fs.readFileSync("../client side/welcome.html").toString();
let StyleCSS = fs.readFileSync("../client side/style.css").toString();
let ScriptFile = fs.readFileSync("../client side/script.js").toString();
 
var clientname="ALY";
 var mobilenumber="";
 var email="";
 var address="";
http.createServer((req,res)=>{
    //#region GET
    if(req.method == "GET"){
        switch(req.url){
            case "/main.html":
                // res.writeHead(200,"Ok",{"content-type":"text/html"})
                // res.writeHead(200,"Ok",{"set-cookie":"userName='Aly'"})
                // res.setHeader("set-Cookie","userName2='Haitham'");
                // res.setHeader("Access-Control-Allow-Origin","*");//MiddleWare ==> install ==> use
                //CORS[Front xxx Back]
                res.write(MainFileHTML);
            break;
            case "/welcome.html":
                res.write(WelcomeFileHTML);
                // res.setHeader("Access-Control-Allow-Origin","/client side/main.html");
            break;
            case "/style.css":
                res.writeHead(200,"Ok",{"content-type":"text/css"})
                res.write(StyleCSS)
            break;
            case "/script.js":
                res.writeHead(300,"Hii",{"content-type":"text/javascript"})
                res.write(ScriptFile)
            break;
         
            default:
                res.write("<h1>No Page Found</h1>")
            break;
        }
            res.end();
    }
    //#endregion
    //#region POST
    else if(req.method == "POST"){//url
        req.on("data",(data)=>{
            console.log(data);
            clientname= data.toString().split("=")[1].split("+")[0].split("&")[0];
            mobilenumber=data.toString().split("=")[2].split("&")[0];
            email=data.toString().split("=")[3].split("&")[0];
            address=data.toString().split("=")[4];
        })
        req.on("end",()=>{
            console.log("post method")
            WelcomeFileHTML = WelcomeFileHTML.replace("{clientName}",clientname)
            WelcomeFileHTML = WelcomeFileHTML.replace("{MobileNumber}",mobilenumber)
            WelcomeFileHTML = WelcomeFileHTML.replace("{Email}",email)
            WelcomeFileHTML = WelcomeFileHTML.replace("{Address}",address)
            res.write(WelcomeFileHTML)
            res.end();
        })
    }
    //#endregion
    
    
}).listen("7001", ()=>{console.log("http://localhost:7001")})