# MMM-XmasCountdown

A festive Christmas countdown module for MagicMirror² featuring animated Lottie graphics.

## Features
* Real-time countdown to Christmas
* Animated Santa Lottie animation
* Customizable target date and time
* Optional seconds display
* Animated pulsing countdown text

## Installation

1. Navigate to your MagicMirror's `modules` folder:
```bash
cd ~/MagicMirror/modules
```

2. Clone this repository:
```bash
git clone https://github.com/yourusername/MMM-XmasCountdown.git
```

3. Install dependencies:
```bash
cd MMM-XmasCountdown
npm install
```

4. Add a Lottie animation file to the `assets` folder (e.g., `santa.json`). You can find free Lottie animations at [LottieFiles](https://lottiefiles.com/).

## Configuration

Add the module to your `config/config.js` file:

```javascript
{
  module: "MMM-XmasCountdown",
  position: "top_center",
  config: {
    target: "2025-12-25T00:00:00",
    header: "🎅 Santa is Coming!",
    lottieFile: "assets/santa.json",
    showSeconds: true
  }
}
```

## Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| `target` | `"2025-12-25T00:00:00"` | Target date and time for the countdown (ISO 8601 format) |
| `header` | `"🎅 Santa is Coming!"` | Header text displayed above the animation |
| `lottieFile` | `"assets/santa.json"` | Path to the Lottie animation JSON file (relative to module folder) |
| `showSeconds` | `true` | Whether to show seconds in the countdown |

## Finding Lottie Animations

1. Visit [LottieFiles.com](https://lottiefiles.com/)
2. Search for "Santa", "Christmas", or any holiday theme
3. Download the Lottie JSON file
4. Save it to `modules/MMM-XmasCountdown/assets/`
5. Update the `lottieFile` config option with the filename

## License

MIT
