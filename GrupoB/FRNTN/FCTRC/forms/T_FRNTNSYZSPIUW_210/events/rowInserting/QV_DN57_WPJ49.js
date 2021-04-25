
//gridRowInserting QueryView: QV_DN57_WPJ49
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task.gridRowInserting.QV_DN57_WPJ49 = function (entities,gridRowInsertingEventArgs) {

     gridRowInsertingEventArgs.commons.execServer = true;
     //gridRowInsertingEventArgs.commons.serverParameters.Cliente = true;
    gridRowInsertingEventArgs.commons.api.grid.refresh('QV_DN57_WPJ49');

};




