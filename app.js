'use strict'

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest (url, callback){
    let xhr;
     if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
     }else if (window.ActiveXObject){
         xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
      xhr.onreadystatechage = function(){
          if(xhr.readyState === 4){
              callback(xhr, responseText);
          }
      }  
      xhr.open('GET', API_URL, true);
      xhr.send()
     }
    