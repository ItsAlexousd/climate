import { error } from '@sveltejs/kit';
import fetch from 'node-fetch'; // Importez node-fetch si vous êtes en dehors d'un navigateur
import csvParser from 'csv-parser';


export async function load() {
  const csvUrl = 'https://firms.modaps.eosdis.nasa.gov/api/country/csv/1373c1527c23fa9c73fed5d382735c0c/VIIRS_SNPP_NRT/USA/1/2023-12-01';

  // Récupérer les données CSV
  const response = await fetch(csvUrl);
  if (!response.ok) {
    throw error(404, 'Not found');
  }

  // Analyser le CSV et le convertir en un tableau d'objets typés
  const csvData = await response.text();
  const dataArray: CSVData[] = [];
  csvParser({ separator: ',' })
    .on('data', (data: CSVData) => dataArray.push(data))
    .write(csvData);

  return { dataArray };
}

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
