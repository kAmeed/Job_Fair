/// <reference types="../@types/jquery"/>

let cartona=`<thead>
        <th class="text-center" scope="col">ID</th>
        <th class="text-center" scope="col">Name</th>
        <th class="text-center" scope="col">Date</th>
        <th class="text-center" scope="col">Amount</th>
      </thead>`

let container=[];

for (let customerId = 0; customerId < 5; customerId++) {
    for (let transactionId = 0; transactionId < 9; transactionId++) {
        if (customerId==transactions[transactionId].customer_id-1) {
            cartona+=`<thead>
        <th class="text-center" scope="col">${customerId+1}</th>
        <th class="text-center" scope="col">${customers[customerId].name}</th>
        <th class="text-center" scope="col">${transactions[transactionId].date}</th>
        <th class="text-center" scope="col">${transactions[transactionId].amount}</th>
      </thead>`

      let info={
        id:customerId+1,
        customerName:customers[customerId].name,
        transactionDate:transactions[transactionId].date,
        transactionAmount:transactions[transactionId].amount
      }

      container.push(info);
        }
    }
    
}

$('.table').html(cartona);


$('#searchName').on('input',function () {
  $('.chartDisplay').css('display','none')

    let value=$('#searchName').val();
    cartona=`<thead>
        <th class="text-center" scope="col">ID</th>
        <th class="text-center" scope="col">Name</th>
        <th class="text-center" scope="col">Date</th>
        <th class="text-center" scope="col">Amount</th>
      </thead>`

        for (let i = 0; i < container.length; i++) {
        if (container[i].customerName.toLowerCase().includes(value.toLowerCase())==true) {

            cartona+=`<thead>
        <th class="text-center" scope="col">${container[i].id}</th>
        <th class="text-center" scope="col">${container[i].customerName}</th>
        <th class="text-center" scope="col">${container[i].transactionDate}</th>
        <th class="text-center" scope="col">${container[i].transactionAmount}</th>
      </thead>`

        }
        $('.table').html(cartona);
}})

$('#searchAmount').on('input',function () {
  $('.chartDisplay').css('display','none')

    let amount=$('#searchAmount').val();
    cartona=`<thead>
        <th class="text-center" scope="col">ID</th>
        <th class="text-center" scope="col">Name</th>
        <th class="text-center" scope="col">Date</th>
        <th class="text-center" scope="col">Amount</th>
      </thead>`

        for (let i = 0; i < container.length; i++) {
        if (container[i].transactionAmount.toString().includes(amount.toString())==true) {
            cartona+=`<thead>
        <th class="text-center" scope="col">${container[i].id}</th>
        <th class="text-center" scope="col">${container[i].customerName}</th>
        <th class="text-center" scope="col">${container[i].transactionDate}</th>
        <th class="text-center" scope="col">${container[i].transactionAmount}</th>
      </thead>`

        }
        $('.table').html(cartona);
}})



$('#NamesCustomers').on('change',function () {
    let xValues=[]
    let yValues=[]
    cartona=`<thead>
        <th class="text-center" scope="col">ID</th>
        <th class="text-center" scope="col">Name</th>
        <th class="text-center" scope="col">Date</th>
        <th class="text-center" scope="col">Amount</th>
      </thead>`
    let selectedName=$('#NamesCustomers option:selected').text()
    for (let i = 0; i < container.length; i++){
        if (container[i].customerName==selectedName) {
            cartona+=`<thead>
        <th class="text-center" scope="col">${container[i].id}</th>
        <th class="text-center" scope="col">${container[i].customerName}</th>
        <th class="text-center" scope="col">${container[i].transactionDate}</th>
        <th class="text-center" scope="col">${container[i].transactionAmount}</th>
      </thead>`
      xValues.push(container[i].transactionDate)
      yValues.push(container[i].transactionAmount)
      
    }
    }
    if (selectedName=='Or Pick a Customer from Menu'){
        cartona=`<thead>
        <th class="text-center" scope="col">ID</th>
        <th class="text-center" scope="col">Name</th>
        <th class="text-center" scope="col">Date</th>
        <th class="text-center" scope="col">Amount</th>
      </thead>`
        for (let i = 0; i < container.length; i++) {
                cartona+=`<thead>
            <th class="text-center" scope="col">${container[i].id}</th>
            <th class="text-center" scope="col">${container[i].customerName}</th>
            <th class="text-center" scope="col">${container[i].transactionDate}</th>
            <th class="text-center" scope="col">${container[i].transactionAmount}</th>
          </thead>`    
    }
    }
   
    $('.table').html(cartona);
    if (selectedName!=='Or Pick a Customer from Menu'){
        let barColors = ["red", "green","blue","orange","brown"];

        new Chart("myChart", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Customer Transactions"
            }
          },
          scales: {
            y: {
              min: 0,
              max: 2000,
            }}
        });
        $('.chartDisplay').css('display','block')
        $('.chartDisplay').css('background-color','white')

    }else{
        $('.chartDisplay').css('display','none')
    }

   
})







