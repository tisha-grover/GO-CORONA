    var c=0;

         function createQuestion(){
             alert("Your Question is added");
             var div = document.createElement('DIV');
             var que = document.getElementById('queText').value;
             div.innerHTML = createTemplate(que,c);
             document.getElementById('queText').value="";
             var main = document.getElementById('QA');
             main.appendChild(div);
         }
         function createTemplate(que,index){
            var template='<div style="border: 1px solid greenyellow;padding: 13px;" class="singleQA'+index+'">'+
            '<div style="font-weight: bold;" class="que'+index+'">'+que+'</div><br>'+
            '<div style="font-style: italic;width: 90%;margin-left: 20px;" id="ans'+index+'"'+
            '</div><br>'+
            '<div style="display: flex;">'+
            '<h4 style="margin-left: 13px;">Add Your Answer</h4>&nbsp;&nbsp;&nbsp;'+
            '<textarea id="anstext'+index+'" cols="70" rows="2"></textarea>&nbsp;&nbsp;&nbsp;'+
            '<input onclick=addAnswer('+index+') style="background-color: rgba(155, 197, 16, 0.289);padding: 7px 14px;" type="button"  value="Add...">'+
            '</div>'+
            '</div>';
            c++;
             return template;
         }
         function addAnswer(index){
            var ans = document.getElementById('anstext'+index).value;
            alert("Your answer is added...");
            document.getElementById('ans'+index).innerText = ans;
         }