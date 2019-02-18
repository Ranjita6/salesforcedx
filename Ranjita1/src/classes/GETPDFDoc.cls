@RestResource(urlMapping='/sendPDFEmail/*')
global class GETPDFDoc {
    @HttpPost
    global static void sendEmail(String EmailIdCsv, String subject, String body){
        List<String> EmailIds = EmailIdCSV.split(',');
        
        PageReference ref = page.PDF_Demo;
        Blob b = ref.getContentAsPDF();
        
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        Messaging.EmailFileAttachment efile = new Messaging.EmailFileAttachment();
        efile.setFileName('Email_attachment');
        efile.setbody(b);
    
        String address;
        email.setSubject('Subject '+String.valueOf(DateTime.Now()));
        email.setToAddresses(EmailIds);
        email.setPlainTextBody(body);
        email.setFileAttachments(new Messaging.EmailFileAttachment[] {efile});
        Messaging.SendEmailResult [] r = Messaging.sendEmail(new Messaging.SingleEmailMessage[] {email});
    
    }
    
}