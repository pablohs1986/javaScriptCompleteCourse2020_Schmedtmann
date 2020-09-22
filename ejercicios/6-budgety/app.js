// BUDGET CONTROLLER
var budgetController = (function(){ // ---> Un módulo (IIFE + Closures)
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return { // ---> REPASAR
        addItem: function(type, des, val){
            var newItem;

            // Create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type.length - 1]].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on inc or exp type
            if(type === "exp"){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;

        },
        testing: function(){
            console.log(data);
        }
    };

})();




// UI CONTROLLER
var UIController = (function() { // ---> Otro módulo
    
var DOMstrings = { // Esto es privado
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
}

    return {
        getInput: function() {
            return{ // --> Devuelve un objeto
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function() { // Expone, publica las DOMstrings
            return DOMstrings;
        }
    }

})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) { // ---> Otro módulo

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) { // Esto es para que además de clickando el botón, también se ejecute el evento al pulsar enter (es la key nº 13)
    
            if(event.key === 13 || event.which === 13) {
                ctrlAddItem();
            }
    
        });
    }


    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get the filed input data
        input = UICtrl.getInput(); // --> Usa el método getInput de UIController
        // 2. Add the item to de budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the new item to UI

        // 4. Calculate de budget

        // 5. Display de budget on the UI
        console.log('Works!');
    };
    
    return {
        init: function(){
            console.log('App has started');
            setupEventListeners();
            
        }
    };
})(budgetController, UIController); // Toma los otros módulos como parámetros, a través de budgetCtrl y UICtrl, de esa forma da igual que estos cambien el nombre

controller.init();