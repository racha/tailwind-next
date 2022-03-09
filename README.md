# tailwind-next
A [TailwindCSS](https://tailwindcss.com/ "TailwindCSS") Plugin that lets you target subsequent-sibling or "next" element.


```html
<div>
  <input type="checkbox" class="next-p:checked:bg-blue-500 next-h2:checked:bg-red-500">
  <p>
    Next Element
  </p>
  <h2>
    Another Element
  </h2>
<div>
```

Generates this CSS which gives p element or any other element that is next in line to the selector one "bg-red-500":

```css
.next-h2\:checked\:bg-red-500:checked ~ h2 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
.next-p\:checked\:bg-blue-500:checked ~ p {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
```

Includes all default HTML tags:
```javascript
    nextTags: {
      all: "*",
      html: "html",
      base: "base",
      head: "head",
      link: "link",
      meta: "meta",
      style: "style",
      title: "title",
      address: "address",
      article: "article",
      aside: "aside",
      footer: "footer",
      header: "header",
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      main: "main",
      nav: "nav",
      section: "section",
      body: "body",
      blockquote: "blockquote",
      dd: "dd",
      div: "div",
      dl: "dl",
      dt: "dt",
      figcaption: "figcaption",
      figure: "figure",
      hr: "hr",
      li: "li",
      ol: "ol",
      p: "p",
      pre: "pre",
      ul: "ul",
      a: "a",
      abbr: "abbr",
      b: "b",
      bdi: "bdi",
      bdo: "bdo",
      br: "br",
      cite: "cite",
      code: "code",
      data: "data",
      dfn: "dfn",
      em: "em",
      i: "i",
      kbd: "kbd",
      mark: "mark",
      q: "q",
      rp: "rp",
      rt: "rt",
      ruby: "ruby",
      s: "s",
      samp: "samp",
      small: "small",
      span: "span",
      strong: "strong",
      sub: "sub",
      sup: "sup",
      time: "time",
      u: "u",
      var: "var",
      wbr: "wbr",
      area: "area",
      audio: "audio",
      img: "img",
      map: "map",
      track: "track",
      video: "video",
      embed: "embed",
      iframe: "iframe",
      object: "object",
      param: "param",
      picture: "picture",
      portal: "portal",
      source: "source",
      svg: "svg",
      math: "math",
      canvas: "canvas",
      noscript: "noscript",
      script: "script",
      del: "del",
      ins: "ins",
      caption: "caption",
      col: "col",
      colgroup: "colgroup",
      table: "table",
      tbody: "tbody",
      td: "td",
      tfoot: "tfoot",
      th: "th",
      thead: "thead",
      tr: "tr",
      button: "button",
      datalist: "datalist",
      fieldset: "fieldset",
      form: "form",
      input: "input",
      label: "label",
      legend: "legend",
      meter: "meter",
      optgroup: "optgroup",
      option: "option",
      output: "output",
      progress: "progress",
      select: "select",
      textarea: "textarea",
      details: "details",
      dialog: "dialog",
      menu: "menu",
      summary: "summary",
      slot: "slot",
      template: "template",
      acronym: "acronym",
      applet: "applet",
      basefont: "basefont",
      bgsound: "bgsound",
      big: "big",
      blink: "blink",
      center: "center",
      content: "content",
      dir: "dir",
      font: "font",
      frame: "frame",
      frameset: "frameset",
      hgroup: "hgroup",
      image: "image",
      keygen: "keygen",
      marquee: "marquee",
      menuitem: "menuitem",
      nobr: "nobr",
      noembed: "noembed",
      noframes: "noframes",
      plaintext: "plaintext",
      rb: "rb",
      rtc: "rtc",
      shadow: "shadow",
      spacer: "spacer",
      strike: "strike",
      tt: "tt",
      xmp: "xmp"
    }
```

Expandable using `theme/extend`

```javascript
module.exports = {
  content: [],
  theme: {
    extend: {
      nextTags: {
        custom: 'custom',
        ".selector": ".selector",
      },
    },
  },
  plugins: [],
}
```

You can even use custom `class/ID` selectors like `.selector` in example above. Which will generate:

```css
.next-someEl\:bg-black ~ custom {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.next-\.selector\:bg-purple-500 ~ .selector {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity));
}
```


The order of Variants when writing a class can be a bit weird but currently TW Compiles it in a "reverse" way so it is what it is... for now.