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
                    carddetails: [
                        {
                            cardcompany: "Master card",
                            cardtype: "Debit card",
                            cardnumber: "123645872365237827",
                            assignmentdate: "Assigned on 23 Aug 2017",
                            state: true
                        },
                        {
                            cardcompany: "SadaPay",
                            cardtype: "Credit card",
                            cardnumber: "123832872365237827",
                            assignmentdate: "Assigned on 20 Oct 2020",
                            state: false
                        },
                        {
                            cardcompany: "Easy Paisa",
                            cardtype: "Debit card",
                            cardnumber: "123645026345237827",
                            assignmentdate: "Assigned on 23 Feb 2019",
                            state: true
                        }


                    ]
                    // Ifscode: "090078601"   property binding

                };
                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(oData)
                this.getView().setModel(oModel, "oBankDetails");
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
