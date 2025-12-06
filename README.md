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
    },
    presentEmojis: [
      { emoji: "🎁", weight: 50 },  // 50% chance - wrapped gift
      { emoji: "🎀", weight: 30 },  // 30% chance - ribbon
      { emoji: "📦", weight: 20 }   // 20% chance - box
    ]
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
| `presentEmojis` | (see above) | Array of present emoji objects with weighted probabilities |

### Animation Options

Each animation can be individually controlled via the `animations` config object:
- **star**: Twinkling star animation on top of the tree
- **lights**: Blinking colored Christmas lights
- **sway**: Gentle swaying motion of the tree
- **shimmer**: Shimmering effect on tree layers
- **presents**: Bouncing animation on gift boxes
- **countdown**: Pulsing effect on countdown numbers

### Present Emoji Customization

The `presentEmojis` option allows you to customize which present emojis appear under the tree and their probability:

```javascript
presentEmojis: [
  { emoji: "🎁", weight: 50 },  // 50% chance
  { emoji: "🎀", weight: 30 },  // 30% chance
  { emoji: "📦", weight: 20 }   // 20% chance
]
```

- **emoji**: Any emoji you want to use for presents
- **weight**: Relative probability (weights are normalized to percentages)

You can add as many emoji options as you like! Try other Christmas emojis like 🎄, 🎅, 🤶, 🎉, or ⛄.

**How presents appear**: The module displays presents that accumulate throughout December - on December 1st you'll see 1 present, December 6th shows 6 presents, and by December 25th there will be 25 presents stacked under the tree!

## License

MIT
