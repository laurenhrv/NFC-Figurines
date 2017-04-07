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
                profother.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(50, 175);
                profstats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(175, 262);
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(262, 648);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(648, 652);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(652, 755);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(755, 756);
                document.getElementById("mario").src = "img/mario-on.png";
            } else if (nfc.bytesToString(ndefMessage[0].payload).substring(0, 3) == "Tim"){
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
                profother.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(50, 175);
                profstats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(175, 262);
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(262, 648);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(648, 652);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(652, 755);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(755, 756);
                document.getElementById("mario").src = "img/mario-on.png";
            } else if (nfc.bytesToString(ndefMessage[0].payload).substring(0, 3) == "Ser"){
                title.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(0, 11);
                labels.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(11, 30);
                stat1.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(30, 32);
                stat2.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(32, 34);
                stat3.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(34, 36);
                stat4.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(36, 38);
                stat5.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(38, 40);
                stat6.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(40, 42);
                stat7.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(42, 44);
                stat8.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(44, 46);
                stat9.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(46, 48);
                stat10.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(48, 50);
                stat11.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(50, 52);
                stat12.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(52, 54);
                profother.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(54, 180);
                profstats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(180, 267);
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(267, 653);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(653, 657);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(657, 760);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(760, 761);
                document.getElementById("mario").src = "img/mario-on.png";
            } else if (nfc.bytesToString(ndefMessage[0].payload).substring(0, 3) == "Bre"){
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
                profother.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(50, 175);
                profstats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(175, 262);
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(262, 648);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(648, 652);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(652, 755);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(755, 756);
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
