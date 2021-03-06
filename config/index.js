module.exports = {
  service: {
    name: 'Quill', // change this!
    icon: 'pencil', // pick from: http://semantic-ui.com/elements/icon.html
    pitch: 'Tell great stories.',
    synopsis: 'Quill is a next-generation writing tool.', // and this...
    mission: '<span class="brand">Quill</span> is a next-generation writing tool<br /> carefully hand-crafted for your needs.', // also
    description: 'Quill is a next-generation writing tool that works anywhere and everywhere.  Organize your writing with our intuitive interface, connecting concepts for your readers like never before.',
    about: 'Quill is built with <i class="heart icon"></i><em>love</em> by <a href="https://maki.io/people">a diverse community of makers</a> from all around the world.  We\'re designing an all-new way to publish things on the web.  <a href="https://maki.io/topics/quill">Join the Conversation &raquo;</a>',
    copyright: '&copy; 2017 Quill, Inc.</small>',
    masthead: 'images/typewriter.jpg',
    /*cta: {
      link: '/universes',
      text: 'View All <span><i class="globe icon"></i></span>Worlds',
      icon: 'globe'
    },*/
    points: [
      {
        header: 'e',
        description: 'Maki can build web, desktop, <em>and</em> native mobile apps, directly from your definitions.  With consistent interactions across them all.',
        action: {
          text: 'Read the Docs &raquo;',
          link: '/docs'
        }
      },
    ]
  },
  database: {
    name: 'roleplaygateway' // only change if you know what you're doing
  },
  services: {
    http: {
      port: 3000 // you might want this to be some other port, like 80
    }
  }
};
