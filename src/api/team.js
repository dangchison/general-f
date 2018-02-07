const _teamMember = [
  {
    name: 'Parsley Montana',
    position: 'UI/UX Designer',
    image: 'team1.jpg',
    facebook: '',
    twitter: '',
    google_plus: ''
  },
  {
    name: 'Bodrum Salvador',
    position: 'Marketing',
    image: 'team2.jpg',
    facebook: '',
    twitter: '',
    google_plus: ''
  },
  {
    name: 'Fleece Marigold',
    position: 'Web Developer',
    image: 'team3.jpg',
    facebook: '',
    twitter: '',
    google_plus: ''
  },
  {
    name: 'Dylan Meringue',
    position: 'Co Founder',
    image: 'team4.jpg',
    facebook: '',
    twitter: '',
    google_plus: ''
  }
]

export default {
  getAllTeam (cb) {
    setTimeout(() => cb(_teamMember), 200)
  }
}
