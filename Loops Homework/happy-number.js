function isHappyNum(n) {
    var len =  n.toString().length ;
    
    //If the number is odd, remove the middle digit - it is not necessary;
   if(len%2!==0) {
        var temp = n.toString();
        var middleDigit = Math.floor(len/2);
        temp = temp.slice(0, middleDigit) + temp.slice(middleDigit+1);
        n = parseInt(temp);
        len-=1;
   }
   
    var middle = Math.floor(len/2);
    
    var i = len;
    var leftSum=0;
    var rightSum = 0;
    while(i>=1) {
      
        if( i<=middle) {
          
            leftSum+=n%10;
        } else {
            rightSum+=n%10;
        }
        n = Math.floor(n/10);
         i--;
    }
    if(leftSum===rightSum)
        return true;
    return false;
}
console.log(isHappyNum(1377507722));