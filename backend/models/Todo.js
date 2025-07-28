const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Todo title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  dueDate: {
    type: Date,
    required: [true, 'Due date is required']
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
    default: null
  },
  tags: [{
    type: String,
    trim: true
  }],
  category: {
    type: String,
    trim: true,
    default: 'General'
  },
  recurring: {
    type: {
      type: String,
      enum: ['none', 'daily', 'weekly', 'monthly', 'yearly'],
      default: 'none'
    },
    interval: {
      type: Number,
      default: 1
    }
  }
}, {
  timestamps: true
});

// Index for efficient queries
todoSchema.index({ user: 1, dueDate: 1 });
todoSchema.index({ user: 1, completed: 1 });
todoSchema.index({ user: 1, priority: 1 });

// Virtual for formatted due date
todoSchema.virtual('dueDateFormatted').get(function() {
  return this.dueDate.toISOString().split('T')[0];
});

// Method to mark as completed
todoSchema.methods.markCompleted = function() {
  this.completed = true;
  this.completedAt = new Date();
  return this.save();
};

// Method to mark as incomplete
todoSchema.methods.markIncomplete = function() {
  this.completed = false;
  this.completedAt = null;
  return this.save();
};

// Static method to get todos by user with filters
todoSchema.statics.getUserTodos = function(userId, filters = {}) {
  const query = { user: userId };
  
  if (filters.completed !== undefined) {
    query.completed = filters.completed;
  }
  
  if (filters.priority) {
    query.priority = filters.priority;
  }
  
  if (filters.category) {
    query.category = filters.category;
  }
  
  if (filters.startDate && filters.endDate) {
    query.dueDate = {
      $gte: new Date(filters.startDate),
      $lte: new Date(filters.endDate)
    };
  }
  
  return this.find(query)
    .sort({ priority: 1, dueDate: 1, createdAt: -1 })
    .populate('user', 'name email');
};

module.exports = mongoose.model('Todo', todoSchema); 