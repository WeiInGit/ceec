// Import the MiroApi class and the ShapeItem interface
import { MiroApi, ShapeItem } from "@mirohq/miro-api";

// Create a new MiroApi object using an OAuth access token
const api = new MiroApi(oauthAccessToken);

// Get the Miro board using the board ID
const board = api.getBoard(boardId);

// Initialize the event listener and create a sticky note when the icon is clicked
async function init() {
  miro.board.ui.on('icon:click', async () => {
    // Create a new sticky note on the Miro board
    const sticky = await board.createStickyNoteItem({
      data: {
        content: "I'm a sticky note",
        shape: "square",
      },
      style: {
        fillColor: "light_yellow",
        textAlign: "center",
        textAlignVertical: "top",
      },
      position: {
        x: 0,
        y: 0,
      },
    });

    // Open a panel in the Miro board UI with the specified HTML page
    await miro.board.ui.openPanel({url: 'app.html'});
  });
}

init();
