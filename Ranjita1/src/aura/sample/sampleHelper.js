({
	fetchPickListVal : function(component, fieldName, elementId) {
		var action = component.get("c.getselectOptions");
        action.setParams({
            "objectName" : component.get("v.accountinfo"),
            "fld"	: fieldName
        });
        var opts= [];
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == "SUCCESS") {
               var allValues = response.getReturnValue();
                if(allValues != '' && allValues.length > 0) {
                    opts.push({
                        class: "optionClass",
                        label: "--- None ---",
                        value: ""
                    });
                    }
                    for(var i = 0 ; i < allValues.length ; i++) {
                        opts.push({
                            label : allValues[i],
                           	value	: allValues[i],
                        });
                    }
                    component.set("v.options",opts);
             	 }
            
          });
        $A.enqueueAction(action);
	}
})