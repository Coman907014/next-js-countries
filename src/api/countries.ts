import { Country } from "../models/Country"
import httpClient from "./httpClient"

const countriesApi = {
  getAll(): Promise<Country[]> {
    return httpClient
      .get('all')
      .then(response => response.data as Country[])
  },
  getByName(name: string): any {
    return httpClient
      .get(`name/${name}`)
      .then(response => response.data as Country)
  },
  getByFullTextName(name: string): Promise<Country[]> {
    return httpClient
      .get(`name/${name}?fullText=true`)
      .then(response => response.data as Country[])
  },
  getByCountryCode(alfa3: string): Promise<Country[]> {
    return httpClient
      .get(`alpha/${alfa3}`)
      .then(response => response.data as Country[])
  }
}

export default countriesApi;