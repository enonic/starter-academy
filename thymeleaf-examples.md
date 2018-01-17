Examples of different ways to use Thymeleaf.

===========================
Output the variable as text *inside* the tag, one of the most common Thymeleaf commands.
```html
**CODE:** <a href="website.html" data-th-text="${newLinkText}" />
**HTML:** <a href="website.html">Contents of newLinkText</a>
```
===========================
If the variable is filled with data (not false, not null/empty/undefined) generate this tag and anything in it. If the variable is not filled with data, the entire tag will be left out of the resulting HTML!
```html
**CODE:** <div data-th-if="${variable}">Do I exist?</div>
**HTML:** <div>Do I exist?</div>
```
===========================
A Thymeleaf `data-th-text` will overwrite **everything** inside it, even other tags. So, be careful when nesting!
```html
**CODE:** <div data-th-text="${someText}"><span>I'm <strong>gone</strong></span></div>
**HTML:** <div>Contents of someText</div>
```
===========================
Combine Thymeleaf commands in the same tags. Fill the following `div` with the text in the variable `someText`, but only generate the `div` if the variable contains any value, otherwise don't generated it at all.
```html
**CODE:** <div data-th-if="${someText}" data-th-text="${someText}">Testing</div>
**HTML:** <div>Contents of someText</div>
```
===========================
Overwrite normal attributes with Thymeleaf, example for setting the src-attribute for an image.
```html
**CODE:** <img src="my-pic.jpg" data-th-src="${newSrc}" alt="" />
**HTML:** <img src="contents-of-variable-newUrl" alt="" />
```
===========================
Overwrite normal attributes with Thymeleaf, example for setting the href-attribute.
```html
**CODE:** <a href="website.html" data-th-href="${newUrl}" />
**HTML:** <a href="contents-of-variable-newUrl"></a>
```
===========================
Control the alt-attribute for an image, will overwrite existing attribute.
```html
**CODE:** <img src="my-pic.jpg" alt="This will be overwritten" data-th-alt="${newAlt}" />
**HTML:** <img src="my-pic.jpg" alt="contents-of-variable-newAlt" />
```
===========================
Control the title-attribute for an image, will overwrite existing attribute.
```html
**CODE:** <img src="my-pic.jpg" title="Will be overwritten" data-th-title="${newTitle}" />
**HTML:** <img src="my-pic.jpg" alt="contents-of-variable-newTitle" />
```
===========================
Remove a tag used for Thymeleaf entirely from the output but keep the text.
```html
**CODE:** <div data-th-remove="tag">Do something in here ...</div>
**HTML:** Do something in here ...
```
===========================
Concatenation inside Thymeleaf text-command is possible. It can use variable contents, and/or custom text strings.
```html
**CODE:** <div data-th-text="${someText + ', ' + anotherVariable + ' and custom text'}">Dummy text</div>
**HTML:** <div>Contents of someText, contents of anotherVariable and custom text</div>
```
===========================
