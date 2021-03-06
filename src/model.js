import image from "./assets/image.jpg";
import {
  TitleBlock,
  TextBlock,
  ImageBlock,
  TextColumnsBlock,
} from "./classes/blocks";
import { css } from "./utils";

const title = "Test Title";
export const model = [
  new TitleBlock(title, {
    tag: "h2",
    styles: css({
      background: 'darkred',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    })
  }),
  new TextBlock(
    "loLorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, temporerem",
    {
      styles: "background: darkblue; color: yellow",
    }
  ),
  new TextColumnsBlock(["text 1", "text 2", "text 3"], {
    styles: "padding: 1rem",
  }),
  new ImageBlock(image, {
    styles: "padding: 2 rem 0",
    alt: "butterfly",
    imageStyles: "width: 500px; height: auto",
  }),
];
