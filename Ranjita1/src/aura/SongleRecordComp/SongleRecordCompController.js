({
	showToast : function(component, event, helper) {
      alert("check");
		 /* var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title" : "Info Message",
            "message" : "Mode is dismissible ,duration is 5sec and this is normal Message",
            "type" : "success"
           });
        toastEvent.fire(); */
        
       
	},
    handleLoad : function(component, event, helper) {
		
	},
    handleSubmit : function(component, event, helper) {
       /* var input1 = component.find("input1").get("v.value");
        var eventFields = event.getParam("fields");
        var field = 'Name';
        
        if(eventFields.hasOwnProperty(field)){
            eventFields[field] = input1;
            event.setParam("fields", eventFields);
        }
        event.fire(); */
  	}
})