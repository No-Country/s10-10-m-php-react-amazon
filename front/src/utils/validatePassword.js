export const validatePassword = (password) => {
    if (password.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres";
    }
    if (!/[a-z]/.test(password)) {
      return "La contraseña debe contener al menos una letra minúscula";
    }
    if (!/[A-Z]/.test(password)) {
      return "La contraseña debe contener al menos una letra mayúscula";
    }
    if (!/\d/.test(password)) {
      return "La contraseña debe contener al menos un número";
    }
    if (!/\W/.test(password)) {
      return "La contraseña debe contener al menos un caracter especial";
    }
    return;
  };