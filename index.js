const chatServerDomain = "http://localhost:8080";

console.log("CHAT-DAILOG-BOX initated");

const chatPublicKey = document.currentScript.getAttribute('publicKey');
const chatChannelId = document.currentScript.getAttribute('channelId');

var chats = document.createElement("script");
chats.type = "text/javascript";
chats.src = chatServerDomain + "/socket.io/socket.io.js";
document.head.appendChild(chats)

const chatToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcml2YXRlS2V5IjoiZWFvZ1lpaFFvajRRTzB2biIsImNoYW5uZWxJZCI6Im81ZkNQMTY0OTU3NjU1MDgxNUFqU21VIiwiaWF0IjoxNjQ5NTc2NzI2fQ.pwv70INgaGRu4-Ol5jS_0cEQ9n1R7-KMTdqLnghi2gM";
const chatUserId = "asdf34523asdfawsfg"
const chatUserType = "userMessage";

const chatSocket = io(chatServerDomain, { query : { token : chatToken, userId : chatUserId, userType : chatUserType }, transports: ['websocket', 'polling', 'flashsocket'] });

chatSocket.on('connect',function() {
    console.log('Client has connected to the server!');
  });
  // Add a connect listener
  chatSocket.on('message',function(data) {
    console.log('Received a message from the server!',data);
  });
  // Add a disconnect listener
  chatSocket.on('disconnect',function() {
    console.log('The client has disconnected!');
  });

  chatSocket.on('error',function() {
    console.log('The client has disconnected!');
  });