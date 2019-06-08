sap.ui.define([
			"sap/ui/core/mvc/Controller",
			"sap/ui/model/Filter",
			"sap/ui/model/FilterOperator",
			  "sap/m/MessageToast"
		], function (Controller, Filter, FilterOperator,MessageToast) {
			"use strict";

			return Controller.extend("Showroom.Car.controller.Sales", {
					onItemPress: function (oevent) {
							var ob = oevent.getParameters().listItem.getBindingContext("carjsn").getObject();
						var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
						oRouter.navTo("bill", {
				carname: ob.CarName,
				Amount:ob.Cost ,
				Crore:ob.CostCrore                
			
			});
	
						},
						onSearch: function (event) {
								var olist = this.getView().byId("table"),
									arr = [],
									bind, filters;
								filters = new Filter({
									filters: [
										new Filter("CarName", FilterOperator.Contains, event.getSource().getValue())
									],
									and: false
								});
								arr.push(filters);
								bind = olist.getBinding("items");
								bind.filter(arr);
							},
							Production: function () {
								this._productionfragment().open();
							},
							_productionfragment: function () {
								if (!this._oDialog) {
									// create dialog via fragment factory
									var sId = this.createId("helloDialog"),
										oView = this.getView();
									this._oDialog = sap.ui.xmlfragment(sId, "Showroom.Car.Fragment.Frag", this);
									oView.addDependent(this._oDialog);
								}
								return this._oDialog;
							},
							handleSearch: function (event) {
								//   		var sValue = oEvent.getParameter("value");
								// var oFilter = new Filter("CarName", sap.ui.model.FilterOperator.Contains, sValue);
								// var oBinding = oEvent.getSource().getBinding("items");
								// oBinding.filter([oFilter]);
								var olist = this._productionfragment().getBinding("items"),
									arr = [],
									bind, filters;
								filters = new Filter({
									filters: [
										new Filter("CarName", FilterOperator.Contains, event.getParameter("value"))
									],
									and: false
								});
								arr.push(filters);
								//	bind = olist.getBinding("items");
								olist.filter(arr);
							},
							Transaction: function () {
								var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
								oRouter.navTo("Transaction");
							},
							handleClose:function(oevent){
									var ob = oevent.getParameters().listItem.getBindingContext("carjsn").getObject();
								 MessageToast.show(ob.status );
							}

					});
			});