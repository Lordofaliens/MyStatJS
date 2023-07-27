import fs from "fs";

export class HTMLConstructor {
  constructor(fileName = "index", content = "", style = "", scripts = []) {
    this.fileName = fileName;
    this.content = content;
    this.style = style;
    this.scripts = scripts;
  }

  addScript(scriptUrl) {
    this.scripts.push(scriptUrl);
  }

  generateBasicHTMLContent(content, style, scripts) {
    const scriptsTags = scripts.map((scriptUrl) => `<script src="${scriptUrl}"></script>`).join('\n');
    const basicHTMLContent = `
    <!DOCTYPE html>
      <html>
        <head>
          <style>
            ${style}
          </style>
        </head>
        <body>
          ${content}
          ${scriptsTags}
        </body>
      </html>
    `;

    return basicHTMLContent;
  }

  deleteContent(str, data) {
    try {
      const modifiedContent = data.replace(`<p>${str}</p>`, '');
      
      console.log('HTML file has been updated successfully!');
      return modifiedContent;
    } catch (err) {
      console.error('Error reading or writing the file:', err);
    }
  }

  generateFoldersFromPath(path) {
    if (!path.includes("/")) {
      !fs.existsSync(path) && fs.mkdirSync(path);
      return path;
    }

    const pathItems = path.split("/");

    pathItems.forEach((p, i) => {
      const fullPathToCurrentFolder = pathItems.slice(0, i + 1).join("/");

      !fs.existsSync(fullPathToCurrentFolder) &&
        fs.mkdirSync(fullPathToCurrentFolder);
    });
  }

    generateFile(path = '', fileName = 'index') {
  try {
    if (path) {
      this.generateFoldersFromPath(path);
    }

    const filePath = path ? `${path}/${fileName}.html` : `${fileName}.html`;

    this.addScript('scripts.mjs');
    this.addScript('don`t.mjs');
    this.addScript('exist.mjs');

    const finalHTMLContent = this.generateBasicHTMLContent(this.content, this.style, this.scripts);
    
    const editedHTMLContent = this.deleteContent('Afghanistan',finalHTMLContent);
    fs.writeFileSync(filePath, editedHTMLContent);
    return editedHTMLContent;
  } catch (err) {
    console.error('Error generating HTML file:', err);
    throw err; 
  }
}


  
}
