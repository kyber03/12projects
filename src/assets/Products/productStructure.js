const productsStructure = [
    // Product 1
    {
      filter1: "", // filter1 value
      filter2: "", // filter2 value
      title: "", // title of product
      category: "", // category of product
      price: 1, // price of product in INR
      imgs: ["", ""], // array of images of product
      specs: ["", ""], // Array or String of specs of product -> If Array, then render as list else if String, then render as single line
      inStock: 20, // quantity in stock of product -> If 0, then hide from the store, or less than 10, then show a "Very few left" or play with this value
      eta: 20, // estimated time of arrival of product in mins
      id: "", // unique id of product
      rating: 0.0, // rating of product
    },
  ];