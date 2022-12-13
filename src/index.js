// Import the MiroApi class and the ShapeItem interface
import { MiroApi, ShapeItem } from "@mirohq/miro-api";

// Create a new MiroApi object using an OAuth access token
const api = new MiroApi(oauthAccessToken);

// Get the Miro board using the board ID
const board = api.getBoard(boardId);

// Select the button element on the page
const button = document.querySelector('#my-button');

// Add an event listener to the button to listen for clicks
button.addEventListener('click', async () => {
  // Create a new sticky note on the Miro board when the button is clicked
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

  // Open a panel in the Miro board UI to display the sticky note
  await miro.board.ui.openPanel({url: 'app.html'});
});

// Initialize the Miro board UI event listener
async function init() {
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({url: 'app.html'});
  });
}

init();
