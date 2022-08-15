export default class CssProps {
  static setBackgroundColor(value: string = "unset") {
    CssProps.setProperty('--background-color', value);
  }

  static setProperty(property: string, value?: string) {
    if (value === undefined) {
      return;
    }
    let root = document.documentElement;
    root.style.setProperty(property, value);
  }
}
