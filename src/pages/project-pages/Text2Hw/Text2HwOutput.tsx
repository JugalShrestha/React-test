import jsPDF from "jspdf";
import rootBranch from "../../../components/variables/rootBranch";

interface Props {
  handwriting: string;
  linespacing: number;
  pageMargin: number;
  textSize: number;
  text: string;
  customHwChecker: boolean;
  customHw: string;
}

const Text2HwOutput: React.FC<Props> = ({
  handwriting,
  linespacing,
  pageMargin,
  textSize,
  text,
  customHwChecker,
  customHw,
}) => {
  let output = "";
  function text2handwritingConvertionOutput() {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
    });

    doc.setFontSize(textSize);

    if (customHwChecker) {
      doc.addFont(customHw, "CustomFont", "normal");
      doc.setFont("CustomFont");
    } else {
      doc.addFont(
        rootBranch + "../../../../src/assets/fonts/" + handwriting + ".ttf",
        "Handwriting",
        "normal"
      );

      doc.setFont("Handwriting");
    }

    // Set initial position
    let x = pageMargin;
    let y = pageMargin;

    // Calculate available width for text
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const availableHeight = pageHeight - 2 * pageMargin;
    const availableWidth = pageWidth - pageMargin;

    // Split the text into multiple lines within the document's width
    const lines = doc.splitTextToSize(text, availableWidth - pageMargin);

    const minLineSpacing = 6;
    const maxLineSpacing = linespacing;

    const minLineWidthSpacing = -3;
    const maxLineWidthSpacing = 3;

    let minFontSize = 0;
    let maxFontSize = 0;

    if (textSize == 14 || textSize == 15) {
      minFontSize = textSize;
      maxFontSize = textSize + 1;
    } else if (textSize == 24 || textSize == 23) {
      minFontSize = textSize - 1;
      maxFontSize = textSize;
    } else if (textSize > 15 && textSize < 23) {
      minFontSize = textSize - 1;
      maxFontSize = textSize + 1;
    }

    // Loop through each line and add it to the PDF
    lines.forEach((line: string) => {
      if (y > availableHeight + pageMargin + linespacing) {
        doc.addPage("a4", "p");
        y = pageMargin;
      }

      const randomLineSpacing =
        Math.floor(Math.random() * (maxLineSpacing - minLineSpacing + 1)) +
        minLineSpacing;
      const randomLineWidthSpacing =
        Math.floor(
          Math.random() * (maxLineWidthSpacing - minLineWidthSpacing + 1)
        ) + minLineWidthSpacing;
      const randomFontSize =
        Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) +
        minFontSize;
      x = pageMargin + randomLineWidthSpacing;

      doc.setFontSize(randomFontSize);
      doc.text(line, x, y);
      y += randomLineSpacing;
    });
    output = doc.output("datauristring");
  }

  text2handwritingConvertionOutput();
  return (
    <div className="text-2-handwriting-output-whole">
      <div className="header">output:</div>
      <iframe src={output} className="text-2-handwriting-output"></iframe>
    </div>
  );
};

export default Text2HwOutput;
