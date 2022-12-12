import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js')
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);


export const validateAuth = () => {
  if(localStorage.getItem('auth')){
    var info_user = JSON.parse(localStorage.getItem('auth'));
    if(info_user.token != undefined){
      return true;
    }
  }
  return false;
}

export const validateRol = (rol_name) => {
  if(validateAuth()){
    var info_user = JSON.parse(localStorage.getItem('auth'));
    var esta = false;
    info_user.roles.forEach(rol => {
      if(rol.nombre == rol_name){
        esta = true;
      }
    });
    return esta;
  }
  return false;
}