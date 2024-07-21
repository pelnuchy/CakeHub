import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema(
  {
    cakeID: { type: String, required: true },
    cakeName: { type: String, required: true },
    size: {
      type: Number,
      required: [true, 'must be one of the allowed values and is required'],
      enum: [10, 16, 24]
    },
    jamFilling: {
      type: String,
      required: [true, 'Must be one of the allowed values and is required']
    },
    price: { type: Number },
    img_url: { type: String },
    cakeType: {
      type: String,
      enum: ['gato', 'corn cream']
    },
    occasion: {
      type: String,
      enum: ['custom', 'birthday', 'christmas', 'anniversary']
    },
    description: { type: String }, // Note: Fixed typo from "desciption" to "description"
    recipe_id: { type: String },
    decor_id: { type: String },
    temp_grill: { type: Number },
    time_grill: { type: Number }
  },
  {
    timestamps: true
  }
); // Added timestamps as an example of additional schema options

const Cake = mongoose.model('cakes', cakeSchema);
export default Cake;