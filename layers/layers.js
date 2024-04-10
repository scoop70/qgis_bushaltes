var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_GeoCodingPluginResults_1 = new ol.format.GeoJSON();
var features_GeoCodingPluginResults_1 = format_GeoCodingPluginResults_1.readFeatures(json_GeoCodingPluginResults_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoCodingPluginResults_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoCodingPluginResults_1.addFeatures(features_GeoCodingPluginResults_1);
var lyr_GeoCodingPluginResults_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeoCodingPluginResults_1, 
                style: style_GeoCodingPluginResults_1,
                popuplayertitle: "GeoCoding Plugin Results",
                interactive: true,
                title: '<img src="styles/legend/GeoCodingPluginResults_1.png" /> GeoCoding Plugin Results'
            });
var format_highway_bus_stop_2 = new ol.format.GeoJSON();
var features_highway_bus_stop_2 = format_highway_bus_stop_2.readFeatures(json_highway_bus_stop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_bus_stop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_bus_stop_2.addFeatures(features_highway_bus_stop_2);
var lyr_highway_bus_stop_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_bus_stop_2, 
                style: style_highway_bus_stop_2,
                popuplayertitle: "highway_bus_stop",
                interactive: true,
                title: '<img src="styles/legend/highway_bus_stop_2.png" /> highway_bus_stop'
            });
var format_WA_NVO_FL_TYPE_3 = new ol.format.GeoJSON();
var features_WA_NVO_FL_TYPE_3 = format_WA_NVO_FL_TYPE_3.readFeatures(json_WA_NVO_FL_TYPE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_NVO_FL_TYPE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_NVO_FL_TYPE_3.addFeatures(features_WA_NVO_FL_TYPE_3);
var lyr_WA_NVO_FL_TYPE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_NVO_FL_TYPE_3, 
                style: style_WA_NVO_FL_TYPE_3,
                popuplayertitle: "WA_NVO_FL_TYPE",
                interactive: true,
                title: '<img src="styles/legend/WA_NVO_FL_TYPE_3.png" /> WA_NVO_FL_TYPE'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_GeoCodingPluginResults_1.setVisible(true);lyr_highway_bus_stop_2.setVisible(true);lyr_WA_NVO_FL_TYPE_3.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_GeoCodingPluginResults_1,lyr_highway_bus_stop_2,lyr_WA_NVO_FL_TYPE_3];
lyr_GeoCodingPluginResults_1.set('fieldAliases', {'address': 'address', });
lyr_highway_bus_stop_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'image:0': 'image:0', 'image': 'image', 'wheelchair': 'wheelchair', 'ref': 'ref', 'cxx:id': 'cxx:id', 'cxx:code': 'cxx:code', 'check_date:shelter': 'check_date:shelter', 'zone': 'zone', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'ref:IFOPT': 'ref:IFOPT', 'public_transport': 'public_transport', 'name': 'name', 'lit': 'lit', 'bus': 'bus', 'bin': 'bin', 'bench': 'bench', });
lyr_WA_NVO_FL_TYPE_3.set('fieldAliases', {'fid': 'fid', });
lyr_GeoCodingPluginResults_1.set('fieldImages', {'address': '', });
lyr_highway_bus_stop_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'image:0': 'TextEdit', 'image': 'TextEdit', 'wheelchair': 'TextEdit', 'ref': 'TextEdit', 'cxx:id': 'TextEdit', 'cxx:code': 'TextEdit', 'check_date:shelter': 'TextEdit', 'zone': 'TextEdit', 'tactile_paving': 'TextEdit', 'shelter': 'TextEdit', 'ref:IFOPT': 'TextEdit', 'public_transport': 'TextEdit', 'name': 'TextEdit', 'lit': 'TextEdit', 'bus': 'TextEdit', 'bin': 'TextEdit', 'bench': 'TextEdit', });
lyr_WA_NVO_FL_TYPE_3.set('fieldImages', {'fid': '', });
lyr_GeoCodingPluginResults_1.set('fieldLabels', {'address': 'no label', });
lyr_highway_bus_stop_2.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'image:0': 'hidden field', 'image': 'inline label - visible with data', 'wheelchair': 'hidden field', 'ref': 'hidden field', 'cxx:id': 'hidden field', 'cxx:code': 'hidden field', 'check_date:shelter': 'hidden field', 'zone': 'inline label - visible with data', 'tactile_paving': 'hidden field', 'shelter': 'inline label - visible with data', 'ref:IFOPT': 'hidden field', 'public_transport': 'hidden field', 'name': 'header label - visible with data', 'lit': 'hidden field', 'bus': 'hidden field', 'bin': 'hidden field', 'bench': 'hidden field', });
lyr_WA_NVO_FL_TYPE_3.set('fieldLabels', {'fid': 'no label', });
lyr_WA_NVO_FL_TYPE_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});