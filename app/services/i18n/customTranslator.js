import I18n from './I18n';

export default function (text, lang) {
  if (lang) {
    return I18n.t(text, { locale: lang });
  }
  return I18n.t(text);
}
