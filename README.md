# tailwind-next
A [TailwindCSS](https://tailwindcss.com/ "TailwindCSS") Plugin that lets you target subsequent-sibling or "next" element.

```html
<div>
  <span class="bg-blue-500 next:bg-red-500">
    Selector Element
  </span>
  <p>
    Next Element
  </p>
<div>
```

Generates this CSS which gives p element or any other element that is next in line to the selector one "bg-red-500":

```css
.next\:bg-red-500 ~ * {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
```