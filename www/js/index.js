/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

//////////////////////////////



var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        nfc.addNdefListener (
            function (nfcEvent) {
                var tag = nfcEvent.tag,
                ndefMessage = tag.ndefMessage;

                // alert(JSON.stringify(ndefMessage));

            // if (savePage == false) {
                a = nfc.bytesToString(ndefMessage[0].payload).substring(0, 4);
                b1 = nfc.bytesToString(ndefMessage[0].payload).substring(5, 9);
                b2 = nfc.bytesToString(ndefMessage[0].payload).substring(5, 9);
                b3 = nfc.bytesToString(ndefMessage[0].payload).substring(5, 9);
                c = nfc.bytesToString(ndefMessage[0].payload).substring(10, 14);
                title.innerHTML = a;
                stat1.innerHTML = b1;
                stat2.innerHTML = b2;
                stat3.innerHTML = b3;
                bio.innerHTML = c;
            // } else if (savePage == true) {
            //     figurine.innerHTML = x;
            //     savePage = false;
            // }
            
                //alert(nfc.bytesToString(ndefMessage[0].payload).substring(0));
            }, 
            function () { 
                alert("Waiting for NDEF tag");
            },
            function (error) { 
                alert("Error adding NDEF listener " + JSON.stringify(error));
            }
        );
},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
