require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"./lang/hr":[function(require,module,exports){
module.exports = {
  accepted: "Polje :attribute mora biti prihvaćeno.",
  active_url: "Polje :attribute nije ispravan URL.",
  after: "Polje :attribute mora biti datum nakon :date.",
  after_or_equal: "Polje :attribute mora biti datum veći ili jednak :date.",
  alpha: "Polje :attribute smije sadržavati samo slova.",
  alpha_dash: "Polje :attribute smije sadržavati samo slova, brojeve i crtice.",
  alpha_num: "Polje :attribute smije sadržavati samo slova i brojeve.",
  attributes: {},
  array: "Polje :attribute mora biti niz.",
  before: "Polje :attribute mora biti datum prije :date.",
  before_or_equal: "Polje :attribute mora biti datum manji ili jednak :date.",
  between: {
    numeric: "Polje :attribute mora biti između :min - :max.",
    file: "Polje :attribute mora biti između :min - :max kilobajta.",
    string: "Polje :attribute mora biti između :min - :max znakova.",
    array: "Polje :attribute mora imati između :min - :max stavki."
  },
  boolean: "Polje :attribute mora biti false ili true.",
  confirmed: "Potvrda polja :attribute se ne podudara.",
  date: "Polje :attribute nije ispravan datum.",
  date_format: "Polje :attribute ne podudara s formatom :format.",
  different: "Polja :attribute i :other moraju biti različita.",
  digits: "Polje :attribute mora sadržavati :digits znamenki.",
  digits_between: "Polje :attribute mora imati između :min i :max znamenki.",
  dimensions: "Polje :attribute ima neispravne dimenzije slike.",
  distinct: "Polje :attribute ima dupliciranu vrijednost.",
  email: "Polje :attribute mora biti ispravna e-mail adresa.",
  exists: "Odabrano polje :attribute nije ispravno.",
  file: "Polje :attribute mora biti datoteka.",
  filled: "Polje :attribute je obavezno.",
  gt: {
    numeric: "Polje :attribute mora biti veće od :value.",
    file: "Polje :attribute mora biti veće od :value kilobajta.",
    string: "Polje :attribute mora biti veće od :value karaktera.",
    array: "Polje :attribute mora biti veće od :value stavki."
  },
  gte: {
    numeric: "Polje :attribute mora biti veće ili jednako :value.",
    file: "Polje :attribute mora biti veće ili jednako :value kilobajta.",
    string: "Polje :attribute mora biti veće ili jednako :value znakova.",
    array: "Polje :attribute mora imati :value stavki ili više."
  },
  hex: "The :attribute field should have hexadecimal format",
  image: "Polje :attribute mora biti slika.",
  in: "Odabrano polje :attribute nije ispravno.",
  in_array: "Polje :attribute ne postoji u :other.",
  integer: "Polje :attribute mora biti broj.",
  ip: "Polje :attribute mora biti ispravna IP adresa.",
  ipv4: "Polje :attribute mora biti ispravna IPv4 adresa.",
  ipv6: "Polje :attribute mora biti ispravna IPv6 adresa.",
  json: "Polje :attribute mora biti ispravan JSON string.",
  lt: {
    numeric: "Polje :attribute mora biti manje od :value.",
    file: "Polje :attribute mora biti manje od :value kilobajta.",
    string: "Polje :attribute mora biti manje od :value znakova.",
    array: "Polje :attribute mora biti manje od :value stavki."
  },
  lte: {
    numeric: "Polje :attribute mora biti manje ili jednako :value.",
    file: "Polje :attribute mora biti manje ili jednako :value kilobajta.",
    string: "Polje :attribute mora biti manje ili jednako :value znakova.",
    array: "Polje :attribute ne smije imati više od :value stavki."
  },
  max: {
    numeric: "Polje :attribute mora biti manje od :max.",
    file: "Polje :attribute mora biti manje od :max kilobajta.",
    string: "Polje :attribute mora sadržavati manje od :max znakova.",
    array: "Polje :attribute ne smije imati više od :max stavki."
  },
  mimes: "Polje :attribute mora biti datoteka tipa: :values.",
  mimetypes: "Polje :attribute mora biti datoteka tipa: :values.",
  min: {
    numeric: "Polje :attribute mora biti najmanje :min.",
    file: "Polje :attribute mora biti najmanje :min kilobajta.",
    string: "Polje :attribute mora sadržavati najmanje :min znakova.",
    array: "Polje :attribute mora sadržavati najmanje :min stavki."
  },
  not_in: "Odabrano polje :attribute nije ispravno.",
  not_regex: "Format polja :attribute je neispravan.",
  numeric: "Polje :attribute mora biti broj.",
  present: "Polje :attribute mora biti prisutno.",
  regex: "Polje :attribute se ne podudara s formatom.",
  required: "Polje :attribute je obavezno.",
  required_if: "Polje :attribute je obavezno kada polje :other sadrži :value.",
  required_unless: "Polje :attribute je obavezno osim :other je u :values.",
  required_with: "Polje :attribute je obavezno kada postoji polje :values.",
  required_with_all: "Polje :attribute je obavezno kada postje polja :values.",
  required_without: "Polje :attribute je obavezno kada ne postoji polje :values.",
  required_without_all: "Polje :attribute je obavezno kada nijedno od polja :values ne postoji.",
  same: "Polja :attribute i :other se moraju podudarati.",
  size: {
    numeric: "Polje :attribute mora biti :size.",
    file: "Polje :attribute mora biti :size kilobajta.",
    string: "Polje :attribute mora biti :size znakova.",
    array: "Polje :attribute mora sadržavati :size stavki."
  },
  string: "Polje :attribute mora biti string.",
  timezone: "Polje :attribute mora biti ispravna vremenska zona.",
  unique: "Polje :attribute već postoji.",
  uploaded: "Polje :attribute nije uspešno učitano.",
  url: "Polje :attribute nije ispravnog formata."
};

},{}]},{},[]);