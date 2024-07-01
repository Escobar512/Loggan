const express = require("express");
const router = express.Router();
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const axios = require('axios');
const ejs = require('ejs');
const puppeteer = require('puppeteer');


const {createEntry, getEntry, assingProgress,entryMigration, getLastEntryDate} = require("../controllers/c_Entry");
const { EntryModel } = require("../models");
const e = require("express");

router.get("/", async (req, res) => {

  try {
    // Read the EJS template from the file
    const templatePath = path.join(__dirname, '../views', 'entryForm.ejs');
    const template = await fsPromises.readFile(templatePath, 'utf-8');

    const today = new Date();
    const dataLast = await EntryModel
        .find({ Date: { $lt: today } })
        .sort({ Date: -1 })
        .limit(2);


    let lastSongProgress = await assingProgress("SongCounter", "SongProgress", dataLast);
    let lastSongWritingProgress = await assingProgress("SongwritingCounter", "SongwritingProgress", dataLast);
    let lastWritingProgress = await assingProgress("WritingCounter", "WritingProgress", dataLast);


    const dataRender = {
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
      SongProgress: lastSongProgress ?? 0,
      SongCounter: dataLast[0].SongCounter ?? 0,
      SongLog: "",
      SongwritingProgress: lastSongWritingProgress ?? 0,
      SongwritingCounter: dataLast[0].SongwritingCounter ?? 0,
      SongwritingLog: "",
      WritingProgress: lastWritingProgress ?? 0,
      WritingCounter: dataLast[0].WritingCounter ?? 0,
      WritingLog: "",
      ReadCounter: false,
      ReadLog: "",
      JapaneseProgress: dataLast[0].JapaneseProgress ?? 0,
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

    // Render the EJS template with data
    const htmlContent = ejs.render(template, dataRender);

    // Create a PDF using Puppeteer
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' }); // Set content and wait for network idl
    await browser.close();

    res.setHeader('Content-Type', 'text/html');
    res.end(htmlContent); // Send the HTML as a response

  } catch (error) {
    console.error(error);
    throw error; // Handle or rethrow the error as needed
  }
});

router.post("/React", async (req, res) => {
  try {
    const today = new Date();
    const dataLast = await EntryModel
      .find({ Date: { $lt: today } })
      .sort({ Date: -1 })
      .limit(2);

    let lastSongProgress = await assingProgress("SongCounter", "SongProgress", dataLast);
    let lastSongWritingProgress = await assingProgress("SongwritingCounter", "SongwritingProgress", dataLast);
    let lastWritingProgress = await assingProgress("WritingCounter", "WritingProgress", dataLast);

    const responseData = {
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
      SongProgress: lastSongProgress ?? 0,
      SongCounter: dataLast[0].SongCounter ?? 0,
      SongLog: "",
      SongwritingProgress: lastSongWritingProgress ?? 0,
      SongwritingCounter: dataLast[0].SongwritingCounter ?? 0,
      SongwritingLog: "",
      WritingProgress: lastWritingProgress ?? 0,
      WritingCounter: dataLast[0].WritingCounter ?? 0,
      WritingLog: "",
      ReadCounter: false,
      ReadLog: "",
      JapaneseProgress: dataLast[0].JapaneseProgress ?? 0,
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

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post("/EntryByDate", getEntry);

router.post("/submit-entry", createEntry);

router.get("/entryMigration", entryMigration);

router.get("/LastEntryDate", getLastEntryDate);



 

module.exports = router