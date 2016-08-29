/** Release Notes 0.2.3
# Features
* Added ability to turn on button animation to draw attention to the submit button
* Change "Advanced Options" styling label to "Customize"
# Fixes
** Added some missing CSS resets
**/

/** To-do's
* Tie into colour lovers palette api
* CK editor inline editor
* Add ability to customize form field placeholders
* Add ability to choose fonts
* Add initial setup stage before allowing form customization?
** Fields include:
*** What should your headline say (with helper placeholder text)
*** What should your button say (with helper placeholder text)
* Add helper line 'The list ID you entered is LISTID - make sure that's correct before you add to your site.'
* On builder gives preview of how it will look on site.
* Set form colors based on website
* Add ability to set "submit" button to wiggle or shine
* Add chameleon.js (https://github.com/sgarza/Chameleon) to help people understand if their form is legible
**/

$(document).ready(function(){
  // Keep example form at the top of page on scroll
  // $('#aweberFormToSnippet').scrollToFixed();

  // Load initial view
  $.get('templates/main.html', function(data) {
    $('#formHTML').append(data);
  });

  $("#advancedStyleOptions :input").prop("disabled", true);
  $('#advancedStyleOptions label').addClass('text-muted');
  // Toggle advanced style options
    $('#advancedStyleOptionsToggle').change(function() {
      if($('#advancedStyleOptionsToggle').is(':checked')) {
        $('#advancedStyleOptions').slideDown('500');
        $("#advancedStyleOptions :input").prop("disabled", false);
        $('#advancedStyleOptions label').removeClass('text-muted');
      } else {
        $('#advancedStyleOptions').slideUp('500');
        $("#advancedStyleOptions :input").prop("disabled", true);
        $('#advancedStyleOptions label').addClass('text-muted');
      }
    });

  //Update text values
    // Update Headline Text
      textUpdate('#aweberHeadlineTextValueInput', '#aweberHeadlineTextValue');
    // Update Subheader Text
      textUpdate('#aweberSubheaderTextValueInput', '#aweberSubheaderTextValue');
    // Submit button text value
      valUpdate('#aweberButtonTextValueInput', '#submitButton');

  //Update text colors
    // Form text color
      colorUpdate('#aweberTextColorPicker', '.awbr-grid', 'color');
      colorUpdate('#aweberButtonBackgroundColorPicker', '.aweberFooterLink', 'color');
    // Button text color
      colorUpdate('#aweberButtonTextColorPicker', '.awbr-grid input[type="submit"]', 'color');

  // Update backgrounds
    // Form background color
      colorUpdate('#aweberBackgroundColorPicker', '.awbr-grid', 'background-color');
      bgImageUpdate('#aweberBackgroundImageInput', '.awbr-grid');
    // Button background color
      colorUpdate('#aweberButtonBackgroundColorPicker', '.awbr-grid input[type="submit"]', 'background-color');
      bgImageUpdate('#aweberButtonBackgroundImageInput', '.awbr-grid input[type="submit"]');
    // Form input background color
      colorUpdate('#aweberInputBackgroundColorPicker', '.awbr-grid input[type="email"] , .awbr-grid input[type="text"]', 'background-color');
      bgImageUpdate('#aweberInputBackgroundImageInput', '.awbr-grid input[type="email"] , .awbr-grid input[type="text"]');

  // Footer Toggle
    $('#aweberFooterToggle').change(function() {
      if($(this).is(':checked')) {
        $('#aweberHFormFooter').show();
      } else {
        $('#aweberHFormFooter').hide();
      }
    });

  // Animated Button Toggle
    $('#aweberAnimatedButtonToggle').change(function() {
      if($(this).is(':checked')) {
        $('.awbr-grid input[type="submit"]').addClass('awbr-pulse');
      } else {
        $('.awbr-grid input[type="submit"]').removeClass('awbr-pulse');
      }
    });

  // Init font picker
  $('#fontPicker').on('change', function() {
    var fontFamily = $(this).find(':selected').data('font'),
        gf = $(this).find(':selected').data('gf');

    if (fontFamily == "sans-serif") {
      $('.awbr-grid').css('font-family', this.value + ', arial, sans-serif');
    } else {
      $('.awbr-grid').css('font-family', this.value + ', serif');
    }
    googleFont(gf)
    initTheme();
  });

  // Include google font link when needed
  function googleFont(isGF){
    if(isGF == false) {
      $('#aweber-gf').remove();
    } else {
      $('#aweberFormToSnippet').prepend('<link href="https://fonts.googleapis.com/css?family=' + isGF + '" rel="stylesheet" type="text/css" id="aweber-gf">');
    }
  }

  //<link href="https://fonts.googleapis.com/css?family=Caveat+Brush" rel="stylesheet" type="text/css">

  // Init theme picker
    $('#themePicker').selectpicker();

    $('#themePicker').on('change', function() {
      if (this.value == 'Neutral') {
        setTheme( '#eeeeee',
                  '',
                  '#333333',
                  '#ffffff',
                  '',
                  '#333333',
                  '#aaaaaa',
                  '',
                  '#ffffff');
      } else if (this.value == 'Geocities') {
        setTheme( '#000000',
                  'http://code.divshot.com/geo-bootstrap/img/microfab.gif',
                  '#FFFFFF',
                  '#FFFFFF',
                  'https://raw.githubusercontent.com/divshot/geo-bootstrap/master/img/flames.gif',
                  'green',
                  '#55FFFF',
                  'http://code.divshot.com/geo-bootstrap/img/rainbow.gif',
                  '#FFFFFF');
      } else if (this.value == 'Simple') {
        setTheme( '#FFFFFF',
                  '',
                  '#4a4a4a',
                  '#F1F1F1',
                  '',
                  '#4a4a4a',
                  '#33AAFF',
                  '',
                  '#FFFFFF');
      } else if (this.value == 'The Blues') {
        setTheme( '#3c8dc5',
                  '',
                  '#ffffff',
                  '#e9f2f9',
                  '',
                  '',
                  '#b2d1e5',
                  '',
                  '#3c8dc5');
      } else if (this.value == 'Etsy') {
        setTheme( '#f4f5ed',
                  '',
                  '#929487',
                  '#c7c9be',
                  '',
                  '',
                  '#dc4e00',
                  '',
                  '#f4f5ed');
      } else if (this.value == 'Minty') {
        setTheme( '#c0dfd9',
                  '',
                  '#3b3a36',
                  '#e9ece5',
                  '',
                  '',
                  '#3b3a36',
                  '',
                  '#ffffff');
      } else if (this.value == 'Jungle') {
        setTheme( '#283018',
                  '',
                  '#f0eceb',
                  '#f0eceb',
                  '',
                  '',
                  '#aa863a',
                  '',
                  '#f0eceb');
      } else if (this.value == 'Navy') {
        setTheme( '#22264b',
                  '',
                  '#e8edf3',
                  '#e8edf3',
                  '',
                  '',
                  '#e6cf8b',
                  '',
                  '#22264b');
      }
    });

  initTheme();
});

