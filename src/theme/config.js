import merge from 'lodash.merge';

const Config = ({
  color, fontSize, radius, spacing,
}) => {
  const colorProp = merge({
    danger: '#F56C6C',
    info: '#4CB5FF',
    success: '#67C23A',
    warning: '#E6A23C',
    /* --------------- */
    primary: '#217EE7',
    primaryDark: '#1565C0',
    primaryDarker: '#104D92',
    textPrimary: '#fff',
    /* --------------- */
    defaultBackground: '#E0E1E2',
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
  }, color);
  const radiusProp = merge({
    md: '4px',
    lg: '10px',
    xl: '20px',
  }, radius);
  const spacingProp = merge({
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    huge: '64px',
  }, spacing);
  const fontSizeProp = merge({
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '16px',
    xl: '18px',
  }, fontSize);

  return ({
    wrapper: '1080px',
    color: colorProp,
    fontSize: fontSizeProp,
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
    codeFontFamily: '"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace',
    lineHeight: 1.5,
    transition: 'all .2s',
    btn: {
      border: {
        radius: radiusProp.md,
      },
      font: {
        size: fontSizeProp,
        weight: 400,
      },
      height: {
        xs: '20px',
        sm: '24px',
        md: '32px',
        lg: '40px',
      },
      color: {
        default: colorProp.text,
        primary: colorProp.textPrimary,
        subtle: colorProp.text,
        icon: colorProp.text,
        iconPrimary: colorProp.textPrimary,
      },
      bg: {
        default: colorProp.defaultBackground,
        primary: colorProp.primary,
        subtle: 'transparent',
      },
      spacing: {
        xs: spacingProp.xs,
        sm: spacingProp.sm,
        md: spacingProp.md,
      },
    },
    icon: {
      color: colorProp.text,
      size: {
        xs: '14px',
        sm: '18px',
        md: '24px',
        lg: '32px',
      },
    },
    avatar: {
      bg: colorProp.defaultBackground,
      color: colorProp.text,
      border: {
        radius: {
          circle: '100%',
          square: '20%',
        },
      },
      font: {
        size: fontSizeProp,
        weight: 400,
      },
      height: {
        xs: '18px',
        sm: '24px',
        md: '32px',
        lg: '56px',
        xl: '84px',
      },
      width: {
        xs: '18px',
        sm: '24px',
        md: '32px',
        lg: '56px',
        xl: '84px',
      },
    },
    badge: {
      bg: {
        added: colorProp.success,
        default: colorProp.defaultBackground,
        inverted: '#fff',
        primary: colorProp.primary,
        removed: colorProp.danger,
      },
      color: {
        added: '#fff',
        default: colorProp.text,
        inverted: colorProp.text,
        primary: colorProp.textPrimary,
        removed: '#fff',
      },
      border: {
        color: colorProp.border,
        radius: radiusProp.xl,
      },
      font: {
        size: fontSizeProp.sm,
      },
    },
  });
};

export default Config;
