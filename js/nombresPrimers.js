function calculaPrimers (x) {

        var primer=true;

        for(y=2; y<=x; y++) {

            if(x%y==0) {
                primer=false;
            } else {
                primer=true;
            }
        
        }
        
}