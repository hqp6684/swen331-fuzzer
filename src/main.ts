//https://github.com/cheeriojs/cheerio
import * as cheerio from 'cheerio';
// https://github.com/request/request
import * as request from 'request';

// import {Observable} from 'rxjs';
function testArgs(){
    const argsRegex = /\w+(?=)/g;
   if(process.argv.length>2){
       let args = process.argv.splice(2);
       args.map(arg=>{
            let pair = arg.match(argsRegex);   
            console.log(`key : ${pair[0]}`);
            console.log(`value : ${pair[1]}`);
       })
   } 
}

function main(){
    let url = 'https://hpham.co';
    // let 
    // let rawDoc =  Observable.bindCallback(request(url, {}, (err,res,body)=>()));
    
    request(url, {}, (err, res, body)=>{
        if(!err){
            // console.log(body);
            let $ = cheerio.load(body);
            let alinks = $(body).find('a')
            alinks.map(a=>{
                
            })
            console.log(alinks);
        }
        console.log(err);
    })
}

// main();
testArgs();