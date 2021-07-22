
// function inicia(){

//     var btn=document.getElementById('btnDestaque').addEventListener('click',function(){

//         var num=document.getElementById('fnum').value
//         var p=document.getElementsByTagName('p')

//         for(var i=0;i<p.length;i++){
//             p[i].removeAttribute('style')
//         }
//         var at=document.createAttribute('style')
//         at.value='color:pink;'
        
//         p[num].setAttributeNode(at) 

//     })


   
// }



function inicia(){

    var btn=document.getElementById('btnDestaque').addEventListener('click',function(){
    
     var num=document.getElementById('fnum').value
     var p=document.getElementsByTagName('p')
     
     

    //  for(i=0;i<p.length;i++){
    //      p[i].removeAttribute('style')
    //  }

     var at=document.createAttribute('style')
     at.value='border :1px solid black;background-color:pink; width:200px;margin-left:300px;'
     p[num].setAttributeNode(at)
     


    })
}


window.addEventListener('load',inicia)