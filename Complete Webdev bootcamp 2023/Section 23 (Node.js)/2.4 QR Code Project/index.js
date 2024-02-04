
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            message: 'Enter your message (URL) : ',
            name: 'URL',
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream('Qr_image.png'));

        fs.writeFile("UserMessage.txt", url, (err) => {
            if (err) throw err;
            console.log("File saved successfully");
        });
    })
    .catch((error) => {});
