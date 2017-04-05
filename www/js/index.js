var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        nfc.addNdefListener (
            function (nfcEvent) {
                var tag = nfcEvent.tag,
                ndefMessage = tag.ndefMessage;

                // alert(JSON.stringify(ndefMessage));

            // if (savePage == false) {
                a = nfc.bytesToString(ndefMessage[0].payload).substring(0, 2);
                b1 = nfc.bytesToString(ndefMessage[0].payload).substring(2, 4);
                b2 = nfc.bytesToString(ndefMessage[0].payload).substring(4, 6);
                b3 = nfc.bytesToString(ndefMessage[0].payload).substring(6, 8);
                b4 = nfc.bytesToString(ndefMessage[0].payload).substring(8, 10);
                b5 = nfc.bytesToString(ndefMessage[0].payload).substring(10, 12);
                b6 = nfc.bytesToString(ndefMessage[0].payload).substring(12, 14);
                b7 = nfc.bytesToString(ndefMessage[0].payload).substring(14, 16);
                b8 = nfc.bytesToString(ndefMessage[0].payload).substring(16, 18);
                b9 = nfc.bytesToString(ndefMessage[0].payload).substring(18, 20);
                b10 = nfc.bytesToString(ndefMessage[0].payload).substring(20, 22);
                b11 = nfc.bytesToString(ndefMessage[0].payload).substring(22, 24);
                b12 = nfc.bytesToString(ndefMessage[0].payload).substring(24, 26);
                c = nfc.bytesToString(ndefMessage[0].payload).substring(26, 28);
                d = nfc.bytesToString(ndefMessage[0].payload).substring(28, 30);
                e = nfc.bytesToString(ndefMessage[0].payload).substring(30, 32);
                f = nfc.bytesToString(ndefMessage[0].payload).substring(32, 34);
                g = nfc.bytesToString(ndefMessage[0].payload).substring(34, 36);
                title.innerHTML = a;
                stat1.innerHTML = b1;
                stat2.innerHTML = b2;
                stat3.innerHTML = b3;
                stat4.innerHTML = b4;
                stat5.innerHTML = b5;
                stat6.innerHTML = b6;
                stat7.innerHTML = b7;
                stat8.innerHTML = b8;
                stat9.innerHTML = b9;
                stat10.innerHTML = b10;
                stat11.innerHTML = b11;
                stat12.innerHTML = b12;
                bio.innerHTML = c;
                spells.innerHTML = d;
                attacks.innerHTML = e;
                feats.innerHTML = f;
                equip.innerHTML = g;
            // } else if (savePage == true) {
            //     figurine.innerHTML = x;
            //     savePage = false;
            // }
            document.getElementById("mario").src = "img/mario-on.png";
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
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
