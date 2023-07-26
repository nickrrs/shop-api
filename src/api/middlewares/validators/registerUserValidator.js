export const validations = [
    body("name").exists().isString().notEmpty().withMessage("name cannot be empty"),
    body("email").exists().isEmail().notEmpty().withMessage("email cannot be empty"),
    body("password").exists().isString().notEmpty().withMessage("password cannot be empty"),
    body("createdAt").exists().notEmpty().withMessage("createdAt cannot be empty"),
    body("updatedAt").exists().notEmpty().withMessage("updatedAt cannot be empty")
  ]