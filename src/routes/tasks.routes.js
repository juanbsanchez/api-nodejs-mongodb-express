import {Router} from 'express';

const router = Router();

//Database connection
import {connect} from "../database";
import {ObjectID} from 'mongodb';

//GET
router.get('/', async (req, res)=>{
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    console.log(result);
    res.json(result);
});

//POST
router.post('/', async(req, res)=>{
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req.body.description,
    }
    //save data to database
    const result = await db.collection('tasks').insertOne(task);

    res.json(result.ops[0]);
});

//GET BY ID
router.get('/:id', async(req, res)=>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOne({ _id: ObjectID(id) });
    res.json(result);
});

//DELETE
router.delete('/:id', async(req, res)=>{
   const {id} = req.params;
   const db = await connect();
   const result = await db.collection('tasks').deleteOne({_id: ObjectID(id)});
   res.json({
       message: `Task ${id} deleted`,
       result,
   });
});


//UPDATE
router.put('/:id', async(req, res)=>{
    const {id} = req.params;
    const updatedTask = {
        title: req.body.title,
        description: req.body.description,
    }
    const db = await connect();
    const result = await db.collection('tasks').updateOne({_id: ObjectID(id)},{$set: updatedTask});
    res.json({
        message: `Task with ${id} has updated`,
        result,
    });
});

export default router;
