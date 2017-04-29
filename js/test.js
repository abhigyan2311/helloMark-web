var subKey="sub-c-383332aa-dcc0-11e6-b6b1-02ee2ddab7fe";
var pubKey="pub-c-73cca4b9-e219-4f94-90fc-02dd8f018045";


function getBulb(){
    var checkedValueBulb = $('.checkboxBulb:checked').val();
    if(checkedValueBulb){
        //alert(checkedValueBulb);
        var pubnub = new PubNub({
        subscribeKey: subKey,
        publishKey: pubKey,
        ssl: false
});
console.log("initialized the client");

pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
})
console.log("channel subsribed");
        
        
        pubnub.publish(
            {
                message: {
                place: 'bedroom',
                device:'light',
                state:'on'
                },
                channel: 'switch',
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {
                    "cool": "meta"
                } // publish extra meta with the request
            },
            function (status, response) {
        // handle status, response
            }
        );
        console.log("message published");
    }
    else{
        alert(checkedValueBulb);
        
        var pubnub = new PubNub({
        subscribeKey: subKey,
        publishKey: pubKey,
        ssl: false
});
console.log("initialized the client");

pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
})
console.log("channel subsribed");
        
        var pubnub = new PubNub({
        subscribeKey: subKey,
        publishKey: pubKey,
        ssl: false
        });
        
        console.log("initialized the client");
        
        pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
        })
        
        console.log("channel subsribed");
        
        pubnub.publish(
            {
                message: {
                place: 'bedroom',
                device:'light',
                state:'off'
                },
                channel: 'switch',
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {
                    "cool": "meta"
                } // publish extra meta with the request
            },
            function (status, response) {
        // handle status, response
            }
        );
        console.log("message published");
    }
}
    
function getFan(){
    var checkedValueFan = $('.checkboxFan:checked').val();
    if(checkedValueFan){
        alert(checkedValueFan);
        pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
        })
        
        console.log("channel subsribed");
        
        pubnub.publish(
            {
                message: {
                place: 'bedroom',
                device:'fan',
                state:'on'
                },
                channel: 'switch',
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {
                    "cool": "meta"
                } // publish extra meta with the request
            },
            function (status, response) {
        // handle status, response
            }
        );
        console.log("message published");
        
        
    }
    else{
        alert(checkedValueBulb);
        
        var pubnub = new PubNub({
        subscribeKey: subKey,
        publishKey: pubKey,
        ssl: false
        });
        
        console.log("initialized the client");
        
        pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
        })
        
        console.log("channel subsribed");
        
        pubnub.publish(
            {
                message: {
                place: 'bedroom',
                device:'fan',
                state:'off'
                },
                channel: 'switch',
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {
                    "cool": "meta"
                } // publish extra meta with the request
            },
            function (status, response) {
        // handle status, response
            }
        );
        console.log("message published");
    }
}
    
function getTv(){
    var checkedValueTv = $('.checkboxTv:checked').val();
    if(checkedValueTv){
        alert(checkedValueTv);
        
        pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
        })
        
        console.log("channel subsribed");
        
        pubnub.publish(
            {
                message: {
                place: 'bedroom',
                device:'television',
                state:'on'
                },
                channel: 'switch',
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {
                    "cool": "meta"
                } // publish extra meta with the request
            },
            function (status, response) {
        // handle status, response
            }
        );
        console.log("message published");
    }
    else{
        alert(checkedValueBulb);
        
        var pubnub = new PubNub({
        subscribeKey: subKey,
        publishKey: pubKey,
        ssl: false
        });
        
        console.log("initialized the client");
        
        pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
        })
        
        console.log("channel subsribed");
        
        pubnub.publish(
            {
                message: {
                place: 'bedroom',
                device:'television',
                state:'off'
                },
                channel: 'switch',
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {
                    "cool": "meta"
                } // publish extra meta with the request
            },
            function (status, response) {
        // handle status, response
            }
        );
        console.log("message published");
    }
}
    
function getPlug(){
    var checkedValuePlug = $('.checkboxPlug:checked').val();
    if(checkedValuePlug){
        alert(checkedValuePlug);
        
        pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
        })
        
        console.log("channel subsribed");
        
        pubnub.publish(
            {
                message: {
                place: 'bedroom',
                device:'plug',
                state:'on'
                },
                channel: 'switch',
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {
                    "cool": "meta"
                } // publish extra meta with the request
            },
            function (status, response) {
        // handle status, response
            }
        );
        console.log("message published");
    }
    else{
        alert(checkedValueBulb);
        
        var pubnub = new PubNub({
        subscribeKey: subKey,
        publishKey: pubKey,
        ssl: false
        });
        
        console.log("initialized the client");
        
        pubnub.subscribe({
        channels: ['switch'],
        withPresence: true // also subscribe to presence instances.
        })
        
        console.log("channel subsribed");
        
        pubnub.publish(
            {
                message: {
                place: 'bedroom',
                device:'plug',
                state:'off'
                },
                channel: 'switch',
                sendByPost: false, // true to send via post
                storeInHistory: false, //override default storage options
                meta: {
                    "cool": "meta"
                } // publish extra meta with the request
            },
            function (status, response) {
        // handle status, response
            }
        );
        console.log("message published");
    }
}