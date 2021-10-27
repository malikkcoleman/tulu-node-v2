const express = require("express");
const flash = require("connect-flash");
const router = express.Router();
//const { ensureAuthenticated } = require("../config/auth");
const https = require("https");
const querystring = require("query-string");
const bodyParser = require("body-parser");
const ROLE = require("../roles");
const { ensureAuthenticated, authRole } = require("../config/auth");
const middlewares = [bodyParser.urlencoded({ extended: true })];
const Message = require("../models/messageschema");
const Thread = require("../models/messagethreadschema");
const { decode } = require("punycode");
const nodemailer = require("nodemailer");



router.post("/AddMessage", (req, res) => {
  const { name,email, SubjectText, BodyText } = req.body;
  console.log(req.body);

  const newMessage = new Message({
    name,email, SubjectText, BodyText
  });

  console.log(newMessage);
  
  newMessage.save()
  .then((message) => {
    console.log(message)
    res.redirect("/message")
  })
  .catch((err) => console.log(err));
});


router.post("/send", (req, res) => {
  const { exist,message,senderId,targetId,recipientId} = req.body;
  console.log(req.body);
  console.log(senderId);
  console.log(recipientId);

  if(exist=="0"){
    var participants = [
      senderId,recipientId
     ]
   
     const newThread = new Thread({
       participants
     });

     newThread.save()
    .then((thread) => {
      console.log('New Thread Created.');
      console.log(thread);
    
      

      const newMessage = new Message({
        targetId,senderId, message
      });
    
      newMessage.targetId = thread._id;

      console.log(newMessage);
      
      newMessage.save()
      .then((message) => {
        console.log(message)
        res.redirect("/messenger/?recipientId="+recipientId)
      })
      .catch((err) => console.log(err));

    
    })
    .catch((err) => console.log(err));
  }else{
    const newMessage = new Message({
      targetId,senderId, message
    });

    console.log(newMessage);
    
    newMessage.save()
    .then((message) => {
      console.log(message)
      res.redirect("/messenger/?recipientId="+recipientId)
    })
    .catch((err) => console.log(err));

  }
});


router.post("/message", (req, res) => {
  const { recieverId,senderId} = req.body;
  console.log(req.body);

  var participants = [
   recieverId,senderId 
  ]

  const newThread = new Thread({
    participants
  });

  console.log(newThread);
  
  newThread.save()
  .then((thread) => {
    console.log(thread)
    res.redirect("message/"+thread._id, {
      user: req.user,
      threadId:req.params.threadId,
    })
  })
  .catch((err) => console.log(err));
});









router.get("/thread", (req, res) =>
  res.render("thread", {
    user: req.user
  })
);


module.exports = router;
