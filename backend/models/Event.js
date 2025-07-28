const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required']
  },
  allDay: {
    type: Boolean,
    default: false
  },
  location: {
    type: String,
    trim: true
  },
  color: {
    type: String,
    default: '#57E1FF',
    validate: {
      validator: function(v) {
        return /^#[0-9A-F]{6}$/i.test(v);
      },
      message: 'Color must be a valid hex color'
    }
  },
  category: {
    type: String,
    trim: true,
    default: 'General'
  },
  tags: [{
    type: String,
    trim: true
  }],
  recurring: {
    type: {
      type: String,
      enum: ['none', 'daily', 'weekly', 'monthly', 'yearly'],
      default: 'none'
    },
    interval: {
      type: Number,
      default: 1
    },
    endDate: {
      type: Date,
      default: null
    }
  },
  reminders: [{
    type: {
      type: String,
      enum: ['email', 'push', 'sms'],
      default: 'push'
    },
    time: {
      type: Number, // minutes before event
      default: 15
    }
  }],
  attendees: [{
    email: {
      type: String,
      required: true
    },
    name: String,
    response: {
      type: String,
      enum: ['pending', 'accepted', 'declined'],
      default: 'pending'
    }
  }]
}, {
  timestamps: true
});

// Index for efficient queries
eventSchema.index({ user: 1, startDate: 1 });
eventSchema.index({ user: 1, endDate: 1 });
eventSchema.index({ user: 1, category: 1 });

// Virtual for event duration
eventSchema.virtual('duration').get(function() {
  return this.endDate.getTime() - this.startDate.getTime();
});

// Virtual for formatted dates
eventSchema.virtual('startDateFormatted').get(function() {
  return this.startDate.toISOString();
});

eventSchema.virtual('endDateFormatted').get(function() {
  return this.endDate.toISOString();
});

// Method to check if event is ongoing
eventSchema.methods.isOngoing = function() {
  const now = new Date();
  return now >= this.startDate && now <= this.endDate;
};

// Method to check if event is upcoming
eventSchema.methods.isUpcoming = function() {
  const now = new Date();
  return now < this.startDate;
};

// Static method to get events by user with filters
eventSchema.statics.getUserEvents = function(userId, filters = {}) {
  const query = { user: userId };
  
  if (filters.startDate && filters.endDate) {
    query.$or = [
      { startDate: { $gte: new Date(filters.startDate), $lte: new Date(filters.endDate) } },
      { endDate: { $gte: new Date(filters.startDate), $lte: new Date(filters.endDate) } },
      { startDate: { $lte: new Date(filters.startDate) }, endDate: { $gte: new Date(filters.endDate) } }
    ];
  }
  
  if (filters.category) {
    query.category = filters.category;
  }
  
  return this.find(query)
    .sort({ startDate: 1 })
    .populate('user', 'name email');
};

module.exports = mongoose.model('Event', eventSchema); 