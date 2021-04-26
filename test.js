        var txtInput = document.querySelector('#txtInput1').innerHTML;
        var voiceList = document.querySelector('#voiceList');
        var btnSpeak = document.querySelector('#btnSpeak1');
        var btnPause = document.querySelector('#btnPause1');
        var btnStop = document.querySelector('#btnStop1');
        var synth = window.speechSynthesis;
        var voices = [];


        PopulateVoices();
        if(speechSynthesis !== undefined){
            speechSynthesis.onvoiceschanged = PopulateVoices;
        }

        btnSpeak.addEventListener('click', ()=> {
            var toSpeak = new SpeechSynthesisUtterance(txtInput);
            var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
            voices.forEach((voice)=>{
                selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
                if(voice.name === selectedVoiceName){
                    toSpeak.voice = voice;
                }
            });
            synth.speak(toSpeak);

            if(synth.paused) { /* unpause/resume narration */
               synth.resume();
           }
        });

        btnPause.addEventListener('click', ()=> {
            if(synth.speaking && !synth.paused){ /* pause narration */
               synth.pause();
            }
        })

        btnStop.addEventListener('click',()=> {
         if(synth.speaking){ 
            synth.cancel();
        }
        })


        function PopulateVoices(){
            voices = synth.getVoices();
            var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
            voiceList.innerHTML = '';
            voices.forEach((voice)=>{
                var listItem = document.createElement('option');
                listItem.textContent = voice.name;
                listItem.setAttribute('data-lang', voice.lang);
                listItem.setAttribute('data-name', voice.name);
                voiceList.appendChild(listItem);
            });

            voiceList.selectedIndex = selectedIndex;
        }

        // =================================================================== 2 =================================================================== //
        var txtInput2 = document.querySelector('#txtInput2').innerHTML; //
        var btnSpeak2 = document.querySelector('#btnSpeak2');           //
        var btnPause2 = document.querySelector('#btnPause2');           //
        var btnStop2 = document.querySelector('#btnStop2');             //
        var synth2 = window.speechSynthesis;                            //


        btnSpeak2.addEventListener('click', ()=> {                      //
            var toSpeak = new SpeechSynthesisUtterance(txtInput2);
            var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
            voices.forEach((voice)=>{
                selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
                if(voice.name === selectedVoiceName){
                    toSpeak.voice = voice;
                }
            });
            synth2.speak(toSpeak);                                      //

            if(synth2.paused) { /* unpause/resume narration */          //
               synth2.resume();                                         //
           }
        });

        btnPause2.addEventListener('click', ()=> {                      //
         if(synth2.speaking && !synth2.paused){ /* pause narration */   //
            synth2.pause();                                             //
         }
      })

      btnStop2.addEventListener('click',()=> {                          //
         if(synth2.speaking){                                           //
            synth2.cancel();                                            //
     }
     })

     // =================================================================== 3 =================================================================== //
var txtInput3 = document.querySelector('#txtInput3').innerHTML; //
var btnSpeak3 = document.querySelector('#btnSpeak3');           //
var btnPause3 = document.querySelector('#btnPause3');           //
var btnStop3 = document.querySelector('#btnStop3');             //
var synth3 = window.speechSynthesis;                            //

btnSpeak3.addEventListener('click', ()=> {                      //
   var toSpeak = new SpeechSynthesisUtterance(txtInput3);
   var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
   voices.forEach((voice)=>{
   selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
   if(voice.name === selectedVoiceName){
      toSpeak.voice = voice;
   }
   });
   synth3.speak(toSpeak);                                      //

   if(synth3.paused) { /* unpause/resume narration */          //
      synth3.resume();                                         //
   }
});

   btnPause3.addEventListener('click', ()=> {                      //
   if(synth3.speaking && !synth3.paused){ /* pause narration */   //
      synth3.pause();                                             //
   }
})

btnStop3.addEventListener('click',()=> {                          //
   if(synth3.speaking){                                           //
      synth3.cancel();                                            //
   }
})


// =================================================================== 4 =================================================================== //
var txtInput4 = document.querySelector('#txtInput4').innerHTML; //
var btnSpeak4 = document.querySelector('#btnSpeak4');           //
var btnPause4 = document.querySelector('#btnPause4');           //
var btnStop4 = document.querySelector('#btnStop4');             //
var synth4 = window.speechSynthesis;                            //


btnSpeak4.addEventListener('click', ()=> {                      //
   var toSpeak = new SpeechSynthesisUtterance(txtInput4);
   var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
   voices.forEach((voice)=>{
         selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
         if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
         }
   });
   synth4.speak(toSpeak);                                      //

   if(synth4.paused) { /* unpause/resume narration */          //
      synth4.resume();                                         //
   }
});

btnPause4.addEventListener('click', ()=> {                      //
   if(synth4.speaking && !synth4.paused){ /* pause narration */   //
      synth4.pause();                                             //
   }
})

btnStop4.addEventListener('click',()=> {                          //
   if(synth4.speaking){                                           //
      synth4.cancel();                                            //
   }
})

// =================================================================== 5 =================================================================== //
var txtInput5 = document.querySelector('#txtInput5').innerHTML; //
var btnSpeak5 = document.querySelector('#btnSpeak5');           //
var btnPause5 = document.querySelector('#btnPause5');           //
var btnStop5 = document.querySelector('#btnStop5');             //
var synth5 = window.speechSynthesis;                            //


btnSpeak5.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput5);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth5.speak(toSpeak);                                      //

    if(synth5.paused) { /* unpause/resume narration */          //
       synth5.resume();                                         //
   }
});

btnPause5.addEventListener('click', ()=> {                      //
 if(synth5.speaking && !synth5.paused){ /* pause narration */   //
    synth5.pause();                                             //
 }
})

