import mongoose from "mongoose";

const cakeSchema = new mongoose.Schema(
  {
    cakeID: { type: String, required: true },
    cakeName: { type: String, required: true },
    size: {
      type: Number,
      required: [false, 'must be one of the allowed values and is required'],
      enum: [10, 16, 24]
    },
    jamFilling: {
      type: String,
      required: [false, 'Must be one of the allowed values and is required']
    },
    price: { type: Number, required: false },
    img_url: { type: String, required: false },
    cakeType: {
      required: false,
      type: String,
      enum: ['gato', 'corn cream']
    },
    occasion: {
      required: false,
      type: String,
      enum: ['custom', 'birthday', 'christmas', 'anniversary']
    },
    description: { type: String, required: false }, // Note: Fixed typo from "desciption" to "description"
    recipe_id: { type: String, required: false },
    decor_id: { type: String, required: false },
    temp_grill: { type: Number, required: false },
    time_grill: { type: Number, required: false }
  },
  {
    timestamps: true
  }
); // Added timestamps as an example of additional schema options

const Cake = mongoose.model('cakes', cakeSchema);
export default Cake;