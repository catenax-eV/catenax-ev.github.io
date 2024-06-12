# Catena-X e.V. Structure and Guidelines

## Repository Structure and files

The following shows the default structure of a given repository. All the files which will be released with the content are contained in the "docs" folder. All the folders, files and assets are named in the kebab-case convention.

### Folder and File structure

```md
github-repo
├── .github
├── docs
│   ├── my-first-chapter
│   │   ├── my-first-chapter.md
│   │   ├── _category_.json
│   │   └── assets
│   │       ├── my-image-for-the-chapter.jpg
│   │       ├── nice-image.png
│   │       └── nice-asset.xyz
│   └── my-second-chapter
│       ├── my-second-chapter.md
│       ├── my-subchapter-in-chapter-two.md
│       ├── _category_.json
│       └── assets
│           ├── my-other-image-for-the-chapter.jpg
│           ├── nice-image-2.png
│           └── nice-asset-4.xyz
├── .gitignore
├── .markdownlint.yaml
├── CHANGELOG.md
├── getting-started-github.md
├── LICENSE
└── README.md
```

### Special & default files

In order to display and render the "docs" folder successfully within docusaurus we need some special files e.g. to determine the order of the given content.

### How to order MD files in a folder?

To order multiple MD files in a given folder there must be a specific heading at the beginning of the file. This has to be added by default even is there aren't multiple files in a given folder.

```md
---
sidebar_position: 1
---
# How: Data Space Governance
```

In the example above the title of the document is `How: Data Space Governance`. In this case the name of the MD file and the folder would be `how-data-space-governance` and the file would be `how-data-space-governance.md`. In the example the files is the first one in the order within the folder. The order can be arranged by changing the number incrementally in the key `sidebar_position` starting from `1`.

#### How to order the chapters?

To order the folders and therefor the chapters in the correct order so they get displayed correctly, there must be a `_category_.json` in each folder. This contains the following content:

```json
{
    "label": "How: Data Space Governance",
    "position": 4,
    "collapsible": true,
    "collapsed": true
}
```

- **label**: corresponds with the title of the file in this example `How: Data Space Governance`.
- **position**: position of the folder in the overall structure, in this example its the firth chapter.
- **collapsible**: is the list of chapters collapsible `default=true`.
- **collapsed**: is the default view collapsed `default=true`?

## MD file guidelines and best practices

In the following section the best practices in writing MD files and guidelines on how we in Catena-X write MD files.

### Headings

#### DOs - Headings

```MD
# This a heading in the first order
## This a heading in the first order
```

#### Don'ts - Headings

```MD
This a heading in the first order
=================================
This a heading in the first order
---------------------------------
```

### Bolt

#### DOs - Bolt

In this sentence **this part** is bolt.

```MD
In this sentence **this part** is bolt.
```

#### Don'ts - Bolt

```MD
In this sentence **this** **part** is bolt.
In this sentence __this part__ is bolt.
In this sentence __this__ __part__ is bolt.
```

### Italic

#### DOs - Italic

In this sentence *this part* is italic.

```MD
In this sentence *this part* is italic.
```

#### Don'ts - Italic

```MD
In this sentence *this* *part* is italic.
In this sentence _this part_ is italic.
In this sentence _this_ _part_ is italic.
```

### Lists - unordered

#### DOs - Lists unordered

- first item
- second item
  - sub item

```MD
- first item
- second item
  - sub item
```

#### Don'ts - Lists unordered

```MD
- first item
+ second item
  * sub item
```

### Lists - ordered

#### DOs - Lists ordered

1. first item
2. second item
   1. sub item

```MD
1. first item
2. second item
   1. sub item
```

#### Don'ts - Lists ordered

```MD
1) first item
2) second item
   1) sub item
```

### Images/Figures

In addition to the image itself we also provide a alternatives text "alt" in the square brackets. In markdown captions are not supported. We will use the same text as the "alt" in italic writing directly under the image.

#### DOs - Images/Figures

```MD
![Nice Image](./assets/nice-image.png)
*Nice Image*
```

Alt text is the same as the "caption".

### Code

#### DOs - Code

```java
// the hello world program
console.log('Hello World');
```

```md
    ```java
    // the hello world program
    console.log('Hello World');
    ```
```

### Text-Box

A `text` in a box

```md
    A `text` in a box
```

### Links/URLs/E-Mail/Phone numbers

Due to to the use of docusaurus the convention is the following:

#### DOs - Links/URLs/E-Mail/Phone numbers

Go and visit [Catena-X](https://catena-x.net/en/)  
E-Mail is here: [info@catena-x.net](mailto:info@catena-x.net)  
Phone number: [+49 123 456798](tel:+49123456798)

```md
    Go and visit [Catena-X](https://catena-x.net/en/)   
    E-Mail is here: [info@catena-x.net](mailto:info@catena-x.net)  
    Phone number: [+49 123 456798](tel:+49123456798)  
```

#### Don'ts - Links/URLs/E-Mail/Phone numbers

```md
    Go and visit Catena-X <https://catena-x.net/en/>
    E-Mail ist here: <info@catena-x.net> 
```

### Admonitions

They are not getting rendered correctly in the MD files but in docusaurus. Further information can be found [here](https://docusaurus.io/docs/markdown-features/admonitions).

#### DOs - Admonitions

:::tip

Some **content** with *Markdown* `syntax`.

:::

```md
:::tip

Some **content** with *Markdown* `syntax`.

:::
```

## Link to chapters/headlines

### DOs - chapters/headlines

Be aware if there is a "-" in the heading the IntelliSense in VS Code adds one "-" to many, which results in a error in the MDX linter. In addition if you want to link to the title of the file don't tag the heading with "#" it in the link, just link to the file itself. This would result in a error in the MDX linter.

Jump back to the [Top](#catena-x-ev-structure-and-guidelines)  
Jump to another [file](/getting-started-github#branching)

```md
    Jump back to the [Top](#catena-x-ev-structure-and-guidelines)  
    Jump to another [file](/getting-started-github#branching) 
```