btnStop5.addEventListener('click',()=> {                          //
 if(synth5.speaking){                                           //
    synth5.cancel();                                            //
}
})

// =================================================================== 6 =================================================================== //
var txtInput6 = document.querySelector('#txtInput6').innerHTML; //
var btnSpeak6 = document.querySelector('#btnSpeak6');           //
var btnPause6 = document.querySelector('#btnPause6');           //
var btnStop6 = document.querySelector('#btnStop6');             //
var synth6 = window.speechSynthesis;                            //


btnSpeak6.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput6);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth6.speak(toSpeak);                                      //

    if(synth6.paused) { /* unpause/resume narration */          //
       synth6.resume();                                         //
   }
});

btnPause6.addEventListener('click', ()=> {                      //
 if(synth6.speaking && !synth6.paused){ /* pause narration */   //
    synth6.pause();                                             //
 }
})

btnStop6.addEventListener('click',()=> {                          //
 if(synth6.speaking){                                           //
    synth6.cancel();                                            //
}
})
    

// =================================================================== 7 =================================================================== //
var txtInput7 = document.querySelector('#txtInput7').innerHTML; //
var btnSpeak7 = document.querySelector('#btnSpeak7');           //
var btnPause7 = document.querySelector('#btnPause7');           //
var btnStop7 = document.querySelector('#btnStop7');             //
var synth7 = window.speechSynthesis;                            //


btnSpeak7.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput7);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth7.speak(toSpeak);                                      //

    if(synth7.paused) { /* unpause/resume narration */          //
       synth7.resume();                                         //
   }
});

btnPause7.addEventListener('click', ()=> {                      //
 if(synth7.speaking && !synth7.paused){ /* pause narration */   //
    synth7.pause();                                             //
 }
})

btnStop7.addEventListener('click',()=> {                          //
 if(synth7.speaking){                                           //
    synth7.cancel();                                            //
}
})

// =================================================================== 8 =================================================================== //
var txtInput8 = document.querySelector('#txtInput8').innerHTML; //
var btnSpeak8 = document.querySelector('#btnSpeak8');           //
var btnPause8 = document.querySelector('#btnPause8');           //
var btnStop8 = document.querySelector('#btnStop8');             //
var synth8 = window.speechSynthesis;                            //


btnSpeak8.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput8);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth8.speak(toSpeak);                                      //

    if(synth8.paused) { /* unpause/resume narration */          //
       synth8.resume();                                         //
   }
});

btnPause8.addEventListener('click', ()=> {                      //
 if(synth8.speaking && !synth8.paused){ /* pause narration */   //
    synth8.pause();                                             //
 }
})

btnStop8.addEventListener('click',()=> {                          //
 if(synth8.speaking){                                           //
    synth8.cancel();                                            //
}
})

// =================================================================== 9 =================================================================== //
var txtInput9 = document.querySelector('#txtInput9').innerHTML; //
var btnSpeak9 = document.querySelector('#btnSpeak9');           //
var btnPause9 = document.querySelector('#btnPause9');           //
var btnStop9 = document.querySelector('#btnStop9');             //
var synth9 = window.speechSynthesis;                            //


btnSpeak9.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput9);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth9.speak(toSpeak);                                      //

    if(synth9.paused) { /* unpause/resume narration */          //
       synth9.resume();                                         //
   }
});

btnPause9.addEventListener('click', ()=> {                      //
 if(synth9.speaking && !synth9.paused){ /* pause narration */   //
    synth9.pause();                                             //
 }
})

btnStop9.addEventListener('click',()=> {                          //
 if(synth9.speaking){                                           //
    synth9.cancel();                                            //
}
})

// =================================================================== 10 =================================================================== //
var txtInput10 = document.querySelector('#txtInput10').innerHTML; //
var btnSpeak10 = document.querySelector('#btnSpeak10');           //
var btnPause10 = document.querySelector('#btnPause10');           //
var btnStop10 = document.querySelector('#btnStop10');             //
var synth10 = window.speechSynthesis;                            //


btnSpeak10.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput10);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth10.speak(toSpeak);                                      //

    if(synth10.paused) { /* unpause/resume narration */          //
       synth10.resume();                                         //
   }
});

btnPause10.addEventListener('click', ()=> {                      //
 if(synth10.speaking && !synth10.paused){ /* pause narration */   //
    synth10.pause();                                             //
 }
})

btnStop10.addEventListener('click',()=> {                          //
 if(synth10.speaking){                                           //
    synth10.cancel();                                            //
}
})


// =================================================================== 11 =================================================================== //
var txtInput11 = document.querySelector('#txtInput11').innerHTML; //
var btnSpeak11 = document.querySelector('#btnSpeak11');           //
var btnPause11 = document.querySelector('#btnPause11');           //
var btnStop11 = document.querySelector('#btnStop11');             //
var synth11 = window.speechSynthesis;                            //


btnSpeak11.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput11);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth11.speak(toSpeak);                                      //

    if(synth11.paused) { /* unpause/resume narration */          //
       synth11.resume();                                         //
   }
});

btnPause11.addEventListener('click', ()=> {                      //
 if(synth11.speaking && !synth11.paused){ /* pause narration */   //
    synth11.pause();                                             //
 }
})

btnStop11.addEventListener('click',()=> {                          //
 if(synth11.speaking){                                           //
    synth11.cancel();                                            //
}
})

// =================================================================== 12 =================================================================== //
var txtInput12 = document.querySelector('#txtInput12').innerHTML; //
var btnSpeak12 = document.querySelector('#btnSpeak12');           //
var btnPause12 = document.querySelector('#btnPause12');           //
var btnStop12 = document.querySelector('#btnStop12');             //
var synth12 = window.speechSynthesis;                            //


