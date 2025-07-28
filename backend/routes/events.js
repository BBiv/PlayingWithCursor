const express = require('express');
const { body, validationResult } = require('express-validator');
const Event = require('../models/Event');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/events
// @desc    Get all events for current user
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const { startDate, endDate, category } = req.query;
    
    const filters = {};
    if (startDate && endDate) {
      filters.startDate = startDate;
      filters.endDate = endDate;
    }
    if (category) filters.category = category;

    const events = await Event.getUserEvents(req.user._id, filters);
    
    res.json({
      message: 'Events retrieved successfully',
      count: events.length,
      events
    });
  } catch (error) {
    console.error('Get events error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to get events'
    });
  }
});

// @route   POST /api/events
// @desc    Create a new event
// @access  Private
router.post('/', protect, [
  body('title')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Title must be between 1 and 200 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
  body('startDate')
    .isISO8601()
    .withMessage('Start date must be a valid date'),
  body('endDate')
    .isISO8601()
    .withMessage('End date must be a valid date'),
  body('allDay')
    .optional()
    .isBoolean()
    .withMessage('All day must be a boolean value'),
  body('location')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Location cannot exceed 200 characters'),
  body('color')
    .optional()
    .matches(/^#[0-9A-F]{6}$/i)
    .withMessage('Color must be a valid hex color'),
  body('category')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Category cannot exceed 50 characters'),
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  body('tags.*')
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage('Each tag cannot exceed 20 characters')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { 
      title, 
      description, 
      startDate, 
      endDate, 
      allDay, 
      location, 
      color, 
      category, 
      tags, 
      recurring,
      reminders,
      attendees 
    } = req.body;

    // Validate that end date is after start date
    if (new Date(endDate) <= new Date(startDate)) {
      return res.status(400).json({
        message: 'End date must be after start date',
        error: 'Invalid date range'
      });
    }

    const event = await Event.create({
      user: req.user._id,
      title,
      description,
      startDate,
      endDate,
      allDay: allDay || false,
      location,
      color: color || '#57E1FF',
      category: category || 'General',
      tags: tags || [],
      recurring: recurring || { type: 'none', interval: 1 },
      reminders: reminders || [],
      attendees: attendees || []
    });

    res.status(201).json({
      message: 'Event created successfully',
      event
    });
  } catch (error) {
    console.error('Create event error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to create event'
    });
  }
});

// @route   GET /api/events/:id
// @desc    Get a specific event
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const event = await Event.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!event) {
      return res.status(404).json({
        message: 'Event not found',
        error: 'Event does not exist'
      });
    }

    res.json({
      message: 'Event retrieved successfully',
      event
    });
  } catch (error) {
    console.error('Get event error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to get event'
    });
  }
});

// @route   PUT /api/events/:id
// @desc    Update an event
// @access  Private
router.put('/:id', protect, [
  body('title')
    .optional()
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Title must be between 1 and 200 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
  body('startDate')
    .optional()
    .isISO8601()
    .withMessage('Start date must be a valid date'),
  body('endDate')
    .optional()
    .isISO8601()
    .withMessage('End date must be a valid date'),
  body('allDay')
    .optional()
    .isBoolean()
    .withMessage('All day must be a boolean value'),
  body('location')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Location cannot exceed 200 characters'),
  body('color')
    .optional()
    .matches(/^#[0-9A-F]{6}$/i)
    .withMessage('Color must be a valid hex color'),
  body('category')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Category cannot exceed 50 characters')
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const event = await Event.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!event) {
      return res.status(404).json({
        message: 'Event not found',
        error: 'Event does not exist'
      });
    }

    // Validate date range if both dates are being updated
    if (req.body.startDate && req.body.endDate) {
      if (new Date(req.body.endDate) <= new Date(req.body.startDate)) {
        return res.status(400).json({
          message: 'End date must be after start date',
          error: 'Invalid date range'
        });
      }
    }

    // Update fields
    Object.keys(req.body).forEach(key => {
      if (key !== 'user' && key !== '_id') {
        event[key] = req.body[key];
      }
    });

    await event.save();

    res.json({
      message: 'Event updated successfully',
      event
    });
  } catch (error) {
    console.error('Update event error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to update event'
    });
  }
});

// @route   DELETE /api/events/:id
// @desc    Delete an event
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!event) {
      return res.status(404).json({
        message: 'Event not found',
        error: 'Event does not exist'
      });
    }

    res.json({
      message: 'Event deleted successfully',
      event
    });
  } catch (error) {
    console.error('Delete event error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to delete event'
    });
  }
});

// @route   GET /api/events/date/:date
// @desc    Get events for a specific date
// @access  Private
router.get('/date/:date', protect, async (req, res) => {
  try {
    const { date } = req.params;
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const events = await Event.find({
      user: req.user._id,
      $or: [
        { startDate: { $gte: startOfDay, $lte: endOfDay } },
        { endDate: { $gte: startOfDay, $lte: endOfDay } },
        { startDate: { $lte: startOfDay }, endDate: { $gte: endOfDay } }
      ]
    }).sort({ startDate: 1 });

    res.json({
      message: 'Events retrieved successfully',
      date,
      count: events.length,
      events
    });
  } catch (error) {
    console.error('Get events by date error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to get events for date'
    });
  }
});

module.exports = router; 