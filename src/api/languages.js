const _languages = [
  { name: 'English', key: 'English', val: 'en' },
  { name: 'Dansk', key: 'Danish', val: 'da' },
  { name: 'Español', key: 'Spanish', val: 'es' },
  { name: '简体中文', key: 'Chinese', val: 'zh' },
  { name: '中文 (臺灣)', key: 'Chinese (Taiwan)', val: 'zh_TW' },
  { name: 'پارسی', key: 'Persian', val: 'fa' },
  { name: 'Français', key: 'French', val: 'fr' },
  { name: 'ελληνικά', key: 'Greek', val: 'el' },
  { name: 'Русский', key: 'Russian', val: 'ru' },
  { name: 'Deutsch', key: 'German', val: 'de' },
  { name: 'Italiano', key: 'Italian', val: 'it' },
  { name: 'Nederlands', key: 'German', val: 'de' },
  { name: 'Deutsch', key: 'Dutch', val: 'nl' },
  { name: 'Português(BR)', key: 'Portuguese', val: 'pt_BR' },
  { name: 'Indonesian', key: 'Indonesian', val: 'id' },
  { name: 'Lietuvių', key: 'Lithuanian', val: 'lt' },
  { name: 'Türkçe', key: 'Turkish', val: 'tr' },
  { name: '한국어', key: 'Korean', val: 'kr' },
  { name: 'العربية', key: 'Arabic', val: 'ar' },
  { name: 'Magyar', key: 'Hungarian', val: 'hu' },
  { name: 'Tiếng Việt', key: 'Vietnamese', val: 'vi' },
  { name: 'svenska', key: 'Swedish', val: 'sv' },
  { name: 'polski', key: 'Polish', val: 'pl' },
  { name: '日本語', key: 'Japanese', val: 'ja' },
  { name: 'românește', key: 'Romanian', val: 'ro' }
]

export default {
  getAllLanguages (cb) {
    setTimeout(() => cb(_languages), 200)
  }
}
