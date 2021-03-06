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

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return { // ---> REPASAR
        addItem: function(type, des, val){
            var newItem;

            // Create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
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
        
        calculateBudget: function(){
            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            // Calculate budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            // Calculate the percent of income that we spent
            if (data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
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
    inputBtn: '.add__btn',
    incomeContainer: '.income__list', // <--- OJO con los puntos, son clases!!!
    expensesContainer: '.expenses__list',
    budgetlabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expenseLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage'
}

    return {
        getInput: function() {
            return{ // --> Devuelve un objeto
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type){
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';            
            }

            // Replace the placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields) // --> Pasa lista a array

            fieldsArr.forEach(function(current, index, array){ // --> Recorre los elementos y los limpia
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayBudget: function(obj){
            document.querySelector(DOMstrings.budgetlabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalExp;
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
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

    var updateBudget = function() {
        // 1. Calculate de budget
        budgetCtrl.calculateBudget();
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        // 3. Display de budget on the UI
        UICtrl.displayBudget(budget);
    };

    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get the filed input data
        input = UICtrl.getInput(); // --> Usa el método getInput de UIController
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0){
             // 2. Add the item to de budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // 3. Add the new item to UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();
        }
    };
    
    return {
        init: function(){
            console.log('App has started');
            setupEventListeners();
            
        }
    };
})(budgetController, UIController); // Toma los otros módulos como parámetros, a través de budgetCtrl y UICtrl, de esa forma da igual que estos cambien el nombre

controller.init();