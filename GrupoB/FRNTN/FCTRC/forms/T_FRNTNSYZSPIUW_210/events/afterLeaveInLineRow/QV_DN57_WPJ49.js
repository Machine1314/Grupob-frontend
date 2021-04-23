
//gridAfterLeaveInLineRow QueryView: QV_DN57_WPJ49
//Evento GridAfterLeavenlineRow: Se ejecuta después de aceptar la edición o inserción en línea de la grilla.
task.gridAfterLeaveInLineRow.QV_DN57_WPJ49 = function (entities,gridAfterLeaveInLineRowEventArgs) {

     gridAfterLeaveInLineRowEventArgs.commons.execServer = true;
     //gridAfterLeaveInLineRowEventArgs.commons.serverParameters.Cliente = true;
    gridAfterLeaveInLineRowEventArgs.commons.api.grid.refresh('QV_DN57_WPJ49');

};




