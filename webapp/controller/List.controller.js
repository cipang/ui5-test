sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter"
],
    function (Controller, Sorter) {
        "use strict";

        return Controller.extend("sap.btp.sapui5.controller.List", {
            handleListItemPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
                oRouter.navTo("detail", {
                    productId: selectedProductId
                });
            },

            handleSort: function (evt) {
                var aSorters = [];
                aSorters.push(new Sorter("UnitPrice", true)); // true means descending.
                this.getView().byId("list").getBinding("items").sort(aSorters);
            }
        });
    });