/**
Set Theme
Params:
  Form Background Color,
  Form Background Image,
  Form Text Color,
  Input Background Color,
  Input Background Image,
  Input Text Color,
  Button Background Color,
  Button Background Image,
  Button Text Color
**/
function setTheme(formBackgroundColor, formBackgroundImage, formTextColor, inputBackgroundColor, inputBackgroundImage, inputTextColor, buttonBackgroundColor, buttonBackgroundImage, buttonTextColor) {
  $('#aweberBackgroundColorPicker input').val(formBackgroundColor).change();
  $('#aweberBackgroundImageInput').val(formBackgroundImage).change();
  $('#aweberTextColorPicker input').val(formTextColor).change();
  $('#aweberInputBackgroundColorPicker input').val(inputBackgroundColor).change();
  $('#aweberInputBackgroundImageInput').val(inputBackgroundImage).change();
  $('.awbr-grid input[type="email"] , .awbr-grid input[type="text"]').css('color', inputTextColor);
  $('#aweberButtonBackgroundColorPicker input').val(buttonBackgroundColor).change();
  $('#aweberButtonBackgroundImageInput').val(buttonBackgroundImage).change();
  $('#aweberButtonTextColorPicker input').val(buttonTextColor).change();
}

function initTheme() {
  var urlFormBackgroundColor = getUrlParameter('formBackgroundColor'),
      urlFormBackgroundImage = getUrlParameter('formBackgroundImage'),
      urlFormTextColor = getUrlParameter('formTextColor'),
      urlInputBackgroundColor = getUrlParameter('inputBackgroundColor'),
      urlInputBackgroundImage = getUrlParameter('inputBackgroundImage'),
      urlInputTextColor = getUrlParameter('inputTextColor'),
      urlButtonBackgroundColor = getUrlParameter('buttonBackgroundColor'),
      urlButtonBackgroundImage = getUrlParameter('buttonBackgroundImage'),
      urlButtonTextColor = getUrlParameter('buttonTextColor');

  if(urlFormBackgroundColor !== undefined) {
    $('#aweberBackgroundColorPicker input').val(urlFormBackgroundColor).change();
  }
  if(urlFormBackgroundImage !== undefined) {
    $('#aweberBackgroundImageInput').val(urlFormBackgroundImage).change();
  }
  if(urlFormTextColor !== undefined) {
    $('#aweberTextColorPicker input').val('#' + urlFormTextColor).change();
  }
  if(urlInputBackgroundColor !== undefined) {
    $('#aweberInputBackgroundColorPicker input').val('#' + urlInputBackgroundColor).change();
  }
  if(urlInputBackgroundImage !== undefined) {
    $('#aweberInputBackgroundImageInput').val(urlInputBackgroundImage).change();
  }
  if(urlInputTextColor !== undefined) {
    $('.awbr-grid input[type="email"] , .awbr-grid input[type="text"]').css('color', '#' + urlInputTextColor);
  }
  if(urlButtonBackgroundColor !== undefined) {
    $('#aweberButtonBackgroundColorPicker input').val('#' + urlButtonBackgroundColor).change();
  }
  if(urlButtonBackgroundImage !== undefined) {
    $('#aweberButtonBackgroundImageInput').val(urlButtonBackgroundImage).change();
  }
  if(urlButtonTextColor !== undefined) {
    $('#aweberButtonTextColorPicker input').val('#' + urlButtonTextColor).change();
  }
}

