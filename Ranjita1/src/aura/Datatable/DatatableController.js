({
	doInit : function(component, event, helper) {
	
		helper.handleDoInit(component, event);
	},
	getSubset : function(component, event, helper) {
		helper.handleSubset(component, event);
	},
	getSelRows : function(component, event, helper) {
		helper.handleGetSelRows(component, event);
	},
	export : function(component, event, helper) {
		component.set("v.msg",'');
        component.set("v.msgType",'');
		helper.handleExport(component, event);
	},
	
	edit : function(component, event, helper) {
		component.set("v.msg",'');
        component.set("v.msgType",'');
		helper.handleEdit(component, event);
		
	},
	new : function(cmp, event, helper) {
    	
    	$A.createComponent(
            "c:RecordsCreationComp",
            {},
            function(newComp, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    var body = cmp.get("v.body");
                    body.push(newComp);
                    cmp.set("v.body", body);
                    
                  }
                
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
	},
	
        close : function(cmp, event, helper) {
			cmp.set("v.body", '');
	},
})