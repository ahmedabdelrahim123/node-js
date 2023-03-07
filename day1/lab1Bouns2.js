const http = require("http");
http.createServer((req,res)=>{
    let result=0;
    if(req.url != "/favicon.ico"){
        let o = req.url.split("/");
        let opr=o[1];
            switch (opr) {
                case "sum":
                    for (let i = 2; i <= o.length-1; i++) {
                        result+=parseInt(o[i],10);;
                    }
                    res.write(JSON.stringify("sum of numbers = "+result))
                    break;
                case "sub":
                    let resultt=parseInt(o[2]);
                    for (let i = 3; i <= o.length-1; i++) {
                       resultt-=parseInt(o[i],10);
                    }
                    res.write(JSON.stringify("sub of numbers = "+resultt));
                    break;
                case "multi":
                    let result3=1;
                    for (let i = 2; i <= o.length-1; i++) {
                        result3*=parseInt(o[i],10);
                     }
                    res.write(JSON.stringify("multi of numbers = "+result3));
                    break;
                case "div":
                    let result4=parseInt(o[2]);
                    for (let i = 3; i <= o.length-1; i++) {
                       result4/=parseInt(o[i],10);
                    }
                    res.write(JSON.stringify("div of numbers = "+result4));
                    break;
                default:
                    res.write("<h1>plsase enter valid operation<h1>");
                    break;
            }
    }
    res.end();
})
.listen("1000",
            ()=>{
                console.log("Lisining on Port 1000")
            }
       )