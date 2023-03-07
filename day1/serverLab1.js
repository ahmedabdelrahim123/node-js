var fs = require("fs");
const http = require("http");
http.createServer((req,res)=>{
    let result;
    if(req.url != "/favicon.ico"){
        let o = req.url.split("/");
        let num1=parseInt(o[1],10);
        let num2=parseInt(o[2],10);
        let opr=o[3];
        switch (opr) {
            case "sum":
                result=num1+num2;
                res.write(JSON.stringify("sum of numbers = "+result));
                fs.appendFileSync("task.txt",JSON.stringify("sum of numbers = "+result));//bouns1
                break;
            case "sub":
                result=num1-num2;
                res.write(JSON.stringify("sub of numbers = "+result));
                fs.appendFileSync("task.txt",JSON.stringify("sub of numbers = "+result));//bouns1
                break;
            case "multi":
                result=num1*num2;
                res.write(JSON.stringify("multi of numbers = "+result));
                fs.appendFileSync("task.txt",JSON.stringify("multi of numbers = "+result));//bouns1
                break;
            case "div":
                result=num1/num2;
                res.write(JSON.stringify("div of numbers = "+result));
                fs.appendFileSync("task.txt",JSON.stringify("div of numbers = "+result));//bouns1
                break;
            default:
                res.write("<h1>plsase enter valid operation<h1>");
                fs.appendFileSync("task.txt","plsase enter valid operation");//bouns1
                break;
        }
    }
    res.end();
})
.listen("9000",
            ()=>{
                console.log("Lisining on Port 9000")
            }
       )