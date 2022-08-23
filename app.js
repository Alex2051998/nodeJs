const fs = require('fs/promises');
const path = require('path');

const sortByBoys = async (dir, state, way) => {
    const endPath = path.join(__dirname, dir);
    console.log(endPath);
    const files = await fs.readdir(endPath);

    for (let file of files) {
        const pathToFile = path.join(endPath, file);
        const data = await fs.readFile(pathToFile);
        const user = JSON.parse(data.toString());
        console.log(user);

        if(user.gender !== state){
            await fs.rename(pathToFile, path.join(__dirname, way, file))
        }
    }
}

sortByBoys('girls', 'female', 'boys');
