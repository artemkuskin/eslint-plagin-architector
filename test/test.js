const validateHierarchy = require("../src/rules/helper");

describe("Validate hierarchy with default config", () => {
  const filePath = "/home/artem/my-app/src/D.jsx";
 

  const hierarchy = {
    file: [
      {
        level: "D",
        children: [],
      },
        
          {
            level: "A",
            children: [
              {
                level: "A1",
                children: [],
              },
              {
                level: "A3",
                children: [],
              },
            ],
          },
          {
            level: "B",
            children: [
              {
                level: "B1",
                children: [],
              }
              //   {
              //     level: "B1",
              //     children: [
              //       {
              //         level: "B2",
              //         children: []
              //         },
              //     ]
              //     },
              //     {
              //       level: "B3",
              //       children: []
              //       },
              // ]
            ],
          },
          {
            level: "C",
            children: [],
          }
        
      
      // {
      //   level: "templates",
      //   children: [],
      // },
    ],
    // atoms: 0,
    // molecules: 1,
    // organisms: 2,
    // templates: 3,
    // pages: 4
  };

  const componentFolder = "src";

  // it("allow downward import", () => {
  //   const errors = validateHierarchy(filePath, "../../../A", hierarchy, componentFolder);
  //   expect(errors).toEqual(undefined);
  // });
  it("allow downward import", () => {
    const errors = validateHierarchy(filePath, "B1/B1.jsx", hierarchy, componentFolder);
    expect(errors).toEqual(undefined);
  });
  it("allow downward import", () => {
    const errors = validateHierarchy(filePath, "C/C.jsx", hierarchy, componentFolder);
    expect(errors).toEqual(undefined);
  });
  it("allow downward import", () => {
    const errors = validateHierarchy(filePath, "B3/B3", hierarchy, componentFolder);
    expect(errors).toEqual(undefined);
  });
  it("allow downward import", () => {
    const errors = validateHierarchy(filePath, "./A/A.jsx", hierarchy, componentFolder);
    expect(errors).toEqual(undefined);
  });

})