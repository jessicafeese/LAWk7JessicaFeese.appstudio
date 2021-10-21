customerDelete.onshow = function() {
  txtCustomerNames_contents.style.height = "200px"

  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`the results are \n ${results}`)
    if (results.length == 0)
      txtCustomerNames.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
      txtCustomerNames.value = message
    }

  } else
    txtCustomerNames.value = "Error code: " + req.status
}


btnDelete.onclick=function(){
  let nameDelete = inptDeleteName.value
  let found = false
  for (i = 0; i < results.length; i++) {
    if (nameDelete == results[i][1]) {
      found = true
      break
    }
  }
  if (found == false)
    lblDelete.value = "That customer name is not in the database."
  else if (found == true) {
    query = "DELETE FROM customer WHERE name = '" + nameDelete + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=wfg15722&query=" + query)
    if (req.status == 200)
        lblDelete.value = `You have deleted the customer named ${nameDelete}`
    else
      lblDelete.value = `Error: ${req.status}`
  }
}
