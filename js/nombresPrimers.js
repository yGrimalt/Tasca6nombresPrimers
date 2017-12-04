function calculaPrimers (x) {

    var x, y;

    for (var y=0; y!=x; y++) {
    
            for ( ;x%x==0 && x%1==0 && x%y!=0; x++) {
                document.write (x);
            }
    
        }  
}