var map = new ol.Map({
  layers: [
    new ol.layer.TileLayer({
      source: new ol.source.MapQuestOSM()
    })
  ],
  renderers: ol.RendererHints.createFromQueryData(),
  target: 'map',
  view: new ol.View2D({
    center: ol.projection.transform(
        new ol.Coordinate(139.6917, 35.689506), 'EPSG:4326', 'EPSG:3857'),
    zoom: 9
  })
});
