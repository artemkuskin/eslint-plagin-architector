const absolutePathToFile = require("./helpers/absolutePathToFile")
const getLevelAlias = require("./helpers/getLevelAlias")
const getParentFolder = require("./helpers/getParentFolder")
const PathToCurrentFileWithOutContent = require("./helpers/pathToCurrentFileWithoutContent")
const setCurrentLevel = require("./helpers/setCurrentLevel")
const setModuleByName = require("./helpers/setModuleByName")
module.exports = test
function test (importDefinitionPath, configurationTree, pathToCurrentModule, rootDirectory, jsConfigFileContent) {
    // const searchCurrentModuleLevelInConfigTree = (params) =>  {
    //     const currentModuleLevel1 = setModuleByName(configurationTree, setCurrentLevel(params)) 
    //     if(currentModuleLevel1 === undefined) {
    //       let result = params.split("/").slice(0, params.split("/").length - 1).join("/")
    //      return  searchCurrentModuleLevelInConfigTree(result)
    //     } else {
    
    //       return currentModuleLevel1
    //     }
    //     //console.log(currentModuleLevel1);
    //   }
    //   const asd = (params) => {
    //     const targetModulePath  = absolutePathToFile(pathToCurrentModule, PathToCurrentFileWithOutContent(params))
    //     const targetLevel = setModuleByName(configurationTree, setCurrentLevel(targetModulePath)) 
    //     if (targetLevel === undefined) {
    //       let result = params.split("/").slice(0, params.split("/").length - 1).join("/")
    //       return asd(result)
    //     } else {
    //       return targetLevel
    //     }
      
    //   }
    const targetModuleAlias = setLevelByKey(
      getLevelAlias(rootDirectory, jsConfigFileContent),
      firstElemImportDefinitionPath(importDefinitionPath)
    );
    if (targetModuleAlias) {
      const targetAliasModulPath = absolutePathTo(targetModuleAlias.path, importDefinitionPath).split("/");
      const currentModulePath = pathToCurrentModule.split('/')
      let generalLevel = targetAliasModulPath.filter(x => currentModulePath.indexOf(x) !== -1)
        const current = getParentFolder(generalLevel[generalLevel.length -1],  pathToCurrentModule)
        const target = getParentFolder(generalLevel[generalLevel.length -1], absolutePathTo(targetModuleAlias.path, importDefinitionPath))
        const targetModuleLevel = configurationTree.find((elem) => elem.name === target)
        const currentModuleLevel = configurationTree.find((elem) => elem.name === current)
        if (targetModuleLevel === undefined || targetModuleLevel == undefined) {
          const currentLevel = configurationTree.find((elem) => elem.name === generalLevel[generalLevel.length -1])
          const targetModuleLevel = configurationTree.find((elem) => elem.name === generalLevel[generalLevel.length -1])
          return {currentModuleLevel:currentLevel, targetModuleLevel:targetModuleLevel}
        }
        if (targetModuleLevel === undefined && targetModuleLevel == undefined) {
          const currentLevel = configurationTree.find((elem) => elem.name === generalLevel[generalLevel.length -1])
          const targetModuleLevel = configurationTree.find((elem) => elem.name === generalLevel[generalLevel.length -1])
          console.log(2);
          return {currentModuleLevel:currentLevel, targetModuleLevel:targetModuleLevel}
        }
        console.log(16);
        return {currentModuleLevel:currentModuleLevel, targetModuleLevel:targetModuleLevel}
    } else {
      
      const targetModulePath  = absolutePathToFile(PathToCurrentFileWithOutContent(pathToCurrentModule), importDefinitionPath).split("/")
      const currentModulePath = pathToCurrentModule.split('/')
      const generalLevel = targetModulePath.filter(x => currentModulePath.indexOf(x) !== -1)
        let current = getParentFolder(generalLevel[generalLevel.length -1],  PathToCurrentFileWithOutContent(pathToCurrentModule))
        let target = getParentFolder(generalLevel[generalLevel.length -1], PathToCurrentFileWithOutContent(absolutePathToFile(PathToCurrentFileWithOutContent(pathToCurrentModule), importDefinitionPath)))
        const targetModuleLevel = configurationTree.find((elem) => elem.name === target)
        const currentModuleLevel = configurationTree.find((elem) => elem.name === current)
        if (currentModuleLevel === undefined) {
          const asd = (arr) =>  {
            const  currentLevel = getParentFolder(arr[arr.length -1],  PathToCurrentFileWithOutContent(pathToCurrentModule))
            const currentModuleLevel = configurationTree.find((elem) => elem.name === currentLevel)
            if (currentModuleLevel === undefined) {
              const a = arr.slice(0, arr.length - 1)
             return  asd(a)
            } else {

              return currentModuleLevel
            }
          }
          
          return {currentModuleLevel:asd(generalLevel), targetModuleLevel:asd(generalLevel)}//ПЕРЕРАБОТАТЬ
        }
        if (targetModuleLevel === undefined) {
          const asd = (arr) =>  {
            const  targetLevel =  getParentFolder(generalLevel[generalLevel.length -1], PathToCurrentFileWithOutContent(absolutePathToFile(PathToCurrentFileWithOutContent(pathToCurrentModule), importDefinitionPath)))
            const targetModuleLevel = configurationTree.find((elem) => elem.name === targetLevel)
            if (targetModuleLevel === undefined) {
              const a = arr.slice(0, arr.length - 1)
             return  asd(a)
            } else {

              return targetModuleLevel
            }
          }
          
          return {currentModuleLevel:asd(generalLevel), targetModuleLevel:asd(generalLevel)}//ПЕРЕРАБОТАТЬ
        }
        
        console.log(PathToCurrentFileWithOutContent(pathToCurrentModule), PathToCurrentFileWithOutContent(absolutePathToFile(PathToCurrentFileWithOutContent(pathToCurrentModule), importDefinitionPath)));
        return {currentModuleLevel:currentModuleLevel, targetModuleLevel:targetModuleLevel}
        
        
      }
    }
 


    function setLevelByKey(configurationTree, key) {
      return configurationTree.find((elem) => elem.key === key);
    }

    function firstElemImportDefinitionPath(importDefinitionPath) {
      return importDefinitionPath.split("/")[0];
    }
    
function absolutePathTo(pathToModule, importDefinitionPath) {
  return absolutePathToFile(PathToCurrentFileWithOutContent(pathToModule), importDefinitionPath);
}

function setLevelsTarget(configurationTree, absolutePathToTargetLevel, rootDirectory) {
  return setModuleByName(configurationTree, getParentFolder(rootDirectory, absolutePathToTargetLevel));
}