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


The order of Variants when writing a class can be a bit weird but currently TW Compiles it in a "reverse" way so it is what it is... for now.