# MMM-XmasCountdown

A festive Christmas countdown module for MagicMirror² featuring animated emoji graphics.

## Features
* Real-time countdown to Christmas
* Animated Christmas tree with twinkling star
* Blinking colored lights
* Presents that stack up as Christmas approaches (more presents = closer to Christmas!)
* Customizable target date and time
* Optional seconds display
* Granular animation controls
* Low power mode option

## Installation

1. Navigate to your MagicMirror's `modules` folder:
```bash
cd ~/MagicMirror/modules
```

2. Clone this repository:
```bash
git clone https://github.com/wlans/MMM-XmasCountdown.git
```

## Configuration

Add the module to your `config/config.js` file:

```javascript
{
  module: "MMM-XmasCountdown",
  position: "top_center",
  config: {
    target: "2025-12-25T00:00:00",
    showSeconds: true,
    showTree: true,
    lowPowerMode: false,
    animations: {
      star: true,        // Twinkling star on top of tree
      lights: true,      // Blinking Christmas lights
      sway: true,        // Swaying tree motion
      shimmer: true,     // Shimmering tree layers
      presents: true,    // Bouncing presents
      countdown: true    // Pulsing countdown numbers
    }
  }
}
```

## Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| `target` | `"2025-12-25T00:00:00"` | Target date and time for the countdown (ISO 8601 format) |
| `showSeconds` | `true` | Whether to show seconds in the countdown |
| `showTree` | `true` | Whether to display the animated Christmas tree |
| `lowPowerMode` | `false` | Disables all animations to save power/resources |
| `animations` | (see above) | Object to enable/disable individual animations |

### Animation Options

Each animation can be individually controlled via the `animations` config object:
- **star**: Twinkling star animation on top of the tree
- **lights**: Blinking colored Christmas lights
- **sway**: Gentle swaying motion of the tree
- **shimmer**: Shimmering effect on tree layers
- **presents**: Bouncing animation on gift boxes
- **countdown**: Pulsing effect on countdown numbers

## License

MIT
