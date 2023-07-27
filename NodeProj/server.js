const express = require('express');
const app = express();
const port = 3000;

// Dynamic import to load the HTMLConstructor module
const HTMLConstructorPromise = import('./htmlConstructor.mjs');


const countryCodes = [
  {
    countryNameEn: 'Andorra',
    region: 'Europe',
    officialLanguageNameEn: 'Catalan, Valencian',
  },
  {
    countryNameEn: 'Afghanistan',
    region: 'Asia & Pacific',
    officialLanguageNameEn: 'Persian',
  },
  {
    countryNameEn: 'Antigua and Barbuda',
    region: 'South/Latin America',
    officialLanguageNameEn: 'English',
  },
  {
    countryNameEn: 'Anguilla',
    region: 'South/Latin America',
    officialLanguageNameEn: 'English',
  },
  {
    countryNameEn: 'Albania',
    region: 'Europe',
    officialLanguageNameEn: 'Albanian',
  },
  {
    countryNameEn: 'Armenia',
    region: 'Europe',
    officialLanguageNameEn: 'Armenian',
  },
  {
    countryNameEn: 'Angola',
    region: 'Africa',
    officialLanguageNameEn: 'Portuguese',
  },
  {
    countryNameEn: 'Antarctica',
    region: 'Asia & Pacific',
    officialLanguageNameEn: 'English',
  },
  {
    countryNameEn: 'Argentina',
    region: 'South/Latin America',
    officialLanguageNameEn: 'Spanish, Castilian',
  },
  {
    countryNameEn: 'American Samoa',
    region: 'Asia & Pacific',
    officialLanguageNameEn: 'English',
  },
];











const countriesLayouts = countryCodes

    .map(
      (country) => `<div>
        <p>${country.countryNameEn}</p>
        <p>${country.region}</p>
        <p>${country.officialLanguageNameEn}</p>
      </div>`
    );


app.get('/', async (req, res) => {
  try {
    // Resolve the HTMLConstructor module
    const { HTMLConstructor } = await HTMLConstructorPromise;

    // Create an instance of HTMLConstructor
    

    const htmlConstructor = new HTMLConstructor(
        "countries",
        countriesLayouts.join(""),
        `
        div {
            border: 1px solid black;
            margin: 5px;
            padding: 5px;
        }
        `,
        []
    );
    // Generate the final HTML content using the generateFile method
    const finalHTMLContent = htmlConstructor.generateFile('./public', 'index');

    // Send the response with the final HTML content
    res.send(finalHTMLContent);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error Caught');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
