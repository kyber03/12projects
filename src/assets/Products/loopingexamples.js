for (const categoryKey in categories) {
    const category = categories[categoryKey];
    console.log("Category:", category.title);
  
    for (const filterType in category.filters) {
      const filter = category.filters[filterType];
      console.log("  Filter:", filter.filterName);
      console.log("  Options:", filter.filterList.join(", "));
    }
  }