btnSpeak12.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput12);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth12.speak(toSpeak);                                      //

    if(synth12.paused) { /* unpause/resume narration */          //
       synth12.resume();                                         //
   }
});

btnPause12.addEventListener('click', ()=> {                      //
 if(synth12.speaking && !synth12.paused){ /* pause narration */   //
    synth12.pause();                                             //
 }
})

btnStop12.addEventListener('click',()=> {                          //
 if(synth12.speaking){                                           //
    synth12.cancel();                                            //
}
})

// =================================================================== 13 =================================================================== //
var txtInput13 = document.querySelector('#txtInput13').innerHTML; //
var btnSpeak13 = document.querySelector('#btnSpeak13');           //
var btnPause13 = document.querySelector('#btnPause13');           //
var btnStop13 = document.querySelector('#btnStop13');             //
var synth13 = window.speechSynthesis;                            //


btnSpeak13.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput13);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth13.speak(toSpeak);                                      //

    if(synth13.paused) { /* unpause/resume narration */          //
       synth13.resume();                                         //
   }
});

btnPause13.addEventListener('click', ()=> {                      //
 if(synth13.speaking && !synth13.paused){ /* pause narration */   //
    synth13.pause();                                             //
 }
})

btnStop13.addEventListener('click',()=> {                          //
 if(synth13.speaking){                                           //
    synth13.cancel();                                            //
}
})

// =================================================================== 14 =================================================================== //
var txtInput14 = document.querySelector('#txtInput14').innerHTML; //
var btnSpeak14 = document.querySelector('#btnSpeak14');           //
var btnPause14 = document.querySelector('#btnPause14');           //
var btnStop14 = document.querySelector('#btnStop14');             //
var synth14 = window.speechSynthesis;                            //


btnSpeak14.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput14);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth14.speak(toSpeak);                                      //

    if(synth14.paused) { /* unpause/resume narration */          //
       synth14.resume();                                         //
   }
});

btnPause14.addEventListener('click', ()=> {                      //
 if(synth14.speaking && !synth14.paused){ /* pause narration */   //
    synth14.pause();                                             //
 }
})

btnStop14.addEventListener('click',()=> {                          //
 if(synth14.speaking){                                           //
    synth14.cancel();                                            //
}
})

// =================================================================== 15 =================================================================== //
var txtInput15 = document.querySelector('#txtInput15').innerHTML; //
var btnSpeak15 = document.querySelector('#btnSpeak15');           //
var btnPause15 = document.querySelector('#btnPause15');           //
var btnStop15 = document.querySelector('#btnStop15');             //
var synth15 = window.speechSynthesis;                            //


btnSpeak15.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput15);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth15.speak(toSpeak);                                      //

    if(synth15.paused) { /* unpause/resume narration */          //
       synth15.resume();                                         //
   }
});

btnPause15.addEventListener('click', ()=> {                      //
 if(synth15.speaking && !synth15.paused){ /* pause narration */   //
    synth15.pause();                                             //
 }
})

btnStop15.addEventListener('click',()=> {                          //
 if(synth15.speaking){                                           //
    synth15.cancel();                                            //
}
})


// =================================================================== 16 =================================================================== //
var txtInput16 = document.querySelector('#txtInput16').innerHTML; //
var btnSpeak16 = document.querySelector('#btnSpeak16');           //
var btnPause16 = document.querySelector('#btnPause16');           //
var btnStop16 = document.querySelector('#btnStop16');             //
var synth16 = window.speechSynthesis;                            //


btnSpeak16.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput16);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth16.speak(toSpeak);                                      //

    if(synth16.paused) { /* unpause/resume narration */          //
       synth16.resume();                                         //
   }
});

btnPause16.addEventListener('click', ()=> {                      //
 if(synth16.speaking && !synth16.paused){ /* pause narration */   //
    synth16.pause();                                             //
 }
})

btnStop16.addEventListener('click',()=> {                          //
 if(synth16.speaking){                                           //
    synth16.cancel();                                            //
}
})


// =================================================================== 17 =================================================================== //
var txtInput17 = document.querySelector('#txtInput17').innerHTML; //
var btnSpeak17 = document.querySelector('#btnSpeak17');           //
var btnPause17 = document.querySelector('#btnPause17');           //
var btnStop17 = document.querySelector('#btnStop17');             //
var synth17 = window.speechSynthesis;                            //


btnSpeak17.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput17);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth17.speak(toSpeak);                                      //

    if(synth17.paused) { /* unpause/resume narration */          //
       synth17.resume();                                         //
   }
});

btnPause17.addEventListener('click', ()=> {                      //
 if(synth17.speaking && !synth17.paused){ /* pause narration */   //
    synth17.pause();                                             //
 }
})

btnStop17.addEventListener('click',()=> {                          //
 if(synth17.speaking){                                           //
    synth17.cancel();                                            //
}
})

// =================================================================== 18 =================================================================== //
var txtInput18 = document.querySelector('#txtInput18').innerHTML; //
var btnSpeak18 = document.querySelector('#btnSpeak18');           //
var btnPause18 = document.querySelector('#btnPause18');           //
var btnStop18 = document.querySelector('#btnStop18');             //
var synth18 = window.speechSynthesis;                            //


btnSpeak18.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput18);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth18.speak(toSpeak);                                      //

    if(synth18.paused) { /* unpause/resume narration */          //
       synth18.resume();                                         //
   }
});

btnPause18.addEventListener('click', ()=> {                      //
 if(synth18.speaking && !synth18.paused){ /* pause narration */   //
    synth18.pause();                                             //
 }
})

btnStop18.addEventListener('click',()=> {                          //
 if(synth18.speaking){                                           //
    synth18.cancel();                                            //
}
})

