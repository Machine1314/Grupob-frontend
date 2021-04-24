/* variables locales de T_FRNTNKOCECMZP_970*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.pantallaProductos;
    

    //"TaskId": "T_FRNTNKOCECMZP_970"


    	
//ProductoQuery Entity: Producto
task.executeQuery.Q_PRODCTTO_OE27 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Producto = true;
};

	
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: Pantalla productos
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    if(onCloseModalEventArgs.closedViewContainerId=="VC_INSERTARCC_446597"){
        
        onCloseModalEventArgs.commons.api.grid.refresh('QV_WD27_ZDC17');
    }
    
        
        
};

	
//gridRowDeleting QueryView: 
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_WD27_ZDC17 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.Producto = true;

};





};








}));
