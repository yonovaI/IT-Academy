function htmlEscaping(text) {    
   return text.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
    
}
console.log(htmlEscaping('<script>alert("Injected JS code")</script>'));