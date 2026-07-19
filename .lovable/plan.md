## Plan

1. **Stop relying on runtime favicon switching only**
   - Keep a correct default icon in the HTML head so light mode starts with the dark favicon immediately.
   - Add explicit light/dark media favicon links so browsers can choose before JavaScript runs.

2. **Use stable, unambiguous icon assets**
   - Confirm the light-theme file is the dark pyramid mark.
   - Confirm the dark-theme file is the cream/light pyramid mark.
   - Avoid timestamp cache URLs, because they can make favicon behavior inconsistent across browsers.

3. **Make Chrome cache less likely to reuse the wrong icon**
   - Use fresh filename references for the correct light and dark favicon assets.
   - Keep `/favicon.ico` as the dark mark fallback for light mode, because Chrome may request it directly even when link tags exist.

4. **Add a minimal client-side safety switcher**
   - After the page loads, check `prefers-color-scheme`.
   - Replace icon links only with the matching icon: dark browser theme → light/cream icon, light browser theme → dark icon.
   - Use a fixed version string instead of `Date.now()` to reduce browser confusion.

5. **Verify in preview**
   - Inspect the live `<link rel="icon">` tags after load.
   - Confirm light mode reports the dark icon URL and dark mode logic points to the cream icon URL.