// =================================================================== 19 =================================================================== //
var txtInput19 = document.querySelector('#txtInput19').innerHTML; //
var btnSpeak19 = document.querySelector('#btnSpeak19');           //
var btnPause19 = document.querySelector('#btnPause19');           //
var btnStop19 = document.querySelector('#btnStop19');             //
var synth19 = window.speechSynthesis;                            //


btnSpeak19.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput19);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth19.speak(toSpeak);                                      //

    if(synth19.paused) { /* unpause/resume narration */          //
       synth19.resume();                                         //
   }
});

btnPause19.addEventListener('click', ()=> {                      //
 if(synth19.speaking && !synth19.paused){ /* pause narration */   //
    synth19.pause();                                             //
 }
})

btnStop19.addEventListener('click',()=> {                          //
 if(synth19.speaking){                                           //
    synth19.cancel();                                            //
}
})

// =================================================================== 20 =================================================================== //
var txtInput20 = document.querySelector('#txtInput20').innerHTML; //
var btnSpeak20 = document.querySelector('#btnSpeak20');           //
var btnPause20 = document.querySelector('#btnPause20');           //
var btnStop20 = document.querySelector('#btnStop20');             //
var synth20 = window.speechSynthesis;                            //


btnSpeak20.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput20);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth20.speak(toSpeak);                                      //

    if(synth20.paused) { /* unpause/resume narration */          //
       synth20.resume();                                         //
   }
});

btnPause20.addEventListener('click', ()=> {                      //
 if(synth20.speaking && !synth20.paused){ /* pause narration */   //
    synth20.pause();                                             //
 }
})

btnStop20.addEventListener('click',()=> {                          //
 if(synth20.speaking){                                           //
    synth20.cancel();                                            //
}
})


// =================================================================== 21 =================================================================== //
var txtInput21 = document.querySelector('#txtInput21').innerHTML; //
var btnSpeak21 = document.querySelector('#btnSpeak21');           //
var btnPause21 = document.querySelector('#btnPause21');           //
var btnStop21 = document.querySelector('#btnStop21');             //
var synth21 = window.speechSynthesis;                            //


btnSpeak21.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput21);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth21.speak(toSpeak);                                      //

    if(synth21.paused) { /* unpause/resume narration */          //
       synth21.resume();                                         //
   }
});

btnPause21.addEventListener('click', ()=> {                      //
 if(synth21.speaking && !synth21.paused){ /* pause narration */   //
    synth21.pause();                                             //
 }
})

btnStop21.addEventListener('click',()=> {                          //
 if(synth21.speaking){                                           //
    synth21.cancel();                                            //
}
})

// =================================================================== 22 =================================================================== //
var txtInput22 = document.querySelector('#txtInput22').innerHTML; //
var btnSpeak22 = document.querySelector('#btnSpeak22');           //
var btnPause22 = document.querySelector('#btnPause22');           //
var btnStop22 = document.querySelector('#btnStop22');             //
var synth22 = window.speechSynthesis;                            //


btnSpeak22.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput22);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth22.speak(toSpeak);                                      //

    if(synth22.paused) { /* unpause/resume narration */          //
       synth22.resume();                                         //
   }
});

btnPause22.addEventListener('click', ()=> {                      //
 if(synth22.speaking && !synth22.paused){ /* pause narration */   //
    synth22.pause();                                             //
 }
})

btnStop22.addEventListener('click',()=> {                          //
 if(synth22.speaking){                                           //
    synth22.cancel();                                            //
}
})

// =================================================================== 23 =================================================================== //
var txtInput23 = document.querySelector('#txtInput23').innerHTML; //
var btnSpeak23 = document.querySelector('#btnSpeak23');           //
var btnPause23 = document.querySelector('#btnPause23');           //
var btnStop23 = document.querySelector('#btnStop23');             //
var synth23 = window.speechSynthesis;                            //


btnSpeak23.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput23);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth23.speak(toSpeak);                                      //

    if(synth23.paused) { /* unpause/resume narration */          //
       synth23.resume();                                         //
   }
});

btnPause23.addEventListener('click', ()=> {                      //
 if(synth23.speaking && !synth23.paused){ /* pause narration */   //
    synth23.pause();                                             //
 }
})

btnStop23.addEventListener('click',()=> {                          //
 if(synth23.speaking){                                           //
    synth23.cancel();                                            //
}
})


// =================================================================== 24 =================================================================== //
var txtInput24 = document.querySelector('#txtInput24').innerHTML; //
var btnSpeak24 = document.querySelector('#btnSpeak24');           //
var btnPause24 = document.querySelector('#btnPause24');           //
var btnStop24 = document.querySelector('#btnStop24');             //
var synth24 = window.speechSynthesis;                            //


btnSpeak24.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput24);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth24.speak(toSpeak);                                      //

    if(synth24.paused) { /* unpause/resume narration */          //
       synth24.resume();                                         //
   }
});

btnPause24.addEventListener('click', ()=> {                      //
 if(synth24.speaking && !synth24.paused){ /* pause narration */   //
    synth24.pause();                                             //
 }
})

btnStop24.addEventListener('click',()=> {                          //
 if(synth24.speaking){                                           //
    synth24.cancel();                                            //
}
})

// =================================================================== 25 =================================================================== //
var txtInput25 = document.querySelector('#txtInput25').innerHTML; //
var btnSpeak25 = document.querySelector('#btnSpeak25');           //
var btnPause25 = document.querySelector('#btnPause25');           //
var btnStop25 = document.querySelector('#btnStop25');             //
var synth25 = window.speechSynthesis;                            //


btnSpeak25.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput25);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth25.speak(toSpeak);                                      //

    if(synth25.paused) { /* unpause/resume narration */          //
       synth25.resume();                                         //
   }
});

btnPause25.addEventListener('click', ()=> {                      //
 if(synth25.speaking && !synth25.paused){ /* pause narration */   //
    synth25.pause();                                             //
 }
})

