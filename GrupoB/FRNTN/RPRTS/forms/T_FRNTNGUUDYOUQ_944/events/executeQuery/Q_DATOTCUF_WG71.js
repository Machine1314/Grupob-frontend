
//DatosFacturaQueryFecha Entity: DatosFactura
task.executeQuery.Q_DATOTCUF_WG71 = function(executeQueryEventArgs){
    if(executeQueryEventArgs.commons.api.vc.model.Busqueda.cedula == null){
        alert("Campos Vacios");
        executeQueryEventArgs.commons.execServer = false;
    }else{
        executeQueryEventArgs.parameters.cedula = executeQueryEventArgs.commons.api.vc.model.Busqueda.cedula;
        executeQueryEventArgs.commons.execServer = true;
    }
    
    //executeQueryEventArgs.commons.serverParameters.DatosFactura = true;
    
};