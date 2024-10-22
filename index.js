let arr=["HTML","CSS","JS","JavaScript","python","C","C++","Bootstrap","Java","React","Node.js"]
let input=document.getElementById("input");
let output=document.getElementById("output")
input.onkeyup=function(){
    let res=[]
    let data=input.value;
    if(data.length){
         res =arr.filter(Ele=>{
           return Ele.toLowerCase().includes(data.toLowerCase())  
        });
    }
    keyword(res)
}
function keyword(res){
    let content=res.map((list)=>{
        return "<li onclick=selectinput(this)>"+ list +"</li>"
    })
    output.innerHTML="<ul>" +content.join("")+ "</ul>"

}
function selectinput(list){
    input.value=list.innerHTML;
    output.innerHTML=""
}