btnStop25.addEventListener('click',()=> {                          //
 if(synth25.speaking){                                           //
    synth25.cancel();                                            //
}
})

// =================================================================== 26 =================================================================== //
var txtInput26 = document.querySelector('#txtInput26').innerHTML; //
var btnSpeak26 = document.querySelector('#btnSpeak26');           //
var btnPause26 = document.querySelector('#btnPause26');           //
var btnStop26 = document.querySelector('#btnStop26');             //
var synth26 = window.speechSynthesis;                            //


btnSpeak26.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput26);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth26.speak(toSpeak);                                      //

    if(synth26.paused) { /* unpause/resume narration */          //
       synth26.resume();                                         //
   }
});

btnPause26.addEventListener('click', ()=> {                      //
 if(synth26.speaking && !synth26.paused){ /* pause narration */   //
    synth26.pause();                                             //
 }
})

btnStop26.addEventListener('click',()=> {                          //
 if(synth26.speaking){                                           //
    synth26.cancel();                                            //
}
})

// =================================================================== 27 =================================================================== //
var txtInput27 = document.querySelector('#txtInput27').innerHTML; //
var btnSpeak27 = document.querySelector('#btnSpeak27');           //
var btnPause27 = document.querySelector('#btnPause27');           //
var btnStop27 = document.querySelector('#btnStop27');             //
var synth27 = window.speechSynthesis;                            //


btnSpeak27.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput27);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth27.speak(toSpeak);                                      //

    if(synth27.paused) { /* unpause/resume narration */          //
       synth27.resume();                                         //
   }
});

btnPause27.addEventListener('click', ()=> {                      //
 if(synth27.speaking && !synth27.paused){ /* pause narration */   //
    synth27.pause();                                             //
 }
})

btnStop27.addEventListener('click',()=> {                          //
 if(synth27.speaking){                                           //
    synth27.cancel();                                            //
}
})

// =================================================================== 28 =================================================================== //
var txtInput28 = document.querySelector('#txtInput28').innerHTML; //
var btnSpeak28 = document.querySelector('#btnSpeak28');           //
var btnPause28 = document.querySelector('#btnPause28');           //
var btnStop28 = document.querySelector('#btnStop28');             //
var synth28 = window.speechSynthesis;                            //


btnSpeak28.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput28);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth28.speak(toSpeak);                                      //

    if(synth28.paused) { /* unpause/resume narration */          //
       synth28.resume();                                         //
   }
});

btnPause28.addEventListener('click', ()=> {                      //
 if(synth28.speaking && !synth28.paused){ /* pause narration */   //
    synth28.pause();                                             //
 }
})

btnStop28.addEventListener('click',()=> {                          //
 if(synth28.speaking){                                           //
    synth28.cancel();                                            //
}
})

// =================================================================== 29 =================================================================== //
var txtInput29 = document.querySelector('#txtInput29').innerHTML; //
var btnSpeak29 = document.querySelector('#btnSpeak29');           //
var btnPause29 = document.querySelector('#btnPause29');           //
var btnStop29 = document.querySelector('#btnStop29');             //
var synth29 = window.speechSynthesis;                            //


btnSpeak29.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput29);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth29.speak(toSpeak);                                      //

    if(synth29.paused) { /* unpause/resume narration */          //
       synth29.resume();                                         //
   }
});

btnPause29.addEventListener('click', ()=> {                      //
 if(synth29.speaking && !synth29.paused){ /* pause narration */   //
    synth29.pause();                                             //
 }
})

btnStop29.addEventListener('click',()=> {                          //
 if(synth29.speaking){                                           //
    synth29.cancel();                                            //
}
})

// =================================================================== 30 =================================================================== //
var txtInput30 = document.querySelector('#txtInput30').innerHTML; //
var btnSpeak30 = document.querySelector('#btnSpeak30');           //
var btnPause30 = document.querySelector('#btnPause30');           //
var btnStop30 = document.querySelector('#btnStop30');             //
var synth30 = window.speechSynthesis;                            //


btnSpeak30.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput30);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth30.speak(toSpeak);                                      //

    if(synth30.paused) { /* unpause/resume narration */          //
       synth30.resume();                                         //
   }
});

btnPause30.addEventListener('click', ()=> {                      //
 if(synth30.speaking && !synth30.paused){ /* pause narration */   //
    synth30.pause();                                             //
 }
})

btnStop30.addEventListener('click',()=> {                          //
 if(synth30.speaking){                                           //
    synth30.cancel();                                            //
}
})

// =================================================================== 31 =================================================================== //
var txtInput31 = document.querySelector('#txtInput31').innerHTML; //
var btnSpeak31 = document.querySelector('#btnSpeak31');           //
var btnPause31 = document.querySelector('#btnPause31');           //
var btnStop31 = document.querySelector('#btnStop31');             //
var synth31 = window.speechSynthesis;                            //


btnSpeak31.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput31);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth31.speak(toSpeak);                                      //

    if(synth31.paused) { /* unpause/resume narration */          //
       synth31.resume();                                         //
   }
});

btnPause31.addEventListener('click', ()=> {                      //
 if(synth31.speaking && !synth31.paused){ /* pause narration */   //
    synth31.pause();                                             //
 }
})

btnStop31.addEventListener('click',()=> {                          //
 if(synth31.speaking){                                           //
    synth31.cancel();                                            //
}
})
// =================================================================== 32 =================================================================== //
var txtInput32 = document.querySelector('#txtInput32').innerHTML; //
var btnSpeak32 = document.querySelector('#btnSpeak32');           //
var btnPause32 = document.querySelector('#btnPause32');           //
var btnStop32 = document.querySelector('#btnStop32');             //
var synth32 = window.speechSynthesis;                            //


