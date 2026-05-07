# Unlimited Elements Widget: Sticky Scroll Timeline

Use this in Unlimited Elements Pro's Widget Creator.

## Widget Attributes

Create these main widget attributes:

| Attribute Name | Type | Default |
| --- | --- | --- |
| `subtitle` | Text Field | Subtitle |
| `heading` | Text Field | What To Expect |
| `button_text` | Text Field | Link |
| `button_link` | Link | # |
| `background_color` | Color Picker | #eef5e7 |
| `text_color` | Color Picker | #213d27 |
| `muted_text_color` | Color Picker | #6f806d |
| `track_color` | Color Picker | #d9decc |
| `active_color` | Color Picker | #203d25 |
| `scroll_height` | Number Field | 320 |

Create item attributes for the repeater/items:

| Item Attribute Name | Type | Default |
| --- | --- | --- |
| `item_title` | Text Field | We Are Here For You |
| `item_text` | Textarea | Lorem ipsum dolor sit amet consectetur. |

## HTML

```html
<section
  id="{{uc_id}}"
  class="ue-sticky-timeline"
  style="
    --ue-st-bg: {{background_color}};
    --ue-st-ink: {{text_color}};
    --ue-st-muted: {{muted_text_color}};
    --ue-st-track: {{track_color}};
    --ue-st-active: {{active_color}};
    --ue-st-scroll-height: {{scroll_height}}vh;
  "
>
  <div class="ue-sticky-timeline__panel">
    <div class="ue-sticky-timeline__intro">
      {% if subtitle is not empty %}
        <p class="ue-sticky-timeline__eyebrow">{{subtitle}}</p>
      {% endif %}

      {% if heading is not empty %}
        <h2 class="ue-sticky-timeline__heading">{{heading}}</h2>
      {% endif %}

      {% if button_text is not empty %}
        <a class="ue-sticky-timeline__button" href="{{button_link}}">
          {{button_text}}
        </a>
      {% endif %}
    </div>

    <div class="ue-sticky-timeline__steps" aria-label="{{heading}}">
      <div class="ue-sticky-timeline__line" aria-hidden="true">
        <span class="ue-sticky-timeline__track"></span>
        <span class="ue-sticky-timeline__progress"></span>
      </div>

      {% for item in items %}
        <article class="ue-sticky-timeline__step{% if loop.first %} is-active{% endif %}">
          <span class="ue-sticky-timeline__number">{{loop.index}}</span>
          <div class="ue-sticky-timeline__content">
            <h3>{{item.item_title}}</h3>
            <p>{{item.item_text}}</p>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
```

## CSS

