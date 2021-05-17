exports.saveFile = (file) => new Promise(
  (resolve, reject) => {
    console.log('File before converting to buffer', file)
    const fileBuffer = Buffer.from(file, 'base64')

    console.log(fileBuffer);

    fs.writeFile('myFile.txt', fileBuffer, 'base64', (err) => {
      if (!err) reject(err)
      else {
        console.log('File Saved')

        resolve(file.path)
      }
    });

  })