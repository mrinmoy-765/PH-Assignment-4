function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    console.log('Invalid input');
  }


  for (let i = 0; i < name.length; i++) {
    if (name[i] >= '0' && name[i] <= '9') {
      return true; 
    }
  }


  return false;
}


console.log(checkDigitsInName("!@#")); 