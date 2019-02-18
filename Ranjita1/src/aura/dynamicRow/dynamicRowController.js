({
	doInit : function(component, event, helper) {
		helper.createObjectData(component,event);
	},
    
     Save: function(component, event, helper) {
        // first call the helper function in if block which will return true or false.
        // this helper function check the "first Name" will not be blank on each row.
        if (helper.validateRequired(component, event)) {
            // call the apex class method for save the Contact List
            // with pass the contact List attribute to method param.  
            var action = component.get("c.saveContacts");
            action.setParams({
                "ListContact": component.get("v.contactList")
            });
            // set call back 
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    // if response if success then reset/blank the 'contactList' Attribute 
                    // and call the common helper method for create a default Object Data to Contact List 
                    component.set("v.contactList", []);
                    helper.createObjectData(component, event);
                    alert('record Save');
                }
                else if (state === "ERROR") {

                var errors = response.getError();
                if (errors) {

                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                                errors[0].message);
                    }
               } else {
                    console.log("Unknown error");
                }
            }

            });
            // enqueue the server side action  
            $A.enqueueAction(action);
        }
    },
    
    addNewRow : function(component, event, helper) {
        
      helper.createObjectData(component,event, helper);
    },
    
    removeDeletedRow : function(component, event) {
        var index = event.getParam("indexVar");
        var rowList = component.get("v.contactList");
        rowList.splice(index,1);
        component.set("v.contactList", rowList);
    }
})