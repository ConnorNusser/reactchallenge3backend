import express from 'express';
const router = express.Router();
const fileReader =() => {
    const fs = require('fs');
    const filePath = './file.jsonl';
    const data =  fs.readFileSync(filePath, 'utf8');
    const dataVal = JSON.stringify(data);
    const dataValParse = JSON.parse(dataVal);

    console.log(dataValParse);
    return dataValParse;
}
router.get('/', async (req: any, res:any) =>{
    const data = fileReader();
    return res.status(200).send(data);
  });

export default router;