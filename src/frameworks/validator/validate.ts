import { body, checkSchema, check, validationResult } from 'express-validator';

const validate = async (req: any) => {
  //Validate input data
  switch (req.route.path) {
    case '/updateMember/:id':
    case '/addMember':
    await body([
      'name',
      'lastname',
    ]).notEmpty().withMessage('Data required').isString().withMessage('Data must be string').trim().isLength({max: 30}).withMessage('Data to long').run(req);
    await body('birthdate').notEmpty().withMessage('Date required').isDate({format: 'YYYY-MM-DD', strictMode: true}).withMessage('Invalid date').trim().run(req);
    await body([
      'sex',
      'comments',
      'address',
      'picture',
      'emergencyContact',
      'relationship',
      'contactEmail',
      'medicalInformation'
    ]).isString().withMessage('Data must be string').trim().run(req);
    await body('status').isBoolean().withMessage("Invalid status").run(req);
    await body('email').notEmpty().withMessage('Email required').isEmail().withMessage('Invalid Email').trim().normalizeEmail().run(req);
    await body([
      'cellphone',
      'homephone',
      'contactCellPhone',
      'contactHomePhone'
    ]).isNumeric().withMessage('Invalid number').run(req);
    break;


    case '/singUp':
    await body('email').notEmpty().withMessage('Email required').isEmail().withMessage('Invalid Email').trim().normalizeEmail().run(req);
    await body('password').notEmpty().withMessage('Password required').isStrongPassword({minLength: 8}).withMessage('Password is not secure').trim().run(req);
    await body([
      'firstname',
      'lastname',
      'role'
    ]).notEmpty().withMessage('Data required').isString().withMessage('Data must be string').trim().escape().run(req);
    break;
  }
  const result = await validationResult(req);
  return result;

}

export default validate;
