const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = function(name){
   return cats.push(name);
}

const destructivelyPrependCat = function(name){
   return cats.unshift(name);
}

const destructivelyRemoveLastCat = function(name){
   return cats.pop(name);
}

const destructivelyRemoveFirstCat = function(name){
   return cats.shift(name);
}

const appendCat = function(name){
   let newArray = [...cats, name];
   return newArray;
}

const prependCat = function(name){
   let newArray2 = [name,...cats];
   return newArray2;
}

const removeLastCat = function(name){
   let newArray3 = cats.slice(0, 2);
   return newArray3;
}

const removeFirstCat = function(name){
   let newArray4 = cats.slice(1);
   return newArray4;
}
/*


    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});

*/

