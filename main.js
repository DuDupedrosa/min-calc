(()=>{"use strict";var e=document.getElementById("input-initial"),n=document.getElementById("showTotalPrice"),t=document.getElementById("showTotaldiscount"),i=document.getElementById("input-people");e.addEventListener("change",(function(e){var i=+e.target.value;n.innerHTML="R$ "+i,document.getElementById("input-people").addEventListener("change",(function(e){var t=+e.target.value;n.innerHTML="R$ "+(i/t).toFixed(2)}));var o={cincoPorcento:function(){n.innerHTML="R$ "+(i-.05*i),t.innerHTML="R$ "+(.05*i).toFixed(2),document.getElementById("input-people").addEventListener("change",(function(e){var t=+e.target.value;n.innerHTML="R$ "+((i-.05*i)/t).toFixed(2)}))},dezPorcento:function(){n.innerHTML="R$ "+(i-.1*i),t.innerHTML="R$ "+(.1*i).toFixed(2),document.getElementById("input-people").addEventListener("change",(function(e){var t=+e.target.value;n.innerHTML="R$ "+((i-.1*i)/t).toFixed(2)}))},quinzePorcento:function(){n.innerHTML="R$ "+(i-.15*i),t.innerHTML="R$ "+(.15*i).toFixed(2),document.getElementById("input-people").addEventListener("change",(function(e){var t=+e.target.value;n.innerHTML="R$ "+((i-.15*i)/t).toFixed(2)}))},vinteCincoPorcento:function(){n.innerHTML="R$ "+(i-.25*i),t.innerHTML="R$ "+(.25*i).toFixed(2),document.getElementById("input-people").addEventListener("change",(function(e){var t=+e.target.value;n.innerHTML="R$ "+((i-.25*i)/t).toFixed(2)}))},cinquentaPorcento:function(){n.innerHTML="R$ "+(i-.5*i),t.innerHTML="R$ "+(.5*i).toFixed(2),document.getElementById("input-people").addEventListener("change",(function(e){var t=+e.target.value;n.innerHTML="R$ "+((i-.5*i)/t).toFixed(2)}))}},r=document.querySelectorAll("#discounts input"),c=function(e){var n=e.target.name;o[n]()};r.forEach((function(e){e.addEventListener("click",c)}))})),document.querySelector('[data-button="clean"]').addEventListener("click",(function(){n.innerHTML="R$ 00,00",t.innerHTML="R$ 00,00",e.value="",i.value=""}))})();