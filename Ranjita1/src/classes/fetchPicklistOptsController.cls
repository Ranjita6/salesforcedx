public class fetchPicklistOptsController {
	@AuraEnabled
    public static List<String> getselectOptions(sObject objectName, String fld) {
        List<String> picValues = new List<String>();
        Schema.SObjectType objType = objectName.getSObjectType();
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
        map<String, Schema.SObjectField> fieldMap = objDescribe.fields.getMap();
        List<Schema.PicklistEntry> values = fieldMap.get(fld).getDescribe().getPicklistValues();
        for(Schema.PicklistEntry p : values) {
            picValues.add(p.getValue());
        }
        picValues.sort();
        return picValues;
    }
}