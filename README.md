# React Form Projesi

Bu proje, React kullanarak Formik, Yup ve React Router DOM kütüphanelerini kullanarak bir form uygulaması geliştirmek için örnek bir şablon sunar. Proje, genel bir form ve bir portal form olmak üzere iki farklı form içerir.

## Genel Form

Genel form, kullanıcıdan e-posta, yaş, şifre ve şifre tekrarı gibi temel bilgilerin istenmesini içerir. Form, kullanıcı tarafından sağlanan bilgilerin doğruluğunu Yup şema doğrulama kütüphanesi ile kontrol eder. Eğer kullanıcı gerekli alanları doldurmadıysa veya geçerli olmayan bir değer girdiyse, Yup ile uygun hata mesajları gösterilir.

## Portal Form

Portal form, kullanıcı adı, üniversite seçimi ve kullanım koşullarını kabul etme seçeneği gibi öğeleri içerir. Bu formda da kullanıcı girdileri Yup ile doğrulanır ve hatalar durumunda uygun mesajlar gösterilir.

## Kullanılan Kütüphaneler

- **React**: Kullanıcı arayüzü oluşturmak için.
- **Formik**: Form yönetimi ve form state'ini kolaylaştırmak için.
- **Yup**: Form doğrulaması için şema tabanlı bir doğrulama kütüphanesi.
- **React Router DOM**: Uygulama içi gezinme ve sayfa yönlendirme için.

## Nasıl Kullanılır

1. Proje dosyalarını bilgisayarınıza klonlayın veya ZIP olarak indirin.
2. Proje dizinine gidin ve bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
3. Projeyi başlatmak için `npm run dev` komutunu çalıştırın.
4. Tarayıcınızda `http://localhost:5173` adresine giderek form uygulamasını görebilirsiniz.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir çekme isteği açın. Geliştirmeye veya sorunları çözmeye yardımcı olmak için her türlü katkınızı bekliyorum.
_________________________

# React Form Project

This project provides an example template for developing a form application using React, Formik, Yup, and React Router DOM libraries. The project includes two different forms: a general form and a portal form.

## General Form

The general form includes basic information such as email, age, password, and password confirmation fields. The form validates the accuracy of the user-provided information using the Yup schema validation library. If the user fails to fill in required fields or enters invalid values, appropriate error messages are displayed using Yup.

## Portal Form

The portal form consists of elements such as username, university selection, and an option to accept terms of use. User inputs in this form are also validated using Yup, and appropriate messages are displayed in case of errors.

## Libraries Used

- **React**: For building the user interface.
- **Formik**: For form management and simplifying form state.
- **Yup**: For schema-based validation of forms.
- **React Router DOM**: For in-app navigation and page routing.

## How to Use

1. Clone the project files to your computer or download them as a ZIP file.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Start the project by running `npm run dev`.
4. You can view the form application by going to `http://localhost:5173` in your browser.

## Contribution

If you'd like to contribute, please open a pull request. I welcome any contributions to help with development or to resolve issues.

_________________________
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
