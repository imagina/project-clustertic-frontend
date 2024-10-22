export default class PasswordValidator {
  //   constructor() {
  //     const { t } = useI18n();
  //     this.greeting = t("greeting");
  //   }
  static rules = [
    (val: string) => !!val || 'Password is required',
    (val: string) =>
      val.length >= 8 || 'Password must be at least 8 characters long',
    (val: string) =>
      /[A-Z]/.test(val) || 'Must contain at least one uppercase letter',
    (val: string) =>
      /[a-z]/.test(val) || 'Must contain at least one lowercase letter',
    (val: string) => /\d/.test(val) || 'Must contain at least one number',
    (val: string) =>
      /[\W_]/.test(val) || 'Must contain at least one special character',
  ]

  static is_password_valid(password: string) {
    const validators = PasswordValidator.rules
    let is_valid = true
    for (let i = 0; i < validators.length; i++) {
      if (typeof validators[i](password) === 'string') {
        is_valid = false
        break
      }
    }
    return is_valid
  }
}
