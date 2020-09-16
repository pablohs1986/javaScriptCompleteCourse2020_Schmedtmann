// BUDGET CONTROLLER
var budgetController = (function(){ // ---> Un módulo (IIFE + Closures)
    

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
var Controller = (function(budgetCtrl, UICtrl) { // ---> Otro módulo

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        // 1. Get the filed input data
        var input = UICtrl.getInput(); // --> Usa el método getInput de UIController
        console.log(input);
        // 2. Add the item to de budget controller

        // 3. Add the new item to UI

        // 4. Calculate de budget

        // 5. Display de budget on the UI
        console.log('Works!');
    }
    
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) { // Esto es para que además de clickando el botón, también se ejecute el evento al pulsar enter (es la key nº 13)

        if(event.key === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController); // Toma los otros módulos como parámetros, a través de budgetCtrl y UICtrl, de esa forma da igual que estos cambien el nombre
