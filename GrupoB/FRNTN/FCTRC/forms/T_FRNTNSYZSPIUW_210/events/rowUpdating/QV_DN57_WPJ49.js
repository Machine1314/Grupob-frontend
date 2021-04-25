
//gridRowUpdating QueryView: QV_DN57_WPJ49
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_DN57_WPJ49 = function (entities,gridRowUpdatingEventArgs) {

     gridRowUpdatingEventArgs.commons.execServer = true;
     //gridRowUpdatingEventArgs.commons.serverParameters.Cliente = true;
    gridRowUpdatingEventArgs.commons.api.grid.refresh('QV_DN57_WPJ49');
    //gridRowUpdatingEventArgs.commons.api.grid.refresh('QV_DN57_WPJ49');

};




