angular.module('speeq')
  .factory('annyangFactory', [function () {

    if (annyang){
      console.log('running annyang')

      function Search () {
        this.cuisine = 'Taco Town'
      }

      Search.prototype.setCuisine = function (cuis) {
        this.cuisine = cuis
      }

      var search = new Search();

      var greeting = function() {
        console.log('i hear you')
        alert('HELLO THERE')
        // $('#greeting').alert('Hello!');
      }

      function searchCuisine (cuisine) {
        var cuisines = ['hungarian', 'american', 'japanese', 'mexican'];
        cuisine = cuisine.toLowerCase()
        cuisine = cuisines.indexOf(cuisine) === -1 ? null : cuisine
        search.setCuisine(cuisine)
        console.log('searchCuisine fired; search :', search)
      }

      function add (num1, num2) {
        alert(num1 + ' + ' + num2 + ' = ' + (parseInt(num1) + parseInt(num2)))
      }




    }

    console.log('type of annyang', typeof annyang)

    return {
      annyang : annyang,
      search : search
    }

}])

