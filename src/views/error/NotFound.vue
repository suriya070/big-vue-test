<template>
  <section id="not-found" class="not-found">
    <div class="container">
      <div class="text-center">
        <img class="img-fluid" src="@/assets/images/not-found.svg" >
        <div class="row justify-content-md-center">
          <div class="col-md-4 mt-3">
            <div class="not-found-caption">Ooops..</div>
            <div class="not-found-description">
              {{ $t('your_page_could_not_be_found') }}
            </div>
            <div class="back-button" col-md-3>
              <router-link
                tag="a"
                :to="{ name: 'index', hash: '#paxelbox' }"
                class="bg-purple back-home-btn">
                {{ $t("back_to_paxelbig") }}
                <span class="arrow-right"><i class="fas fa-arrow-right"></i></span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  padding: 60px 0px 170px 0px;
}
.not-found .not-found-caption {
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
.not-found .not-found-description {
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
@media (max-width: 992px) {
  .not-found {
    padding: 25px 0px 170px 0px;
  }
}
</style>
