function sendMail() {

  //getting values from input fields

  var name=Form.name.value;

  var Subject=Form.subject.value;

  var sender=Form.sender.value;

  var content=Form.content.value;
 var receiver= "brycendzi@gmail.com"
 
  //Sending email

  Email.send({

  Host: "smtp.gmail.com",

  Username: sender,

  To: receiver,

  From: sender,

  Subject: "FROM PORTFOLIO",

  Body: content,

  }).then(function (message) {

  alert("Email sent successfully")

  });

}