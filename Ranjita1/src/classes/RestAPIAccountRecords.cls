@RestResource(urlMapping='/showAccountsDetail/*')
global class RestAPIAccountRecords {
    
    @HttpGet
    global static Account getAccount() {
       /* List<Account> accList;
        try{
            accList = [select Id,Name from Account Limit 10];
        }
        catch(Exception e){
            system.debug('Error is '+e.getMessage());
        }
        
        return accList; */
        
       RestRequest req = RestContext.Request;
       RestResponse res = RestContext.Response;
       Id accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
       account acc = [select Id,Name,Phone from Account where id=:accountId];
       return acc;
    }
    
    @HttpPost
    global static String saveAccount(String Name, String Phone, String AccountNumber) {
        Account acc = new Account();
        acc.Name=Name;
        acc.phone=phone;
        acc.AccountNumber = AccountNumber;
        try{
            insert acc;
        }
        catch(Exception e) {
            system.debug('Error '+e.getMessage());
        }
         return acc.id;
    }
    
    @HttpDelete
    global static void DeleteRecord() {
        
        RestRequest req = RestContext.Request;
        RestResponse res = RestContext.Response;
        String AccountNum = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account acc = [select Id,Name,AccountNumber from Account where AccountNumber=:AccountNum];
        delete acc;
     
    
    }
    
    
    
 
    
}