btnSpeak32.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput32);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth32.speak(toSpeak);                                      //

    if(synth32.paused) { /* unpause/resume narration */          //
       synth32.resume();                                         //
   }
});

btnPause32.addEventListener('click', ()=> {                      //
 if(synth32.speaking && !synth32.paused){ /* pause narration */   //
    synth32.pause();                                             //
 }
})

btnStop32.addEventListener('click',()=> {                          //
 if(synth32.speaking){                                           //
    synth32.cancel();                                            //
}
})

// =================================================================== 33 =================================================================== //
var txtInput33 = document.querySelector('#txtInput33').innerHTML; //
var btnSpeak33 = document.querySelector('#btnSpeak33');           //
var btnPause33 = document.querySelector('#btnPause33');           //
var btnStop33 = document.querySelector('#btnStop33');             //
var synth33 = window.speechSynthesis;                            //


btnSpeak33.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput33);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth33.speak(toSpeak);                                      //

    if(synth33.paused) { /* unpause/resume narration */          //
       synth33.resume();                                         //
   }
});

btnPause33.addEventListener('click', ()=> {                      //
 if(synth33.speaking && !synth33.paused){ /* pause narration */   //
    synth33.pause();                                             //
 }
})

btnStop33.addEventListener('click',()=> {                          //
 if(synth33.speaking){                                           //
    synth33.cancel();                                            //
}
})


// =================================================================== 34 =================================================================== //
var txtInput34 = document.querySelector('#txtInput34').innerHTML; //
var btnSpeak34 = document.querySelector('#btnSpeak34');           //
var btnPause34 = document.querySelector('#btnPause34');           //
var btnStop34 = document.querySelector('#btnStop34');             //
var synth34 = window.speechSynthesis;                            //


btnSpeak34.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput34);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth34.speak(toSpeak);                                      //

    if(synth34.paused) { /* unpause/resume narration */          //
       synth34.resume();                                         //
   }
});

btnPause34.addEventListener('click', ()=> {                      //
 if(synth34.speaking && !synth34.paused){ /* pause narration */   //
    synth34.pause();                                             //
 }
})

btnStop34.addEventListener('click',()=> {                          //
 if(synth34.speaking){                                           //
    synth34.cancel();                                            //
}
})



// =================================================================== 35 =================================================================== //
var txtInput35 = document.querySelector('#txtInput35').innerHTML; //
var btnSpeak35 = document.querySelector('#btnSpeak35');           //
var btnPause35 = document.querySelector('#btnPause35');           //
var btnStop35 = document.querySelector('#btnStop35');             //
var synth35 = window.speechSynthesis;                            //


btnSpeak35.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput35);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth35.speak(toSpeak);                                      //

    if(synth35.paused) { /* unpause/resume narration */          //
       synth35.resume();                                         //
   }
});

btnPause35.addEventListener('click', ()=> {                      //
 if(synth35.speaking && !synth35.paused){ /* pause narration */   //
    synth35.pause();                                             //
 }
})

btnStop35.addEventListener('click',()=> {                          //
 if(synth35.speaking){                                           //
    synth35.cancel();                                            //
}
})

// =================================================================== 36 =================================================================== //
var txtInput36 = document.querySelector('#txtInput36').innerHTML; //
var btnSpeak36 = document.querySelector('#btnSpeak36');           //
var btnPause36 = document.querySelector('#btnPause36');           //
var btnStop36 = document.querySelector('#btnStop36');             //
var synth36 = window.speechSynthesis;                            //


btnSpeak36.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput36);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth36.speak(toSpeak);                                      //

    if(synth36.paused) { /* unpause/resume narration */          //
       synth36.resume();                                         //
   }
});

btnPause36.addEventListener('click', ()=> {                      //
 if(synth36.speaking && !synth36.paused){ /* pause narration */   //
    synth36.pause();                                             //
 }
})

btnStop36.addEventListener('click',()=> {                          //
 if(synth36.speaking){                                           //
    synth36.cancel();                                            //
}
})

// =================================================================== 37 =================================================================== //
var txtInput37 = document.querySelector('#txtInput37').innerHTML; //
var btnSpeak37 = document.querySelector('#btnSpeak37');           //
var btnPause37 = document.querySelector('#btnPause37');           //
var btnStop37 = document.querySelector('#btnStop37');             //
var synth37 = window.speechSynthesis;                            //


btnSpeak37.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput37);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth37.speak(toSpeak);                                      //

    if(synth37.paused) { /* unpause/resume narration */          //
       synth37.resume();                                         //
   }
});

btnPause37.addEventListener('click', ()=> {                      //
 if(synth37.speaking && !synth37.paused){ /* pause narration */   //
    synth37.pause();                                             //
 }
})

btnStop37.addEventListener('click',()=> {                          //
 if(synth37.speaking){                                           //
    synth37.cancel();                                            //
}
})

// =================================================================== 38 =================================================================== //
var txtInput38 = document.querySelector('#txtInput38').innerHTML; //
var btnSpeak38 = document.querySelector('#btnSpeak38');           //
var btnPause38 = document.querySelector('#btnPause38');           //
var btnStop38 = document.querySelector('#btnStop38');             //
var synth38 = window.speechSynthesis;                            //


btnSpeak38.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput38);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth38.speak(toSpeak);                                      //

    if(synth38.paused) { /* unpause/resume narration */          //
       synth38.resume();                                         //
   }
});

btnPause38.addEventListener('click', ()=> {                      //
 if(synth38.speaking && !synth38.paused){ /* pause narration */   //
    synth38.pause();                                             //
 }
})

