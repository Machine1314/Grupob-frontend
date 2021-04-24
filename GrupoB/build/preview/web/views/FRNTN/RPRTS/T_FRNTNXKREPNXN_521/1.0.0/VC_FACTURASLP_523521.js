//Designer Generator v 7.2.0 - SPR 2020-24 4/12/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.facturasporcliente = designerEvents.api.facturasporcliente || designer.dsgEvents();
function VC_FACTURASLP_523521(cobisMainModule) {
cobisMainModule.controllerProvider.register("VC_FACTURASLP_523521_MAIN_CTRL", ["$scope", "breadcrumbs",
function($scope, breadcrumbs) {
$scope.breadcrumbs = breadcrumbs;
}]);
cobisMainModule.controllerProvider.register("VC_FACTURASLP_523521_CTRL", ["cobisMessage", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",
function(cobisMessage, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
$scope.designer = designer;
$scope.validatorOptions = validatorOptions;
$scope.vc = designer.initViewContainer({
moduleId: "FRNTN",
subModuleId: "RPRTS",
taskId: "T_FRNTNXKREPNXN_521",
taskVersion: "1.0.0",
viewContainerId: "VC_FACTURASLP_523521",
hasCloseModalEvent: false,
serverEvents: false},
"/CTSProxy/services/resources/FRNTN/RPRTS/T_FRNTNXKREPNXN_521",
designerEvents.api.facturasporcliente,
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
vcName: 'VC_FACTURASLP_523521'
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
subModuleId : 'RPRTS',
taskId : 'T_FRNTNXKREPNXN_521',
version : '1.0.0',
user : $scope.vc.args.user
},
entityNames: {
Cliente: "Cliente",
DatosFactura: "DatosFactura"
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
_transient: false },
DatosFactura : {
total: 'AT24_TOTALZNH347',
codigo: 'AT52_CODIGOMW347',
nombreCliente: 'AT54_NOMBREIE347',
apellidoCliente: 'AT97_APELLIOE347',
fecha: 'AT97_FECHAVPR347'
,
_pks: [],
_entityId: 'EN_DATOSFATC_347',
_entityVersion: '1.0.0',
_transient: false }
},
relations : [
]
};
$scope.vc.queryProperties = {};
$scope.vc.queryProperties.Q_DATOTCUF_WG71 = {
autoCrud : false
};
$scope.vc.getRequestQuery_Q_DATOTCUF_WG71= function(){
var parametersAux = {};
if($.isEmptyObject($scope.vc.queries.Q_DATOTCUF_WG71_filters)){
parametersAux = {
};
}else{
var filters = $scope.vc.queries.Q_DATOTCUF_WG71_filters;
parametersAux = {
};
}
return {
mainEntityPk : {
entityId : 'EN_DATOSFATC_347',
version : '1.0.0'
},
queryPk :{
queryId: 'Q_DATOTCUF_WG71',
version : '1.0.0'
},
parameters : parametersAux,
filters:{},
updateParameters : function(){
}
}
};
$scope.vc.queries.Q_DATOTCUF_WG71_filters = {};
var defaultValues = {
Cliente:{
},
DatosFactura:{
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
$scope.vc.execute("temporarySave", VC_FACTURASLP_523521, data, function() {});
};
$scope.vc.temporaryRead = function() {
if(page.hasTemporaryDataSupport){
var data = {
model: $scope.vc.model,
temporaryStorePK: $scope.vc.metadata.taskPk
};
return $scope.vc.executeService("readTemporaryData", VC_FACTURASLP_523521, data).then(
function(response) {
var result = $scope.vc.processTemporaryResponse(response);
if (result) {
$scope.vc.execute("deleteTemporaryData", VC_FACTURASLP_523521, data, function() {});
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
$scope.vc.viewState.VC_FACTURASLP_523521 = {
style: []
};
$scope.vc.model.Cliente = {
codigo: $scope.vc.channelDefaultValues("Cliente","codigo"),
apellido: $scope.vc.channelDefaultValues("Cliente","apellido"),
cedula: $scope.vc.channelDefaultValues("Cliente","cedula"),
telefono: $scope.vc.channelDefaultValues("Cliente","telefono"),
nombre: $scope.vc.channelDefaultValues("Cliente","nombre"),
direccion: $scope.vc.channelDefaultValues("Cliente","direccion")
};
//ViewState - Group: Group1755
$scope.vc.createViewState({
id: "G_FACTURALRO_146473"
,hasId: true
,componentStyle: []
,label: 'Group1755'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Entity: Cliente, Attribute: cedula
$scope.vc.createViewState({
id: "VA_CEDULASQCHLMILV_478473"
,componentStyle: []
,label: "Cedula"
,validationCode: 0
,readOnly: designer.constants.mode.Query
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
$scope.vc.createViewState({
id: "VA_VABUTTONNZGKMBP_152473"
,componentStyle: []
,label: "Buscar"
,validationCode: 0
,readOnly: designer.constants.mode.None
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Group: Group2670
$scope.vc.createViewState({
id: "G_FACTURAEIP_205473"
,hasId: true
,componentStyle: []
,label: 'Group2670'
,enabled: designer.constants.mode.Query
,visible: designer.constants.mode.Query
});
$scope.vc.types.DatosFactura = kendo.data.Model.define({
id: "dsgnrId",
fields: {
dsgnrId: {type: "string"},
trackId: {type: "string"},
codigo: {
type: "number",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("DatosFactura","codigo", 0)
},
fecha: {
type: "string",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("DatosFactura","fecha", '')
},
total: {
type: "number",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("DatosFactura","total", 0)
},
nombreCliente: {
type: "string",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("DatosFactura","nombreCliente", '')
},
apellidoCliente: {
type: "string",
editable: true
,defaultValue: $scope.vc.channelDefaultValues("DatosFactura","apellidoCliente", '')
}
}
});
$scope.vc.model.DatosFactura = new kendo.data.DataSource({
transport: {
read: function(options) {
var promise = false;
var isRefresh = (angular.isDefined(options.data) && angular.isDefined(options.data.refresh));
if (isRefresh || !designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
var queryId = 'Q_DATOTCUF_WG71';
var queryRequest = $scope.vc.getRequestQuery_Q_DATOTCUF_WG71();
if (queryId && queryRequest) {
var queryLoaded = queryRequest.loaded;
if (angular.isUndefined(queryLoaded) || isRefresh === true) {
queryRequest.loaded = true;
queryRequest.updateParameters();
promise = true;
$scope.vc.executeQuery(
'QV_CW71_SVG41',
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
model : $scope.vc.types.DatosFactura
},
aggregate: [
],
error: function(e) {
if(e.xhr.message && e.xhr.message === 'DeletingError'){
$("#QV_CW71_SVG41").data("kendoExtGrid").cancelChanges();
}
}
});
$scope.vc.queries.Q_DATOTCUF_WG71 = $scope.vc.model.DatosFactura;
$scope.vc.trackers.DatosFactura = new $scope.vc.crud.DataSourceTracker(
$scope.vc.metadata.entities.DatosFactura
);
$scope.vc.model.DatosFactura.bind('change',function(e){
$scope.vc.trackers.DatosFactura.track(e);
});
$scope.vc.grids.QV_CW71_SVG41 = {};
$scope.vc.grids.QV_CW71_SVG41.queryId = 'Q_DATOTCUF_WG71';
$scope.vc.viewState.QV_CW71_SVG41 = {
style: []
};
$scope.vc.viewState.QV_CW71_SVG41.column = {};
$scope.vc.grids.QV_CW71_SVG41.editable =
{
mode:'inline'
,confirmation:false
};
$scope.vc.grids.QV_CW71_SVG41.events = {
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
$scope.vc.trackers.DatosFactura.cancelTrackedChanges(e.model);
},
edit: function(e) {
$scope.vc.grids.QV_CW71_SVG41.selectedRow = e.model;
var commandCell = $scope.vc.getCommandCellData(e.container);
var titleUpdate = $filter('translate')('Aceptar');
var titleCancel = $filter('translate')('Cancelar');
commandCell.html("<a class='btn btn-default k-grid-update cb-row-image-button' onmousedown='this.focus()' title='"+titleUpdate+"' href='#'><span class='fa fa-check-circle'></span></a><a class='btn btn-default k-grid-cancel cb-row-image-button' title='"+titleCancel+"' href='#'><span class='fa fa-times-circle'></span></a>");
$scope.vc.validateForm();
},
dataBound: function(e) {
var index;
var grid = e.sender;
$scope.vc.gridDataBound("QV_CW71_SVG41", false, grid);
$scope.vc.hideShowColumns("QV_CW71_SVG41", grid);
var dataView = null;
dataView = this.dataSource.view();
var styleName, iStyle;
for(var i = 0; i < dataView.length; i++) {
if (typeof $scope.vc.viewState.QV_CW71_SVG41.rows[dataView[i].uid] != "undefined") {
for(iStyle = 0; iStyle< $scope.vc.viewState.QV_CW71_SVG41.rows[dataView[i].uid].style.length; iStyle++){
styleName = $scope.vc.viewState.QV_CW71_SVG41.rows[dataView[i].uid].style[iStyle];
if($("#QV_CW71_SVG41 tbody").find("tr[data-uid=" + dataView[i].uid + "]").hasClass(styleName)===false){
$("#QV_CW71_SVG41 tbody").find("tr[data-uid=" + dataView[i].uid + "]").addClass(styleName);
}
}
}
}
}
};
//Comandos de registros del Grid
$scope.vc.grids.QV_CW71_SVG41.columns = [];
//Registros de fila del Grid
$scope.vc.viewState.QV_CW71_SVG41.rows = [];
//Controles de edicion en linea del Grid
$scope.vc.viewState.QV_CW71_SVG41.column.codigo = {
title: 'codigo',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
format: "n0",
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXEUN_143473',
element: []
};
$scope.vc.grids.QV_CW71_SVG41.AT52_CODIGOMW347 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_CW71_SVG41.column.codigo.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXEUN_143473",'data-validation-code':"{{vc.viewState.QV_CW71_SVG41.column.codigo.validationCode}}"
,'kendo-numeric-text-box':""
,'datatypes-Limit':"N"
,'k-spinners':"false"
,'k-step':"0"
,'k-format':"vc.viewState.QV_CW71_SVG41.column.codigo.format"
,'k-decimals':"vc.viewState.QV_CW71_SVG41.column.codigo.decimals"
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_CW71_SVG41.column.codigo.style"
});
textInput.appendTo(container);
}
};
$scope.vc.viewState.QV_CW71_SVG41.column.fecha = {
title: 'fecha',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXDTR_609473',
element: []
};
$scope.vc.grids.QV_CW71_SVG41.AT97_FECHAVPR347 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_CW71_SVG41.column.fecha.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXDTR_609473",'data-validation-code':"{{vc.viewState.QV_CW71_SVG41.column.fecha.validationCode}}"
,'type':"text"
,'class':"k-textbox"
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_CW71_SVG41.column.fecha.style"
});
textInput.appendTo(container);
}
};
$scope.vc.viewState.QV_CW71_SVG41.column.total = {
title: 'total',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
format: "c",
decimals: kendo.cultures.current.numberFormat.decimals,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXSQL_901473',
element: []
};
$scope.vc.grids.QV_CW71_SVG41.AT24_TOTALZNH347 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_CW71_SVG41.column.total.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXSQL_901473",'data-validation-code':"{{vc.viewState.QV_CW71_SVG41.column.total.validationCode}}"
,'kendo-numeric-text-box':""
,'datatypes-Limit':"N"
,'k-spinners':"false"
,'k-step':"0"
,'k-format':"vc.viewState.QV_CW71_SVG41.column.total.format"
,'k-decimals':"vc.viewState.QV_CW71_SVG41.column.total.decimals"
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_CW71_SVG41.column.total.style"
});
textInput.appendTo(container);
}
};
$scope.vc.viewState.QV_CW71_SVG41.column.nombreCliente = {
title: 'nombreCliente',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXQSF_475473',
element: []
};
$scope.vc.grids.QV_CW71_SVG41.AT54_NOMBREIE347 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_CW71_SVG41.column.nombreCliente.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXQSF_475473",'data-validation-code':"{{vc.viewState.QV_CW71_SVG41.column.nombreCliente.validationCode}}"
,'type':"text"
,'class':"k-textbox"
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_CW71_SVG41.column.nombreCliente.style"
});
textInput.appendTo(container);
}
};
$scope.vc.viewState.QV_CW71_SVG41.column.apellidoCliente = {
title: 'apellidoCliente',
titleArgs: {},
tooltip: '',
enabled:designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
hidden:!designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode),
readOnly:designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode),
decimals: 0,
style: [],
validationCode: 0,
componentId:'VA_TEXTINPUTBOXXOL_519473',
element: []
};
$scope.vc.grids.QV_CW71_SVG41.AT97_APELLIOE347 = {
control: function(container, options) {
var textInput =
$('<input/>' , {
'name':options.field
,'data-bind':"value:" + options.field
,'ng-disabled':"!vc.viewState.QV_CW71_SVG41.column.apellidoCliente.enabled"
,'ng-readonly':"designer.enums.hasFlag(designer.constants.mode.Query,vc.mode)"
,'ng-show':"designer.enums.hasFlag(designer.constants.mode.All,vc.mode)"
,'id': "VA_TEXTINPUTBOXXOL_519473",'data-validation-code':"{{vc.viewState.QV_CW71_SVG41.column.apellidoCliente.validationCode}}"
,'type':"text"
,'class':"k-textbox"
,'ng-model-onblur': ""
,'ng-class': "vc.viewState.QV_CW71_SVG41.column.apellidoCliente.style"
});
textInput.appendTo(container);
}
};
//Creacion de columnas del Grid
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_CW71_SVG41.columns.push({
field: 'codigo',
title: '{{vc.viewState.QV_CW71_SVG41.column.codigo.title|translate:vc.viewState.QV_CW71_SVG41.column.codigo.titleArgs}}',
width:$scope.vc.viewState.QV_CW71_SVG41.column.codigo.width,
format: $scope.vc.viewState.QV_CW71_SVG41.column.codigo.format,
editor: $scope.vc.grids.QV_CW71_SVG41.AT52_CODIGOMW347.control,
template: "<span ng-class='vc.viewState.QV_CW71_SVG41.column.codigo.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.codigo, \"QV_CW71_SVG41\", \"codigo\"):kendo.toString(#=codigo#, vc.viewState.QV_CW71_SVG41.column.codigo.format)'></span>",
attributes: {"class":"text-right", "ng-class": "vc.viewState.QV_CW71_SVG41.column.codigo.style", "title": "{{vc.viewState.QV_CW71_SVG41.column.codigo.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_CW71_SVG41.column.codigo.hidden
});
}
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_CW71_SVG41.columns.push({
field: 'fecha',
title: '{{vc.viewState.QV_CW71_SVG41.column.fecha.title|translate:vc.viewState.QV_CW71_SVG41.column.fecha.titleArgs}}',
width:$scope.vc.viewState.QV_CW71_SVG41.column.fecha.width,
format: $scope.vc.viewState.QV_CW71_SVG41.column.fecha.format,
editor: $scope.vc.grids.QV_CW71_SVG41.AT97_FECHAVPR347.control,
template: "<span ng-class='vc.viewState.QV_CW71_SVG41.column.fecha.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.fecha, \"QV_CW71_SVG41\", \"fecha\")'></span>",
attributes: {"class":"", "ng-class": "vc.viewState.QV_CW71_SVG41.column.fecha.style", "title": "{{vc.viewState.QV_CW71_SVG41.column.fecha.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_CW71_SVG41.column.fecha.hidden
});
}
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_CW71_SVG41.columns.push({
field: 'total',
title: '{{vc.viewState.QV_CW71_SVG41.column.total.title|translate:vc.viewState.QV_CW71_SVG41.column.total.titleArgs}}',
width:$scope.vc.viewState.QV_CW71_SVG41.column.total.width,
format: $scope.vc.viewState.QV_CW71_SVG41.column.total.format,
editor: $scope.vc.grids.QV_CW71_SVG41.AT24_TOTALZNH347.control,
template: "<span ng-class='vc.viewState.QV_CW71_SVG41.column.total.element[dataItem.dsgnrId].style' ng-bind='(vc.getStringColumnFormat)?vc.getStringColumnFormat(dataItem.total, \"QV_CW71_SVG41\", \"total\"):kendo.toString(#=total#, vc.viewState.QV_CW71_SVG41.column.total.format)'></span>",
attributes: {"class":"text-right", "ng-class": "vc.viewState.QV_CW71_SVG41.column.total.style", "title": "{{vc.viewState.QV_CW71_SVG41.column.total.tooltip|translate}}"},
headerAttributes: {"class":"text-right"},
hidden: $scope.vc.viewState.QV_CW71_SVG41.column.total.hidden
});
}
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_CW71_SVG41.columns.push({
field: 'nombreCliente',
title: '{{vc.viewState.QV_CW71_SVG41.column.nombreCliente.title|translate:vc.viewState.QV_CW71_SVG41.column.nombreCliente.titleArgs}}',
width:$scope.vc.viewState.QV_CW71_SVG41.column.nombreCliente.width,
format: $scope.vc.viewState.QV_CW71_SVG41.column.nombreCliente.format,
editor: $scope.vc.grids.QV_CW71_SVG41.AT54_NOMBREIE347.control,
template: "<span ng-class='vc.viewState.QV_CW71_SVG41.column.nombreCliente.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.nombreCliente, \"QV_CW71_SVG41\", \"nombreCliente\")'></span>",
attributes: {"class":"", "ng-class": "vc.viewState.QV_CW71_SVG41.column.nombreCliente.style", "title": "{{vc.viewState.QV_CW71_SVG41.column.nombreCliente.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_CW71_SVG41.column.nombreCliente.hidden
});
}
if (designer.enums.hasFlag(designer.constants.mode.All, $scope.vc.mode)) {
$scope.vc.grids.QV_CW71_SVG41.columns.push({
field: 'apellidoCliente',
title: '{{vc.viewState.QV_CW71_SVG41.column.apellidoCliente.title|translate:vc.viewState.QV_CW71_SVG41.column.apellidoCliente.titleArgs}}',
width:$scope.vc.viewState.QV_CW71_SVG41.column.apellidoCliente.width,
format: $scope.vc.viewState.QV_CW71_SVG41.column.apellidoCliente.format,
editor: $scope.vc.grids.QV_CW71_SVG41.AT97_APELLIOE347.control,
template: "<span ng-class='vc.viewState.QV_CW71_SVG41.column.apellidoCliente.element[dataItem.dsgnrId].style' ng-bind='vc.getStringColumnFormat(dataItem.apellidoCliente, \"QV_CW71_SVG41\", \"apellidoCliente\")'></span>",
attributes: {"class":"", "ng-class": "vc.viewState.QV_CW71_SVG41.column.apellidoCliente.style", "title": "{{vc.viewState.QV_CW71_SVG41.column.apellidoCliente.tooltip|translate}}"},
hidden: $scope.vc.viewState.QV_CW71_SVG41.column.apellidoCliente.hidden
});
}
$scope.vc.viewState.QV_CW71_SVG41.column.edit = {
element:[]
};
$scope.vc.viewState.QV_CW71_SVG41.column["delete"] = {
element:[]
};
$scope.vc.viewState.QV_CW71_SVG41.column.cmdEdition = {};
$scope.vc.viewState.QV_CW71_SVG41.column.cmdEdition.hidden = (!designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode))?false:true;
$scope.vc.grids.QV_CW71_SVG41.columns.push(
{
field: 'cmdEdition',
title: ' ',
command: [
{
name: "edit"
, text: "{{'Editar'|translate}}"
, cssMap: "{'btn': true, 'btn-default': true, 'cb-row-image-button': true" +
", 'k-grid-edit': !vc.viewState.G_FACTURAEIP_205473.disabled}"
, template: "<a ng-class='vc.getCssClass(\"edit\", " +
"vc.viewState.QV_CW71_SVG41.column.edit.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_CW71_SVG41.column.edit.element[dataItem.dsgnrId].style)' " +
"title=\"{{'Editar'|translate}}\" "+
"ng-disabled = (vc.viewState.G_FACTURAEIP_205473.disabled==true?true:false) "
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
", 'k-grid-delete': !vc.viewState.G_FACTURAEIP_205473.disabled}"
, template: "<a ng-class='vc.getCssClass(\"destroy\", " +
"vc.viewState.QV_CW71_SVG41.column.delete.element[dataItem.uid].style, #:cssMap#, vc.viewState.QV_CW71_SVG41.column.delete.element[dataItem.dsgnrId].style)' " +
"title=\"{{'Eliminar'|translate}}\" "+
"ng-disabled = (vc.viewState.G_FACTURAEIP_205473.disabled==true?true:false) "
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
hidden: designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) === true ? true : $scope.vc.viewState.QV_CW71_SVG41.column.cmdEdition.hidden,
width: Number(sessionStorage.columnSize) || 100
}
);
$scope.vc.viewState.QV_CW71_SVG41.toolbar = {
create: { visible : !designer.enums.hasFlag(designer.constants.mode.Query, $scope.vc.mode) }
}
$scope.vc.grids.QV_CW71_SVG41.toolbar = [
{
"name": "create",
"text": "",
"template": "<button class = 'btn btn-default k-grid-add cb-grid-button' " +
"ng-if = 'vc.viewState.QV_CW71_SVG41.toolbar.create.visible' " +
"ng-disabled = 'vc.viewState.G_FACTURAEIP_205473.disabled?true:false'" +
"title = \"{{'New'|translate}}\" >" +
"<span class='fa fa-plus'></span>{{'New'|translate}}</button>"
}
];
//ViewState - Command: Accept
$scope.vc.createViewState({
id: "T_FRNTNXKREPNXN_521_ACCEPT"
,componentStyle: []
,label: 'Accept'
,enabled: designer.constants.mode.All
,visible: designer.constants.mode.All
});
//ViewState - Command: Cancel
$scope.vc.createViewState({
id: "T_FRNTNXKREPNXN_521_CANCEL"
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
$scope.vc.render('VC_FACTURASLP_523521');
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
var cobisMainModule = cobis.createModule("VC_FACTURASLP_523521", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", "designerModule"],[]);
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
$routeProvider.when("/VC_FACTURASLP_523521", {
templateUrl: "VC_FACTURASLP_523521_FORM.html",
controller: "VC_FACTURASLP_523521_CTRL",
label: "FacturasPorCliente",
}).otherwise({
redirectTo: function (routeParams, path, search) {
return "/VC_FACTURASLP_523521?" + $.param(search);
}
});
VC_FACTURASLP_523521(cobisMainModule);
}]);
} else {
VC_FACTURASLP_523521(cobisMainModule);
}