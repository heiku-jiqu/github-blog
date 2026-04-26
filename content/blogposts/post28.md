+++
date = '2026-04-26T12:36:20+08:00'
title = 'Overview of Docx'
summary = 'What exactly is underneath Docx file format?'
tags = ["Word Document", "docx", "ECMA-376"]
+++

# Introduction

How does Word document (docx) save what you have written and how those things are formatted?
This post will give a high level overview of how the data is saved. 

_All information can be found online in the ECMA-376 spec that defines Open Office XML format._

# The Zip Folder

All `.docx` files are actually a `.zip` folder containing `.xml` files.
The "entrypoint" can be found in `_rels/.rel` `Relationships` xml, under a xml node called 
`<Relationship Type="...../officeDocument" Target="word/document.xml" />`, where the `Target` is the "entrypoint"/"root" xml.

Note that in the ECMA-376 reference doc, the entire zip folder is called a "package", and the 
Word document XML dialect is called "WordprocessingML".

# The Basic XML Structure

The root XML has the following structure:
```xml
<w:document>
    <w:body>
        <w:p>
            <w:r>
                <w:t>Hello world</w:t>
            </w:r>
        </w:p>
        <w:p>
            <w:pPtr />
            <w:r>
                <w:rPr /> 
                <w:t>...</w:t>
            </w:r>
        </w:p>
    </w:body>
</w:document>
```

- `w:document` root element, contains one body.
- `w:body` body element, contains one or more paragraphs
- `w:p` paragraph element,  and one or more runs
  - contains optional paragraphProperty (`w:pPr`) as its first child, which sets formatting for this paragraph
- `w:r` run element,  and one or more actual content (like text).
  - contains optional runProperty (`w:rPr`) as its first child, which sets formatting for this run
- `w:t` text element, contains raw text content.

Based on above, notice that:
  - Runs and Paragraphs CANNOT be nested
  - Text formatting property elements like `pPr` and `rPr` is set as the first child, not in the parent itself! In other words the element configures its _sibling elements_.

# The Sections

- `w:sectPr` section element configures page formatting and layout options like width and orientation. Contains header and footer. 
  - section header - can have up to 3 (for odd-numbered, even-numbered, first page)
  - section footer - can have up to 3 (for odd-numbered, even-numbered, first page)

**Note**: `w:sectPr` appears at the END of the section that it is configuring. 
This could either be within the last paragraph's property element of that section or the last child of body element:
```xml
<w:document>
    <w:body>
        <!-- Landscape layout starts here -->
        <w:p> <w:r> <w:t>Landscape para 1</w:t> </w:r> </w:p>
        <w:p>
            <w:pPtr >
                <w:sectPr>
                    <w:pgSz w:orient="landscape" />
                </w:sectPr>
            </w:pPtr >
            <w:r> <w:t>Landscape para 2</w:t> </w:r>
        </w:p>
        <!-- Portrait layout starts here -->
        <w:p> <w:r> <w:t>Hello world</w:t> </w:r> </w:p>
        <w:sectPr>
            <w:pgSz w:orient="portrait" />
        </w:sectPr>
    </w:body>
</w:document>
```

# The Element References and Relationships

The main XML can have elements that reference other elements found 
in other XML files within the zip file.
Some examples of elements that reference other elements include headers, footers, images, styles, numberings, comments. 

For these elements, they will appear in the main document as nodes with the `id` property,
for example `<w:footnoteReference w:id="2">` in main `document.xml`
referencing a `<w:footnote w:id="2">` element in the `ftr.xml`.

These cross-file references are specified in a Relationships xml inside `_rels/document.xml.rels`, where it will list all the other files that have been referenced in `document.xml`.
Depending on the element used in `document.xml`, the element's id should be either the element id found in xml (Implicit Relationship) or the element id found in `_rels/document.xml.rels` (Explicit Relationship).

Note that in the ECMA-376 reference doc, the XMLs are called "parts".

# The Lists

Lists like bullet point list and numbered list using numberings property `numPr` where 
each list item is a parapgraph with that `numPr`:
```xml
<w:p>
  <w:pPr>
    <w:numPr>
      <w:ilvl w:val="0"/>
      <w:numId w:val="1"/>
    </w:numPr>
  </w:pPr>
  <w:r> <w:t>First item</w:t> </w:r>
</w:p>
<w:p>
  <w:pPr>
    <w:numPr>
      <w:ilvl w:val="0"/>
      <w:numId w:val="1"/>
    </w:numPr>
  </w:pPr>
  <w:r> <w:t>Second item</w:t> </w:r>
</w:p>
```

Notice that `numId` references a numbering ID. Numberings are defined in another XML document called the Numbering Definitions Part `numbering.xml`.

# Wrapping Up

With this high level understanding, reading/writing to docx file should feel less arcane and more sensible. Most other elements are just variations of the above, and check out the ECMA-376 spec for a full documentation.

# Resources

All office documents (`.docx`, `.xlsx`, `.pptx`) follows an open specification that is documented in ECMA-376.
- [ECMA-376 Spec](https://ecma-international.org/publications-and-standards/standards/ecma-376/)
  - See Section 8.4 for overview  
  - Section 17 for what each element does. Skimming through all 17.x introductions is a good idea.
