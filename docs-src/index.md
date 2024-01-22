---
layout: page.11ty.cjs
title: <webuni-card> ⌲ Home
---

# &lt;webuni-card>

`<webuni-card>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<webuni-card>` is just an HTML element. You can it anywhere you can use HTML!

```html
<webuni-card></webuni-card>
```

  </div>
  <div>

<webuni-card></webuni-card>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<webuni-card>` can be configured with attributed in plain HTML.

```html
<webuni-card name="HTML"></webuni-card>
```

  </div>
  <div>

<webuni-card name="HTML"></webuni-card>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<webuni-card>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;webuni-card&gt;</h2>
    <webuni-card .name=${name}></webuni-card>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;webuni-card&gt;</h2>
<webuni-card name="lit-html"></webuni-card>

  </div>
</section>