btnStop38.addEventListener('click',()=> {                          //
 if(synth38.speaking){                                           //
    synth38.cancel();                                            //
}
})
// =================================================================== 39 =================================================================== //
var txtInput39 = document.querySelector('#txtInput39').innerHTML; //
var btnSpeak39 = document.querySelector('#btnSpeak39');           //
var btnPause39 = document.querySelector('#btnPause39');           //
var btnStop39 = document.querySelector('#btnStop39');             //
var synth39 = window.speechSynthesis;                            //


btnSpeak39.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput39);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth39.speak(toSpeak);                                      //

    if(synth39.paused) { /* unpause/resume narration */          //
       synth39.resume();                                         //
   }
});

btnPause39.addEventListener('click', ()=> {                      //
 if(synth39.speaking && !synth39.paused){ /* pause narration */   //
    synth39.pause();                                             //
 }
})

btnStop39.addEventListener('click',()=> {                          //
 if(synth39.speaking){                                           //
    synth39.cancel();                                            //
}
})

// =================================================================== 40 =================================================================== //
var txtInput40 = document.querySelector('#txtInput40').innerHTML; //
var btnSpeak40 = document.querySelector('#btnSpeak40');           //
var btnPause40 = document.querySelector('#btnPause40');           //
var btnStop40 = document.querySelector('#btnStop40');             //
var synth40 = window.speechSynthesis;                            //


btnSpeak40.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput40);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth40.speak(toSpeak);                                      //

    if(synth40.paused) { /* unpause/resume narration */          //
       synth40.resume();                                         //
   }
});

btnPause40.addEventListener('click', ()=> {                      //
 if(synth40.speaking && !synth40.paused){ /* pause narration */   //
    synth40.pause();                                             //
 }
})

btnStop40.addEventListener('click',()=> {                          //
 if(synth40.speaking){                                           //
    synth40.cancel();                                            //
}
})

// =================================================================== 41 =================================================================== //
var txtInput41 = document.querySelector('#txtInput41').innerHTML; //
var btnSpeak41 = document.querySelector('#btnSpeak41');           //
var btnPause41 = document.querySelector('#btnPause41');           //
var btnStop41 = document.querySelector('#btnStop41');             //
var synth41 = window.speechSynthesis;                            //


btnSpeak41.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput41);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth41.speak(toSpeak);                                      //

    if(synth41.paused) { /* unpause/resume narration */          //
       synth41.resume();                                         //
   }
});

btnPause41.addEventListener('click', ()=> {                      //
 if(synth41.speaking && !synth41.paused){ /* pause narration */   //
    synth41.pause();                                             //
 }
})

btnStop41.addEventListener('click',()=> {                          //
 if(synth41.speaking){                                           //
    synth41.cancel();                                            //
}
})

// =================================================================== 42 =================================================================== //
var txtInput42 = document.querySelector('#txtInput42').innerHTML; //
var btnSpeak42 = document.querySelector('#btnSpeak42');           //
var btnPause42 = document.querySelector('#btnPause42');           //
var btnStop42 = document.querySelector('#btnStop42');             //
var synth42 = window.speechSynthesis;                            //


btnSpeak42.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput42);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth42.speak(toSpeak);                                      //

    if(synth42.paused) { /* unpause/resume narration */          //
       synth42.resume();                                         //
   }
});

btnPause42.addEventListener('click', ()=> {                      //
 if(synth42.speaking && !synth42.paused){ /* pause narration */   //
    synth42.pause();                                             //
 }
})

btnStop42.addEventListener('click',()=> {                          //
 if(synth42.speaking){                                           //
    synth42.cancel();                                            //
}
})

// =================================================================== 43 =================================================================== //
var txtInput43 = document.querySelector('#txtInput43').innerHTML; //
var btnSpeak43 = document.querySelector('#btnSpeak43');           //
var btnPause43 = document.querySelector('#btnPause43');           //
var btnStop43 = document.querySelector('#btnStop43');             //
var synth43 = window.speechSynthesis;                            //


btnSpeak43.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput43);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth43.speak(toSpeak);                                      //

    if(synth43.paused) { /* unpause/resume narration */          //
       synth43.resume();                                         //
   }
});

btnPause43.addEventListener('click', ()=> {                      //
 if(synth43.speaking && !synth43.paused){ /* pause narration */   //
    synth43.pause();                                             //
 }
})

btnStop43.addEventListener('click',()=> {                          //
 if(synth43.speaking){                                           //
    synth43.cancel();                                            //
}
})

// =================================================================== 44 =================================================================== //
var txtInput44 = document.querySelector('#txtInput44').innerHTML; //
var btnSpeak44 = document.querySelector('#btnSpeak44');           //
var btnPause44 = document.querySelector('#btnPause44');           //
var btnStop44 = document.querySelector('#btnStop44');             //
var synth44 = window.speechSynthesis;                            //


btnSpeak44.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput44);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth44.speak(toSpeak);                                      //

    if(synth44.paused) { /* unpause/resume narration */          //
       synth44.resume();                                         //
   }
});

btnPause44.addEventListener('click', ()=> {                      //
 if(synth44.speaking && !synth44.paused){ /* pause narration */   //
    synth44.pause();                                             //
 }
})

btnStop44.addEventListener('click',()=> {                          //
 if(synth44.speaking){                                           //
    synth44.cancel();                                            //
}
})

// =================================================================== 45 =================================================================== //
var txtInput45 = document.querySelector('#txtInput45').innerHTML; //
var btnSpeak45 = document.querySelector('#btnSpeak45');           //
var btnPause45 = document.querySelector('#btnPause45');           //
var btnStop45 = document.querySelector('#btnStop45');             //
var synth45 = window.speechSynthesis;                            //


btnSpeak45.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput45);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth45.speak(toSpeak);                                      //

    if(synth45.paused) { /* unpause/resume narration */          //
       synth45.resume();                                         //
   }
});

