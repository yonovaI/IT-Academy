(function(){
    
     function styleList(id, arr){
         var selected = document.querySelector('#'+id),
             ul = document.createElement('UL'),
             fragment = document.createDocumentFragment();
     
             for(var i = 0; i<arr.length; i++) {
                 var li = document.createElement('LI');
                 li.className = 'list-item';
                 li.style.border = '1px solid blue';
                 li.style.color = 'blue';
                 li.style.backgroundColor = 'pink';
                 li.textContent = arr[i];
                 fragment.appendChild(li);
             }
             
             selected.appendChild(fragment);
             document.body.appendChild(selected);
     }
     

     console.log(styleList("wrapper", ["Iza", "Opa", "Aha"]));
})();