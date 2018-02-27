exports.city = function(req, res) {
    var cityLabel = "";
    var city = "";
    if (req.params.city == "london" || req.params.city == "") {
      city = "london";
      cityLabel = "London";
    } else if (req.params.city == "paris") {
      city = "paris";
      cityLabel = "Paris";
    } else if (req.params.city == "newyork") {
      city = "newyork";
      cityLabel = "New York";
    } else if (req.params.city == "madrid") {
      city = "madrid";
      cityLabel = "Madrid";
    }
    var city =
      
    res.render("city", {
      City: city,
      Label: cityLabel
    });
  }