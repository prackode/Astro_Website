const multer = require("multer");
const path = require("path");
const { v4 } = require("uuid");
const DIR = "./public/images/";
// storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = `${v4()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});
exports.upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
//Parsing the drive link provided for the image
exports.drivePicParser = (inputUrl) => {
  const dUrl = new URL(inputUrl);
  if (dUrl.hostname === "drive.google.com") {
    const sp = dUrl.pathname.split("/");
    if (dUrl.pathname === "/uc") return inputUrl;
    if (sp[0] === "" && sp[1] === "file" && sp[2] === "d" && sp[4] === "view") {
      const imgId = sp[3];
      return `https://drive.google.com/uc?export=view&id=${imgId}`;
    } else {
      throw new Error(
        "Invalid drive link, eg: https://drive.google.com/file/d/1edRXTBfSU2B3lPfFYabpCavhXADz3TUT/view"
      );
    }
  }
  return inputUrl;
};
