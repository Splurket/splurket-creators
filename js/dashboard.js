//Two canvas for responsive design 
new Chart(document.getElementById("line-chart-xl"), {
type: 'line',
data: {
labels: ["January","February","March","April","May","June","July"],
datasets: [{ 
data: [1000,2000,980,300,1300,400,1500],
label: "Monthly sales",
// borderColor: "#3e95cd",
borderColor:"#66B3BA",
fill: true,
fill: {
    target: 'origin',
    above: 'rgb(82, 179, 108,0.9)',   // Fill color above the origin   
  }
        }]
},
options: {
    responsive:true,
    maintainAspectratio:false,
title: {
display: true,
text: 'World population per region (in millions)',
}
}
});
new Chart(document.getElementById("line-chart-lg"), {
    type: 'line',
    data: {
    labels: ["January","February","March","April","May","June","July"],
    datasets: [{ 
    data: [1000,2000,980,300,1300,400,1500],
    label: "Monthly sales",
    // borderColor: "#3e95cd",
    borderColor:"#66B3BA",
    fill: true,
    fill: {
        target: 'origin',
        above: 'rgb(82, 179, 108,0.9)',   // Fill color above the origin   
      }
            }]
    },
    options: {
        responsive:true,
        maintainAspectratio:false,
    title: {
    display: true,
    text: 'World population per region (in millions)',
    }
    }
    });