import mongoose from "mongoose";
import mongoosepaginate from "mongoose-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    duration: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongoosepaginate);
//what is the use of this uper line: mongoosepaginate is a plugin that adds a paginate method to the Model. This method is used to paginate the documents in the collection. It is used to limit the number of documents returned by the query and to skip a specified number of documents.
//what is the meaning of paginate in this paragraph: Paginate is a method that is used to limit the number of documents returned by the query and to skip a specified number of documents.
export const Video = mongoose.model("Video", videoSchema);
