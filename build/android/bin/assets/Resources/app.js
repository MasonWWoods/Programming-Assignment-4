var win1 = Ti.UI.createWindow({
  backgroundImage:'backgroundimage.jpg',
  width:'100%',
  height:'100%'
});

var button1 = Titanium.UI.createButton({
   title: 'Info',
   top: '2%',
   width: '25%',
   height: '8%',
   right: '2%',
});
win1.add(button1);

button1.addEventListener('click', function()
{
    
var win2 = Ti.UI.createWindow({
        backgroundImage:'backgroundimage.jpg',
        width:'100%',
        height:'100%'
});
 
 var label5 = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:25 },
  text: 'About Me',
  textAlign: 'center',
  top: '10%',
  width: '100%', height: '10%'
});
win2.add(label5);  

var textArea = Ti.UI.createTextArea({
  backgroundColor:'black',
  borderWidth: 4,
  borderColor: 'black',
  color: 'white',
  font: {fontSize:16, fontWeight:'bold'},
  textAlign: 'left',
  value: 'Volunteer Work:\n•Boise Art Museum (Summer2012)\n•JDRF walk to cure Diabetes (2010-2013)\n_\nTechnology:\n•	Microsoft (Word, Excel, PowerPoint, Windows7, Windows 8)\n•	Cell phone and PC Hardware/Software\n_\nSkills and Training:\n•Applicable Classes: Accounting, Finance, Information management\n•Attention to detail\n•	Strong non-routine cognitive skills',
  top: '20%',
  width: '100%', height : '80%',
  editable:false
});
win2.add(textArea);

var button2 = Ti.UI.createButton({
        title:'Home',
        top: '2%',
        width: '25%',
        height: '8%',
        left: '2%',
});
 
win2.add(button2);
    
button2.addEventListener('click',function()
    {
        win2.close();
});
        win2.open();
});
 
var label1 = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:25 },
  text: 'Zane Howland\n Student\n Information Systems',
  textAlign: 'center',
  top: '15%',
  width: 300, height: 90
});
win1.add(label1);

var label2 = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:15 },
  text: 'Phone: (208)-908-1597',
  textAlign: 'left',
  top: '50%',
  width: 300, height: 70
});
win1.add(label2);

var label3 = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:15 },
  text: 'Email: howl3611@vandals.uidaho.edu',
  textAlign: 'left',
  top: '55%',
  width: 300, height: 70
});
win1.add(label3);

var label4 = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize:18 },
  text: 'Contact:',
  textAlign: 'left',
  top: '40%',
  width: 300, height: 70
});
win1.add(label4);


var image = Ti.UI.createImageView({
  image:'20150329004355!University_of_Idaho_-_Wordmark.png',
  top:'2%',
  width:'68%',
  height:'9%',
  left:'2%'
});
win1.add(image);

var fb = require('facebook');
fb.appid = '701180216659490';
fb.permissions = ['publish_stream']; // Permissions your app needs
fb.forceDialogAuth = true;
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged In');
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Canceled");
    }
});
fb.authorize();

win1.add(fb.createLoginButton({
    top : '80%',
    style : fb.BUTTON_STYLE_WIDE
}));









win1.open();
