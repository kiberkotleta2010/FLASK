bers=document.getElementsByTagName('th')
console.log(bers)
function getost()
{

}
function sortArr(arr,arrName){
    for(let i =1;i<arr.length-1;i++)
        for(let j=2;j<arr.length;j++){
            if(arr[j]<arr[i])
            {
                let m=arr[i]
                arr[i]=arr[j]
                arr[j]=m
                let t=arrName[i]
                arrName[i]=arrName[j]
                arrName[j]=t
            }
        }
    }
var v
let arr1 =[]
let arrName1=[]
let arrName=[]
let arr=[]
let arr2=[]
let arrName2=[]
for(let i=0;i<bers.length;i++)
    {
        bers[i].addEventListener("click", function (e) {
            var k=e.target
            v=k.cellIndex 
            var table = document.getElementById("mytab1");
            for (var i = 0; i<table.rows.length; i++) {
                for (var j = 0;j <table.rows[i].cells.length; j++) {
                    arr1.push(table.rows[i].cells[v])
                    break
                }
            }
            for (var i = 0; i<table.rows.length; i++) {
                arrName1.push(table.rows[i].cells[0])  
            }
            arrName2=Array.from(arrName1)
            arr2=Array.from(arr1)
            arr=arr2.map(t => {return t.innerText})
            arrName=arrName2.map(t => {return t.innerText})
            console.log(arr)
            console.log(arrName)
            sortArr(arr,arrName)
            let json=JSON.stringify(arr);
            let url="/post"
            let xhr=new XMLHttpRequest()
            xhr.open("POST",url,true)
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.send(json);
            console.log(arr)
            console.log(arrName)

            });
    }

