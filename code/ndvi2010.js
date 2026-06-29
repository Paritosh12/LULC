// =======================
// NDVI 2010 (Landsat 5)
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
var red = dataset.select('SR_B3')
  .multiply(0.0000275)
  .add(-0.2);

var nir = dataset.select('SR_B4')
  .multiply(0.0000275)
  .add(-0.2);

// TRUE NDVI
var ndvi = nir.subtract(red)
  .divide(nir.add(red))
  .rename('NDVI');

// Display
Map.centerObject(roi, 10);

Map.addLayer(
  ndvi,
  {min:-1, max:1, palette:['blue','white','green']},
  'NDVI 2010'
);

// Export
Export.image.toDrive({
  image: ndvi,
  description: 'NDVI_2010_FINAL',
  folder: 'GEE',
  scale: 30,
  region: roi,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});