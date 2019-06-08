sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Showroom.Car.controller.Transaction", {
			onInit: function () {
			// this._getModelData();

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Transaction").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function (oEvent) {
			var oModel = this.getView().getModel("carjsn"),

				Transaction = oModel.oData.eighteen;
			oModel.setProperty("/Eighteen", Transaction);
		},
onSortTeam:function(oEvent){
		var olist1 = oEvent.getParameters().value;

			var oModel = this.getView().getModel("carjsn");
			if (olist1 === "2018") {
				oModel.setProperty("/Eighteen", oModel.oData.eighteen);
			} else if (olist1 === "2017") {
				oModel.setProperty("/Eighteen", oModel.oData.seventeen);
			} else if (olist1 === "2016") {
				oModel.setProperty("/Eighteen", oModel.oData.sixteen);
			} else if (olist1 === "2015") {
				oModel.setProperty("/Eighteen", oModel.oData.fifteen);
			}
},

graph:function(oevent){
	var oView = this.getView();
			var oDialog = oView.byId("idCloseDialog");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "Showroom.Car.Fragment.Graph", this);
				oView.addDependent(oDialog);
			}
			var combovalue=this.getView().byId("combo")._lastValue;
			if (combovalue === "2018") {
				this.getView().byId("idGraph").bindData("carjsn>/eighteen");
			} else if (combovalue === "2017") {
				this.getView().byId("idGraph").bindData("carjsn>/seventeen");
			} else if (combovalue === "2016") {
				this.getView().byId("idGraph").bindData("carjsn>/sixteen");
			} else if (combovalue === "2015") {
				this.getView().byId("idGraph").bindData("carjsn>/fifteen");
			}
			
			
			
			
			
			
			
			oDialog.open();	
},
	ocClosefrg: function () {
			this.getView().byId("idCloseDialog").close();

		}
		

	});

});