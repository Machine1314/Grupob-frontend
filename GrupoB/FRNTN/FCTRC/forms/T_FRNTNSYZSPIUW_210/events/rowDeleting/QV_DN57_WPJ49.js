
//gridRowDeleting QueryView: QV_DN57_WPJ49
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_DN57_WPJ49 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.Cliente = true;
    gridRowDeletingEventArgs.commons.api.grid.refresh('QV_DN57_WPJ49');
    gridRowDeletingEventArgs.commons.api.grid.refresh('QV_DN57_WPJ49');

};