btnPause45.addEventListener('click', ()=> {                      //
 if(synth45.speaking && !synth45.paused){ /* pause narration */   //
    synth45.pause();                                             //
 }
})

btnStop45.addEventListener('click',()=> {                          //
 if(synth45.speaking){                                           //
    synth45.cancel();                                            //
}
})

// =================================================================== 46 =================================================================== //
var txtInput46 = document.querySelector('#txtInput46').innerHTML; //
var btnSpeak46 = document.querySelector('#btnSpeak46');           //
var btnPause46 = document.querySelector('#btnPause46');           //
var btnStop46 = document.querySelector('#btnStop46');             //
var synth46 = window.speechSynthesis;                            //


btnSpeak46.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput46);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth46.speak(toSpeak);                                      //

    if(synth46.paused) { /* unpause/resume narration */          //
       synth46.resume();                                         //
   }
});

btnPause46.addEventListener('click', ()=> {                      //
 if(synth46.speaking && !synth46.paused){ /* pause narration */   //
    synth46.pause();                                             //
 }
})

btnStop46.addEventListener('click',()=> {                          //
 if(synth46.speaking){                                           //
    synth46.cancel();                                            //
}
})

// =================================================================== 47 =================================================================== //
var txtInput47 = document.querySelector('#txtInput47').innerHTML; //
var btnSpeak47 = document.querySelector('#btnSpeak47');           //
var btnPause47 = document.querySelector('#btnPause47');           //
var btnStop47 = document.querySelector('#btnStop47');             //
var synth47 = window.speechSynthesis;                            //


btnSpeak47.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput47);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth47.speak(toSpeak);                                      //

    if(synth47.paused) { /* unpause/resume narration */          //
       synth47.resume();                                         //
   }
});

btnPause47.addEventListener('click', ()=> {                      //
 if(synth47.speaking && !synth47.paused){ /* pause narration */   //
    synth47.pause();                                             //
 }
})

btnStop47.addEventListener('click',()=> {                          //
 if(synth47.speaking){                                           //
    synth47.cancel();                                            //
}
})

// =================================================================== 48 =================================================================== //
var txtInput48 = document.querySelector('#txtInput48').innerHTML; //
var btnSpeak48 = document.querySelector('#btnSpeak48');           //
var btnPause48 = document.querySelector('#btnPause48');           //
var btnStop48 = document.querySelector('#btnStop48');             //
var synth48 = window.speechSynthesis;                            //


btnSpeak48.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput48);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth48.speak(toSpeak);                                      //

    if(synth48.paused) { /* unpause/resume narration */          //
       synth48.resume();                                         //
   }
});

btnPause48.addEventListener('click', ()=> {                      //
 if(synth48.speaking && !synth48.paused){ /* pause narration */   //
    synth48.pause();                                             //
 }
})

btnStop48.addEventListener('click',()=> {                          //
 if(synth48.speaking){                                           //
    synth48.cancel();                                            //
}
})

// =================================================================== 49 =================================================================== //
var txtInput49 = document.querySelector('#txtInput49').innerHTML; //
var btnSpeak49 = document.querySelector('#btnSpeak49');           //
var btnPause49 = document.querySelector('#btnPause49');           //
var btnStop49 = document.querySelector('#btnStop49');             //
var synth49 = window.speechSynthesis;                            //


btnSpeak49.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput49);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth49.speak(toSpeak);                                      //

    if(synth49.paused) { /* unpause/resume narration */          //
       synth49.resume();                                         //
   }
});

btnPause49.addEventListener('click', ()=> {                      //
 if(synth49.speaking && !synth49.paused){ /* pause narration */   //
    synth49.pause();                                             //
 }
})

btnStop49.addEventListener('click',()=> {                          //
 if(synth49.speaking){                                           //
    synth49.cancel();                                            //
}
})

// =================================================================== 50 =================================================================== //
var txtInput50 = document.querySelector('#txtInput50').innerHTML; //
var btnSpeak50 = document.querySelector('#btnSpeak50');           //
var btnPause50 = document.querySelector('#btnPause50');           //
var btnStop50 = document.querySelector('#btnStop50');             //
var synth50 = window.speechSynthesis;                            //


btnSpeak50.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput50);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth50.speak(toSpeak);                                      //

    if(synth50.paused) { /* unpause/resume narration */          //
       synth50.resume();                                         //
   }
});

btnPause50.addEventListener('click', ()=> {                      //
 if(synth50.speaking && !synth50.paused){ /* pause narration */   //
    synth50.pause();                                             //
 }
})

btnStop50.addEventListener('click',()=> {                          //
 if(synth50.speaking){                                           //
    synth50.cancel();                                            //
}
})

// =================================================================== 51 =================================================================== //
var txtInput51 = document.querySelector('#txtInput51').innerHTML; //
var btnSpeak51 = document.querySelector('#btnSpeak51');           //
var btnPause51 = document.querySelector('#btnPause51');           //
var btnStop51 = document.querySelector('#btnStop51');             //
var synth51 = window.speechSynthesis;                            //


btnSpeak51.addEventListener('click', ()=> {                      //
    var toSpeak = new SpeechSynthesisUtterance(txtInput51);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice)=>{
        selectedVoiceName = 'Microsoft Zira Desktop - English (United States)';
        if(voice.name === selectedVoiceName){
            toSpeak.voice = voice;
        }
    });
    synth51.speak(toSpeak);                                      //

    if(synth51.paused) { /* unpause/resume narration */          //
       synth51.resume();                                         //
   }
});

btnPause51.addEventListener('click', ()=> {                      //
 if(synth51.speaking && !synth51.paused){ /* pause narration */   //
    synth51.pause();                                             //
 }
})

btnStop51.addEventListener('click',()=> {                          //
 if(synth51.speaking){                                           //
    synth51.cancel();                                            //
}
})
