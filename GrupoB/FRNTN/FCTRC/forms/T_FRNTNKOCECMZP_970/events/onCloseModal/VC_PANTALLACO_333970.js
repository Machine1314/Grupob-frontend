
    
//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: Pantalla productos
task.onCloseModalEvent = function (entities, onCloseModalEventArgs){

    onCloseModalEventArgs.commons.execServer = false;
    if(onCloseModalEventArgs.closedViewContainerId=="VC_INSERTARCC_446597"){
        
        onCloseModalEventArgs.commons.api.grid.refresh('QV_WD27_ZDC17');
    }
    
        
        
};