```css
#{{uc_id}} {
  --ue-st-step-size: clamp(2.25rem, 4vw, 3.25rem);
  min-height: var(--ue-st-scroll-height, 320vh);
  background: var(--ue-st-bg, #eef5e7);
  color: var(--ue-st-ink, #213d27);
}

#{{uc_id}},
#{{uc_id}} * {
  box-sizing: border-box;
}

#{{uc_id}} .ue-sticky-timeline__panel {
  min-height: 100vh;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: minmax(14rem, 0.72fr) minmax(24rem, 1fr);
  gap: clamp(2rem, 8vw, 8rem);
  align-items: start;
  padding: clamp(3rem, 8vw, 6.5rem) clamp(1.25rem, 8vw, 7rem);
}

#{{uc_id}} .ue-sticky-timeline__intro {
  padding-top: clamp(0.25rem, 2vw, 1rem);
}

#{{uc_id}} .ue-sticky-timeline__eyebrow,
#{{uc_id}} .ue-sticky-timeline__heading,
#{{uc_id}} .ue-sticky-timeline__content h3,
#{{uc_id}} .ue-sticky-timeline__content p {
  margin-top: 0;
}

#{{uc_id}} .ue-sticky-timeline__eyebrow {
  margin-bottom: 0.35rem;
  font-size: clamp(0.85rem, 1.4vw, 1.05rem);
  font-weight: 700;
  color: var(--ue-st-ink, #213d27);
}

#{{uc_id}} .ue-sticky-timeline__heading {
  max-width: 10ch;
  margin-bottom: 1.5rem;
  font-size: clamp(2rem, 4.2vw, 3.5rem);
  line-height: 1.05;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--ue-st-ink, #213d27);
}

#{{uc_id}} .ue-sticky-timeline__button {
  display: inline-flex;
  min-width: 4.9rem;
  min-height: 2.4rem;
  align-items: center;
  justify-content: center;
  border: 1px solid color-mix(in srgb, var(--ue-st-ink, #213d27) 55%, transparent);
  border-radius: 999px;
  color: var(--ue-st-ink, #213d27);
  font-size: 0.9rem;
  text-decoration: none;
}

#{{uc_id}} .ue-sticky-timeline__steps {
  --ue-st-progress: 0;
  position: relative;
  display: grid;
  gap: clamp(2.3rem, 6vh, 4.6rem);
  max-width: 47rem;
  padding-left: clamp(4.5rem, 9vw, 7.5rem);
}

#{{uc_id}} .ue-sticky-timeline__line {
  position: absolute;
  top: calc(var(--ue-st-step-size) / 2);
  bottom: var(--ue-st-step-size);
  left: calc(var(--ue-st-step-size) / 2);
  width: 2px;
  transform: translateX(-50%);
}

#{{uc_id}} .ue-sticky-timeline__track,
#{{uc_id}} .ue-sticky-timeline__progress {
  position: absolute;
  inset: 0;
  display: block;
  border-radius: 999px;
}

#{{uc_id}} .ue-sticky-timeline__track {
  background: var(--ue-st-track, #d9decc);
}

#{{uc_id}} .ue-sticky-timeline__progress {
  height: calc(var(--ue-st-progress) * 100%);
  background: var(--ue-st-active, #203d25);
  transition: height 120ms linear;
}

#{{uc_id}} .ue-sticky-timeline__step {
  position: relative;
  display: grid;
  grid-template-columns: var(--ue-st-step-size) minmax(0, 1fr);
  gap: clamp(1.5rem, 4vw, 2.5rem);
  align-items: start;
  transform: translateX(calc(-1 * clamp(4.5rem, 9vw, 7.5rem)));
}

#{{uc_id}} .ue-sticky-timeline__number {
  width: var(--ue-st-step-size);
  aspect-ratio: 1;
  display: inline-grid;
  place-items: center;
  border-radius: 0.35rem;
  background: var(--ue-st-track, #d9decc);
  color: var(--ue-st-ink, #213d27);
  font-size: clamp(1.2rem, 2.2vw, 1.75rem);
  font-weight: 700;
  line-height: 1;
  transition:
    background-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;
  z-index: 1;
}

#{{uc_id}} .ue-sticky-timeline__step.is-active .ue-sticky-timeline__number {
  background: var(--ue-st-active, #203d25);
  color: #ffffff;
  transform: scale(1.03);
}

#{{uc_id}} .ue-sticky-timeline__content {
  padding-top: 0.1rem;
}

#{{uc_id}} .ue-sticky-timeline__content h3 {
  margin-bottom: 0.45rem;
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  line-height: 1.15;
  font-weight: 800;
  color: var(--ue-st-ink, #213d27);
}

#{{uc_id}} .ue-sticky-timeline__content p {
  max-width: 34rem;
  margin-bottom: 0;
  color: var(--ue-st-muted, #6f806d);
  font-size: clamp(0.8rem, 1.2vw, 0.95rem);
  line-height: 1.45;
}

@media (max-width: 800px) {
  #{{uc_id}} .ue-sticky-timeline__panel {
    grid-template-columns: 1fr;
    align-content: start;
    gap: 2.5rem;
    padding-block: 3rem;
  }

  #{{uc_id}} .ue-sticky-timeline__heading {
    max-width: none;
  }

  #{{uc_id}} .ue-sticky-timeline__steps {
    padding-left: 3.75rem;
    gap: 2.25rem;
  }

  #{{uc_id}} .ue-sticky-timeline__step {
    transform: translateX(-3.75rem);
    gap: 1.1rem;
  }

  #{{uc_id}} .ue-sticky-timeline__content p {
    font-size: 0.82rem;
  }
}
```

## JavaScript

```js
(function () {
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function initStickyTimeline(root) {
    if (!root || root.dataset.ueStickyTimelineReady === "true") return;

    var stepsWrap = root.querySelector(".ue-sticky-timeline__steps");
    var steps = Array.prototype.slice.call(
      root.querySelectorAll(".ue-sticky-timeline__step")
    );

    if (!stepsWrap || !steps.length) return;

    root.dataset.ueStickyTimelineReady = "true";

    function updateTimeline() {
      var rect = root.getBoundingClientRect();
      var scrollable = root.offsetHeight - window.innerHeight;
      var scrolled = clamp(-rect.top, 0, scrollable);
      var progress = scrollable ? scrolled / scrollable : 0;
      var activeIndex = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );

      stepsWrap.style.setProperty("--ue-st-progress", progress.toFixed(4));

      steps.forEach(function (step, index) {
        step.classList.toggle("is-active", index <= activeIndex);
      });
    }

    updateTimeline();
    window.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);

    if (window.elementorFrontend && window.elementorFrontend.hooks) {
      window.elementorFrontend.hooks.addAction(
        "frontend/element_ready/global",
        updateTimeline
      );
    }
  }

  function boot() {
    document
      .querySelectorAll(".ue-sticky-timeline")
      .forEach(initStickyTimeline);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  if (window.jQuery && window.elementorFrontend) {
    window.jQuery(window).on("elementor/frontend/init", boot);
  }
})();
```

## Notes

- If sticky does not work inside Elementor, check parent containers for `overflow: hidden`, `overflow: auto`, transforms, or motion effects.
- Use 4 default repeater items to match the mockup.
- Increase `scroll_height` for a slower timeline and decrease it for a faster one.
