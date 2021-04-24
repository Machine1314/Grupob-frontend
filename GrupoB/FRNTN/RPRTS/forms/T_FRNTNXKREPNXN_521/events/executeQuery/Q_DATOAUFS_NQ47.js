
//DatosFacturaQueryCedula Entity: DatosFactura
task.executeQuery.Q_DATOAUFS_NQ47 = function(executeQueryEventArgs){
        if(executeQueryEventArgs.commons.api.vc.model.Busqueda.fecha1 == null || executeQueryEventArgs.commons.api.vc.model.Busqueda.fecha2 == null){
        alert("Campos Vacios");
        executeQueryEventArgs.commons.execServer = false;
    }else{
        executeQueryEventArgs.parameters.fecha1 = executeQueryEventArgs.commons.api.vc.model.Busqueda.fecha1;
        executeQueryEventArgs.parameters.fecha2 = executeQueryEventArgs.commons.api.vc.model.Busqueda.fecha2;
        executeQueryEventArgs.commons.execServer = true;
    }
};