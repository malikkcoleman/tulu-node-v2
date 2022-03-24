const mongoose = require('mongoose');
const supremeautovehicleimageschema = new mongoose.Schema(
  {
    target_id: {
      type: String,
      required: true
    },
    vin: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    is_deleted: {
      type: Boolean,
      required: true,
      default: false
    },
    is_display_photo: {
      type: Boolean,
      required: true,
      default: false
    }
  }
);


const supremeautoimageschemas = mongoose.model('photos', supremeautovehicleimageschema);

module.exports = supremeautoimageschemas;