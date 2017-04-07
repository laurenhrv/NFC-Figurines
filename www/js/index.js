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
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(262, 639);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(639, 643);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(643, 744);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(744, 745);
                document.getElementById("mario").src = "img/fig-apa.png";
            } else if (nfc.bytesToString(ndefMessage[0].payload).substring(0, 3) == "Tim"){
                title.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(0, 3);
                labels.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(3, 25);
                stat1.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(25, 26);
                stat2.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(26, 27);
                stat3.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(27, 29);
                stat4.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(29, 31);
                stat5.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(31, 33);
                stat6.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(33, 35);
                stat7.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(35, 37);
                stat8.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(37, 39);
                stat9.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(39, 41);
                stat10.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(41, 43);
                stat11.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(43, 45);
                stat12.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(45, 47);
                profother.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(47, 192);
                profstats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(192, 257);
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(257, 562);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(562, 751);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(751, 833);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(833, 834);
                document.getElementById("mario").src = "img/fig-tim.png";
            } else if (nfc.bytesToString(ndefMessage[0].payload).substring(0, 3) == "Ser"){
                title.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(0, 11);
                labels.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(11, 33);
                stat1.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(33, 35);
                stat2.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(35, 37);
                stat3.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(37, 39);
                stat4.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(39, 41);
                stat5.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(41, 43);
                stat6.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(43, 45);
                stat7.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(45, 47);
                stat8.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(47, 49);
                stat9.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(49, 51);
                stat10.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(51, 53);
                stat11.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(53, 55);
                stat12.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(55, 56);
                profother.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(56, 153);
                profstats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(153, 235);
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(235, 415);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(415, 493);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(493, 597);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(597, 598);
                document.getElementById("mario").src = "img/fig-ser.png";
            } else if (nfc.bytesToString(ndefMessage[0].payload).substring(0, 3) == "Bre"){
                title.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(0, 24);
                labels.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(24, 48);
                stat1.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(48, 50);
                stat2.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(50, 52);
                stat3.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(52, 54);
                stat4.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(54, 55);
                stat5.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(55, 56);
                stat6.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(56, 58);
                stat7.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(58, 60);
                stat8.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(60, 61);
                stat9.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(61, 63);
                stat10.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(63, 65);
                stat11.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(65, 67);
                stat12.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(67, 68);
                profother.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(68, 167);
                profstats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(167, 221);
                bio.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(221, 606);
                spells.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(606, 733);
                feats.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(733, 813);
                number.innerHTML = nfc.bytesToString(ndefMessage[0].payload).substring(813, 814);
                document.getElementById("mario").src = "img/fig-bre.png";
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
