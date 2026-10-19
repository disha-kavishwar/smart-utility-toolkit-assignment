const fs = require("fs");

fs.writeFile("test.txt", "Hello Node.js", err => {
    if (err) return console.log(err);

    console.log("File Created");

    fs.readFile("test.txt", "utf8", (err, data) => {
        if (err) return console.log(err);

        console.log("File Content:", data);

        fs.appendFile("test.txt", "\nLearning FS Module", err => {
            if (err) return console.log(err);

            console.log("File Updated");

            fs.unlink("test.txt", err => {
                if (err) return console.log(err);

                console.log("File Deleted");
            });
        });
    });
});