function aweberFormCheck(input, theDefault) {
  if ($('#' + input + 'Input').val() !== '') {
    var theValue = $('#' + input + 'Input').val();
    $('#' + input).attr('value', theValue);
  } else {
    $('#' + input).attr('value', theDefault);
  }
}

// Update the html contents of an element
  function textUpdate(field, element) {
    $(field).bind('keyup change', function(e) {
      if($(field).val() != '') {
        $(element).html($(this).val());
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  }

  $('#aweberHeadlineTextValueInput').bind('keyup change', function(e) {
    if($('#aweberHeadlineTextValueInput').val() != '') {
      $('#aweberHeadlineTextValue').show();
      $('.awbr-gridCol-2-5').addClass('aweberHForm-headline-inputs');
    } else {
      $('#aweberHeadlineTextValue').hide();
      $('.awbr-gridCol-2-5').removeClass('aweberHForm-headline-inputs');
    }
  });

// Update button text in form based on contents of an input field
  function valUpdate(field, element) {
    $(field).bind('keyup change', function(e) {
      $(element).val($(this).val());
    });
  }

// Update colors using bootstrap color picker
  function colorUpdate(picker, element, style) {
    $(picker).colorpicker().on('changeColor.colorpicker', function(event) {
      var newColor = event.color.toHex();
      $(element).css(style, newColor);
    });
  }

// Update background images
  function bgImageUpdate(field, element) {
    $(field).bind('keyup change', function(e) {
      $(element).css('background-image', 'url(' + $(this).val() + ')');
      console.log();
    });
  }

  $('#aweberBuildForm').click(function(){
    if($('#aweberListIdInput').val() !== '') {
      aweberFormCheck('aweberListId');
      aweberFormCheck('aweberRedirect', 'https://www.aweber.com/thankyou-coi.htm?m=text');
      aweberFormCheck('aweberAdTracking', '');

      // Update embed snippet
      $('.snippet').html('');
      $('.snippet').text($('#aweberFormToSnippet').html());

      $('#codeSnippet').modal('show');

      $('#aweberListIdInput').parent().removeClass('has-error');

      ga('send', 'event', 'Button', 'Build', 'Built');
    } else {
      // Error when AWlist ID not filled
      $('#aweberListIdInput').parent().addClass('has-error');
      $('.tab-pane').removeClass('in active');
      $('#settings').addClass('in active');

      ga('send', 'event', 'Button', 'Build', 'Fail');
    }
  });

// Get URL params
  var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : sParameterName[1];
          }
      }
  };

// Build share URL
  $('#aweberShareForm').click(function() {
    $('#shareURL').modal('show');
    var formBG = $('#aweberBackgroundColorPicker input').val().substring(1);
    var formBGImg = $('#aweberBackgroundImageInput').val();
    var formText = $('#aweberTextColorPicker input').val().substring(1);
    var inputBG = $('#aweberInputBackgroundColorPicker input').val().substring(1);
    var inputBGImg = $('#aweberInputBackgroundImageInput').val();
    var buttonBG = $('#aweberButtonBackgroundColorPicker input').val().substring(1);
    var buttonBGImg = $('#aweberButtonBackgroundImageInput').val();
    var buttonText = $('#aweberButtonTextColorPicker input').val().substring(1);

    $('.shareURL').html('http://aweber.design/webforms/?formBackgroundColor=' + formBG + '&formBackgroundImage=' + formBGImg + '&inputBackgroundColor=' + inputBG + '&inputBackgroundImage='+ inputBGImg + '&buttonBackgroundColor=' + buttonBG + '&buttonBackgroundImage=' + buttonBGImg + '&formTextColor=' + formText + '&inputTextColor=ffff00&buttonTextColor=' + buttonText)
  });


function loadTemplate(css, html) {
  $('.breadcrumb').show();
  $('#formCSS').empty();
  $('#formHTML').empty();
  $('#preview').removeClass('col-md-12').addClass('col-md-9');
  $('#customize').removeClass('hidden').addClass('col-md-3');

  $.get('styles/templates/grid.css', function(data) {
    $('#formCSS').append(data);
  });
  $.get('styles/templates/' + css + '.css', function(data) {
    $('#formCSS').append(data);
  });
  $.get('templates/' + html + '.html', function(data) {
    $('#formHTML').append(data);
  });
}
