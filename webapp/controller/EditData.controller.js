sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    function (Controller) {
        "use strict";

        return Controller.extend("sap.btp.sapui5.controller.EditData", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("EditData").attachMatched(this._onRouteMatched, this);
            },
            _onRouteMatched: function (oEvent) {
                var oArgs = oEvent.getParameter("arguments");
                console.log(oArgs);
                this.getView().bindElement("/" + oArgs.type + "/" + oArgs.index);
            },
            handleNavButtonPress: function (evt) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Home");
            }
        });
    });
