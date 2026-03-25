sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("listadecadastro.controller.Lista", {
        onInit: function () {
            this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this.oRouter
                .getTarget("TargetLista") // Sempre alterar o Target
                .attachDisplay(this.handleRouteMatched, this);
        },

        handleRouteMatched: function () {
            //this.createModel();  
            this.getTableCapacity();
        },

        createModel: function () {
            this.getView().setModel(
                new sap.ui.model.json.JSONModel({
                    variavelInput: 1111111111111,
                    Lista: [
                        {
                            ID: 1,
                            name: "João"
                        }, {
                            ID: 2,
                            name: "Maria"
                        }
                    ]
                }),
                "oModelLista"
            );

            this.oViewModel = this.getView().getModel("oModelLista");
        },

        onPress: function (evt) {
            MessageToast.show(evt.getSource().getId() + " Pressed");
        },

        onDigitando: function (evt) {
            var teste;
        },

        //Somente no V2
        getTableCapacity: async function () {
            let oDataModel = this.getOwnerComponent().getModel();
            let Service = "/Cadastro"
            // let Service = "/RequisicaoCadastro"

            return await new Promise(function (resove, reject) {
                oDataModel.read(Service, {
                    success: function (data) {
                        resove(data);
                    }.bind(this),
                    error: function (oError) {
                        reject(oError);
                    }.bind(this),
                });
            });
        },

    });
});