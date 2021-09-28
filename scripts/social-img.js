//@ts-check
const nodeHtmlToImage = require('node-html-to-image')
const uuid = require('uuid')
const { format, parseJSON } = require('date-fns');

const html = `
<html>
  <head>
    <style>
      body {
        width: 1128px;
        height: 600px;
      }
    </style>

    <!-- Include external CSS, JavaScript or Fonts! -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
  </head>
  <body>
    <div class="p-4" style="background-color: #fefefe;font-family: 'Nunito', sans-serif; font-size: 20px; width: 1128px; height:600px;">
      <div class="d-flex flex-column justify-content-center align-items-center text-center" style="border: 10px solid #025a5f; height:100%; width:100%; border-radius:50px;">
        <span class="tweet-text mb-2" style="font-size: 52px;">
          {title}
        </span>

        <span class="text-muted mb-2">
          {date}
        </span>

        <div class="flex justify-center my-4">
          <div class="rounded-full inline-flex" style="background-color: #198c95; height: 0.25rem; width: 4rem;"></div>
        </div>

        <div class="mb-2">
          <img src="https://www.eliostruyf.com/images/elio-dark-2019.png" class="rounded-circle" width="150px">
        </div>
        <h4 class="mt-2" style="color: #025a5f" >Elio Struyf</h4>
        <span class="text-muted">@eliostruyf</span>
      </div>
    </div>
  </body>
</html>
`;

const arguments = process.argv;

if (arguments && arguments.length > 0 && arguments[2]) {
  const workspaceArg = arguments[2];
  const fileArg = arguments[3];
  const dataArg = arguments[4];
  const data = dataArg && typeof dataArg === "string" ? JSON.parse(dataArg) : null;
  
  if (data.title && data.date) {
    const parsedHtml = html.replace(`{title}`, data.title).replace(`{date}`, format(parseJSON(data.date), "MMM dd, yyyy"));
    const fileName = `${uuid.v4()}.png`;

    // @ts-ignore
    nodeHtmlToImage({
      output: `${workspaceArg}/static/social/${fileName}`,
      html: parsedHtml
    }).then(() => console.log(`preview: "/social/${fileName}"`)).catch(e => console.log(e?.message || e));
  }
}