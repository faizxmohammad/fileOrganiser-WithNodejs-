let types = {
    media: ["mp4", "mkv"],
    folder :["folder"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
let fs = require("fs");
let path = require("path");

function orgainseFn(dirPath) {
    // console.log("Organise command implemented for ", dirPath);
    // 1.input -> directory path given

    let destPath;
    if (dirPath == undefined) {
        // console.log('kindly enter the path');
        destPath = process.cwd();
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath)
        if (doesExist) {
            // 2.create -> orgainsed_file -> directory created
            destPath = path.join(dirPath, "orgainsed_files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }
        }
        else {
            console.log('kindly enter the correct path');
            return;
        }

    }
    organisedHelper(dirPath, destPath);

}
function organisedHelper(src, dest) {
    // 3.identify categories all the files present in  that directory
    let childName = fs.readdirSync(src);
    //  console.log(childName);
    for (let i = 0; i < childName.length; i++) {
        let childAddress = path.join(src, childName[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            // console.log(childName[i]);
           let category =  getCategory(childName[i]);
           console.log(childName[i] , "belong to " , category,);
            sendFiles(childAddress , dest , category);

        }

    }
}
function sendFiles(srcFilePath , dest , category){
 // 4.copy or cut files to that organised category inside of any category folder
  let categoryPath = path.join(dest , category);
  if(fs.existsSync(categoryPath) == false){
      fs.mkdirSync(categoryPath);
  }
  let fileName = path.basename(srcFilePath);
  let destFilePath = path.join(categoryPath , fileName);
  fs.copyFileSync(srcFilePath, destFilePath);
  fs.unlinkSync(srcFilePath);
  console.log(fileName , " copied to " , category);



}
function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types){
       let cTypeArray=  types[type];
       for (let i = 0; i < cTypeArray.length; i++) {
           if(ext == cTypeArray[i]){
               return type;
           }
           
       }
    }
    return " others ";

}
module.exports = {
    orgainseKey : orgainseFn
}