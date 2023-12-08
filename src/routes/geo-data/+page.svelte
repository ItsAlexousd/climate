<script lang="ts">
  import { onMount } from 'svelte';
  import 'ol/ol.css';
  import { fromLonLat, transform } from 'ol/proj';
  import { Map, View } from 'ol';
  import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
  import { OSM, Vector as VectorSource } from 'ol/source';
  import { Feature } from 'ol';
  import { Point } from 'ol/geom';
  import { Style, Circle, Stroke, Fill } from 'ol/style';

  interface CSVData {
    country_id: string;
    latitude: number;
    longitude: number;
    bright_ti4: number;
    scan: number;
    track: number;
    acq_date: string;
    acq_time: number;
    satellite: string;
    instrument: string;
    confidence: string;
    version: string;
    bright_ti5: number;
    frp: number;
    daynight: string;
  }

  export let data: { dataArray: CSVData[] };

  // Contrôles pour changer le pays, la date et la période de temps
  let selectedCountry = '';
  let selectedDate = '';
  let selectedTimePeriod = '';

  onMount(() => {
    if (!data || !data.dataArray || !Array.isArray(data.dataArray)) {
      console.error('Invalid data format');
      return;
    }

    const points = data.dataArray.map((item) => {
      const [longitude, latitude] = fromLonLat([item.longitude, item.latitude]);
      return new Feature({
        geometry: new Point([longitude, latitude])
      });
    });

    const vectorSource = new VectorSource({
      features: points
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new Circle({
          radius: 6,
          fill: new Fill({ color: 'rgba(255, 0, 0, 0.5)' }), // Remplissage rouge transparent
          stroke: new Stroke({ color: 'red', width: 2 }) // Contour rouge
        })
      })
    });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: transform([-95, 37], 'EPSG:4326', 'EPSG:3857'),
        zoom: 3 // Ajustez le niveau de zoom pour voir les points
      })
    });
  });
</script>

<div class="container mx-auto">
  <div id="map" class="map"></div>
</div>

<style>
  .map {
    width: 100%;
    height: 400px;
  }
</style>
