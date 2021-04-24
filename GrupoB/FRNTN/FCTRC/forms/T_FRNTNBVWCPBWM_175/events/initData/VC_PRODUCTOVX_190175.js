
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: Producto
task.initData.VC_PRODUCTOVX_190175 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    let vs = initDataEventArgs.commons.api.viewState;

    if(entities.Producto.codigo != null && entities.Producto.codigo != ""){
        //actualizar VA_VABUTTONXODHPRF_760764
        vs.disable('VA_CODIGOYZXLWMCSN_173764');
        vs.hide('VA_VABUTTONMIAYHIU_141764');
        vs.show('VA_VABUTTONXODHPRF_760764');
    }else{
        //nuevo VA_VABUTTONMIAYHIU_141764
        vs.hide('VA_VABUTTONXODHPRF_760764');
        vs.show('VA_VABUTTONMIAYHIU_141764');
        vs.enable('VA_CODIGOYZXLWMCSN_173764')
    }
    
};