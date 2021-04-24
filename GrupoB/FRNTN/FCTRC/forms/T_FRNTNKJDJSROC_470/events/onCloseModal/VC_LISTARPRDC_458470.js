
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: ListarProductos
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    //onCloseModalEventArgs.commons.serverParameters.entityName = true;

    if(onCloseModalEventArgs.closedViewContainerId == 'VC_PRODUCTOVX_190175'){
        onCloseModalEventArgs.commons.api.grid.refresh('QV_HS26_CKG27');
    }
    
};