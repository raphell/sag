import { displayDO, deleteElemInDO, addElementInDO, updateElemInDO } from '../controllers/doController';
import { Router } from 'express';
const doRouter = Router();

//Get a text from the API and send it
doRouter.get('/', (req: any, res: any) => {
  displayDO(req, res);
});

//Insert in the DB
doRouter.post('/', (req: any, res: any) => {
  res.type('application/json');
  addElementInDO(req, res);
});

//Update in the DB
doRouter.put('/modifier/:id', (req: any, res: any) => {
  res.type('application/json');
  updateElemInDO(req, res);
});


//DELETE an elem with a given id
doRouter.delete('/supprimer/:id', (req: any, res: any) => {
  res.type('application/json');
  deleteElemInDO(req, res);
});

export default doRouter;