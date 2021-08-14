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

function priceCalcHandler(prices, currencySymbol) {
  const chkLogoInput = document.getElementById('chk-logo')
  const chkPinned30Input = document.getElementById('chk-pinned30');
  const chkHlStandardInput = document.getElementById('chk-hl-standard');
  const chkHlCustomInput = document.getElementById('chk-hl-custom');

  function calcPrice(prices) {
    const logo = chkLogoInput.checked ? prices.logo : 0.00;
    const pinned30 = chkPinned30Input.checked ? prices.pinned30 : 0.00;
    const hlStandard = chkHlStandardInput.checked ? prices.standardHighlightRecurring : 0.00;
    const hlCustom = chkHlCustomInput.checked ? prices.customHighlightRecurring : 0.00;
    return (prices.basicJobListing + logo + pinned30 + hlStandard + hlCustom) / 100.0;
  }

  function displayPrice(currencySymbol, price) {
    return currencySymbol + price;
  }

  function updateCreateBtnText() {
    document.getElementById('create-btn').innerText = `Post a job - ${ displayPrice(currencySymbol, calcPrice(prices)) }`;
  }

  chkLogoInput.addEventListener('change', () => {
    updateCreateBtnText();
  });
  chkPinned30Input.addEventListener('change', () => {
    updateCreateBtnText();
  });

  chkHlStandardInput.addEventListener('change', () => {
    updateCreateBtnText();
  });
  chkHlCustomInput.addEventListener('change', () => {
    updateCreateBtnText();
  });

  window.addEventListener('load', (event) => {
    updateCreateBtnText();
  });
}
