const _portfolios = [
  {
    key: 'ui_design',
    name: 'Blanditiis Error Modi UI DESIGN',
    image: 'p1.jpg'
  },
  {
    key: 'branding',
    name: 'Blanditiis Error Modi UI DESIGN',
    image: 'p2.jpg'
  },
  {
    key: 'photography',
    name: 'Blanditiis Error Modi UI DESIGN',
    image: 'p3.jpg'
  },
  {
    key: 'branding',
    name: 'Blanditiis Error Modi UI DESIGN',
    image: 'p4.jpg'
  },
  {
    key: 'web_design',
    name: 'Blanditiis Error Modi UI DESIGN',
    image: 'p5.jpg'
  }
]

export default {
  getPortfolio (cb) {
    setTimeout(() => cb(_portfolios), 200)
  }
}
