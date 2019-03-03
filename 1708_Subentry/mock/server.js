let http = require('http');

let url = require('url');

let fs = require('fs');

let sliders = require("./slider");

function read(cb) {
    fs.readFile('./good.json', 'utf8', (err, data) => {

        if (err || data.length === 0) {//文件错误或者没长度
            cb([])
        } else {
            cb(JSON.parse(data))
        }

    })
}
// function readList(cb) {
//     fs.readFile('./good.json', 'utf8', (err, data) => {

//         if (err || data.length === 0) {//文件错误或者没长度
//             cb([])
//         } else {
//             cb(JSON.parse(data))
//         }

//     })
// }

let offset = 5 ;

http.createServer((req, res) => {

    let { pathname, query } = url.parse(req.url, true);

    res.setHeader('Access-Control-Allow-Origin', '*');

    if (pathname === "/slider") {
        res.setHeader('content-type', 'text/json;charset=utf-8')
        setTimeout(()=>{
            return res.end(JSON.stringify(sliders))
        },1000)
        
    }
    //首页列表接口
    if (pathname === '/new') {
        res.setHeader('content-type', 'text/json;charset=utf-8');
        read((data) => {
            let datas = data.reverse().slice(0, 6);
            setTimeout(()=>{
                return res.end(JSON.stringify(datas))
            },1000)
            
        })
    }

    // if (pathname === '/list') {
    //     res.setHeader('content-type', 'text/json;charset=utf-8');
    //     readList((data) => {

    //         return res.end(JSON.stringify(data))
    //     })
    // }

    // 列表页接口拿一个或者全部拿出
    if (pathname === '/list') {
        let id = parseInt(query.id);

        res.setHeader('content-type', 'text/json;charset=utf8');
        read((data) => {
            if (id) {
                // let good = data.find;
                let one = data.filter((item) => item.id=== id)
                if(one){
                    res.end(JSON.stringify(one))
                }else{
                    res.end(JSON.stringify({}))
                }
                // res.end(JSON.stringify(one))
            } else {
                res.end(JSON.stringify(data))
            }
        })
    }

    if(pathname==='/page'){
        res.setHeader('content-type','text/json;charset=utf8');
        
        let page = parseInt(query.page);//获取前端传过来的值
            page = page-1;
        let hasemore = true;
        let lastindex = offset*page+offset;
        read((data)=>{
            //当最后的数据大于分页的数据
            if(lastindex>=data.length){
                hasemore = false;
            }
            let pagedata = data.slice(page*offset,lastindex)//每次获得五次数据1*5，5*1+5 包左不包右 就是数值的前一个
           
            res.end(JSON.stringify({data:pagedata,hasemore:hasemore}))
        }) 
    }
}).listen(3000)