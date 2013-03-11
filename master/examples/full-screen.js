var layer = new ol.layer.TileLayer({
  source: new ol.source.MapQuestOpenAerial()
});
var map = new ol.Map({
  layers: [layer],
  renderers: ol.RendererHints.createFromQueryData(),
  target: 'map',
  view: new ol.View2D({
    center: new ol.Coordinate(0, 0),
    zoom: 0
  })
});
var view2d = map.getView().getView2D();
view2d.fitExtent(view2d.getProjection().getExtent(), map.getSize());
