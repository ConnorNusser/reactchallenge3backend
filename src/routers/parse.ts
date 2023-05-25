import express from 'express';
const router = express.Router();
const fileReader = async () => {
    const fs = require('fs');

    const data =  await fs.readFile('/Users/connor/Desktop/reactchallenge3backend/file.jsonl', 'utf8', (error, data) => {
        if(error){
           console.log(error);
           return;
        }
        const dataVal = JSON.stringify(data);
        const dataValParse = JSON.parse(dataVal);
        return dataValParse;
   
   })
   console.log(data);
   console.log("yo");
    return data;
}
router.get('/', async (req: any, res:any) =>{
    const data = await fileReader();
    return res.status(200).send(data);
  });

export default router;