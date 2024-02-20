const express = require("express");
const router = express.Router();
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const axios = require('axios');
const ejs = require('ejs');
const puppeteer = require('puppeteer');


const {createEntry, getEntry} = require("../controllers/c_Entry");
const { EntryModel } = require("../models");

router.get("/", async (req, res) => {

  try {
    // Read the EJS template from the file
    const templatePath = path.join(__dirname, '../views', 'entryForm.ejs');
    const template = await fsPromises.readFile(templatePath, 'utf-8');

    const today = new Date();
    const dataLast = await EntryModel
        .findOne({ Date: { $lt: today } })
        .sort({ Date: -1 })
        .limit(1);

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
      SongProgress: 0,
      SongCounter: dataLast.SongCounter ?? 0,
      SongLog: "",
      SongwritingProgress: 0,
      SongwritingCounter: dataLast.SongwritingCounter ?? 0,
      SongwritingLog: "",
      WritingProgress: 0,
      WritingCounter: dataLast.WritingCounter ?? 0,
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

router.post("/EntryByDate", getEntry);

router.post("/submit-entry", createEntry);



 

module.exports = router