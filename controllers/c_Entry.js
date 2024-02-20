const { EntryModel } = require('../models')
const path = require('path');
const fsPromises = require('fs').promises;
const ejs = require('ejs');
const puppeteer = require('puppeteer');

const createEntry = async (req, res) => {
    try{
        const body = req.body;
        const data = await EntryModel.create(body);
        console.log(data);
        res.send(data);
    }catch(e)
    {
       res.sendStatus(500);
    }
    
};


const getEntry = async (req, res) => {
    try{
        const body = req.body;
        const data = await EntryModel.findOne({Date: body.Date});

        const dataLast = await EntryModel
        .findOne({ Date: { $lt: body.Date } })
        .sort({ Date: -1 })
        .limit(1);

        // Read the EJS template from the file
        const templatePath = path.join(__dirname, '../views', 'entryForm.ejs');
        const template = await fsPromises.readFile(templatePath, 'utf-8');

        var dataRender;

        if(data){
         dataRender = {
            WhatHurts: data.WhatHurts ?? "",
            FeelsLog: data.FeelsLog ?? "",
            SelfesteemLog: data.SelfesteemLog ?? "",
            Expense: data.Expense ?? 0, // Assuming a default value for Expense
            ExpensesLog: data.ExpensesLog ?? "",
            MovementCounter: data.MovementCounter ?? false,
            MovementLog: data.MovementLog ?? "",
            MeditationCounter: data.MeditationCounter ?? false,
            MeditationLog: data.MeditationLog ?? "",
            CokeCounter: data.CokeCounter ?? false,
            CokeLog: data.CokeLog ?? "",
            MusicPracticeCounter: data.MusicPracticeCounter ?? false,
            MusicPracticeLog: data.MusicPracticeLog ?? "",
            SongProgress: data.SongProgress ?? 0,
            SongCounter: dataLast?.SongCounter ?? 0,  
            SongLog: data.SongLog ?? "",
            SongwritingProgress: data.SongwritingProgress ?? 0,
            SongwritingCounter: dataLast?.SongwritingCounter ?? 0,  
            SongwritingLog: data.SongwritingLog ?? "",
            WritingProgress: data.WritingProgress ?? 0,
            WritingCounter: dataLast?.WritingCounter ?? 0,  
            WritingLog: data.WritingLog ?? "",
            ReadCounter: data.ReadCounter ?? false,
            ReadLog: data.ReadLog ?? "",
            JapaneseProgress: data.JapaneseProgress ?? 0,
            JapaneseLog: data.JapaneseLog ?? "",
            JapaneseLessonCounter: data.JapaneseLessonCounter ?? false,
            OmarCheckup: data.OmarCheckup ?? false,
            OmarHangout: data.OmarHangout ?? false,
            DanielaCheckup: data.DanielaCheckup ?? false,
            KevinCheckup: data.KevinCheckup ?? false,
            CoreCheckup: data.CoreCheckup ?? false,
            CoffeeLog: data.CoffeeLog ?? "",
            Score: data.Score ?? 0
          };
        }
        else{

             dataRender = {
                WhatHurts: "",
                FeelsLog: "",
                SelfesteemLog: "",
                Expense: 0, // Assuming a default value for Expense
                ExpensesLog: "",
                MovementCounter: false,
                MovementLog: "",
                MeditationCounter: false,
                MeditationLog: "",
                CokeCounter: false,
                CokeLog: "",
                MusicPracticeCounter: false,
                MusicPracticeLog: "",
                SongProgress: 0,
                SongCounter: dataLast?.SongCounter ?? 0,  
                SongLog: "",
                SongwritingProgress: 0,
                SongwritingCounter: dataLast?.SongwritingCounter ?? 0,
                SongwritingLog: "",
                WritingProgress: 0,
                WritingCounter: dataLast?.WritingCounter ?? 0,
                WritingLog: "",
                ReadCounter: false,
                ReadLog: "",
                JapaneseProgress: 0,
                JapaneseLog: "",
                JapaneseLessonCounter: false,
                OmarCheckup: false,
                OmarHangout: false,
                DanielaCheckup: false,
                KevinCheckup: false,
                CoreCheckup: false,
                CoffeeLog: "",
                Score: 0
              };
            }
           
        

        // Render the EJS template with data
        // const htmlContent = ejs.render(template, dataRender);

        // // Create a PDF using Puppeteer
        // const browser = await puppeteer.launch({ headless: "new" });
        // const page = await browser.newPage();
        // await page.setContent(htmlContent, { waitUntil: 'networkidle0' }); // Set content and wait for network idl
        // await browser.close();

        // res.setHeader('Content-Type', 'text/html');
        res.send(JSON.stringify(dataRender)); // Send the HTML as a response
    }catch(e)
    {
       res.send(e.message);
    }
    
};

module.exports = {createEntry, getEntry};