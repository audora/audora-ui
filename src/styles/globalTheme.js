export default {
  html: {
    fontSize: '16px'
  },
  'html, body': {
    height: '100%',
    mozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased'
  },
  body: {
    background: '#f1f1f1',
    fontFamily: 'Nunito,"Helvetica Neue",Helvetica,Arial,sans-serif',
    color: '#393939',
    padding: '0px',
    fontSize: '14px'
  },
  a: {
    textDecoration: 'none',
    backgroundColor: 'transparent',

    ':hover': {
      outline: 0,
      textDecoration: 'underline'
    }
  }
};
