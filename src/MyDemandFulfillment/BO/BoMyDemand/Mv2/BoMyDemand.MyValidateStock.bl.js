"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////
//                 IMPORTANT - DO NOT MODIFY AUTO-GENERATED CODE OR COMMENTS                 //
//Parts of this file are auto-generated and modifications to those sections will be          //
//overwritten. You are allowed to modify:                                                    //
// - the tags in the jsDoc as described in the corresponding section                         //
// - the function name and its parameters                                                    //
// - the function body between the insertion ranges                                          //
//         "Add your customizing javaScript code below / above"                              //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Use the following jsDoc tags to describe the BL function. Setting these tags will
 * change the runtime behavior in the mobile app. The values specified in the tags determine
 * the name of the contract file. The filename format is “@this . @function .bl.js”.
 * For example, LoVisit.BeforeLoadAsync.bl.js
 * -> function: Name of the businessLogic function.
 * -> this: The LO, BO, or LU object that this function belongs to (and it is part of the filename).
 * -> kind: Type of object this function belongs to. Most common value is "businessobject".
 * -> async: If declared as async then the function should return a promise.
 * -> param: List of parameters the function accepts. Make sure the parameters match the function signature.
 * -> namespace: Use CORE or CUSTOM. If you are a Salesforce client or an implementation partner, always use CUSTOM to enable a seamless release upgrade.

 * -> maxRuntime: Maximum time this function is allowed to run, takes integer value in ms. If the max time is exceeded, error is logged.
 * -> returns: Type and variable name in which the return value is stored.
 *
 * ------- METHOD RELEVANT GENERATOR PARAMETERS BELOW - ADAPT WITH CAUTION -------
 * @function myValidateStock
 * @this BoMyDemand
 * @kind businessobject
 * @namespace CUSTOM
 * @param {Object} messageCollector
 * @returns promise
 */
function myValidateStock(messageCollector){
    var me = this;

    

    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code below.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // debugger;
    // if (Utils.isDefined(me.getLoMyDemandOrderItems())) {
    //   console.log('if.....');
    //   var items = me.getLoMyDemandOrderItems().getItemObjects();
    //   console.log('items.......'+ items);
    //   debugger;
    // }else{
    //   console.log('else.....');
    //   debugger;
    // }

    debugger;
    var jsonParams = [];
    var jsonQuery = { params: [] };
    jsonParams.push({ "field": "orderId", "operator": "EQ", "value": me.getPKey() });
    jsonQuery.params = jsonParams;

    var promise;
    promise = BoFactory.loadListAsync("LoMyDemandOrderItems", jsonQuery)
      .then(function(list) {
        //var listItems = list.getItems();
        var listItems = list.getAllItems();

        for (let i = 0; i < listItems.length; i++) {
          if (listItems[i].givenStock > listItems[i].quantity && listItems[i].givenStock != listItems[i].quantity) {
            // var newError = {
            //   "level": "error",
            //   "objectClass": "BoMyDemand",
            //   "messageID": "BoDemandErrorMsg2DonthaveStock"
            // };
            // messageCollector.add(newError);
            //break;
          }
        }

        debugger;
        return messageCollector;
      })
      .catch(function(error) {
        console.error("An error occurred while loading demand order items:", error);
      });


    // debugger;
    // var demandRecordId = me.getPKey();
    // //console.log('apun hai bhai......');
    // var jsonParams = [];
    // var jsonQuery = {};
    // jsonParams.push( { "field" : "orderId", "operator" : "EQ", "value" : me.getPKey()});
    // jsonQuery.params=jsonParams;
    // var promise;
    // promise = BoFactory.loadListAsync("LoMyDemandOrderItems", jsonQuery).then(
    //   function(list) {
    //     var listItems = list.getItems();
    //     var isDataIsNotCorrect = false;
    //     for (let i = 0; i < listItems.length; i++) {
    //       if (listItems[i].givenStock > listItems[i].quantity) {
    //         isDataIsNotCorrect = true;
    //       }
    //     }
    //     if(isDataIsNotCorrect){
    //       newError = {
    //         "level": "error",
    //         "objectClass": "BoMyDemand",
    //         "messageID": "BoDemandErrorMsg2DonthaveStock"
    //       };
    //       messageCollector.add(newError);
    //     }
    //     debugger;
    //     return messageCollector;
    //   }
    // );
    
    // if(me.getStockAvailable() == '0'){
    //     newError = {
    //         "level": "error",
    //         "objectClass": "BoMyDemand",
    //         "messageID": "BoDemandErrorMsg2DonthaveStock"
    //       };
    //     messageCollector.add(newError);
    // }

    // if(me.getDemandDispatched() == '0'){
    //     newError = {
    //         "level": "error",
    //         "objectClass": "BoMyDemand",
    //         "messageID": "BoDemandErrorMsg3CheckBox"
    //       };
    //     messageCollector.add(newError);
    // }  

        
      




    ///////////////////////////////////////////////////////////////////////////////////////////////
    //                                                                                           //
    //               Add your customizing javaScript code above.                                 //
    //                                                                                           //
    ///////////////////////////////////////////////////////////////////////////////////////////////


}
