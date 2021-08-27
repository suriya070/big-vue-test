import { helpers } from 'vuelidate/lib/validators';

export const minPhone = 8;
export const maxPhone = 13;
const CustomValidator = {
  phoneValidate(value) {
    const regexString = `^(0|6)\\d{${minPhone},${maxPhone}}$`;
    const regex = new RegExp(regexString);
    return !helpers.req(value) || regex.test(value);
  },
};

export default CustomValidator;
