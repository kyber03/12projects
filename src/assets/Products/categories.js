const categories = {
    
    Mobiles: {
      title: "Mobiles",
      keywords: [],
      filters: {
        Brand: {
          filterName: "Brand",
          filterList: [
            "Apple",
            "Samsung",
            "Redmi",
            "Jio",
            "OnePlus",
            "Realme",
            "Oppo",
            "Vivo",
            "Mi",
          ],
        },
        RAM: {
          filterName: "RAM",
          filterList: ["4 MB", "2 GB", "4 GB", "6 GB", "8 GB"],
        },
      },
    },



    Books: {
      title: "Books",
      keywords: "",
      filters: {
        Language: {
          filterName: "Language",
          filterList: ["English", "Hindi", "Marathi"],
        },
        Genre: {
          filterName: "Genre",
          filterList: ["Fiction", "Historical", "Mystery", "Romance", "Poetry"],
        },
      },
    },


    Clothings: {
      title: "Clothings",
      keywords: "",
      filters: {
        For: {
          filterName: "For",
          filterList: ["Kids", "Men", "Women"],
        },
      },
    },



    Beauty: {
      title: "Beauty",
      keywords: "",
      filters: {
        Type: {
          filterName: "Type",
          filterList: [
            "Bath and Body",
            "Fragrance",
            "Skin Care",
            "Hair Care",
            "Makeup",
          ],
        },
      },
    },



    Furniture: {
      title: "Furniture",
      keywords: "",
      filters: {
        Type: {
          filterName: "Type",
          filterList: ["Office Chair", "Desk", "Beds", "Sofas", "Wardrobes"],
        },
      },
    },


    
    Laptops: {
      title: "Laptops",
      keywords: "",
      filters: {
        For: {
          filterName: "For",
          filterList: [
            "Students",
            "Travel",
            "Coding",
            "Gaming",
            "Content Creation",
          ],
        },
        Brand: {
          filterName: "Brand",
          filterList: ["Acer", "Dell", "HP", "Lenovo", "Asus", "Apple"],
        },
        RAM: {
          filterName: "RAM",
          filterList: ["4 GB", "8 GB", "16 GB", "32 GB", "64 GB"],
        },
        Processor: {
          filterName: "Processor",
          filterList: ["Intel", "AMD"],
        },
        DisplaySize: {
          filterName: "Display Size",
          filterList: ["14", "15.6", "16"],
        },
        HasSSD: {
          filterName: "Has SSD?",
          filterList: ["Yes", "No"],
        },
      },
    },
  };
  export default categories;