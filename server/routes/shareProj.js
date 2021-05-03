const express = require("express");
const { isSignedIn } = require("../middleware/auth");
const { Project } = require("../models/project");
const router = express.Router();
const uuid = require("uuid");

// fetching a projects with id
router.get("/share/project/:shareId", (req, res) => {
  Project.findOne({ shareId: req.params.shareId })
    .populate({ path: "members.user" })
    .then((project) => {
      if (!project) res.status(404).json({ message: "No such project" });
      return res.json(project.transform());
    })
    .catch((e) => console.log(e));
});

router.get("/share/reset/:projectId", isSignedIn, (req, res) => {
  const projectId = req.params.projectId;
  const userId = req.user.id;

  Project.findOne({ _id: projectId }).exec((err, project) => {
    if (err || !project)
      return res.status(400).json({ message: "Project not found" });

    let isMember = false;
    for (mem of project.members) {
      if (JSON.stringify(mem.user) === JSON.stringify(userId)) {
        isMember = true;
        break;
      }
    }

    if (!isMember && req.user.role === "User")
      return res
        .status(400)
        .json({ message: "Cannot generate link, you are not a member!!" });

    project.shareId = uuid.v4();
    project.save((err, project) => {
      if (err) {
        return res.status.json({ message: err.message });
      }
      res.json(project);
    });
  });
});

module.exports = router;
