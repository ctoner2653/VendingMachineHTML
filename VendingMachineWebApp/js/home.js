$(document).ready(function () {
    loadMachine();
    $('#change-btn').click(function (event){
            var change = 0;
            $("#give-change").val(change);
            console.log("Helllo");
    }); 
    $('#quarter').click(function (event){
        var stringOfNumber = $('#inserted-money').val();
        var decimalNumber = parseFloat(stringOfNumber);
        var number = decimalNumber * 100;
        
        number = number + 25;
        
        var finalNumber = number/100;
        $('#inserted-money').val(finalNumber);
        
    });
    $('#dime').click(function (event){
        var stringOfNumber = $('#inserted-money').val();
        var decimalNumber = parseFloat(stringOfNumber);
        var number = decimalNumber * 100;
        
        number = number + 10;
        
        var finalNumber = number/100;
        $('#inserted-money').val(finalNumber);
       
    });
    $('#dollar').click(function (event){
        var stringOfNumber = $('#inserted-money').val();
        var decimalNumber = parseFloat(stringOfNumber);
        var number = decimalNumber * 100;
        
        number = number + 100;
        
        var finalNumber = number/100;
        $('#inserted-money').val(finalNumber);
       
    });
    $('#nickel').click(function (event){
        var stringOfNumber = $('#inserted-money').val();
        var decimalNumber = parseFloat(stringOfNumber);
        var number = decimalNumber * 100;
        
        number = number + 5;
        
        var finalNumber = number/100;
        $('#inserted-money').val(finalNumber);
       
    });
    $('#item1').click(function (event){
            $("#item-id").val("1");
            var stringPrice = $("#item-price1").text();
            var actualPrice = parseInt(stringPrice * 100);
            var currentMoneyString = $("#inserted-money").val();
            var actualCurrentMoney = parseInt(currentMoneyString * 100);
            var checkQuanity = $("#item-quanity1").text();
            
            checkQuanity = parseInt(checkQuanity);
            if(checkQuanity > 0){
            if(actualCurrentMoney >= actualPrice){
                $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/' + actualCurrentMoney + "/item/1",
            success: function(machineArray){
            $.each(machineArray, function(index, item){
                    
                });   
            },
         })
       
                $("#message").val("Thank You!!");
                actualCurrentMoney = actualCurrentMoney - actualPrice;
                actualCurrentMoney = actualCurrentMoney/100;
                
                var change = actualCurrentMoney;
                $("#give-change").val(change);
                actualCurrentMoney = 0;
                $("#inserted-money").val(actualCurrentMoney);
                
            }else{
                $("#message").val("You Can't Afford this");
            }
            }else{
                $("#message").val("This Item Is Not In Stock");
            }
        loadMachine();
        
    });
     $('#item2').click(function (event){
         $("#item-id").val("2");
            var stringPrice = $("#item-price2").text();
            var actualPrice = parseInt(stringPrice * 100);
            var currentMoneyString = $("#inserted-money").val();
            var actualCurrentMoney = parseInt(currentMoneyString * 100);
            var checkQuanity = $("#item-quanity2").text();
            
            checkQuanity = parseInt(checkQuanity);
            if(checkQuanity > 0){
            if(actualCurrentMoney >= actualPrice){
                $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/' + actualCurrentMoney + "/item/2",
            success: function(machineArray){
            $.each(machineArray, function(index, item){
                    
                });   
            },
         })
       
                $("#message").val("Thank You!!");
                actualCurrentMoney = actualCurrentMoney - actualPrice;
                actualCurrentMoney = actualCurrentMoney/100;
                
                var change = actualCurrentMoney;
                $("#give-change").val(change);
                actualCurrentMoney = 0;
                $("#inserted-money").val(actualCurrentMoney);
                
            }else{
                $("#message").val("You Can't Afford this");
            }
            }else{
                $("#message").val("This Item Is Not In Stock");
            }
        loadMachine();
    });
     $('#item3').click(function (event){
        $("#item-id").val("3");
            var stringPrice = $("#item-price3").text();
            var actualPrice = parseInt(stringPrice * 100);
            var currentMoneyString = $("#inserted-money").val();
            var actualCurrentMoney = parseInt(currentMoneyString * 100);
            var checkQuanity = $("#item-quanity3").text();
            
            checkQuanity = parseInt(checkQuanity);
            if(checkQuanity > 0){
            if(actualCurrentMoney >= actualPrice){
                $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/' + actualCurrentMoney + "/item/3",
            success: function(machineArray){
            $.each(machineArray, function(index, item){
                    
                });   
            },
         })
       
                $("#message").val("Thank You!!");
                actualCurrentMoney = actualCurrentMoney - actualPrice;
                actualCurrentMoney = actualCurrentMoney/100;
                
                var change = actualCurrentMoney;
                $("#give-change").val(change);
                actualCurrentMoney = 0;
                $("#inserted-money").val(actualCurrentMoney);
                
            }else{
                $("#message").val("You Can't Afford this");
            }
            }else{
                $("#message").val("This Item Is Not In Stock");
            }
        loadMachine();
    });
     $('#item4').click(function (event){
       $("#item-id").val("4");
            var stringPrice = $("#item-price4").text();
            var actualPrice = parseInt(stringPrice * 100);
            var currentMoneyString = $("#inserted-money").val();
            var actualCurrentMoney = parseInt(currentMoneyString * 100);
            var checkQuanity = $("#item-quanity4").text();
            
            checkQuanity = parseInt(checkQuanity);
            if(checkQuanity > 0){
            if(actualCurrentMoney >= actualPrice){
                $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/' + actualCurrentMoney + "/item/4",
            success: function(machineArray){
            $.each(machineArray, function(index, item){
                    
                });   
            },
         })
       
                $("#message").val("Thank You!!");
                actualCurrentMoney = actualCurrentMoney - actualPrice;
                actualCurrentMoney = actualCurrentMoney/100;
                
                var change = actualCurrentMoney;
                $("#give-change").val(change);
                actualCurrentMoney = 0;
                $("#inserted-money").val(actualCurrentMoney);
                
            }else{
                $("#message").val("You Can't Afford this");
            }
            }else{
                $("#message").val("This Item Is Not In Stock");
            }
        loadMachine();
    });
     $('#item5').click(function (event){
       $("#item-id").val("5");
            var stringPrice = $("#item-price5").text();
            var actualPrice = parseInt(stringPrice * 100);
            var currentMoneyString = $("#inserted-money").val();
            var actualCurrentMoney = parseInt(currentMoneyString * 100);
            var checkQuanity = $("#item-quanity5").text();
            
            checkQuanity = parseInt(checkQuanity);
            if(checkQuanity > 0){
            if(actualCurrentMoney >= actualPrice){
                $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/' + actualCurrentMoney + "/item/5",
            success: function(machineArray){
            $.each(machineArray, function(index, item){
                    
                });   
            },
         })
       
                $("#message").val("Thank You!!");
                actualCurrentMoney = actualCurrentMoney - actualPrice;
                actualCurrentMoney = actualCurrentMoney/100;
                
                var change = actualCurrentMoney;
                $("#give-change").val(change);
                actualCurrentMoney = 0;
                $("#inserted-money").val(actualCurrentMoney);
                
            }else{
                $("#message").val("You Can't Afford this");
            }
            }else{
                $("#message").val("This Item Is Not In Stock");
            }
        loadMachine();
    });
     $('#item6').click(function (event){
         $("#item-id").val("6");
            var stringPrice = $("#item-price6").text();
            var actualPrice = parseInt(stringPrice * 100);
            var currentMoneyString = $("#inserted-money").val();
            var actualCurrentMoney = parseInt(currentMoneyString * 100);
            var checkQuanity = $("#item-quanity6").text();
            
            checkQuanity = parseInt(checkQuanity);
            if(checkQuanity > 0){
            if(actualCurrentMoney >= actualPrice){
                $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/' + actualCurrentMoney + "/item/6",
            success: function(machineArray){
            $.each(machineArray, function(index, item){
                    
                });   
            },
         })
       
                $("#message").val("Thank You!!");
                actualCurrentMoney = actualCurrentMoney - actualPrice;
                actualCurrentMoney = actualCurrentMoney/100;
                
                var change = actualCurrentMoney;
                $("#give-change").val(change);
                actualCurrentMoney = 0;
                $("#inserted-money").val(actualCurrentMoney);
                
            }else{
                $("#message").val("You Can't Afford this");
            }
            }else{
                $("#message").val("This Item Is Not In Stock");
            }
        loadMachine();
    });
     $('#item7').click(function (event){
        $("#item-id").val("7");
            var stringPrice = $("#item-price7").text();
            var actualPrice = parseInt(stringPrice * 100);
            var currentMoneyString = $("#inserted-money").val();
            var actualCurrentMoney = parseInt(currentMoneyString * 100);
            var checkQuanity = $("#item-quanity7").text();
            
            checkQuanity = parseInt(checkQuanity);
            if(checkQuanity > 0){
            if(actualCurrentMoney >= actualPrice){
                $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/' + actualCurrentMoney + "/item/7",
            success: function(machineArray){
            $.each(machineArray, function(index, item){
                    
                });   
            },
         })
       
                $("#message").val("Thank You!!");
                actualCurrentMoney = actualCurrentMoney - actualPrice;
                actualCurrentMoney = actualCurrentMoney/100;
                
                var change = actualCurrentMoney;
                $("#give-change").val(change);
                actualCurrentMoney = 0;
                $("#inserted-money").val(actualCurrentMoney);
                
            }else{
                $("#message").val("You Can't Afford this");
            }
            }else{
                $("#message").val("This Item Is Not In Stock");
            }
        loadMachine();
    });
     $('#item8').click(function (event){
         $("#item-id").val("8");
            var stringPrice = $("#item-price8").text();
            var actualPrice = parseInt(stringPrice * 100);
            var currentMoneyString = $("#inserted-money").val();
            var actualCurrentMoney = parseInt(currentMoneyString * 100);
            var checkQuanity = $("#item-quanity8").text();
            
            checkQuanity = parseInt(checkQuanity);
            if(checkQuanity > 0){
            if(actualCurrentMoney >= actualPrice){
                $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/' + actualCurrentMoney + "/item/8",
            success: function(machineArray){
            $.each(machineArray, function(index, item){
                    
                });   
            },
         })
       
                $("#message").val("Thank You!!");
                actualCurrentMoney = actualCurrentMoney - actualPrice;
                actualCurrentMoney = actualCurrentMoney/100;
                
                var change = actualCurrentMoney;
                $("#give-change").val(change);
                actualCurrentMoney = 0;
                $("#inserted-money").val(actualCurrentMoney);
                
            }else{
                $("#message").val("You Can't Afford this");
            }
            }else{
                $("#message").val("This Item Is Not In Stock");
            }
        loadMachine();
    });
     $('#item9').click(function (event){
       $("#item-id").val("9");
            var stringPrice = $("#item-price9").text();
            var actualPrice = parseInt(stringPrice * 100);
            var currentMoneyString = $("#inserted-money").val();
            var actualCurrentMoney = parseInt(currentMoneyString * 100);
            var checkQuanity = $("#item-quanity9").text();
            
            checkQuanity = parseInt(checkQuanity);
            if(checkQuanity > 0){
            if(actualCurrentMoney >= actualPrice){
                $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/' + actualCurrentMoney + "/item/9",
            success: function(machineArray){
            $.each(machineArray, function(index, item){
                    
                });   
            },
         })
       
                $("#message").val("Thank You!!");
                actualCurrentMoney = actualCurrentMoney - actualPrice;
                actualCurrentMoney = actualCurrentMoney/100;
                
                var change = actualCurrentMoney;
                $("#give-change").val(change);
                actualCurrentMoney = 0;
                $("#inserted-money").val(actualCurrentMoney);
                
            }else{
                $("#message").val("You Can't Afford this");
            }
            }else{
                $("#message").val("This Item Is Not In Stock");
            }
        loadMachine();
    });
                
});
function loadMachine(){
     $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/items',
        success: function(machineArray){
            $.each(machineArray, function(index, item){
                var name= item.name;
                var id = item.id;
                var price = item.price;
                var quanity = item.quantity;
                
                $("#item-name" + id).text(name);
                $("#item-price" + id).text(price);
                $("#item-quanity" + id).text(quanity);
                
            });   
        },
})
};