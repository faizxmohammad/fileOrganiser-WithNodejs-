
//Help implemented:
function helpFn(dirPath) 
{
    console.log(`
    List of all commands:
     pep tree " directory path"
     pep orgainse " directory path"
     pep help `
    );
}
module.exports = {
    helpKey : helpFn

}
