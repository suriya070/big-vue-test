<template>
  <div class="desktop-registration-submitted">
    <section id="registration-submitted" class="registration-submitted">
      <div class="container text-center">
        <img class="img-fluid" src="@/assets/images/submitted.svg" >
        <div class="row justify-content-md-center">
          <div class="col-md-4 mt-3">
            <div class="submitted-caption">{{ $t('your_data_has_been_submitted') }}</div>
            <!-- <div class="submitted-description">
              {{ $t('your_white_paper_download') }}
            </div> -->
            <div class="back-button" col-md-3>
              <router-link
                tag="a"
                :to="{ name: 'index' }"
                class="bg-purple back-home-btn">
                {{ $t("back_to_paxelbig") }}
                <span class="arrow-right"><i class="fas fa-arrow-right"></i></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'DesktopRegistrationSubmitted',
};
</script>

<style scoped>
.desktop-registration-submitted .registration-submitted {
  padding: 60px 0px 170px 0px;
}
.desktop-registration-submitted .submitted-caption {
  font-family: "GothamMedium";
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #424143;
  margin-top: 12px;
  margin-bottom: 12px;
}
.desktop-registration-submitted .submitted-description {
  font-family: "GothamBook";
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #929293;
}
.back-button {
  margin-top: 60px;
}
.back-button a {
  font-family: "GothamBold";
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.39px;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  letter-spacing: normal;
  border-radius: 0.25rem;
  text-align: center;
  display: block;
  width: 100%;
  color: #ffffff;
  text-transform: uppercase;
}
.back-button a.back-home-btn:hover {
  background-color: #524494;
}
.back-button a.back-home-btn:focus {
  border: none;
}
.back-button a .arrow-right {
  float: right;
  padding-right: 20px;
}
</style>
