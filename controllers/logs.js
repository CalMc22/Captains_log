const express = require('express');
const router = express.Router();
const Log = require('../models/logs');

// Index Route
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find();
    res.render('Index', { logs });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// New Route
router.get('/new', (req, res) => {
  res.render('New');
});

// Create Route
router.post('/', async (req, res) => {
  try {
    // Handle checkbox value
    req.body.shipIsBroken = req.body.shipIsBroken === 'on';

    const newLog = await Log.create(req.body);
    res.redirect(`/logs/${newLog._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Show Route
router.get('/:id', async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render('Show', { log });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Edit Route
router.get('/:id/edit', async (req, res) => {
    try {
      const log = await Log.findById(req.params.id);
      res.render('Edit', { log });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update Route
  router.put('/:id', async (req, res) => {
    try {
      // Handle checkbox value
      req.body.shipIsBroken = req.body.shipIsBroken === 'on';
  
      await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.redirect(`/logs/${req.params.id}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete Route
  router.delete('/:id', async (req, res) => {
    try {
      await Log.findByIdAndDelete(req.params.id);
      res.redirect('/logs');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  module.exports = router;

module.exports = router;