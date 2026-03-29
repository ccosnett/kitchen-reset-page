module.exports = {
  body_class: ["readme-pdf"],
  css: `
    @page {
      size: A4;
      margin: 12mm;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #111827;
      background: #ffffff;
    }

    .readme-pdf {
      font-size: 11px;
      line-height: 1.18;
      padding: 0;
    }

    .readme-pdf h1,
    .readme-pdf h2,
    .readme-pdf h3,
    .readme-pdf p,
    .readme-pdf blockquote,
    .readme-pdf ol,
    .readme-pdf ul,
    .readme-pdf hr {
      margin-top: 0;
    }

    .readme-pdf h1 {
      margin-bottom: 6mm;
      font-size: 24px;
      text-align: center;
    }

    .readme-pdf h2 {
      margin-bottom: 2.5mm;
      font-size: 16px;
      text-align: center;
    }

    .readme-pdf h3 {
      margin-bottom: 1.5mm;
      font-size: 12px;
    }

    .readme-pdf p,
    .readme-pdf blockquote,
    .readme-pdf ol,
    .readme-pdf ul {
      margin-bottom: 2mm;
    }

    .readme-pdf ol,
    .readme-pdf ul {
      padding-left: 5mm;
    }

    .readme-pdf li {
      margin-bottom: 0.8mm;
    }

    .readme-pdf hr {
      margin-bottom: 2mm;
      border: 0;
      border-top: 1px solid #d1d5db;
    }

    .readme-pdf blockquote {
      padding-left: 3mm;
      color: #4b5563;
      border-left: 2px solid #d1d5db;
    }

    .readme-pdf em {
      color: #1f2937;
    }
  `,
  launch_options: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  page_media_type: "print",
  pdf_options: {
    format: "A4",
    margin: "12mm",
    printBackground: true,
    preferCSSPageSize: true,
  },
  dest: "build/README.pdf",
};
