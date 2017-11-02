
let createTableTemplate = () => {
  let row
  let rowCount = 0;
  let table = '<table id="board-table">'
  for (let i = 0; i <= 8; i++) {
    rowCount += 1
    row = ''
    if (i === 8) {
      table += '</tbale>'
      break;
    }
    for (let i = 0; i <= 8; i++ ) {
      if (i === 0) {
        row += '<tr>'
      }
      if (i === 8) {
        row += '</tr>'
        break;
      }
      if (rowCount%2 ===0) {
        if (i % 2 === 0) {
          row += '<td class="cell dark-cell"></td>'
        } else {
          row += '<td class="cell light-cell"></td>'
        }
      } else {
        if (i % 2 === 0) {
          row += '<td class="cell light-cell"></td>'
        } else {
          row += '<td class="cell dark-cell"></td>'
        }
        
      }
    }
    table += row
  }
  return table;
}

export function initializeBoard() {
  document.getElementById("board").innerHTML = createTableTemplate ()

}

