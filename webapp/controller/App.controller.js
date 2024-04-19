sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.mybankdetails.controller.App", {
            onInit: function () {

                let oData = {
                    accountDetails: {
                        AccountNum: "42015427",
                        Name: "Hamza Tahir",
                        Ifsc: "ABC123XYZ",
                        Addr: "123 Maple Street",
                        City: "Frankfurt",
                        PosC: "73290"
                    },
                    // Ifscode: "090078601"   property binding

                };
                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(oData)
                this.getView().setModel(oModel);
            },
            onOpenBankDetails: function () {
                //create dialog lazily
                if (!this.moreBankDetails) {
                    this.moreBankDetails = this.loadFragment(
                        { name: "com.sap.mybankdetails.view.fragments.MoreDetails" }
                    );

                }

                this.moreBankDetails.then(function (oDialog) {
                    oDialog.open();
                });
            },

            onCloseBankDetails: function () {
                this.byId("moreBankDetails").close();
            }

        });
    });
