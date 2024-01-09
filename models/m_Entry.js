const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  Date: {
    type: Date,
    required: true
  },
  WhatHurts: {
    type: String,
    required: true
  },
  FeelsLog: {
    type: String,
    required: true
  },
  SelfesteemLog: {
    type: String,
    required: true
  },
  Expense: {
    type: Number,
    required: true
  },
  ExpensesLog: {
    type: String,
    required: true
  },
  MovementCounter: {
    type: Boolean,
    required: true
  },
  MovementLog: {
    type: String,
    required: true
  },
  MeditationCounter: {
    type: Boolean,
    required: true
  },
  MeditationLog: {
    type: String,
    required: true
  },
  CokeCounter: {
    type: Boolean,
    required: true
  },
  CokeLog: {
    type: String,
    required: true
  },
  MusicPracticeCounter: {
    type: Boolean,
    required: true
  },
  MusicPracticeLog: {
    type: String,
    required: true
  },
  SongProgress: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  },
  SongLog: {
    type: String,
    required: true
  },
  SongwritingProgress: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  },
  SongwritingLog: {
    type: String,
    required: true
  },
  WritingProgress: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  },
  WritingLog: {
    type: String,
    required: true
  },
  ReadCounter: {
    type: Boolean,
    required: true
  },
  ReadLog: {
    type: String,
    required: true
  },
  JapaneseProgress: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  },
  JapaneseLog: {
    type: String,
    required: true
  },
  JapaneseLessonCounter: {
    type: Boolean,
    required: true
  },
  OmarCheckup: {
    type: Boolean,
    required: true
  },
  OmarHangout: {
    type: Boolean,
    required: true
  },
  DanielaCheckup: {
    type: Boolean,
    required: true
  },
  KevinCheckup: {
    type: Boolean,
    required: true
  },
  CoreCheckup: {
    type: Boolean,
    required: true
  },
  CoffeeLog: {
    type: String,
    required: true
  },
  Score: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Entry", entrySchema);
