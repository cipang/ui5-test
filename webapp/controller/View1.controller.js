sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.btp.sapui5.controller.View1", {
			onInit: function () {

            },
            
            handleListPress: function (evt) {
                // var list = evt.getSource().getParent();
                // var flight = evt.getSource().getBindingContext().getObject();
                // debugger;
                // flight.passengers += 10;
                // list.getModel().refresh(true);
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var oList = evt.getSource().getParent();
                var selected = oList.indexOfItem(evt.getSource());
                console.log(selected);
                oRouter.navTo("EditData", { index: selected });
            }
		});
	});
