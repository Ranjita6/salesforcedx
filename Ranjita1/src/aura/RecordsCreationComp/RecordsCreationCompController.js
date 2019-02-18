({
	onClose : function(cmp, event, helper) {
		
		var compEvent = cmp.getEvent("recsClsEnt");
       // console.log(compEvent.getName());
		compEvent.fire();
        var compEvent = cmp.getEvent("SingleCompEvent");
       	compEvent.fire();
        
	},
	onSelect : function(cmp, event, helper) {
		//var selVal = cmp.get("v.selVal");
	}
})