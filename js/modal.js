var subKey="sub-c-383332aa-dcc0-11e6-b6b1-02ee2ddab7fe";
var pubKey="pub-c-73cca4b9-e219-4f94-90fc-02dd8f018045";

var pubnub = new PubNub({
        subscribeKey: subKey,
        publishKey: pubKey,
        ssl: false
    });
pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
    });

function getBulb(){
    var checkedValueBulb = $('.checkboxBulb:checked').val();
    if(checkedValueBulb){
        publishAction('bedroom','light','on');
    }else{    
        publishAction('bedroom','light','off');
    }
}
    
function getFan(){
    var checkedValueFan = $('.checkboxFan:checked').val();
    if(checkedValueFan){
        publishAction('bedroom','fan','on');
    }
    else{
        publishAction('bedroom','fan','off');
    }
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