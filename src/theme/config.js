const radius = {
  md: '4px',
  lg: '10px',
  xl: '20px'
};

const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  huge: '64px'
};

const color = {
  primary: '#217EE7',
  success: '#13CE66',
  danger: '#FF4949',
  warning: '#FFC82C',
  /* --------------- */
  bodyBackground: '#fff',
  border: 'rgba(0,0,0,0.1)',
  /* --------------- */
  heading: 'rgba(0, 0, 0, 0.85)',
  text: 'rgba(0, 0, 0, 0.60)',
  textSecondary: 'rgba(0, 0, 0, 0.45)',
  /* --------------- */
  headingDark: 'rgba(255, 255, 255, 1)',
  textDark: 'rgba(255, 255, 255, 0.85)',
  textSecondaryDark: 'rgba(255, 255, 255, 0.65)',
};

const fontSize = {
  xs: '10px',
  sm: '12px',
  base: '14px',
  lg: '16px',
  xl: '18px'
};

export default {
  color,
  fontSize,
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
  lineHeight: 1.5,
  transition: 'all .2s',
  btn: {
    border: {
      radius: radius.md
    },
    font: {
      size: fontSize,
      weight: 400
    },
    height: {
      xs: '20px',
      sm: '24px',
      md: '32px',
      lg: '40px'
    },
    color: {
      default: color.text,
      primary: '#fff',
      subtle: color.text,
      icon: color.text,
      iconPrimary: '#fff'
    },
    bg: {
      default: '#eee',
      primary: color.primary,
      subtle: 'transparent'
    },
    spacing: {
      xs: spacing.xs,
      sm: spacing.sm,
      md: spacing.md
    }
  },
  icon: {
    color: color.text,
    size: {
      xs: '14px',
      sm: '18px',
      md: '24px',
      lg: '32px'
    }
  },
  avatar: {
    bg: '#eee',
    color: color.text,
    border: {
      radius: {
        circle: '100%',
        square: '20%'
      }
    },
    font: {
      size: fontSize,
      weight: 400
    },
    height: {
      xs: '18px',
      sm: '24px',
      md: '32px',
      lg: '56px',
      xl: '84px'
    },
    width: {
      xs: '18px',
      sm: '24px',
      md: '32px',
      lg: '56px',
      xl: '84px'
    }
  }
};
