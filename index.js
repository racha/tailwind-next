const plugin = require('tailwindcss/plugin');

const nextSelect = plugin(function ({ addVariant, theme, e }) {
  const nextTags = theme('nextTags');
  Object.entries(childTags).map(([key, value]) => {
    addVariant(`next-${key}`, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const newClass = e(`next-${key}${separator}${className}`);
        return `.${newClass} ~ ${value}`
      })
    });
  });
},
{
  theme: {
    nextTags: {
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
  }
});

module.exports = nextSelect;