## Font stacks

Use sans-serif fonts for most of our type, the exception being when you want to display code then you should defer to monospace fonts.

### Sans-serif

| OS | Font family |
| --- | --- |
| Windows | Segoe UI |
| MacOS & iOS | SF UI Text |
| | SF UI Display |
| | Helvetica Neue (fallback) |
| Chrome OS & Android | Roboto |
| | Noto Sans (fallback) |
| | Droid Sans (fallback) |
| Ubuntu | Ubuntu |


```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
```

### Monospaced

| OS | Font family |
| --- | --- |
| Windows | Segoe UI Mono |
| MacOS & iOS | SF Mono |
| | Menlo (fallback) |
| Chrome OS & Android | Roboto Mono |
| Ubuntu | Ubuntu Mono |
| All | Courier |

```css
font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo,
  Courier, monospace;
```