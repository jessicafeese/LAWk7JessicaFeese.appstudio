customerAdd.onshow = function() {
  txtCurrentCust_contents.style.height = "50px"

  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`the results are \n ${results}`)
    if (results.length == 0)
      txtCurrentCust.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
      txtCurrentCust.value = message
    }

  } else
    txtCurrentCust.value = "Error code: " + req.status
}



btnAdd.onclick = function() {
  name = inptName.value
  address = inptAddress.value
  city = inptCity.value
  state = inptState.value
  zipcode = inptZip.value
  query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + address + "', '" + city + "', '" + state + "', '" + zipcode + "')"
  alert(query)
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=wfg15722&query=" + query)

  if (req.status == 200) {
    message = ""
    for (i = 0; i < results.length; i++)
      message = message + results[i][1] + "\n"
    lblAdded.value = message
  } else
    lblAdded.value = "Error: " + req.status
}