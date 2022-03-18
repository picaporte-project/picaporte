import { NextApiRequest, NextApiResponse } from 'next'
import RootPath from 'app-root-path'
import path from 'path'
import fs from 'fs';

type Response = {
  url: string,
  title: string
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Response[]>
) {
  const docsPath = path.join(RootPath.toString(), 'docs')
  console.log(docsPath)

  const docFiles = fs.readdirSync(docsPath)
    .filter(docFile => path.extname(docFile) === '.md')
    .map(docFile => {
      return {
        url: path.basename(docFile, '.md'),
        title: `TODO: ${docFile}`
      }
    })

  response.status(200)
    .json(docFiles)
}
