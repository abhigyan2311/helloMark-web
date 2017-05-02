
var subKey="sub-c-383332aa-dcc0-11e6-b6b1-02ee2ddab7fe";
var pubKey="pub-c-73cca4b9-e219-4f94-90fc-02dd8f018045";
var lock=0;
var pubnub = new PubNub({
    subscribeKey: subKey,
    publishKey: pubKey,
    ssl: false
});
pubnub.subscribe({
    channels: ['Temp','switch','lockDown'],
    withPresence: false // also subscribe to presence instances.
});    
window.onload=tempListen;
function tempListen(){
    $("#lock").hide();
    pubnub.addListener({
        message: function(m) {
            var channelName = m.channel;
            var channelGroup = m.subscription;
            var pubTT = m.timetoken;
            var msg = m.message;
            if (channelName == "Temp"){
                document.getElementById("temp").innerText = msg["Temp"] + String.fromCharCode(176) + "C";
                document.getElementById("hum").innerText = msg["Hum"] + "%";
            }
        }
    })
}

function getBulb(){
    var checkedValueBulb = $('.checkboxBulb:checked').val();
    var fetchedRoom = document.getElementById("fetchRoomVar").innerHTML
    if(checkedValueBulb){
        publishAction(fetchedRoom,'light','on');
    }else{    
        publishAction(fetchedRoom,'light','off');
    }
}
    
function getFan(){
    var checkedValueFan = $('.checkboxFan:checked').val();
    var fetchedRoom = document.getElementById("fetchRoomVar").innerHTML
    if(checkedValueFan){
        publishAction(fetchedRoom,'fan','on');
    }
    else{
        publishAction(fetchedRoom,'fan','off');
    }
}

function getLock(){
    if(lock==0){
        lock=1;
        publishActionLock(lock)
        $("#unlock").hide();
        $("#lock").show();
        $("#lockdownLabel").text("Lock : On");
    }
    else{
        lock=0;
        publishActionLock(lock);
        $("#lock").hide();
        $("#unlock").show();
        $("#lockdownLabel").text("Lock : Off");
    }
    
}

function publishActionLock(flock){
    console.log(flock);
    pubnub.publish(
            {
                message: {
                "isLockEnabled":flock
                },
                channel: 'lockDown', 
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {}
            },
            function (status, response) {
                console.log(status);
            }
        );
}

function publishAction(froom,fdevice,fstate){
    pubnub.publish(
            {
                message: {
                place: froom,
                device: fdevice,
                state: fstate
                },
                channel: 'switch',
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {}
            },
            function (status, response) {
                console.log(status);
            }
        );
}

function setRoom(room){
    document.getElementById("fetchRoomVar").innerHTML = room;
}