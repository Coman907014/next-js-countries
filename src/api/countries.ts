import { Country } from "../models/Country"
import httpClient from "./httpClient"

const countriesApi = {
  // Add interface once created
  getAll(): Promise<Country[]> {
    return httpClient
      .get('all')
      .then(response => response.data as Country[])
  },
  getByName(name: string): Promise<Country> {
    return httpClient
      .get(`/name/${name}`)
      .then(response => response.data as Country)
  },
  getByFullTextName(name: string): Promise<Country> {
    return httpClient
      .get(`/name/${name}?fullText=true`)
      .then(response => response.data as Country)
  }
}

export default countriesApi;