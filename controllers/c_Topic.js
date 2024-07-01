const { TopicModel } = require('../models')
const path = require('path');
const fsPromises = require('fs').promises;


const createTopic = async (req, res) => {
    try{
        let body = req.body;
        const data = await TopicModel.create(body);
        console.log(data);
        res.send(data);
    }catch(e)
    {
        console.log(e);
       res.sendStatus(500);
    }
    
};

const getTopic = async (req, res) => {
    try{
        let body = req.body;
        const data = await TopicModel.find();
        res.send(data);
    }catch(e)
    {
        console.log(e);
       res.sendStatus(500);
    }
    
};



module.exports = {createTopic, getTopic};