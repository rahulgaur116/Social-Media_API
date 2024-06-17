const { Schema, model } = require("mongoose");
const thoughtSchema = require("./thought");

const userSchema = new Schema({
    username: { 
        type: String, 
        unique: [true, "That username is already in use!"], 
        required: [true,"Username should not be empty"], 
        trim: true 
    },

    email: {
        type: String,
        unique: [true, "That email is already in use!"], 
        required:[true,"Email should not be empty"], 
        match: [
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please enter a valid email address.",
        ],
      },

    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "thought",
    },],

    friends: [{
        type: Schema.Types.ObjectId,
        ref: "user",
    },],
    },
    {
      toJSON: {
        virtuals: true
      },
      id:false,
    }
  );
  const user = model("user", userSchema);

  userSchema.virtual("friendCount").get(function(){
    return this.friends.length;
  });

  module.exports = user;
  