const express = require('express');
const { body, validationResult } = require('express-validator');
const Todo = require('../models/Todo');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/todos
// @desc    Get all todos for current user
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const { completed, priority, category, startDate, endDate } = req.query;
    
    const filters = {};
    if (completed !== undefined) filters.completed = completed === 'true';
    if (priority) filters.priority = priority;
    if (category) filters.category = category;
    if (startDate && endDate) {
      filters.startDate = startDate;
      filters.endDate = endDate;
    }

    const todos = await Todo.getUserTodos(req.user._id, filters);
    
    res.json({
      message: 'Todos retrieved successfully',
      count: todos.length,
      todos
    });
  } catch (error) {
    console.error('Get todos error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to get todos'
    });
  }
});

// @route   POST /api/todos
// @desc    Create a new todo
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
  body('dueDate')
    .isISO8601()
    .withMessage('Due date must be a valid date'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be low, medium, or high'),
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

    const { title, description, dueDate, priority, category, tags, recurring } = req.body;

    const todo = await Todo.create({
      user: req.user._id,
      title,
      description,
      dueDate,
      priority: priority || 'medium',
      category: category || 'General',
      tags: tags || [],
      recurring: recurring || { type: 'none', interval: 1 }
    });

    res.status(201).json({
      message: 'Todo created successfully',
      todo
    });
  } catch (error) {
    console.error('Create todo error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to create todo'
    });
  }
});

// @route   GET /api/todos/:id
// @desc    Get a specific todo
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found',
        error: 'Todo does not exist'
      });
    }

    res.json({
      message: 'Todo retrieved successfully',
      todo
    });
  } catch (error) {
    console.error('Get todo error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to get todo'
    });
  }
});

// @route   PUT /api/todos/:id
// @desc    Update a todo
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
  body('dueDate')
    .optional()
    .isISO8601()
    .withMessage('Due date must be a valid date'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high'])
    .withMessage('Priority must be low, medium, or high'),
  body('category')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Category cannot exceed 50 characters'),
  body('completed')
    .optional()
    .isBoolean()
    .withMessage('Completed must be a boolean value')
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

    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found',
        error: 'Todo does not exist'
      });
    }

    // Update fields
    Object.keys(req.body).forEach(key => {
      if (key !== 'user' && key !== '_id') {
        todo[key] = req.body[key];
      }
    });

    await todo.save();

    res.json({
      message: 'Todo updated successfully',
      todo
    });
  } catch (error) {
    console.error('Update todo error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to update todo'
    });
  }
});

// @route   DELETE /api/todos/:id
// @desc    Delete a todo
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found',
        error: 'Todo does not exist'
      });
    }

    res.json({
      message: 'Todo deleted successfully',
      todo
    });
  } catch (error) {
    console.error('Delete todo error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to delete todo'
    });
  }
});

// @route   PATCH /api/todos/:id/toggle
// @desc    Toggle todo completion status
// @access  Private
router.patch('/:id/toggle', protect, async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found',
        error: 'Todo does not exist'
      });
    }

    if (todo.completed) {
      await todo.markIncomplete();
    } else {
      await todo.markCompleted();
    }

    res.json({
      message: `Todo ${todo.completed ? 'completed' : 'marked incomplete'} successfully`,
      todo
    });
  } catch (error) {
    console.error('Toggle todo error:', error);
    res.status(500).json({
      message: 'Server error',
      error: 'Failed to toggle todo'
    });
  }
});

module.exports = router; 