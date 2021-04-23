//Designer Generator v 7.2.0 - SPR 2020-24 4/12/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.clienteform = designerEvents.api.clienteform || designer.dsgEvents();
function VC_CLIENTEWGH_369210(cobisMainModule) {
cobisMainModule.controllerProvider.register("VC_CLIENTEWGH_369210_MAIN_CTRL", ["$scope", "breadcrumbs",
function($scope, breadcrumbs) {
$scope.breadcrumbs = breadcrumbs;
}]);
cobisMainModule.controllerProvider.register("VC_CLIENTEWGH_369210_CTRL", ["cobisMessage", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",
function(cobisMessage, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
$scope.designer = designer;
$scope.validatorOptions = validatorOptions;
$scope.vc = designer.initViewContainer({
moduleId: "FRNTN",
subModuleId: "FCTRC",
taskId: "T_FRNTNSYZSPIUW_210",
taskVersion: "1.0.0",
viewContainerId: "VC_CLIENTEWGH_369210",
hasCloseModalEvent: false,
serverEvents: false},
"/CTSProxy/services/resources/FRNTN/FCTRC/T_FRNTNSYZSPIUW_210",
designerEvents.api.clienteform,
$scope.rowData );
$scope.kendo = kendo;
//Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
$scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
$scope.dateFormat = 'yyyy/MM/dd';
$scope.dateFormatPlaceholder = $scope.dateFormat;
$scope.vc.routeProvider = cobisMainModule.routeProvider;
if (!$scope.vc.loaded) {
var page = {
hasTemporaryDataSupport: false,
hasInitDataSupport: false,
hasChangeInitDataSupport: false,
hasSearchRenderEvent: false,
ejecTemporaryData: false,
ejecInitData: false,
ejecChangeInitData: false,
ejecSearchRenderEvent: false,
hasTemporaryData: false,
hasInitData: false,
hasChangeInitData: false,
hasCRUDSupport: false,
vcName: 'VC_CLIENTEWGH_369210'
};
if(typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined'){
$scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
$scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
} else {
//CobisPattern no definido en framework de Designer como constante. Actualizar Framework
$scope.vc.cobisPattern = 0;
$scope.vc.isConsolidateView = false;
}
if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
$scope.vc.pk = $scope.queryParameters.pk;
$scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
} else {
$scope.vc.pk = $location.search().pk;
$scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
}
$scope.vc.args.pk = $scope.vc.pk;
$scope.vc.args.mode = $scope.vc.mode;
if(cobis.userContext.getValue(cobis.constant.USER_NAME)){
$scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
}else{
$scope.vc.args.user = "UserOutContainer";
}
$scope.vc.customDialogParameters = $scope.customDialogParameters;
$scope.vc.args.channel = $location.search().channel;
$scope.vc.metadata = {
taskPk : {
moduleId : 'FRNTN',
subModuleId : 'FCTRC',
taskId : 'T_FRNTNSYZSPIUW_210',
version : '1.0.0',
user : $scope.vc.args.user
},
entityNames: {
Cliente: "Cliente"
},
entities : {
Cliente : {
codigo: 'AT25_CODIGOHJ449',
apellido: 'AT48_APELLIOO449',
cedula: 'AT61_CEDULAGP449',
telefono: 'AT62_TELEFOOO449',
nombre: 'AT72_NOMBRELJ449',
direccion: 'AT74_DIRECCIO449'
,
_pks: [],
_entityId: 'EN_CLIENTEZZ_449',
_entityVersion: '1.0.0',
_transient: false }
},
relations : [
]
};
$scope.vc.queryProperties = {};
$scope.vc.queryProperties.Q_CLIETTEN_AB57 = {
autoCrud : false
};
$scope.vc.getRequestQuery_Q_CLIETTEN_AB57= function(){
var parametersAux = {};
if($.isEmptyObject($scope.vc.queries.Q_CLIETTEN_AB57_filters)){
parametersAux = {
};
}else{
var filters = $scope.vc.queries.Q_CLIETTEN_AB57_filters;
parametersAux = {
};
}
return {
mainEntityPk : {
entityId : 'EN_CLIENTEZZ_449',
version : '1.0.0'
},
queryPk :{
queryId: 'Q_CLIETTEN_AB57',
version : '1.0.0'
},
parameters : parametersAux,
filters:{},
updateParameters : function(){
}
}
};
$scope.vc.queries.Q_CLIETTEN_AB57_filters = {};
var defaultValues = {
Cliente:{
}
};
$scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist){
var channel = $scope.vc.args.channel;
for(var en in defaultValues){
if(defaultValues.hasOwnProperty(en) && en === entityName){
for(var att in defaultValues[en]){
if(defaultValues[en].hasOwnProperty(att) && att === attributeName){
for (var ch in defaultValues[en][att]){
if(defaultValues[en][att].hasOwnProperty(ch) && ch === channel){
return defaultValues[en][att][ch];
}
}
}
}
}
}
if(typeof valueIfNotExist !== "undefined"){
return valueIfNotExist;
}else{
return null;
}
};
$scope.vc.temporarySave = function() {
var modelo = $scope.vc.cleanData($scope.vc.model);
var data = {
model: modelo,
trackers: $scope.vc.trackers,
temporaryStorePK: $scope.vc.metadata.taskPk
};
$scope.vc.execute("temporarySave", VC_CLIENTEWGH_369210, data, function() {});
};
$scope.vc.temporaryRead = function() {
if(page.hasTemporaryDataSupport){
var data = {
model: $scope.vc.model,
temporaryStorePK: $scope.vc.metadata.taskPk
};
return $scope.vc.executeService("readTemporaryData", VC_CLIENTEWGH_369210, data).then(
function(response) {
var result = $scope.vc.processTemporaryResponse(response);
if (result) {
$scope.vc.execute("deleteTemporaryData", VC_CLIENTEWGH_369210, data, function() {});
$scope.vc.crud.addTrackers($scope.vc.model);
}
page.hasTemporaryData = result;
page.ejecTemporaryData = response.success;
return page;
});
}else{
page.ejecTemporaryData = false;
page.hasTemporaryData = false;
return page;
}
};
$scope.vc.viewState.keyDown = function(e) {
dsgnrUtils.container.validateOnEnter(e, $scope.vc);
};
$scope.vc.viewState.VC_CLIENTEWGH_369210 = {
style: []
};
//ViewState - Group: Group1696
$scope.vc.createViewState({
id: "G_CLIENTEKEU_494997"
,hasId: true
,componentStyle: []
,label: 'Group1696'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.types.Cliente = kendo.data.Model.define({
id: "dsgnrId",
fields: {
dsgnrId: {type: "string"},
trackId: {type: "string"},
codigo: {
type: "number",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("Cliente","codigo", 0)
},
cedula: {
type: "string",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("Cliente","cedula", '')
},
nombre: {
type: "string",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("Cliente","nombre", '')
},
apellido: {
type: "string",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("Cliente","apellido", '')
},
direccion: {
type: "string",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("Cliente","direccion", '')
},
telefono: {
type: "string",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("Cliente","telefono", '')
}
}
});
$scope.vc.model.Cliente = new kendo.data.DataSource({
transport: {
read: function(options) {
var promise = false;
var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
var queryId = 'Q_CLIETTEN_AB57';
var queryRequest = $scope.vc.getRequestQuery_Q_CLIETTEN_AB57();
if (queryId && queryRequest) {
var queryLoaded = queryRequest.loaded;
if (angular.isUndefined(queryLoaded) || isRefresh === true) {
queryRequest.loaded = true;
queryRequest.updateParameters();
promise = true;
$scope.vc.executeQuery(
'QV_DN57_WPJ49',
queryRequest,
queryRequest.mainEntityPk.entityId,
true,
function (response) {
if(response.success){
var result = response.data['RESULT' + queryId];
if (angular.isUndefined(result)){
result = [];
}
if (angular.isDefined(result) && angular.isArray(result)) {
options.success(result);
} else {
options.success([]);
}
}else{
options.error([]);
}
},
(function () {
var queryOptions = options.data;
var queryView = {'allowPaging': false,'pageSize': 0};
function config (queryOptions,queryView) {
var result = undefined;
if (queryView.allowPaging === true) {
result = {};
if (angular.isDefined(queryOptions.appendRecords) && queryOptions.appendRecords===true) {
result.appendRecords=true;
}
result.pageSize = queryView.pageSize;
}
return result;
}
return config(queryOptions,queryView);
}())
);
}
}
}
if (promise === false) {
options.error({xhr:{}});
}
},
create: function(options) {
var model = options.data;
model.dsgnrId = designer.utils.uuid();
options.success(model);
},
update: function(options) {
var model = options.data;
options.success(model);
},
destroy: function(options) {
var model = options.data;
options.success(model);
}
},
schema: {
model : $scope.vc.types.Cliente
},
aggregate: [
],
error: function(e) {
if(e.xhr.message && e.xhr.message === 'DeletingError'){
$("#QV_DN57_WPJ49").data("kendoExtGrid").cancelChanges();
}
}
});
$scope.vc.queries.Q_CLIETTEN_AB57 = $scope.vc.model.Cliente;
$scope.vc.trackers.Cliente = new $scope.vc.crud.DataSourceTracker(
$scope.vc.metadata.entities.Cliente
);
$scope.vc.model.Cliente.bind('change',function(e){
$scope.vc.trackers.Cliente.track(e);
});
$scope.vc.grids.QV_DN57_WPJ49 = {};
$scope.vc.grids.QV_DN57_WPJ49.queryId = 'Q_CLIETTEN_AB57';
$scope.vc.viewState.QV_DN57_WPJ49 = {
style: []
};
$scope.vc.viewState.QV_DN57_WPJ49.column = {};
$scope.vc.grids.QV_DN57_WPJ49.editable =
{
mode:'inline'
,confirmation:false
};
$scope.vc.grids.QV_DN57_WPJ49.events = {
customRowClick: function (e, controlId, entity, idGrid, commandName) {
var grid = $scope.vc.getElementGrid(idGrid);
var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));
var args = {
rowData: dataItem,
rowIndex: grid.dataSource.indexOf(dataItem),
nameEntityGrid: entity,
refreshData: false,
stopPropagation: false,
commandName: commandName
};
$scope.vc.executeGridRowCommand(controlId, args);
if (args.refreshData){
grid.refresh();
}
if (args.stopPropagation) {
e.stopImmediatePropagation();
e.stopPropagation();
}
},
cancel: function (e) {
$scope.vc.trackers.Cliente.cancelTrackedChanges(e.model);
},
edit: function(e) {
$scope.vc.grids.QV_DN57_WPJ49.selectedRow = e.model;
var commandCell = $scope.vc.getCommandCellData(e.container);
var titleUpdate = $filter('translate')('Aceptar');
var titleCancel = $filter('translate')('Cancelar');
commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='"+titleUpdate+"' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='"+titleCancel+"' href='#'><span class='fa fa-times-circle'></span></a>");
$scope.vc.validateForm();
},
dataBound: function(e) {
var index;
var grid = e.sender;
$scope.vc.gridDataBound("QV_DN57_WPJ49", false, grid);
$scope.vc.hideShowColumns("QV_DN57_WPJ49", grid);
var dataView = null;
dataView = this.dataSource.view();
var styleName, iStyle;
for(var i = 0; i < dataView.length; i++) {
if (typeof $scope.vc.viewState.QV_DN57_WPJ49.rows[dataView[i].uid] != "undefined") {
for(iStyle = 0; iStyle< $scope.vc.viewState.QV_DN57_WPJ49.rows[dataView[i].uid].style.length; iStyle++){
styleName = $scope.vc.viewState.QV_DN57_WPJ49.rows[dataView[i].uid].style[iStyle];
if($("#QV_DN57_WPJ49 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName)===false){
$("#QV_DN57_WPJ49 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
}
}
}
}
}
};
//Comandos de registros del Grid
$scope.vc.grids.QV_DN57_WPJ49.columns = [];
//Registros de fila del Grid
$scope.vc.viewState.QV_DN57_WPJ49.rows = [];
//Controles de edicion en linea del Grid
$scope.vc.viewState.QV_DN57_WPJ49.column.codigo = {
title: 'Codigo',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
format: "n0",
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXFXS_553997',
element: []
};
$scope.vc.grids.QV_DN57_WPJ49.AT25_CODIGOHJ449 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_DN57_WPJ49.column.codigo.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXFXS_553997",'data-validation-code':"{{vc.viewState.QV_DN57_WPJ49.column.codigo.validationCode}}"
,'kendo-numeric-text-box':""
,'datatypes-Limit':"N"
,'k-spinners':"false"
,'k-step':"0"
,'k-format':"vc.viewState.QV_DN57_WPJ49.column.codigo.format"
,'k-decimals':"vc.viewState.QV_DN57_WPJ49.column.codigo.decimals"
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_DN57_WPJ49.column.codigo.style"
});
textInput.appendTo(container);
}
};
$scope.vc.viewState.QV_DN57_WPJ49.column.cedula = {
title: 'Cedula',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXGBU_262997',
element: []
};
$scope.vc.grids.QV_DN57_WPJ49.AT61_CEDULAGP449 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_DN57_WPJ49.column.cedula.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXGBU_262997",'data-validation-code':"{{vc.viewState.QV_DN57_WPJ49.column.cedula.validationCode}}"
,'type':"text"
,'class':"k-textbox"
,'maxlength':10
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_DN57_WPJ49.column.cedula.style"
});
textInput.appendTo(container);
}
};
$scope.vc.viewState.QV_DN57_WPJ49.column.nombre = {
title: 'Nombre',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXYNH_361997',
element: []
};
$scope.vc.grids.QV_DN57_WPJ49.AT72_NOMBRELJ449 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_DN57_WPJ49.column.nombre.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXYNH_361997",'data-validation-code':"{{vc.viewState.QV_DN57_WPJ49.column.nombre.validationCode}}"
,'type':"text"
,'class':"k-textbox"
,'maxlength':50
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_DN57_WPJ49.column.nombre.style"
});
textInput.appendTo(container);
}
};
$scope.vc.viewState.QV_DN57_WPJ49.column.apellido = {
title: 'Apellido',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXOBS_932997',
element: []
};
$scope.vc.grids.QV_DN57_WPJ49.AT48_APELLIOO449 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_DN57_WPJ49.column.apellido.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXOBS_932997",'data-validation-code':"{{vc.viewState.QV_DN57_WPJ49.column.apellido.validationCode}}"
,'type':"text"
,'class':"k-textbox"
,'maxlength':50
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_DN57_WPJ49.column.apellido.style"
});
textInput.appendTo(container);
}
};
$scope.vc.viewState.QV_DN57_WPJ49.column.direccion = {
title: 'Direccion',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXKON_637997',
element: []
};
$scope.vc.grids.QV_DN57_WPJ49.AT74_DIRECCIO449 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_DN57_WPJ49.column.direccion.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXKON_637997",'data-validation-code':"{{vc.viewState.QV_DN57_WPJ49.column.direccion.validationCode}}"
,'type':"text"
,'class':"k-textbox"
,'maxlength':200
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_DN57_WPJ49.column.direccion.style"
});
textInput.appendTo(container);
}
};
$scope.vc.viewState.QV_DN57_WPJ49.column.telefono = {
title: 'Telefono',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXOGB_520997',
element: []
};
$scope.vc.grids.QV_DN57_WPJ49.AT62_TELEFOOO449 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_DN57_WPJ49.column.telefono.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXOGB_520997",'data-validation-code':"{{vc.viewState.QV_DN57_WPJ49.column.telefono.validationCode}}"
,'type':"text"
,'class':"k-textbox"
,'maxlength':10
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_DN57_WPJ49.column.telefono.style"
});
textInput.appendTo(container);
}
};
//Creacion de columnas del Grid
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_DN57_WPJ49.columns.push({
field: 'codigo',
title: '{{vc.viewState.QV_DN57_WPJ49.column.codigo.title|translate:vc.viewState.QV_DN57_WPJ49.column.codigo.titleArgs}}',
width:$scope.vc.viewState.QV_DN57_WPJ49.column.codigo.width,
format: $scope.vc.viewState.QV_DN57_WPJ49.column.codigo.format,
editor: $scope.vc.grids.QV_DN57_WPJ49.AT25_CODIGOHJ449.control,
template: "<span ng-class='vc.viewState.QV_DN57_WPJ49.column.codigo.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.codigo, \"QV_DN57_WPJ49\", \"codigo\"):kendo.toString(#=codigo#, vc.viewState.QV_DN57_WPJ49.column.codigo.format)'></span>",
attributes: {"class":"text-right", "ng-class": "vc.viewState.QV_DN57_WPJ49.column.codigo.style", "title": "{{vc.viewState.QV_DN57_WPJ49.column.codigo.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_DN57_WPJ49.column.codigo.hidden
});
}
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_DN57_WPJ49.columns.push({
field: 'cedula',
title: '{{vc.viewState.QV_DN57_WPJ49.column.cedula.title|translate:vc.viewState.QV_DN57_WPJ49.column.cedula.titleArgs}}',
width:$scope.vc.viewState.QV_DN57_WPJ49.column.cedula.width,
format: $scope.vc.viewState.QV_DN57_WPJ49.column.cedula.format,
editor: $scope.vc.grids.QV_DN57_WPJ49.AT61_CEDULAGP449.control,
template: "<span ng-class='vc.viewState.QV_DN57_WPJ49.column.cedula.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.cedula, \"QV_DN57_WPJ49\", \"cedula\")'></span>",
attributes: {"class":"", "ng-class": "vc.viewState.QV_DN57_WPJ49.column.cedula.style", "title": "{{vc.viewState.QV_DN57_WPJ49.column.cedula.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_DN57_WPJ49.column.cedula.hidden
});
}
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_DN57_WPJ49.columns.push({
field: 'nombre',
title: '{{vc.viewState.QV_DN57_WPJ49.column.nombre.title|translate:vc.viewState.QV_DN57_WPJ49.column.nombre.titleArgs}}',
width:$scope.vc.viewState.QV_DN57_WPJ49.column.nombre.width,
format: $scope.vc.viewState.QV_DN57_WPJ49.column.nombre.format,
editor: $scope.vc.grids.QV_DN57_WPJ49.AT72_NOMBRELJ449.control,
template: "<span ng-class='vc.viewState.QV_DN57_WPJ49.column.nombre.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombre, \"QV_DN57_WPJ49\", \"nombre\")'></span>",
attributes: {"class":"", "ng-class": "vc.viewState.QV_DN57_WPJ49.column.nombre.style", "title": "{{vc.viewState.QV_DN57_WPJ49.column.nombre.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_DN57_WPJ49.column.nombre.hidden
});
}
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_DN57_WPJ49.columns.push({
field: 'apellido',
title: '{{vc.viewState.QV_DN57_WPJ49.column.apellido.title|translate:vc.viewState.QV_DN57_WPJ49.column.apellido.titleArgs}}',
width:$scope.vc.viewState.QV_DN57_WPJ49.column.apellido.width,
format: $scope.vc.viewState.QV_DN57_WPJ49.column.apellido.format,
editor: $scope.vc.grids.QV_DN57_WPJ49.AT48_APELLIOO449.control,
template: "<span ng-class='vc.viewState.QV_DN57_WPJ49.column.apellido.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.apellido, \"QV_DN57_WPJ49\", \"apellido\")'></span>",
attributes: {"class":"", "ng-class": "vc.viewState.QV_DN57_WPJ49.column.apellido.style", "title": "{{vc.viewState.QV_DN57_WPJ49.column.apellido.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_DN57_WPJ49.column.apellido.hidden
});
}
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_DN57_WPJ49.columns.push({
field: 'direccion',
title: '{{vc.viewState.QV_DN57_WPJ49.column.direccion.title|translate:vc.viewState.QV_DN57_WPJ49.column.direccion.titleArgs}}',
width:$scope.vc.viewState.QV_DN57_WPJ49.column.direccion.width,
format: $scope.vc.viewState.QV_DN57_WPJ49.column.direccion.format,
editor: $scope.vc.grids.QV_DN57_WPJ49.AT74_DIRECCIO449.control,
template: "<span ng-class='vc.viewState.QV_DN57_WPJ49.column.direccion.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.direccion, \"QV_DN57_WPJ49\", \"direccion\")'></span>",
attributes: {"class":"", "ng-class": "vc.viewState.QV_DN57_WPJ49.column.direccion.style", "title": "{{vc.viewState.QV_DN57_WPJ49.column.direccion.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_DN57_WPJ49.column.direccion.hidden
});
}
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_DN57_WPJ49.columns.push({
field: 'telefono',
title: '{{vc.viewState.QV_DN57_WPJ49.column.telefono.title|translate:vc.viewState.QV_DN57_WPJ49.column.telefono.titleArgs}}',
width:$scope.vc.viewState.QV_DN57_WPJ49.column.telefono.width,
format: $scope.vc.viewState.QV_DN57_WPJ49.column.telefono.format,
editor: $scope.vc.grids.QV_DN57_WPJ49.AT62_TELEFOOO449.control,
template: "<span ng-class='vc.viewState.QV_DN57_WPJ49.column.telefono.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.telefono, \"QV_DN57_WPJ49\", \"telefono\")'></span>",
attributes: {"class":"", "ng-class": "vc.viewState.QV_DN57_WPJ49.column.telefono.style", "title": "{{vc.viewState.QV_DN57_WPJ49.column.telefono.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_DN57_WPJ49.column.telefono.hidden
});
}
$scope.vc.viewState.QV_DN57_WPJ49.column.edit = {
element:[]
};
$scope.vc.viewState.QV_DN57_WPJ49.column["delete"] = {
element:[]
};
$scope.vc.viewState.QV_DN57_WPJ49.column.cmdEdition = {};
$scope.vc.viewState.QV_DN57_WPJ49.column.cmdEdition.hidden = (!designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode))?false:true;
$scope.vc.grids.QV_DN57_WPJ49.columns.push(
{
field: 'cmdEdition',
title: ' ',
command: [
{
name: "edit"
, text: "{{'Editar'|translate}}"
, cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" +
", 'k-grid-edit': !vc.viewState.G_CLIENTEKEU_494997.disabled}"
, template: "<a ng-class='vc.getCssClass(\"edit\", " +
"vc.viewState.QV_DN57_WPJ49.column.edit.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_DN57_WPJ49.column.edit.element[dataItem.dsgnrId].style)' " +
"title=\"{{'Editar'|translate}}\" "+
"ng-disabled = (vc.viewState.G_CLIENTEKEU_494997.disabled==true?true:false) "
+
"href='\\#'>"
+
"<span class='fa fa-pencil'></span>" +
"</a>"
}
,
{
name: "destroy"
, text: "{{'Eliminar'|translate}}"
, cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" +
", 'k-grid-delete': !vc.viewState.G_CLIENTEKEU_494997.disabled}"
, template: "<a ng-class='vc.getCssClass(\"destroy\", " +
"vc.viewState.QV_DN57_WPJ49.column.delete.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_DN57_WPJ49.column.delete.element[dataItem.dsgnrId].style)' " +
"title=\"{{'Eliminar'|translate}}\" "+
"ng-disabled = (vc.viewState.G_CLIENTEKEU_494997.disabled==true?true:false) "
+
">"
+
"<span class='fa fa-times'></span>" +
"</a>"
}
]
, attributes: {
"class": "btn-toolbar"
},
hidden: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) === true ? true : $scope.vc.viewState.QV_DN57_WPJ49.column.cmdEdition.hidden,
width: Number(sessionStorage.columnSize) || 100
}
);
$scope.vc.viewState.QV_DN57_WPJ49.toolbar = {
create: { visible : !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) }
}
$scope.vc.grids.QV_DN57_WPJ49.toolbar = [
{
"name": "create",
"text": "",
"template": "<button class = 'btn btn-default k-grid-add cb-grid-button' " +
"ng-if = 'vc.viewState.QV_DN57_WPJ49.toolbar.create.visible' " +
"ng-disabled = 'vc.viewState.G_CLIENTEKEU_494997.disabled?true:false'" +
"title = \"{{'New'|translate}}\" >" +
"<span class='fa fa-plus'></span>{{'New'|translate}}</button>"
}
];
//ViewState - Command: Accept
$scope.vc.createViewState({
id: "T_FRNTNSYZSPIUW_210_ACCEPT"
,componentStyle: []
,label: 'Accept'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Command: Cancel
$scope.vc.createViewState({
id: "T_FRNTNSYZSPIUW_210_CANCEL"
,componentStyle: []
,label: 'Cancel'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
if ($scope.vc.parentVc) {
$scope.vc.afterOpenGridDialog();
}
}
$scope.isInvalid = function (form, field) {
if(!field){
return false;
}
var submitted = $scope.vc.submitted[form.$name];
return ((submitted || field.$dirty) && field.$invalid);
};
$scope._initPage_CRUDExecuteQueryEntities = function(page) {
if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
if(page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData){
return $scope.vc.CRUDExecuteQueryEntities(page);
}else if(page.hasCRUDSupport){
return $scope.vc.CRUDExecuteQueryEntities(page);
}else{
return page;
}
} else {
return page;
}
};
$scope._initPage_InitializeTrackers = function(page) {
$scope.vc.addChangeEvents($scope);
$scope.vc.crud.addTrackers($scope.vc.model);
return page;
};
$scope._initPage_ChangeInitData = function(page) {
return $scope.vc.changeInitData(page, $scope.vc);
};
$scope._initPage_ProcessRender = function(page) {
if (page.hasSearchRenderEvent) {
$scope.vc.render('VC_CLIENTEWGH_369210');
}
return page;
};
if($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude){
//para ventanas modales se usa ng-include con onload
$scope.runLifeCycle = function () {
var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
if(threadLifeCycle){
if(!$scope.isDesignerInclude){
cobis.showMessageWindow.loading(true, "none");
}
$scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
cobis.showMessageWindow.loading(false);
}
};
}else{
//con ngView no funciona el $document.ready se cambia por $viewContentLoaded
$scope.$on('$viewContentLoaded', function() {
if ($scope.vc.loaded) {
//Si se esta regresando de otra pantalla
$scope.vc.addAfterInitDataFlags($scope);
$scope.vc.addChangeEvents($scope);
if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
$scope.vc.onCloseModalEvent();
}
if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
$scope.vc.afterCloseGridDialog();
}
cobis.showMessageWindow.loading(false);
} else {
//Si es la primera vez que se ejecuta la pantalla
var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
if(threadLifeCycle){
$scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
cobis.showMessageWindow.loading(false);
}
}
});
}
}]);
}
if (typeof cobisMainModule === "undefined") {
var cobisMainModule = cobis.createModule("VC_CLIENTEWGH_369210", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", "designerModule"],[]);
cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",
function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
$ocLazyLoadProvider.config({
asyncLoader: $script
});
$locationProvider.html5Mode(true);
cobisMainModule.controllerProvider = $controllerProvider;
cobisMainModule.compileProvider = $compileProvider;
cobisMainModule.routeProvider = $routeProvider;
cobisMainModule.filterProvider = $filterProvider;
cobisMainModule.provide = $provide;
var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
$routeProvider.when("/VC_CLIENTEWGH_369210", {
templateUrl: "VC_CLIENTEWGH_369210_FORM.html",
controller: "VC_CLIENTEWGH_369210_CTRL",
label: "ClienteForm",
}).otherwise({
redirectTo: function (routeParams, path, search) {
return "/VC_CLIENTEWGH_369210?" + $.param(search);
}
});
VC_CLIENTEWGH_369210(cobisMainModule);
}]);
} else {
VC_CLIENTEWGH_369210(cobisMainModule);
}