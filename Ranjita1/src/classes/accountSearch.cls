global class accountSearch {
 
     
    webservice static String accountSearch(String mobilenumber) {
    
        Account acc = new Account();
        acc = [select id ,Name from Account where phone =: mobilenumber];
        return acc.Name;
       
    }


}