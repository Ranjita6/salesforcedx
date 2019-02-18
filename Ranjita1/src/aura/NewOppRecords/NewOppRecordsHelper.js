({
	onSave : function(cmp, event, helper) {
		var recs = cmp.get("v.records");
		console.log('***recs: '+JSON.stringify(recs));
		var action = cmp.get("c.save");
		action.setParams({
			opps : JSON.stringify(recs)
		});
		action.setCallback(this,function(response){
			debugger;
			var state = response.getState();
			if(state == 'SUCCESS') {
				var res = response.getReturnValue();
				console.log('res: '+JSON.stringify(res));
                alert(res);
			}
		});
		$A.enqueueAction(action);
	},
})