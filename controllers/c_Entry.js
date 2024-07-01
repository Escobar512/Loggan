const { EntryModel, TopicModel } = require('../models')
const path = require('path');
const fsPromises = require('fs').promises;
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const createEntry = async (req, res) => {
    try{
      const entries = Object.entries(req.body);
        for(const entry of entries){
          if(entry[0] != "Date"){
            const entryData = {"topicName": entry[0], "entryDate": entries[0][1], "content": String(entry[1])}
            const data = await EntryModel.create(entryData);
            console.log(data);
          }
        }
        
        res.send("ok");
    }catch(e)
    {
       res.sendStatus(500);
    }
    
};


async function assingProgress(counterName, progressName, date){

  const counter = await EntryModel
        .find({ entryDate: { $lt: date }, topicName: counterName })
        .sort({ entryDate: -1 })
        .limit(2);

        const progress = await EntryModel
        .find({ entryDate: { $lt: date }, topicName: progressName })
        .sort({ entryDate: -1 })
        .limit(1);

        if(counter.length > 1 && progress.length > 0){
          if(counter[0].content == counter[1].content){
            return progress[0].content
          }  
          else{
            return 0
          }
        }
        else{
          return 0;
        }
  }

  async function assingCounter(counterName, date){

    const counter = await EntryModel
          .find({ entryDate: { $lt: date }, topicName: counterName })
          .sort({ entryDate: -1 })
          .limit(1);
  
          if(counter.length > 0){
              return counter[0].content
          }
          else{
            return 0;
          }
    }


  const entryMigration = async (req, res) => {
    try {
      const data = await readFile("./entries.json", 'utf8');
      const entries = JSON.parse(data);
  
      for (const entryLogged of entries) {
        const entryValues = Object.entries(entryLogged);
  
        for (const entry of entryValues) {
          if (entry[0] !== "Date" && entry[0] !== "_id" && entry[0] !== "__v") {
            const unixTimestampStr = entryValues[1][1]["$date"]["$numberLong"];
            const unixTimestamp = parseInt(unixTimestampStr, 10);
            const utcDate = new Date(unixTimestamp);
            const offset = 6 * 60; 
            const adjustedDate = new Date(utcDate.getTime() + offset * 60 * 1000);
            const formattedDate = adjustedDate.toISOString().split('T')[0];
            const entryData = { "topicName": entry[0], "entryDate": formattedDate, "content": String(entry[1])};

            try{
              const createdEntry = await EntryModel.create(entryData);
              console.log(createdEntry);
            }
            catch(error){
              // console.log(adjustedDate);
              // console.log(topic.Name);
              continue;
            }
          }
        }
      }
    } catch (error) {
      console.error('Error reading or processing entries:', error);
    }
  };

const getEntry = async (req, res) => {
    try{
        const body = req.body;
        const entry = await EntryModel.find({entryDate: body.Date});
        const topics = await TopicModel.find();

        let entryTopics = entry.map(entryTopic => {
          let topic = topics.find(topic => topic.Name === entryTopic.topicName);
          if (topic) {
              return {
                  topicName: entryTopic.topicName,
                  content: entryTopic.content,
                  type: topic.Type
              };
          }
          return null;
      }).filter(Boolean); 

        let lastSongProgress = await assingProgress("SongCounter", "SongProgress", body.Date);
        let lastSongWritingProgress = await assingProgress("SongwritingCounter", "SongwritingProgress", body.Date);
        let lastWritingProgress = await assingProgress("WritingCounter", "WritingProgress", body.Date);

        let lastSongCounter = await assingCounter("SongCounter", body.Date);
        let lastSongWritingCounter = await assingCounter("SongwritingCounter", body.Date);
        let lastWritingCounter = await assingCounter("WritingCounter", body.Date);


        var formData = {};

        if(entryTopics.length > 0){
          // for(const topic of entryTopics){
          //   formData[topic.topicName] = topic.content;
          // }
          res.json(entryTopics); 
        }
        else{
         res.send("empty");
        }
      
    }catch(e)
    {
    console.log(e.message);
       res.send(e.message);
       
    }
    
};

const getLastEntryDate = async (req, res) => {
  try{
      const entry = await EntryModel.find()        
      .sort({ entryDate: -1 })
      .limit(1);;
     
        res.json({"Date" : entry[0].entryDate}); 
   
    
  }catch(e)
  {
  console.log(e.message);
     res.send(e.message);
     
  }
  
};

module.exports = {createEntry, getEntry, assingProgress, entryMigration, getLastEntryDate};