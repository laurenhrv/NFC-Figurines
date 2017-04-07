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

            if (nfc.bytesToString(ndefMessage[0].payload).substring(0, 3) == "Apa") {
                title.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(0, 6);
                labels.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(6, 27);
                stat1.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(27, 29);
                stat2.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(29, 31);
                stat3.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(31, 33);
                stat4.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(33, 35);
                stat5.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(35, 36);
                stat6.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(36, 38);
                stat7.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(38, 40);
                stat8.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(40, 42);
                stat9.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(42, 44);
                stat10.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(44, 46);
                stat11.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(46, 48);
                stat12.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(48, 50);
                profother.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(50, 177);
                profstats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(177, 266);
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(266, 269);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(269, 273);
                attacks.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(273, 339);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(339, 442);
                equip.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(442, 614);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(614, 615);
                document.getElementById("mario").src = "img/mario-on.png";
            } else if (nfc.bytesToString(ndefMessage[0].payload).substring(0, 3) == "Tim"){
                title.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(0, 2);
                labels.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(2, 4);
                stat1.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(4, 6);
                stat2.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(6, 8);
                stat3.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(8, 10);
                stat4.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(10, 12);
                stat5.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(12, 14);
                stat6.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(14, 16);
                stat7.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(18, 20);
                stat8.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(20, 22);
                stat9.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(22, 24);
                stat10.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(24, 26);
                stat11.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(26, 28);
                stat12.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(28, 30);
                profother.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(36, 39);
                profstats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(36, 39);
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(16, 18);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(30, 32);
                attacks.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(32, 34);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(34, 36);
                equip.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(36, 38);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(36, 39);
                document.getElementById("mario").src = "img/mario-on.png";
            } else {
                title.innerHTML = "error"
            }

            }, 
            function () { 
                alert("Welcome to the D&D Figurines App! Please scan your NFC-compatible D&D Figurine to get started.");
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
