const mongoose = require("mongoose");
const docs = require("../models/docsModels");
const users = require("../models/usersModels");
const companies = require("../models/companiesModels");

const getAllDocs = (req, res) => {
  res.status(200).json({
    message: "All docs",
  });
};

const getDoc = async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const doc = await docs.findById(req.params.id);
    if (!doc) {
      res.status(200).json({
        exists: false,
        message: "Documento no encontrado",
      });
    } else {
      const user = await users.findById(doc.user);
      const instructor = await users.findById(doc.instructor);
      const company = await companies.findById(doc.company);
      res.status(200).json({
        exists: true,
        data: {
          user: user.firstName + " " + user.lastName,
          company: company.name,
          duration: doc.duration,
          instructor: instructor.firstName + " " + instructor.lastName,
          expeditionDate: doc.expeditionDate,
          type: doc.type,
          pdfFile: doc.pdfFile,
          modules: doc.modules,
        },
      });
    }
  } else {
    res.status(200).json({
      exists: false,
      message: "Código de documento invalido",
    });
  }
};

module.exports = { getAllDocs, getDoc };
