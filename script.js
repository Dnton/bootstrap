var $h1 = $('h1')
var $firstHome = $('td').eq(1)
var $allFirstHome = $firstHome.children()
var firstPrice = $allFirstHome.eq(4)

var $lastHome = $('tr').eq(3)
var $lastSize = $lastHome.children().eq(4)

// console.log($allFirstHome.children().eq(4).html())

var $allButtons = $('button');

// $allButtons.on('click', btnClick)

// var count = 0
//
// function btnClick() {
//   // if we set the $h2 var outside, it will reference the old h2 and keep
//   // changing the var outside, instead of creating a new element
//   var $h2 = $("<h2>")
//   // $('body').append($h2) => better practice, I just use h1 cos I
//   // find it nicer stylistically
//   $h1.append($h2)
//   count++
//   $h2.text(count)
// }

// var $rowButton = $('tbody button')

// var $rowButton = $("tr td").children('button')
//
// $rowButton.on('click', createButton)
//
// function createButton()  {
//   var $newButton = $("<button>")
//   $('body').append($newButton)
//   $newButton.text($(this).html())
// }

var newHomes = {
  address: "27569 Cedarwood Drive",
  sf: "2,535",
  bedrooms: 3,
  baths: 2.5,
  price: "$496,500"
}


var $addHome = $("#addHome")

$addHome.on('click', createRow)

var tdno = 6

function createRow() {
  var $newRow = $('<tr>')
  var $currentTable = $('tbody')
  $currentTable.append($newRow)

  for (var i = 0; i < tdno; i++) {
    var $newTd = $('<td>')
    $newRow.append($newTd).eq(i)

    if (i === 0)
    $newTd.text(newHomes.address)
    if (i === 1)
    $newTd.text(newHomes.sf)
    if (i === 2)
    $newTd.text(newHomes.bedrooms)
    if (i === 3)
    $newTd.text(newHomes.baths)
    if (i === 4)
    $newTd.text(newHomes.price)
    if (i === 5)
    $newTd.html('<button class="btn btn-xs btn-danger">Remove 4</button>')
}
}
// Another way to loop details into <td>
// for (var key in newHomes) {
//   var $cell = $('<td>');
//   $cell.text(newHomes[key])
//   $row.append($cell);
// }

var $rowButton = $("tr td").children('button')
