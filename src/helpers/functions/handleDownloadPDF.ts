export const handleDownloadPDF = async () => {
  // const response = await fetch('cv.pdf');
  // const blob = await response.blob();

  // const fileURL = window.URL.createObjectURL(blob);
  // let alink = document.createElement('a');
  // alink.href = fileURL;
  // alink.download = 'CV Frontend (EN)  - Eldiiar Saparbekov';
  // alink.click();

  fetch('cv.pdf').then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'cv.pdf';
      alink.click();
    });
  });
};
