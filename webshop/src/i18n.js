import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "terms": "Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.",
      "admin": "To admin view",
      "contact": "Contact us",
      "shops": "Our shops",
      "cart": "Cart",
      "maintain-categories": "Maintain categories",
      "maintain-shops": "Maintain shops",
      "add-product": "Add product",
      "maintain-products": "Maintain products",
    }
  },
  ee: {
    translation: {
      "terms": "Tere tulemast meie veebilehele. Kui jätkate selle veebilehe kasutamist, siis olete nõus järgmiste kasutustingimustega, mis koos meie privaatsuspoliitikaga reguleerivad meie suhet teiega seoses selle veebilehega. Kui te ei nõustu ühegi osaga neist kasutustingimustest, siis palun ärge kasutage meie veebilehte.",
      "admin": "Administraatori vaatesse",
      "contact": "Kontakteeru meiega",
      "shops": "Meie poed",
      "cart": "Ostukorv",
      "maintain-categories": "Halda kategooriaid",
      "maintain-shops": "Halda poode",
      "add-product": "Lisa toode",
      "maintain-products": "Halda tooteid",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;