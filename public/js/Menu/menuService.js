var app = angular.module('avBApp');

app.service('menuService', function($http) {
//    var menu = [
//        {
//        image: "",
//        name: "Chicken Caesar Salad",
//        price: 4.49,
//        category: "Salads",
//        description: "chicken, romain lettuce, garlic croutons, asiago cheese, caesar dressing"
//        },
//        
//        {
//        image: "",
//        name: "Greek Salad",
//        price: 4.49,
//        category: "Salads",
//        description: "romain lettuce, black olives, cucumber, red onion, feta cheese, italian dressing"
//        },
//        
//        {
//        image: "",
//        name: "Garden Salad",
//        price: 4.49,
//        category: "Salads",
//        description: "romain lettuce, tomatoes, cucumbers, chicken, raspberry dressing"
//        },
//        
//        {
//        image: "",
//        name: "Spinach Salad",
//        price: 4.49,
//        category: "Salads",
//        description: "spinach, egg, bacon, croutons, poppy seed dressing"
//        },
//        
//        {
//        image: "",
//        name: "Soup of the Day",
//        price: 3.99,
//        category: "Soups",
//        description: "white chicken chili, cheddar broccoli, tomato basil"
//        },
//        
//        {
//        image: "",
//        name: "Soup and Salad",
//        price: 5.99,
//        category: "Soups",
//        description: "your choice of soup and a salad"
//        },
//        
//        {
//        image: "",
//        name: "Turkey Bacon Avocado",
//        price: 4.99,
//        category: "Sandwiches",
//        description: "turkey, bacon, avocado, honey mustard, provolone cheese, on focaccia bread"
//        },
//        
//        {
//        image: "",
//        name: "Turkey Cranberry",
//        price: 4.99,
//        category: "Sandwiches",
//        description: "turkey, cranberry sauce, cucumbers, sprouts, honey mustard, on ciabatta bread"
//        },
//        
//        {
//        image: "",
//        name: "Chicken Salad",
//        price: 4.99,
//        category: "Sandwiches",
//        description: "chicken, cranberries, apples, grapes, pecans, on a croissant roll"
//        },
//        
//        {
//        image: "",
//        name: "Avenue Club",
//        price: 4.99,
//        category: "Sandwiches",
//        description: "roast beef, ham, provolone cheese, lettuce, tomato, honey mustard, mayonnaise, on sourdough bread"
//        },
//        
//        {
//        image: "",
//        name: "Roast Beef",
//        price: 4.99,
//        category: "Sandwiches",
//        description: "roast beef, cheddar cheese, lettuce, tomato, horseradish, on a ciabatta roll"
//        },
//        
//        {
//        image: "",
//        name: "Ham and Cheese",
//        price: 4.99,
//        category: "Sandwiches",
//        description: "ham, cheddar cheese, lettuce, tomato, mayonnaise, on sourdough"
//        },
//        
//        {
//        image: "",
//        name: "Peanut Butter and Jelly",
//        price: 2.99,
//        category: "Sandwiches",
//        description: "peanut butter, raspberry jam, on country french bread"
//        },
//        
//        {
//        image: "",
//        name: "Tuscan Chicken",
//        price: 4.99,
//        category: "Panini",
//        description: "chicken, pesto, sundried tomatoes, spinach, red onion, provolone cheese"
//        },
//        
//        {
//        image: "",
//        name: "Turkey Pepper Jack",
//        price: 4.99,
//        category: "Panini",
//        description: "turkey, pepper jack cheese, roasted red peppers, spicy mayo"
//        },
//        
//        {
//        image: "",
//        name: "BBQ Chicken",
//        price: 4.99,
//        category: "Panini",
//        description: "chicken, cole slaw, bacon, cheddar cheese, honey BBQ sauce"
//        },
//        
//        {
//        image: "",
//        name: "Barratt Avenue",
//        price: 5.49,
//        category: "Savory Crepes",
//        description: "chicken, barratt cheese sauce, onions, mushrooms"
//        },
//        
//        {
//        image: "",
//        name: "Pacific Drive",
//        price: 5.49,
//        category: "Savory Crepes",
//        description: "chicken, cheddat cheese, sour cream, guacamole, salsa"
//        },
//        
//        {
//        image: "",
//        name: "The Avenue",
//        price: 5.49,
//        category: "Savory Crepes",
//        description: "turkey, bacon, lettuce, tomato, avocado, mayonnaise"
//        },
//        
//        {
//        image: "",
//        name: "Vegetable",
//        price: 4.99,
//        category: "Savory Crepes",
//        description: "avocado, lettuce, cucumber, ranch dressing"
//        },
//        
//        {
//        image: "",
//        name: "Sweet Retreat",
//        price: 4.99,
//        category: "Sweet Crepes",
//        description: "nutella, strawberries, bananas, whipped cream"
//        },
//        
//        {
//        image: "",
//        name: "Beries & Cream",
//        price: 5.49,
//        category: "Sweet Crepes",
//        description: "raspberries, strawberries, blueberries, cream cheese, whipped cream"
//        },
//        
//        {
//        image: "",
//        name: "Ape Deight",
//        price: 4.99,
//        category: "Sweet Crepes",
//        description: "bananas, caramel, whipped cream"
//        },
//        
//        {
//        image: "",
//        name: "Cinnamon Sunrise",
//        price: 2.99,
//        category: "Sweet Crepes",
//        description: "butter, cinnamon sugar, whipped cream"
//        },
//        
//        {
//        image: "",
//        name: "Caramel Lover",
//        price: 4.99,
//        category: "Sweet Crepes",
//        description: "cream cheese, caramel, whipped cream"
//        },
//        
//        {
//        image: "",
//        name: "Wake Up Crepe",
//        price: 4.99,
//        category: "Breakfast",
//        description: "eggs, ham, cheese, salsa"
//        },
//        
//        {
//        image: "",
//        name: "Sunrise Crepe",
//        price: 4.99,
//        category: "Breakfast",
//        description: "eggs, bacon, sausage, cheese, salsa"
//        },
//        
//        {
//        image: "",
//        name: "Breakfast Panini",
//        price: 4.99,
//        category: "Breakfast",
//        description: "egg, bacon, spicy mayo, red peppers, cheddar cheese"
//        },
//        
//        {
//        image: "",
//        name: "Ham and Cheese Croissant",
//        price: 4.99,
//        category: "Breakfast",
//        description: "egg, ham, cheddar cheese, on a butter croissant"
//        },
//        
//        {
//        image: "",
//        name: "French Toast",
//        price: 4.99,
//        category: "Breakfast",
//        description: "custard soaked bread grilled and topped with buttermilk syrup, strawberries, and whipped cream"
//        },
//        
//        {
//        image: "",
//        name: "Waffle",
//        price: 4.99,
//        category: "Breakfast",
//        description: "belgian waffle topped with biscoff, strawberries, bananas, syrup, and whipped cream"
//        },
//    ];
    
    
    this.getMenu = function() {
        return $http({
            method: "GET",
            url: "/Products"
        }).then(function(results) {
             return _.groupBy(results.data, 'category');
        }) 
    }
    
    
    
});