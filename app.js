const fs = require('fs');

const SEPARETE = 2
const args = process.argv.slice(2)
/**
 * return the all consecutive combination in string
 * ["abc"] => ["a", "ab", "abc", "b", "bc", "c"]
 * @param {*} string sortest file content in files
 * @param {*} offset starts with offset as a index
 * @param {*} limit limit for index
 * @param {*} min min string piece size
 * @returns 
 */
const getCombinations = (string, offset, limit, min) => {
    let retval = []
    for (let i = offset; i <= limit; i++) {
        for (let j = i + 1; j <= string.length - min; j++) {
            let item = string.substring(i, j + min)
            item.length > min && retval.indexOf(item) == -1 && retval.push(string.substring(i, j + min))
        }
    }
    return retval
}
/**
 * Return the longest common string part
 * @param {*} sortedFiles all files with their offset 
 * @param {*} max longest common strand size
 */
const showResult = (sortedFiles, maxSize) => {
    console.log("<------ Common Parts in Strings ------>\n");
    // console.log("Longest strand : "+base.content.substring(base.content.indexOf(sortedFiles[0].common_word), base.content.indexOf(sortedFiles[0].common_word) + maxSize));
    console.log("Longest Strand Size : " + maxSize);
    for (let j = 0; j < sortedFiles.length; j++) {
        console.log("\nFile Name : " + sortedFiles[j].name + " Offset : " + sortedFiles[j].offset);

    }
}
const main = () => {

    let max = 0
    let files = []
    try {
        for (let i = 0; i < args.length; i++) {
            var content = fs.readFileSync(args[i], 'binary')
            files.push({ name: args[i], content, offset: 0 })
        }
    } catch (error) {
        console.log(" File not found!!")
        return;
    }

    //Sorts files by content size
    let sortedFiles = files.sort((a, b) => a.content.length - b.content.length);

    // Gets shortest file
    let base = sortedFiles.shift();

    let len = Math.ceil(base.content.length / SEPARETE)
    let hasBoth = true
    for (let i = 0; i < len; i++) {
        let combination = getCombinations(base.content, i * SEPARETE + max, (i + 1) * SEPARETE, max)
        combination.forEach(item => { 
            //set true if all files include the item and item length
            hasBoth = sortedFiles.filter(e => e.content.indexOf(item) != -1).length < sortedFiles.length || item.length < max ? false : true
            if (hasBoth) {
                // change sortedFiles array to new ofsset and new longest string values
                sortedFiles = sortedFiles.map(e => {
                    e.offset = e.content.indexOf(item);
                    e.common_word = item;
                    return e;
                }) 
                max = item.length
            }
        });
    }

    base.offset = base.content.indexOf(sortedFiles[0].common_word)
    sortedFiles.push(base)
    showResult(sortedFiles, max)
}
args.length > 1 ? main() : console.log("There must be at least 2 file !!")
