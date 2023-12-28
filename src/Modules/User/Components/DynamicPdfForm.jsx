import { useEffect, useState } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

// import pdfjs from 'pdfjs-dist';

import { InvoiceData } from '../Config/InvoiceData';
import { capitalizingData } from "../../../Utils/HelperFunctions";

export const DynamicPdfForm = () => {
    const [tableData, setTableData] = useState([]);
    const [tableFormData, setTableFormData] = useState([]);
    const fileName = "sample";
    const [pngImages, setPngImages] = useState("");

    useEffect(() => {
        if (InvoiceData?.items?.length > 0) {
            let items = InvoiceData?.items;
            setTableData(items);
            let headers = [];
            for (const [key, value] of Object.entries(items[0])) {
                headers.push({
                    name: key,
                    headerLabel: capitalizingData(key),
                    type: typeof value,
                    style: {}
                });
            }
            setTableFormData(headers);
        }
        return () => { }
    }, []);

    const handleResize = (iframe) => {
        if (iframe.contentDocument?.documentElement) {
            iframe.contentDocument.documentElement.style.height = '100%';
            iframe.contentDocument.documentElement.style.overflow = 'auto';
        }
    };

    function convertHtmlToPdf(type) {
        const iframe = document.getElementById("myIframe");

        const doc = new jsPDF();
        const iframeWindow = iframe.contentWindow;
        const iframeDocument = iframeWindow.document;

        html2canvas(iframeDocument.body).then(canvas => {
            const imageData = canvas.toDataURL("image/png");
            if (type === "save") {
                doc.addImage(imageData, "PNG", 10, 10, 190, 0);
                doc.save(`${fileName}.pdf`);
            }
            if (type === "pdf") {
                const imgProps = doc.getImageProperties(imageData);
                const pdfWidth = doc.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                doc.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                const pdfDataUri = doc.output('datauristring');
                iframe.src = pdfDataUri;

            }
            if (type === "image") {
                const dataUrl = canvas.toDataURL();
                console.log(dataUrl);
                const imageElement = new Image();
                imageElement.src = dataUrl;
                // document.body.appendChild(imageElement);
                document.getElementById("myList").appendChild(imageElement);
            }
        });

    }

    useEffect(() => {
        let iframe = document.getElementById("myIframe");
        handleResize(iframe);
        let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        let existingTable = document.getElementById("iframe-dynamic-table");
        if (existingTable) {
            let clonedTable = existingTable.cloneNode(true);
            iframeDocument.body.innerHTML = "";
            clonedTable.style.display = "table";
            iframeDocument.body.appendChild(clonedTable);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [tableFormData])

    // const convertPdfToPng = async (base64PdfString) => {
    //     try {
    //         const pdfData = atob(base64PdfString);

    //         // Load PDF document
    //         const pdf = await pdfjs.getDocument({ data: pdfData }).promise;

    //         const pngs = [];

    //         for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    //             const page = await pdf.getPage(pageNumber);

    //             // Create a canvas element to render the PDF page
    //             const canvas = document.createElement('canvas');
    //             const viewport = page.getViewport({ scale: 2 }); // Adjust scale as needed

    //             canvas.width = viewport.width;
    //             canvas.height = viewport.height;

    //             const canvasContext = canvas.getContext('2d');
    //             await page.render({ canvasContext, viewport }).promise;

    //             // Convert the canvas to a data URL (PNG)
    //             const dataUrl = canvas.toDataURL('image/png');
    //             pngs.push(dataUrl);
    //         }

    //         setPngImages(pngs);
    //     } catch (error) {
    //         console.error('Error converting PDF to PNG:', error);
    //     }
    // };

    return (
        <div>
            <iframe id="myIframe" style={{ border: "none" }} width="800px" height="600px" type="application/pdf" title="PDF Viewer"></iframe>
            {tableFormData?.length > 0 && <table id="iframe-dynamic-table" style={{ display: "none", borderCollapse: "collapse" }}>
                <thead>
                    <tr>{tableFormData.map((headItem, headKey) => { return <th key={headKey} style={{ padding: "8px", background: "#ddeeef" }}>{headItem.headerLabel}</th> })}</tr>
                </thead>
                <tbody>
                    {tableData.map((rowItem, rowKey) => {
                        return <tr key={rowKey}>
                            {tableFormData.map((columnItem, columnKey) => {
                                return <td style={{ padding: "8px" }} key={columnKey}>{rowItem[columnItem.name]}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>}

            <p onClick={() => convertHtmlToPdf("save")}>Save</p>
            <p onClick={() => convertHtmlToPdf("pdf")}>PDF</p>
            <p onClick={() => convertHtmlToPdf("image")}>Image</p>

        </div>
    )
}


