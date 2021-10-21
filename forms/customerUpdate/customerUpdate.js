customerUpdate.onshow = function() {
  txtCustomers_contents.style.height = "50px"
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`the results are \n ${results}`)
    if (results.length == 0)
      txtCustomers.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
      txtCustomers.value = message
    }

  } else
    txtCustomers.value = "Error code: " + req.status
}


btnUpdate.onclick = function() {
  let updatedName = inptNewName.value
  let oldName = inptOldName.value
    if (results.length > 0) {
      query = "UPDATE customer SET `name` ='" + updatedName + "' WHERE `name` = '" + oldName + "'"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=wfg15722&query=" + query)
      message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
        txtUpdated.value = message
      }else
        txtUpdated.value = `Error: ${req.status}`
}