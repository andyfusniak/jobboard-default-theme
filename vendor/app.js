function imageViewer() {
  return {
    imageUrl: '',
    fileChosen(event) {
     this.fileToDataUrl(event, src => this.imageUrl = src);
     console.log(this.imageUrl);
    },
    fileToDataUrl(event, callback) {
      if (!event.target.files.length) return;

      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result= reader.result;
        callback(result);
      }
    },
  }
}
