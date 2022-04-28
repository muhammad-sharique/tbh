const secretSalt = 'salted';
const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
}
    
const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
}
const myCipher = cipher(secretSalt);
const myDecipher = decipher(secretSalt)

function handleMessageInput() {
    var message = document.getElementById("message").value;
    var messageText = document.querySelector('.textBox .hiddenText');
    messageText.innerText = message.trim();
}
function handleShareButton(){
    var messageText = document.querySelector('.textBox .hiddenText').innerText.trim();
    var encryptedMessage = myCipher(messageText);
    var sharableUrl = window.location.href + "?message=" + encryptedMessage;
    navigator.share({
        title: 'To be honest...',
        text: 'I am sharing this honest message with you!',
        url: sharableUrl
    });
}
function handleResetButton(){
    window.location.href = window.location.href.split("?message=")[0];
}
window.onload = function(){
    selectText('selectedText');
    if(window.location.href.includes("?message=")){
        var encryptedMessage = window.location.href.split("?message=")[1];
        console.log(encryptedMessage);
        var decryptedMessage = myDecipher(encryptedMessage);
        document.querySelector('.textBox .hiddenText').innerHTML = decryptedMessage;
        document.querySelector('.inputBox').remove();
        document.querySelector('.shareBox').remove();
    }
    else{
        document.querySelector('.resetBox').remove();
    }
}
document.onclick = function(e){
    setTimeout(function(){
        document.querySelector('.tutorialBox').remove();
    }, 300);
}

function selectText(node) {
    node = document.getElementById(node);

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
}
