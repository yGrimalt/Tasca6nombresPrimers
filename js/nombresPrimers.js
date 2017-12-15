function calculaPrimers (primer) {

    //var contador=n;
    

    for (var i=2; primer>i; i++) {
    
        if (primer%i==0) {
        primer++;
        return 0;
        }
    
    }
    return 1;    
}