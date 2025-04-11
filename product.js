$(document).ready(function () {
    $('input[name="productName"]').on('input', function () {
      $('#previewName').text($(this).val());
    });

    $('textarea[name="productDescription"]').on('input', function () {
      $('#previewDescription').text($(this).val());
    });

    $('input[name="skuCode"]').on('input', function () {
      $('#previewSKU').text($(this).val());
    });

    $('input[name="netPrice"]').on('input', function () {
      $('#previewNetPrice').text($(this).val());
    });

    $('input[name="listPrice"]').on('input', function () {
      $('#previewListPrice').text($(this).val());
    });

    $('input[name="discountPercent"]').on('input', function () {
      $('#previewDiscount').text($(this).val());
    });

    $('input[name="gstRate"]').on('input', function () {
      $('#previewGST').text($(this).val());
    });

    $('input[name="shippingCharges"]').on('input', function () {
      $('#previewShipping').text($(this).val());
    });

    $('input[name="stockLevel"]').on('input', function () {
      $('#previewStock').text($(this).val());
    });

    // Image preview
    // $('input[name="productImages"]').on('change', function () {
    //   const file = this.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onload = function (e) {
    //       $('#previewImage').attr('src', e.target.result).show();
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // });
    $(document).ready(function () {
      $('input[name="productImages"]').on('change', function () {
        const file = this.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
            $('#previewImage').attr('src', e.target.result).fadeIn(200);
            $('#imageIcon').fadeOut(200);
          };
          reader.readAsDataURL(file);
        } else {
          $('#previewImage').fadeOut(200);
          $('#imageIcon').fadeIn(200);
        }
      });
    });
    
    
});


  const gstCheck = document.getElementById('gstInclusiveCheck');
  const gstRate = document.getElementById('gstRate');

  function toggleGstInput() {
    gstRate.disabled = !gstCheck.checked;
  }

  toggleGstInput();

  gstCheck.addEventListener('change', toggleGstInput);

  const form = document.querySelector('.addform');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      const input = form.elements[key];
      if (input && input.type === 'checkbox') {
        data[key] = input.checked;
      } else {
        data[key] = value;
      }
    }

    localStorage.setItem('productFormData', JSON.stringify(data));

    alert('Form data saved to localStorage!');
    location.reload()
    window.location.href ="Dashbord.html"

  });

  // window.addEventListener('DOMContentLoaded', () => {
  //   const savedData = localStorage.getItem('productFormData');
  //   if (savedData) {
  //     const data = JSON.parse(savedData);
  //     for (const [key, value] of Object.entries(data)) {
  //       const input = form.elements[key];
  //       if (input) {
  //         if (input.type === 'checkbox') {
  //           input.checked = value;
  //         } else {
  //           input.value = value;
  //         }
  //       }
  //     }
  //   }
  // });

  document.getElementById("backbtn").addEventListener("click", function() {
    window.location.href = "index.html";
  });


  $(document).ready(function () {
    function updatePreview() {
      const listPrice = parseFloat($('input[name="listPrice"]').val()) || 0;
      const gstRate = parseFloat($('input[name="gstRate"]').val()) || 0;
      const discount = parseFloat($('input[name="discountPercent"]').val()) || 0;
      const shipping = parseFloat($('input[name="shippingCharges"]').val()) || 0;
  
      const netPrice = listPrice + (listPrice * gstRate / 100);
      $('input[name="netPrice"]').val(netPrice.toFixed(2)); 
  
      $('#previewNetPrice').text(`RS ${netPrice.toFixed(2)}`);
      $('#previewListPrice').text(`RS ${listPrice.toFixed(2)}`);
  
      let extras = [];
  
      if (shipping) extras.push(`+ RS ${shipping.toFixed(2)} shipping`);
      if (gstRate) extras.push(`Incl. ${gstRate}% GST`);
      if (discount) extras.push(`+${discount}% OFF`);
  
      if (extras.length) {
        $('#previewExtras').html(extras.join(' . ')).show();
      } else {
        $('#previewExtras').hide();
      }
    }
  
    $('input[name="listPrice"], input[name="gstRate"], input[name="discountPercent"], input[name="shippingCharges"]').on('input', updatePreview);
  });
  
