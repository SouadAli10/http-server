console.log('node is beginning to read the file')
const fs = require('fs')
fs.writeFileSync('./my-text-file.txt','wooooow','utf8')
fs.readFileSync('./Cake.jpeg')
const files = fs.readdirSync('./')
const http = require('http');
const port= 3000;
const listobj= [
    {title: "njkndos",
    text: "khihoskjnfohie"
    },
    {title: "kohs",
    text: "khihoskjnfohie"
    }
]
const makeHTMLList2 = (list) => '<ul>\n'+list.map( element=>'<li>'+element.title+': '+element.text+'</li>').join('\n')+'\n</ul>'
const list_html = makeHTMLList2 (listobj)

const server = http.createServer( (request, response) => {
const url = request.url.split("/");
if (url[1]=='home'){
    response.end(
        console.log('Welcome to the http server')
    )
}
else if (url[1]= 'posts'){
    if (url[2]== null){
    response.end(
        console.log(url)
    )}
    else if (url[2]<=5000){
        if (url[2]==1){
            list_html[0].title;
            list_html[0].text;
            
        }
        else if (url[2]== 2){
            list_html[1].title;
            list_html[1].text;
        }
        else {
        response.end(
            console.log(url))}}
    else {
        response.end(
            makePage('error 404')
        )}
            
}
else if (url[1]= 'about'){
        if (url[2] == 'secret'){
            response.end(`
            <html>
                <head>
                    <title>SECRET PAGE</title>
                </head>
                <body>
                    <h1>Hello :) :) </h1>
                    <h2> you are in the secret page </h2>
                </body>
            </html>
            
            `)
        }
        else if (url[2]== 'cake'){
            response.end(`
            <html>
                <head>
                    <title>Cake</title>
                </head>
                <body>
                    <h1>Hello :) :) </h1>
                    <h2> what is your favorite cake?</h2>
                    <img src="/home/sha/test/img/Cake.jpeg" alt= "cake"/>
                </body>
            </html>
            
            `)
        }
        
        else if (url[2]== 'test')   
            {response.end(`
                <html>
                    <head>
                        <title>Test</title>
                    </head>
                    <body>
                        <h1> Heeeeey >>> </h1>
                        <p>you requested: <b>` + url + `</b></p>
                    </body>
                </html>
            `)}
}
else if (url[1]= 'add'){
    const a= parseInt(url[2])
    const b= parseInt(url[3])
    const c= a + b;
    response.end('add'+ c)
}

else {
    response.end(makePage('error 404'))
}})
server.listen(port, (err) => {
    if (err) {
      console.log('something bad happened', err)
    }
    else{
      console.log(`server is listening on port ${port}`)
    }
});
console.log(files)
