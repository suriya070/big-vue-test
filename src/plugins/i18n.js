import Vue from 'vue';
import VueI18n from 'vue-i18n';
import LocalStorage from '@/services/localstorage';

Vue.use(VueI18n);

const messages = {
  id: {
    our_services: 'Layanan Kami',
    news_and_promos: 'Berita & Promo',
    partnership: 'Kemitraan',
    about_partnership: 'Tentang Kemitraan',
    about_paxel: 'Tentang Paxel',
    support: 'Bantuan',
    terms_and_conditions: 'Syarat & Ketentuan',
    privacy_policy: 'Kebijakan Privasi',
    follow_us: 'Ikuti Kami',
    download_our_app: 'Download Aplikasi Paxel',
    download_paxel_app: 'Unduh Aplikasi Paxel',
    caption_banner: 'Kirim Paket Extra Size dengan PaxelBig',
    text_banner: 'Layanan baru pengiriman paket dengan berat hingga 20KG dan dimensi hingga 50cm',
    further_info: 'Info Lanjut',
    featured_features: 'Fitur Unggulan',
    featured_feature_description_1: 'Extra weight dan extra size (Hubungi kami untuk ukuran >50cm)',
    featured_feature_description_2: 'Paket DIJEMPUT dan DIANTAR sampai tujuan dan mudah dilacak',
    featured_feature_description_3: 'Biaya ekonomis dan gratis asuransi s/d Rp. 1.000.000*',
    featured_feature_description_4: 'Kolaborasi Bluebird Group untuk kiriman sameday/next day',
    flow_process_paxelbig: 'Flow Proses PaxelBig',
    register_now: 'Lakukan registrasi agar tim PaxelBig dapat menghubungi Kamu lebih lanjut',
    experience_the_service_here: 'Nikmati Layanannya Di Sini',
    track_your_shipment: 'Lacak Pengiriman',
    back_to_paxelbig: 'Kembali ke PaxelBig',
    paxelbig_registration_form: 'Formulir Pendaftaran PaxelBig',
    paxelbig_registration_text: 'Mohon isikan form ini agar dapat di hubungi oleh dedicated team PaxelBig',
    full_name: 'Nama Lengkap',
    full_address: 'Alamat Lengkap',
    origin_city: 'Kota Asal',
    destination_city: 'Kota Tujuan',
    phone_number_one: 'Nomor Telepon 1',
    phone_number_two: 'Nomor Telepon 2',
    email_address: 'Alamat Email',
    should_not_empty: 'tidak boleh kosong',
    between_length: 'harus diawali 0 dan antara {min} sampai {max} angka',
    not_valid: 'tidak valid',
    your_data_has_been_submitted: 'Data Anda telah dikirim',
    your_page_could_not_be_found: 'Halaman yang Anda maksud tidak dapat ditemukan. Silakan periksa alamat url anda',
    track_shipment: 'Cek Resi',
    check_rates: 'Cek Ongkir',
  },
  en: {
    our_services: 'Our Services',
    news_and_promos: 'News & Promo',
    partnership: 'Partnership',
    about_partnership: 'About Partnership',
    about_paxel: 'About Paxel',
    support: 'Support',
    terms_and_conditions: 'Terms & Conditions',
    privacy_policy: 'Privacy Policy',
    follow_us: 'Follow Us',
    download_our_app: 'Download Our App',
    download_paxel_app: 'Download Paxel App',
    caption_banner: 'Send Your Extra Size Package with PaxelBig',
    text_banner: 'The new sameday delivery service for heavy shipment up to 20Kg and 50cm',
    further_info: 'Further Info',
    featured_features: 'Features',
    featured_feature_description_1: 'Extra weight and extra size (please contact us for package >50cm)',
    featured_feature_description_2: 'Point-to-point pickup and delivery service, easy to track',
    featured_feature_description_3: 'Affordable price and free insurance up tp Rp 1.000.000*',
    featured_feature_description_4: 'In collaboration with Bluebird Group delivering sameday / next day package',
    flow_process_paxelbig: 'PaxelBig Flow Process',
    register_now: 'Register now so our team can contact you!',
    experience_the_service_here: 'Experience the service here',
    track_your_shipment: 'Track Your Shipment',
    back_to_paxelbig: 'Back to PaxelBig',
    paxelbig_registration_form: 'PaxelBig Registration Form',
    paxelbig_registration_text: 'Please fill in this form so that it can be contacted by the dedicated PaxelBig team',
    full_name: 'Full Name',
    full_address: 'Full Address',
    origin_city: 'Origin City',
    destination_city: 'Destination City',
    phone_number_one: 'Phone Number 1',
    phone_number_two: 'Phone Number 2',
    email_address: 'Email Address',
    should_not_empty: 'should not empty',
    between_length: 'should started 0 and between {min} to {max} numbers',
    not_valid: 'not valid',
    your_data_has_been_submitted: 'Your data has been submited',
    your_page_could_not_be_found: 'Your request page could not be found. Please check your url address',
    track_shipment: 'Track Shipment',
    check_rates: 'Check Rates',
  },
};

const i18n = new VueI18n({
  locale: LocalStorage.getLanguage(), // set locale
  fallbackLocale: 'id', // set fallback locale
  messages, // set locale messages
});

export default i18n;