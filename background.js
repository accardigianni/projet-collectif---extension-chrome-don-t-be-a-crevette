let count = 1785;
let timeOut;
let firstNotificationShown = false;
let secondNotificationShown = false;

function startTimer() {
  count += 1;
  console.log(count);
  timeOut = setTimeout(startTimer, 1000);

  if (count >= 1800 && count <= 1810 && !firstNotificationShown) {
    chrome.runtime.sendMessage({ action: "createNotification" });
    console.log("Redresse-toi !");
    firstNotificationShown = true;
  }

  if (count >= 1810 && count <= 1820 && firstNotificationShown && !secondNotificationShown) {
    chrome.runtime.sendMessage({ action: "createNotification2" });
    console.log("Bois de l'eau !");
    secondNotificationShown = true;
  }
  if (count >= 1820 && firstNotificationShown) {
    chrome.runtime.sendMessage({ action: "createNotification3" });
    console.log("Touche l'herbe");
    count = 1790;
    firstNotificationShown = false;
    secondNotificationShown = false;
  }
}



chrome.runtime.onStartup.addListener(function () {
  console.log('Chrome started up');
  startTimer();
});

//empêche le script d'être stoppé par x raison  (notif etc) (LE COMPTEUR SARRETE DES QUON OUVRE UN NOUVEL ONGLET !!)

chrome.runtime.onSuspend.addListener(function () {
  return true;
});



