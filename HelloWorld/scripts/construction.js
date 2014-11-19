function createCar(make, model)
{
    var car = {
      make: make,
      model: model,
      description : function()
      {
          return make + ' ' + model;
      }
    };
    
    return car;
}

function Car(make, model)
{
    this.make = make;
    this.model = model;
    this.description = function()
    {
        return make + ' ' + model;
    }
}

document.addEventListener('DOMContentLoaded', function() {
  var mattCar = createCar('Nash', 'Rambler');
  var chrisCar = createCar('Nissan', 'Altima');
  
  mattCar = new Car('Nash', 'Rambler');
  chrisCar = new Car('Nissan', 'Altima');
});