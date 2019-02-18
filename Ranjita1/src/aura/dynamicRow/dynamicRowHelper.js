({
	createObjectData : function(component, event) {
        var RowItemList = component.get("v.contactList");
        RowItemList.push({
            'sobjectType' : 'Contact',
            'FirstName'   : '',
            'LastName'    : '',
            'Phone'       : ''            
        });
        component.set("v.contactList", RowItemList);

	},
    
    validateRequired : function(component, event) {
        var isValid = true;
        var allContactRows = component.get("v.contactList");
        for(var indexVar = 0; indexVar < allContactRows.length ; indexVar++) {
            if(allContactRows[indexVar].LastName == '') {
                isValid = false;
                alert('Lastname can\'t be null on Row Number ' + (indexVar + 1));
            }
        }
        return isValid;
    }
})