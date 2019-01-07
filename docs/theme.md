```js static
import { Theme } from 'audora-ui';

const themeConfig = {
  color: {
    primary: '#222'
  }
};

const MyApplication = () => (
  <Theme config={themeConfig}>
    <Button
      content="Click"
      onClick={() => alert("Button was clicked!")}
    />
  </Theme>
);
```

## Default

```json
{
  "space": [0, 4, 8, 16, 32, 64, 128, 256, 512],
  "fontSizes": [12, 14, 16, 20, 24, 32, 48, 64, 72],
  "avatarSizes": [18, 24, 32, 56, 84],
  "fontWeight": {
    "normal": 400,
    "bold": 700
  },
  "colors": {
    "default": ["#ebedf0", "#d8dce1", "#c4cad3"],
    "primary": ["#217EE7", "#166dd0"],
    "danger": ["#b5202c", "#981b25"],
    "transparent": "transparent",
    "grey": ["#576374"],
    "black": "#000",
    "white": "#fff"
  },
  "fonts": {
    "mono": "\"SF Mono\", \"Segoe UI Mono\", \"Roboto Mono\", \"Ubuntu Mono\", Menlo, Courier, monospace",
    "sans": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Noto Sans\", \"Ubuntu\", \"Droid Sans\", \"Helvetica Neue\", sans-serif"
  },
  "buttonSizes": {
    "small": {
      "paddingTop": 4,
      "paddingBottom": 4,
      "paddingLeft": 8,
      "paddingRight": 8,
      "fontSize": 14
    },
    "medium": {
      "paddingTop": 8,
      "paddingBottom": 8,
      "paddingLeft": 16,
      "paddingRight": 16,
      "fontSize": 16
    },
    "large": {
      "paddingTop": 16,
      "paddingBottom": 16,
      "paddingLeft": 32,
      "paddingRight": 32,
      "fontSize": 20
    }
  },
  "inputSizes": {
    "small": {
      "paddingTop": 4,
      "paddingBottom": 4,
      "paddingLeft": 8,
      "paddingRight": 8,
      "fontSize": 14
    },
    "medium": {
      "paddingTop": 8,
      "paddingBottom": 8,
      "paddingLeft": 16,
      "paddingRight": 16,
      "fontSize": 16
    },
    "large": {
      "paddingTop": 16,
      "paddingBottom": 16,
      "paddingLeft": 32,
      "paddingRight": 32,
      "fontSize": 20
    }
  },
  "buttons": {
    "default": {
      "color": "#576374",
      "backgroundColor": "#ebedf0",
      "borderColor": "#d8dce1",
      "&:hover": {
        "borderColor": "#c4cad3",
        "backgroundColor": "#d8dce1"
      },
      "&:focus": {
        "zIndex": 1,
        "borderColor": "#c4cad3",
        "boxShadow": "rgba(33,126,231,0.4) 0 0 0 4px"
      },
      "&:active": {
        "boxShadow": "none"
      }
    },
    "primary": {
      "color": "#fff",
      "backgroundColor": "#217EE7",
      "borderColor": "#166dd0",
      "&:hover": {
        "backgroundColor": "#166dd0"
      },
      "&:focus": {
        "zIndex": 1,
        "boxShadow": "rgba(33,126,231,0.4) 0 0 0 4px"
      },
      "&:active": {
        "boxShadow": "none"
      }
    },
    "danger": {
      "color": "#b5202c",
      "backgroundColor": "#ebedf0",
      "borderColor": "#d8dce1",
      "&:hover": {
        "color": "#fff",
        "borderColor": "#981b25",
        "backgroundColor": "#b5202c"
      },
      "&:focus": {
        "zIndex": 1,
        "boxShadow": "rgba(181,32,44,0.4) 0 0 0 4px"
      },
      "&:active": {
        "boxShadow": "none"
      }
    },
    "subtle": {
      "color": "#576374",
      "backgroundColor": "transparent",
      "borderColor": "transparent",
      "&:hover": {
        "backgroundColor": "#ebedf0"
      },
      "&:focus": {
        "zIndex": 1,
        "boxShadow": "rgba(33,126,231,0.4) 0 0 0 4px"
      },
      "&:active": {
        "boxShadow": "none"
      }
    }
  }
}
````
