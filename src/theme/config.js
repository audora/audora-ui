const radius = {
  md: '4px', // mediun
  lg: '10px', // large
  xl: '20px' // extra large
};

const spacing = {
  xs: '8px', // extra small
  sm: '16px', // small
  md: '24px', // mediun
  lg: '32px', // large
  xl: '48px', // extra large
  huge: '64px' // huge
};

const color = {
  primary: '#217EE7',
  success: '#13CE66',
  danger: '#FF4949',
  warning: '#FFC82C',
  border: 'rgba(0,0,0,0.1)',
  white: '#FFFFFF',
  black: '#222222',
  text: 'rgba(0, 0, 0, 0.60)'
};

const fontSize = {
  sm: '12px',
  base: '14px',
  lg: '16px'
};

export default {
  color,
  fontSize,
  transition: 'all .2s',
  btn: {
    borderRadius: radius.md,
    fontWeight: 400,
    fontSize,
    height: {
      xs: '20px',
      sm: '24px',
      md: '32px',
      lg: '40px'
    },
    icon: {
      color: color.text,
      primary: '#fff',
      margin: spacing.xs
    },
    spacing: {
      xs: spacing.xs,
      sm: spacing.sm,
      md: spacing.md
    },
    primary: {
      bg: color.primary,
      color: '#fff'
    },
    default: {
      bg: '#ddd',
      color: color.text
    },
    subtle: {
      bg: 'transparent',
      color: color.text
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
  }
};
