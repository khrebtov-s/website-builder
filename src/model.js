import image from "./assets/image.jpg";
import {
  TitleBlock,
  TextBlock,
  ImageBlock,
  TextColumnsBlock,
} from "./classes/blocks";
const title = "Test Title";
export const model = [
  new TitleBlock(title, {
    tag: "h2",
    styles: "background-color: darkred; color: #fff; text-align: center",
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
