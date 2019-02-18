public with sharing class addDeleteController {
	@AuraEnabled
    public static void saveContacts(List<Contact> ListContact) {
        try{
            insert ListContact;
        }
        catch(Exception e) {
           system.debug('Error is ' + e.getMessage());
        }
    }
}