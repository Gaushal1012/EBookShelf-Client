import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
//  import pdf from "../../fees.pdf";
import "../../pages/BookReader.css";
import { useNavigate } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const ReaderModal = ({Pdf}) => {
  const history = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  console.log(Pdf);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const HandleClick = () => {
    history("/booklist");
  };
  return (
    <>
      <div className="book-reader">
        <div
          className="bookInfoLink"
          onClick={() => {
            HandleClick();
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "5px",
          }}
        >
          <i style={{ color: "gray" }} class="fa-solid fa-arrow-left"></i>
          <p style={{ fontSize: "13px", color: "gray" }}>Back to BookList</p>
        </div>
        <div className="document">
          <div className="marginDiv">
            <div className="controls">
              <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
                <p>Previous</p>
              </button>
              <span>
                {pageNumber} / {numPages}
              </span>
              <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                <p>Next</p>
              </button>
            </div>
            <Document file={`http://localhost:5000/${Pdf}`} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      </div>
    </>
  );
};
