const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

  class Field {
      constructor(arr){
          this._arr = arr;
      }
      print(){
          console.log(arr.join(''));
      }
  }
