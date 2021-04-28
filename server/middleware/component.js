const Component = require("../models/component");
const { drivePicParser } = require("./fileUpload");

exports.getComponentById = (req, res, next, id) => {
  Component.findById(id).exec((err, comp) => {
    if (err) {
      return res.status(400).json({
        error: "Component not found in DB",
      });
    }
    req.component = comp;
    next();
  });
};

exports.getAllComponents = (req, res) => {
  res.setHeader("Content-Range", "component 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  Component.find({}).exec((err, components) => {
    if (err) {
      return res.status(400).json({
        error: "Not FOUND",
      });
    }
    let arr = [];
    components.forEach((component) => arr.push(component.transform()));
    res.json(arr);
  });
};

exports.getAllComponentsFilter = (req, res) => {
  res.setHeader("Content-Range", "component 0-10/20");
  res.setHeader("Access-Control-Expose-Headers", "Content-Range");
  Component.find({}).exec((err, dataList) => {
    if (err) {
      return res.status(400).json({
        error: "Not FOUND",
      });
    }
    let comps = {};
    dataList.forEach((comp) => {
      if (comps[comp.type] === undefined) comps[comp.type] = [];
      comps[comp.type].push(comp);
    });
    res.json(comps);
  });
};

exports.addComponent = (req, res) => {
  const pic = req.body.pic;
  if (pic) {
    try {
      req.body.pic = drivePicParser(req.body.pic);
    } catch (error) {
      return res.status(400).json({
        err: error.message,
      });
    }
  }
  const component = new Component({
    name: req.body.name,
    type: req.body.type,
    pic: req.body.pic,
    available: req.body.available,
  });
  component.save((err, component) => {
    if (err) {
      return res.status(400).json({
        err: err.message,
      });
    }
    res.send({
      msg: `${component.name} added successfully.`,
    });
  });
};

exports.updateComponent = (req, res) => {
  const component = req.component;
  component.available = req.body.available;
  const pic = req.body.pic;
  if (pic) {
    try {
      component.pic = drivePicParser(req.body.pic);
    } catch (error) {
      return res.status(400).json({
        err: error.message,
      });
    }
  }
  component.save((err, updatedComponent) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update Component",
      });
    }
    res.json(updatedComponent);
  });
};

exports.deleteComponent = (req, res) => {
  const component = req.component;

  component.remove((err, component) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this component",
      });
    }
    res.json({
      msg: `Successfully deleted ${component.name}`,
    });
  });
};
