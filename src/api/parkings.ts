
import axios from "axios";

const BASE_URL = "https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records"

interface Parking {
  id: string;
  name: string;
  availablecapacity: number;
  occupation: number;
  totalcapacity: number;
  location: {
    lon: number;
    lat: number;
  };
  urllinkaddress: string;
}

interface ParkingResponse {
    total_count:  number;
    results: Parking[];
}

export const fetchParkings = () => {
    return axios.get<ParkingResponse>(BASE_URL);
}