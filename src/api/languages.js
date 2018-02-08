const _languages = [
  { name: 'English', key: 'English', val: 'en', icon: 'gb' },
  { name: 'Tiếng Việt', key: 'Vietnamese', val: 'vn', icon: 'vn' }
]

export default {
  getAllLanguages (cb) {
    setTimeout(() => cb(_languages), 200)
  }
}
