import { NextApiRequest, NextApiResponse } from "next";
import countriesApi from "../../../src/api/countries";

const handler = async (req: NextApiRequest, res:  NextApiResponse) => {
  const splitUrl: string[] | undefined = req.url?.split('/');

  if(!splitUrl || !splitUrl[splitUrl.length - 1]) {
    return res.status(401).json({ error: 'Search term is not valid' })
  }
  
  await countriesApi
    .getByName(splitUrl[splitUrl.length - 1])
    .then(data => res.status(200).json({ data }))
    .catch(() => res.status(200).json({ data: [] }));
}


export default handler