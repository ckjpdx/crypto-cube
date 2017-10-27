function encrypt(sentence){
  var nearestSquare = Math.floor(Math.sqrt(sentence.length));
  var column = new RegExp('.{1,' + nearestSquare + '}', 'g');
  var groups = sentence.match(column);
  var encryptedArray = [];
  for (var i = 0; i < groups.length; i++) {
    groups.forEach(function(group){
      encryptedArray.push(group.charAt(i));
    });
  }
  encryptedArray = encryptedArray.join("");

  var decrypter = function(){
    var indexCounterArray = [];
    for (var l = 0; l < nearestSquare + 1; l++) {
      var indexCounter = 0;
      groups.forEach(function(group){
        if (group[l]) {
          indexCounter++;
        }
      });
      indexCounterArray.push(indexCounter);
    }
    var decrypted = [];
    var encryptedArrayClone = encryptedArray.split("");

    for (var i = 0; i < nearestSquare; i++) {
      console.log(i);
      k = Number(i);
      indexCounterArray.forEach(function(index){
        decrypted.push(encryptedArrayClone[k]);
        k += index;
        console.log(encryptedArrayClone);
        console.log(encryptedArrayClone[k]);
        console.log(decrypted);
      });
    }
    decrypted = decrypted.join("");
    return decrypted
  }
  var decryptedString = decrypter();
  encryptedArray = encryptedArray.match(/.{1,5}/g).join(" ");
  var displayArray = [];
  displayArray.push(encryptedArray);
  displayArray.push(decryptedString);
  return displayArray;
}

$(function(){
  $('#user-input').submit(function(event){
    event.preventDefault();
    var userInput = $('input').val().replace(/ /g,"");
    var encrypted = encrypt(userInput);
    $('#result').text(encrypted);
  });
});
