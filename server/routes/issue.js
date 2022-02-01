// Importing npm modules
const express = require('express');
const { isSignedIn, isAdmin } = require('../middleware/auth');
const { getComponentById } = require('../middleware/component');
const { requestComponent, getAllRequests, updateRequestStatus, getMyRequests, getIssueById } = require('../middleware/user');
const router = express.Router();

router.param("componentId", getComponentById);
router.param("issueId", getIssueById);

// Creating a request
router.post(
    "/issue/:componentId",
    isSignedIn,
    requestComponent
);

router.get(
    "/issue",
    isSignedIn,
    isAdmin,
    getAllRequests
)

router.get(
    "/issue/:issueId",
    isSignedIn,
    isAdmin,
    (req, res) => {
        return res.json(req.issue.transform())
    }
);

// Updating Request status
router.put(
    "/issue/:issueId",
    isSignedIn,
    isAdmin,
    updateRequestStatus
);
//body{status}
module.exports = router;
