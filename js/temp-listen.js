window.onload=publish;
var subKey="sub-c-383332aa-dcc0-11e6-b6b1-02ee2ddab7fe";
var pubKey="pub-c-73cca4b9-e219-4f94-90fc-02dd8f018045";



function publish(){
    var pubnub = new PubNub({
        subscribeKey: subKey,
        publishKey: pubKey,
        ssl: false
});
console.log("initialized client");
    
    pubnub.subscribe({
    channels: ['Temp'],
    withPresence: false // also subscribe to presence instances.
})

pubnub.addListener({
    
    message: function(m) {
        // handle message
        var channelName = m.channel; // The channel for which the message belongs
        var channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
        var pubTT = m.timetoken; // Publish timetoken
        var msg = m.message; // The Payload
        console.log(msg["Temp"]); 
        console.log(msg["Hum"]); 
        
        //var temp=document.getElementById("temp");
        //temp.innerHTML("sample");
    }
})
}