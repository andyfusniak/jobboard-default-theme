document.addEventListener('alpine:init', () => {
  Alpine.data('initialSkillsCount', () => {
    let count = 0;
    document.querySelectorAll('#skills-checkboxes input[type=checkbox]').forEach(function(k) {
      if (k.checked) {
        count++;
      }
    });
    return count;
  });
  Alpine.store('imageViewer', {
    imageUrl: '',
    uploadSelected: false,
    chkLogo: document.getElementById('chk-logo').checked,
    text: false,
    fileChosen(event) {
      this.fileToDataUrl(event, src => this.imageUrl = src);
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
      this.uploadSelected = true;
      this.chkLogo = true;
      document.getElementById('chk-logo').checked = true;
      updateCreateBtnText();
    },
    removeLogo() {
      this.uploadSelected = false;
      this.chkLogo = false;
      document.getElementById('chk-logo').checked = false;
      updateCreateBtnText();
      this.$refs.logoInput.value = '';
    }
  });
  Alpine.store('adPreview', {
    title: '',
    remote: null,
    companyName: '',
    location: '',
    min: '',
    max: '',
    skills: [],
    empType: [],
    chkPinned: document.getElementById('chk-pinned30').checked,
    chkStd: document.getElementById('chk-hl-standard').checked,
    chkCustom: document.getElementById('chk-hl-custom').checked,
    hlCol: document.getElementById('hl-col').value,
    formatSalary(num) {
      return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
    }
  })
});

function priceCalcHandler(prices, currencySymbol) {
  const chkLogoInput = document.getElementById('chk-logo')
  const chkPinned30Input = document.getElementById('chk-pinned30');
  const chkHlStandardInput = document.getElementById('chk-hl-standard');
  const chkHlCustomInput = document.getElementById('chk-hl-custom');

  function calcPrice(prices) {
    const logo = chkLogoInput.checked ? prices.logo : 0.00;
    const pinned30 = chkPinned30Input.checked ? prices.pinned30 : 0.00;
    const hlStandard = chkHlStandardInput.checked ? prices.standardHighlight : 0.00;
    const hlCustom = chkHlCustomInput.checked ? prices.customHighlight : 0.00;
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

  return updateCreateBtnText;
}
