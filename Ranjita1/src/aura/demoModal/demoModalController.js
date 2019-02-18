({
	handleClick : function(component, event, helper) {
		component.set("v.isOpen", true);
	},
    closeModal : function(component, event, helper) {
		component.set("v.isOpen", false);
	},
    cancel  : function(component, event, helper) {
		component.set("v.isOpen", false);
	},
    likenClose : function(component, event, helper) {
        alert("thanks for liking");
		component.set("v.isOpen", false);
	},
   
})