import countryData from '../data/alpha3-to-name';

const countryNameMapper = {
  getNameFromAlfa3: (alfa3: string) => {
    return countryData.find(country => country['alpha-3'] === alfa3)?.name
  }
}

export default countryNameMapper