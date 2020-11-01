const Program = require('../model/program');
const Department = require('../model/department');

exports.postDepartment = (req, res, next) => {
    const depName = req.body.departmentName;
    const depName_v = req.body.departmentName_v;
    const shortName = req.body.shortName;

    try {
      const department = new Department({
        departmentName: depName,
        departmentName_v: depName_v,
        shortName: shortName
      });
      const result = await department.save(); 
      res.status(201).json({ message: 'Department created!', deptId: result._id });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
          }
        next(err);
    } 
};

exports.postProgram = (req, res, next) => {
  const programName = req.body.programName;
  const programName_v = req.body.programName_v;
  const shortName = req.body.shortName;

  try {
    const program = new Program({
      programName: programName,
      programName_v: programName_v,
      shortName: shortName
    });
    const result = await department.save(); 
    res.status(201).json({ message: 'Program created!', programId: result._id });
  } catch (err) {
      if (!err.statusCode) {
          err.statusCode = 500;
        }
      next(err);
  } 
};