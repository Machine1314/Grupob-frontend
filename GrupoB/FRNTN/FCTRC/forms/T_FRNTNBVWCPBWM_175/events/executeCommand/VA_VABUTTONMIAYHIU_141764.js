

//Entity: Producto
//Producto. (Button) View: Producto
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONMIAYHIU_141764 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.Producto = true;
    console.log(entities.Producto.codigo);

};