export default function validateInfo(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = true;
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = true;
    }

    if (!values.message) {
        errors.message = true;
      } else if (values.message.length < 6) {
        errors.message = true;
      }

  
    return errors;
  }