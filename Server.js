import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import router  from './Routes/demo.js';
dotenv.config();
const app = express();
//general set up
app.use(cors());
app.use(bodyparser.json({}));
app.use(bodyparser.urlencoded({extended: true}));
app.use('/staic', express.static('public'));
app.use('/api/v1/route', router);
const PORT = process.env.PORT || 35000;
const deployServer = async () => {
  try {
   await app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch(error) {
   console.log(error);
  }
}
deployServer();
