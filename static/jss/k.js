var zag=["режим защиты","номер ином","Inode утройства находится на","Количество ссылок на inode","Идентификатор пользователя","Идентификатор группы","Размер файла","Время последнего доступа","Время последней модификации","время создания","Aname"];
var nameKeys=["Aname","режим защиты","номер ином","Inode утройства находится на","Количество ссылок на inode","Идентификатор пользователя","Идентификатор группы","Размер файла","Время последнего доступа","Время последней модификации","время создания"];
console.log(zag.length);
var getHead=document.getElementsByTagName('th');
var k={};
var arr=[]
// function parseJS(a,b){
// for(let t=1;t<zag.length;t++)
//     for(let i=0;i<b[0].length;i++){
//         for(let j=0;j<b.length;j++){
            
//             arr.push(a[j][i]);
//         }
//         k[keys[t]]=arr;
//         arr.length=0;
//     } 
// }
function sortTdUp(v,key,obj){
    let g =obj[key[v]].length;
    for(let i =1;i<g;i++)
        for(let j=0;j<i;j++){
            if(obj[key[v]][i]<obj[key[v]][j])
            {
                let m=obj[key[v]][i]
                obj[key[v]][i]=obj[key[v]][j]
                obj[key[v]][j]=m
                for(let a=0;a<g;a++){
                    if(a==v){
                        continue;
                    }
                    else{
                        let t=obj[key[a]][i]
                        obj[key[a]][i]=obj[key[a]][j]
                        obj[key[a]][j]=t
                    }
                }
                
            }
        }
    }
function updateTable(k,key){
    var table = document.getElementById("myTable");
    for (var i = 1, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            table.rows[i].cells[j].innerText=k[key[j]][i-1];
            console.log(k[key[j]][i]);
            console.log("-----");
   }  
}
}
function createHead(k){
        const table=document.querySelector(".table_sort");
        const thead=document.createElement("thead");
        let tr=document.createElement("tr");
        let fragment = document.createDocumentFragment();
        for(let i =0;i<k.length;i++){
            let th =document.createElement("th");
            th.innerText=k[i];
            fragment.appendChild(th);
            console.log(k[i])
        }
        tr.appendChild(fragment);
        thead.appendChild(tr);
        table.appendChild(thead);
}
function createTable2(i,newKeys,k){
    const table=document.querySelector(".table_sort");
    const thead=document.createElement("thead")
    let tr=document.createElement("tr");
    let fragment = document.createDocumentFragment();
    for(let j =0;j<newKeys.length;j++){
        let td =document.createElement("td");
        td.innerHTML=k[newKeys[j]][i];
        
        fragment.appendChild(td);         
    }
    tr.appendChild(fragment);
    thead.appendChild(tr);
    table.appendChild(thead);
}
function getPosts(cb){
    let url="http://localhost:5000/ajax";
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url);
    xhr.addEventListener('load',()=>{
        const response = JSON.parse(xhr.responseText);
        cb(response);
        var keys=Object.keys(response);
        createHead(zag);
        var values=Object.values(response);
        //пфрсим  в удобное представление в объекте
        for(let t=1;t<nameKeys.length;t++){
            for(let i=0;i<values[0].length;i++){
                for(let j=0;j<values.length;j++){
                    arr.push(values[j][i]);
                }
                k[nameKeys[t]]=arr;
                t+=1;
                arr=[];
            }
        }
        k['Aname']=keys
        var newKeys=Object.keys(k)
        for(let i=0;i<k[newKeys[1]].length;i++){
            createTable2(i,newKeys,k);
        }
        for(let i=0;i<getHead.length;i++)
        {
            getHead[i].addEventListener("click", function (e) {
                let p=e.target
                v=p.cellIndex
                console.log(v) 
                sortTdUp(v,newKeys,k);
                updateTable(k,newKeys);
                console.log(k)
            })
        }
        });
    xhr.send();
}
getPosts(response=>{
    
    
})


