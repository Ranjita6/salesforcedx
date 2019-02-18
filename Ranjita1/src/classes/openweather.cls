public class openweather {
    public Account accnt {get;set;}
    public String city {get;set;}
    public String temp {get;set;}
    public String pressure {get;set;}
    public String humidity {get;set;}
    public String tempmin {get;set;}
    public String tempmax {get;set;}
    
    public openweather(ApexPages.StandardController stdcon) {
        Account acc = (Account)stdcon.getRecord();
        accnt = [select id,ShippingCity from Account where Id =: acc.Id];
        
        String accountCity = accnt.ShippingCity;
        String apiKey = '5f92f691ff4078374df235f7fdaa621c';
        String requestEndPointUrl = 'http://api.openweathermap.org/data/2.5/weather';
        requestEndPointUrl+='?q='+accountCity;
        requestEndPointUrl+='&units=metric';
        requestEndPointUrl+='&APPID='+apiKey;
        Http http = new Http();
        HttpRequest request= new HttpRequest();
        request.setEndpoint(requestEndPointUrl);
        request.setMethod('GET');
        
        HttpResponse response = http.send(request);
        if(response.getStatusCode() == 200) {
            Map<String,object> results = (Map<String,object>)JSON.deserializeUntyped(response.getBody());
            city = String.valueOf(results.get('name'));
            Map<String,object> result = (Map<String,object>)(results.get('main'));
            temp = String.valueOf(result.get('temp'));
            humidity = String.valueOf(result.get('humidity'));
            pressure = String.valueOf(result.get('pressure'));
            tempmin = String.valueOf(result.get('temp_min'));
            tempmax = String.valueOf(result.get('temp_max'));
        }
        else
        {
            ApexPages.addMessage(new ApexPages.message(ApexPages.Severity.ERROR,'There was an error in fetching the data'));
        }
    }
}