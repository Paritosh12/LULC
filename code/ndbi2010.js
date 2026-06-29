// =======================
// NDBI 2010 (Landsat 5)
// =======================

var roi = ee.Geometry.Rectangle([
  77.2999, 12.7999,
  77.8001, 13.2001
]);

// Load Landsat 5 collection
var dataset = ee.ImageCollection('LANDSAT/LT05/C02/T1_L2')
  .filterBounds(roi)
  .filterDate('2010-01-01', '2010-12-31')
  .filter(ee.Filter.lt('CLOUD_COVER', 10))
  .median();

// Apply scaling
var nir = dataset.select('SR_B4')
  .multiply(0.0000275)
  .add(-0.2);

var swir = dataset.select('SR_B5')
  .multiply(0.0000275)
  .add(-0.2);

// TRUE NDBI
var ndbi = swir.subtract(nir)
  .divide(swir.add(nir))
  .rename('NDBI');

// Display
Map.centerObject(roi, 10);

Map.addLayer(
  ndbi,
  {min:-1, max:1, palette:['blue','white','red']},
  'NDBI 2010'
);

// Export
Export.image.toDrive({
  image: ndbi,
  description: 'NDBI_2010_FINAL',
  folder: 'GEE',
  scale: 30,
  region: roi,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});