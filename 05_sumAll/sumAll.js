function sumAll(n1,n2){
    let output=0;

        if (n1>0 && n2>0 && typeof n1==='number' && typeof n2==='number') {
            if (n2<n1) {
                let temp=0;
                n2=temp;
                n2=n1;
                n1=temp;
            }
            for (n1; n1 <= n2; n1++) {
                output+=n1;
                
            }
            return output;
        } 
        return 'ERROR'
    
    
}

// Do not edit below this line
module.exports = sumAll;
