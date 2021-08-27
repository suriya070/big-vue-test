<template>
  <div class="desktop-registration">
    <section id="registration" class="registration">
        <div class="container">
          <div class="back-btn-container">
            <router-link tag="a" to="/" class="back-btn-link">
              <img
                class="icon-arrow"
                src="@/assets/icons/arrow-left.svg"
                :alt="$t('back_to_paxelbig')">
              {{ $t('back_to_paxelbig') }}
            </router-link>
          </div>
          <div class="registration-caption">
              {{ $t('paxelbig_registration_form') }}
          </div>
          <div class="registration-text">
              {{ $t('paxelbig_registration_text') }}
          </div>
        </div>
      <div class="registration-form">
        <div class="container">
          <b-col class="registration-form-columm" sm="8">
            <b-overlay :show="loading" rounded="sm" bg-color="#f8f9fa">
              <b-form @submit.stop.prevent="onSubmit">
                <b-form-group
                  id="name-group"
                  label-for="name"
                >
                  <template v-slot:label>
                    {{ $t('full_name') }}<span class="required-mark">&nbsp;*</span>
                  </template>
                  <b-form-input
                    id="name"
                    v-model.trim="form.name"
                    type="text"
                    aria-describedby="input-name-feedback"
                    :placeholder="$t('full_name')"
                    :class="{ 'is-invalid': $v.form.name.$error }"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    id="input-name-feedback">
                    {{ $t('full_name') + " " + $t('should_not_empty') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                  id="address-group"
                  label-for="address"
                >
                  <template v-slot:label>
                    {{ $t('full_address') }}<span class="required-mark">&nbsp;*</span>
                  </template>
                  <b-form-input
                    id="address"
                    v-model.trim="form.address"
                    type="text"
                    aria-describedby="input-address-feedback"
                    :placeholder="$t('full_address')"
                    :class="{ 'is-invalid': $v.form.address.$error }"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    id="input-address-feedback">
                    {{ $t('full_address') + " " + $t('should_not_empty') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                  id="origin-city-group"
                  label-for="origin_city"
                >
                  <template v-slot:label>
                    {{ $t('origin_city') }}<span class="required-mark">&nbsp;*</span>
                  </template>
                  <b-form-input
                    id="origin-city"
                    v-model.trim="form.origin_city"
                    type="text"
                    aria-describedby="input-origin-city-feedback"
                    :placeholder="$t('origin_city')"
                    :class="{ 'is-invalid': $v.form.origin_city.$error }"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    id="input-origin-city-feedback">
                    {{ $t('origin_city') + " " + $t('should_not_empty') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                  id="destination-city-group"
                  label-for="destination_city"
                >
                  <template v-slot:label>
                    {{ $t('destination_city') }}<span class="required-mark">&nbsp;*</span>
                  </template>
                  <b-form-input
                    id="destination-city"
                    v-model.trim="form.destination_city"
                    type="text"
                    aria-describedby="input-destination-city-feedback"
                    :placeholder="$t('destination_city')"
                    :class="{ 'is-invalid': $v.form.destination_city.$error }"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    id="input-destination-city-feedback">
                    {{ $t('destination_city') + " " + $t('should_not_empty') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                  id="phone-number-one-group"
                  label-for="phone-number-one"
                >
                  <template v-slot:label>
                    {{ $t('phone_number_one') }}<span class="required-mark">&nbsp;*</span>
                  </template>
                  <b-form-input
                    id="phone-number-one"
                    v-model.trim="form.phone_number_one"
                    type="text"
                    aria-describedby="input-phone-number-one-feedback"
                    :placeholder="$t('phone_number_one')"
                    :class="{ 'is-invalid': $v.form.phone_number_one.$error }"
                    @input="enforcePhoneNumber($event, 'phone_number_one')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    id="input-phone-number-one-feedback"
                    v-if="!$v.form.phone_number_one.required">
                    {{ $t('phone_number_one') + " " + $t('should_not_empty') }}
                  </b-form-invalid-feedback>
                  <b-form-invalid-feedback
                    id="input-phone-number-one-feedback" v-if="!$v.form.phone_number_one.phone">
                    {{ $t('phone_number_one') + " " +
                    $t('between_length', { min: minPhoneLength, max: maxPhoneLength}) }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                  id="phone-number-two-group"
                  label-for="phone-number-two"
                >
                  <template v-slot:label>
                    {{ $t('phone_number_two') }}<span class="required-mark">&nbsp;*</span>
                  </template>
                  <b-form-input
                    id="phone-number-two"
                    v-model.trim="form.phone_number_two"
                    type="text"
                    aria-describedby="input-phone-number-two-feedback"
                    :placeholder="$t('phone_number_two')"
                    :class="{ 'is-invalid': $v.form.phone_number_two.$error }"
                    @input="enforcePhoneNumber($event, 'phone_number_two')"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    id="input-phone-number-two-feedback"
                    v-if="!$v.form.phone_number_two.required">
                    {{ $t('phone_number_two') + " " + $t('should_not_empty') }}
                  </b-form-invalid-feedback>
                  <b-form-invalid-feedback
                    id="input-phone-number-two-feedback" v-if="!$v.form.phone_number_two.phone">
                    {{ $t('phone_number_two') + " " +
                    $t('between_length', { min: minPhoneLength, max: maxPhoneLength}) }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group
                  id="email-group"
                  label-for="email"
                >
                  <template v-slot:label>
                    {{ $t('email_address') }}<span class="required-mark">&nbsp;*</span>
                  </template>
                  <b-form-input
                    id="email"
                    v-model.trim="form.email"
                    type="text"
                    aria-describedby="input-email-feedback"
                    :placeholder="$t('email_address')"
                    :class="{ 'is-invalid': $v.form.email.$error }"
                  ></b-form-input>
                  <b-form-invalid-feedback
                    id="input-email-feedback" v-if="!$v.form.email.required">
                    {{ $t('email_address') + " " + $t('should_not_empty') }}
                  </b-form-invalid-feedback>
                  <b-form-invalid-feedback
                    id="input-email-feedback" v-if="!$v.form.email.email">
                    {{ $t('email_address') + " " + $t('not_valid') }}
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="text-right mt-4">
                  <b-button id="send-btn" type="submit" class="btn-lg send-btn">
                    Submit
                  </b-button>
                </b-form-group>
              </b-form>
            </b-overlay>
          </b-col>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import { required, email } from 'vuelidate/lib/validators';
import CustomValidators, { minPhone, maxPhone } from '@/validators';

export default {
  name: 'DesktopRegistrationForm',
  data() {
    return {
      loading: false,
      minPhoneLength: minPhone,
      maxPhoneLength: maxPhone,
      form: {
        name: '',
        address: '',
        origin_city: '',
        destination_city: '',
        phone_number_one: '',
        phone_number_two: '',
        email: '',
        token: '',
      },
    };
  },
  validations: {
    form: {
      name: { required },
      address: { required },
      origin_city: { required },
      destination_city: { required },
      phone_number_one: { required, phone: CustomValidators.phoneValidate },
      phone_number_two: { required, phone: CustomValidators.phoneValidate },
      email: { required, email },
    },
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      this.$root.scrollToTop();
      if (this.$v.form.$anyError) {
        return;
      }
      this.$nextTick(() => {
        this.loading = true;
      });

      this.$recaptcha('registration_submit').then((token) => {
        if (token) {
          this.form.token = token;
          this.$store.dispatch('sendRegistration', this.form)
            .then(() => {
              this.$router.push({ name: 'registration-submitted' });
            })
            .catch((error) => {
              const message = `${error.response.data.message} [${error.response.data.data}]`
                || i18n.t('something_wrong');
              this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: message,
              });
            });
        } else {
          const message = `Recaptcha Error: ${i18n.t('something_wrong')}`;
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: message,
          });
        }
      });

      setTimeout(() => {
        this.loading = false;
      },
      3000);
    },
    enforcePhoneNumber(value, field) {
      this.$nextTick(() => {
        if (field === 'phone_number_one') {
          this.form.phone_number_one = value.replace(/\D/g, '');
        } else if (field === 'phone_number_two') {
          this.form.phone_number_two = value.replace(/\D/g, '');
        }
      });
    },
  },
  created() {
    this.$root.scrollToTop();
  },
  mounted() {
    this.$recaptchaLoaded().then(() => {
      const recaptcha = this.$recaptchaInstance;
      recaptcha.showBadge();
    });
  },
  beforeDestroy() {
    const recaptcha = this.$recaptchaInstance;
    recaptcha.hideBadge();
  },
};
</script>
<style>
.desktop-registration .custom-control-input:checked ~ .custom-control-label::before {
  border-color: #5e50a1;
  background-color: #5e50a1;
}
.desktop-registration .spinner-border {
  color: #5e50a1;
}
.desktop-registration .registration-form label {
  font-family: "GothamMedium";
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #424143;
}
.desktop-registration .registration-form input,
.desktop-registration .registration-form input::placeholder {
  font-family: "GothamBook";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #868686;
}
.desktop-registration .custom-control-label {
  margin-top: 10px;
}
.desktop-registration .custom-control-label::before,
.desktop-registration .custom-control-label::after {
    top: 25%;
    left: -1.53rem;
}
</style>
<style scoped>
.desktop-registration .back-btn-container {
  margin-top: 62px;
  margin-bottom: 20px;
}
.desktop-registration .icon-arrow {
  margin-right: 10px;
}
.desktop-registration .back-btn-link {
  font-family: "GothamMedium";
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 30px;
  letter-spacing: 0.4px;
  color: #6053a3;
  border: 0;
  text-decoration: none;
  outline: none;
  display: flex;
}
.desktop-registration .registration-caption {
  font-family: "GothamBold";
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 52px;
  letter-spacing: normal;
  color: #5e51a1;
  margin-bottom: 12px;
}
.desktop-registration .registration-text {
  font-family: "GothamBook";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #424143;
}
.desktop-registration .registration-form {
  padding: 40px 0px 100px 0px;
}
.desktop-registration .registration-form-columm {
  padding: 0px;
}
.desktop-registration .registration-form .send-btn {
  font-family: "GothamMedium";
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-color: #5e50a1;
  border: none;
  width: 340px;
  height: 48px;
}
.desktop-registration .registration-form .send-btn:focus {
  outline: none;
  box-shadow: none;
}
.desktop-registration .required-mark {
  color: #ff434f;
}
</style>
