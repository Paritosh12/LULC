# Land Use/Land Cover Change Detection and Future Prediction using ANN-CA

A GIS-based project for detecting historical Land Use/Land Cover (LULC) changes and predicting future urban growth using the Artificial Neural Network–Cellular Automata (ANN-CA) model in the QGIS MOLUSCE plugin.

---

## Overview

Land Use/Land Cover (LULC) monitoring plays an important role in urban planning, environmental management, and sustainable development. This project analyzes historical land use changes and predicts future LULC patterns for the year **2030** using satellite imagery and machine learning techniques.

The workflow combines **Google Earth Engine (GEE)** for preprocessing satellite imagery and **QGIS MOLUSCE** for ANN-CA-based spatial modeling.

---

## Features

- Historical LULC analysis for **2010, 2015, and 2020**
- Future LULC prediction for **2030**
- Artificial Neural Network (Multi-Layer Perceptron) training
- Cellular Automata simulation
- Correlation analysis of spatial variables
- Transition probability modeling
- Model validation using Kappa statistics
- GIS visualization of predicted land use changes

---

## Tech Stack

- **QGIS**
- **MOLUSCE Plugin**
- **Google Earth Engine (GEE)**
- **Landsat Satellite Imagery**
- **Artificial Neural Networks (ANN)**
- **Cellular Automata (CA)**
- **Remote Sensing**
- **Geographic Information Systems (GIS)**

---

## Spatial Driver Variables

The prediction model uses the following spatial variables:

- NDVI (Normalized Difference Vegetation Index)
- NDBI (Normalized Difference Built-up Index)
- Slope (Derived from DEM)
- Euclidean Distance from Roads
- Euclidean Distance from Railways
- Euclidean Distance from Water Bodies

---

## Workflow

```text
Satellite Images
       │
       ▼
Image Preprocessing (GEE)
       │
       ▼
LULC Classification (2010, 2015, 2020)
       │
       ▼
Spatial Driver Generation
(NDVI, NDBI, Slope, Distance Layers)
       │
       ▼
Raster Alignment & Preprocessing
       │
       ▼
Correlation Analysis
       │
       ▼
Area Change Analysis
       │
       ▼
Transition Potential Modeling (ANN)
       │
       ▼
Cellular Automata Simulation
       │
       ▼
Validation (Predict 2020)
       │
       ▼
Future LULC Prediction (2030)
```

---

## ANN Parameters

| Parameter | Value |
|------------|-------|
| Method | Artificial Neural Network (MLP) |
| Neighborhood | 3 pixels |
| Learning Rate | 0.01 |
| Hidden Layers | 3 |
| Maximum Iterations | 300 |
| Momentum | 0.05 |

---

## Validation

Since actual land use data for **2030** is unavailable, the model was validated by:

- Training on **2010 → 2015**
- Predicting **2020**
- Comparing the predicted 2020 LULC map with the actual 2020 LULC map

Validation Metrics:

- Overall Accuracy
- Kappa Overall
- Kappa Histogram
- Kappa Location

---

## Project Structure

```
.
├── data/
│   ├── lulc_2010.tif
│   ├── lulc_2015.tif
│   ├── lulc_2020.tif
│   ├── ndvi/
│   ├── ndbi/
│   ├── slope/
│   └── distance_layers/
│
├── code/
│   ├── NDVI_2010.js
│   ├── NDVI_2015.js
│   ├── NDVI_2020.js
│   ├── NDBI_2010.js
│   ├── NDBI_2015.js
│   └── NDBI_2020.js
│
├── results/
│   ├── correlation_matrix.png
│   ├── transition_matrix.png
│   ├── predicted_lulc_2020.tif
│   ├── predicted_lulc_2030.tif
│   ├── certainty_map_2030.tif
│   └── validation_results.png
│
├── report/
│   └── Project_Report.pdf
│
└── README.md
```

---

## Results

The ANN-CA model successfully simulated future land use patterns and highlighted:

- Urban expansion around transportation corridors
- Reduction in vegetation cover
- Changes in barren land distribution
- Stable water body regions

The predicted **2030 LULC map** demonstrates expected urban growth trends that can assist planners and researchers in sustainable development studies.

---

## Future Improvements

- Incorporate higher-resolution Sentinel-2 imagery
- Include socioeconomic and climatic variables
- Explore deep learning models for LULC prediction
- Improve validation using longer historical datasets
- Compare ANN-CA with Random Forest and CNN-based approaches

---

## References

1. QGIS Documentation
2. MOLUSCE Plugin Documentation
3. Google Earth Engine Documentation
4. USGS Landsat Data Archive
5. Li, X., & Yeh, A. G. O. (2002). Neural-network-based Cellular Automata for simulating multiple land use changes.
6. Clarke, K. C., Hoppen, S., & Gaydos, L. (1997). A self-modifying Cellular Automaton model of historical urbanization.

---

## Authors

**Paritosh Tiwari**  
B.Tech Computer Science & Engineering  
Indian Institute of Information Technology, Bhagalpur

**Krish Kathiria**  
B.Tech Computer Science & Engineering  
Indian Institute of Information Technology, Bhagalpur

---

## Acknowledgements

This project was completed under the guidance of **Prof. Uttam Kumar**.

The implementation was inspired by research on ANN-CA-based LULC prediction and adapted for an Indian urban study region using QGIS MOLUSCE and Google Earth Engine.
