<template>
  <section id="register" class="register" v-vpshow-scroll>
    <div class="container">
      <div class="register-wrapper align-self-center">
        <div class="register-description">
          {{ $t("register_now") }}
        </div>
        <div class="register-button">
          <router-link tag="a" :to="`/registration`" class="register-link-btn">
            {{ $t("experience_the_service_here") }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MobileRegister',
  data() {
    return {
      gfromURL: process.env.VUE_APP_GFORM,
    };
  },
};
</script>

<style>
.mobile-home .register {
  text-align: center;
}
.mobile-home .register-description {
  font-family: "GothamMedium";
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
  text-align: center;
  color: #4a4a4a;
  max-width: 580px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 40px;
}
.mobile-home .register-button a {
  font-family: "GothamBold";
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  border: none;
  padding: 15px 50px;
  letter-spacing: 0.39px;
  border-radius: 0.25rem;
  text-align: center;
  color: #ffffff;
  background-color: #5e50a1;
  text-transform: uppercase;
}
.mobile-home .register-button a.register-link-btn:focus {
  border: none;
}
@media screen and (max-width: 480px) {
  .mobile-home .register-button a {
    padding: 15px 17px;
  }
}
</style>
