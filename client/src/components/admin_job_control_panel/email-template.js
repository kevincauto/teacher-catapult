export const emailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <!-- NAME: 1 COLUMN -->
  <!--[if gte mso 15]>
		<xml>
			<o:OfficeDocumentSettings>
			<o:AllowPNG/>
			<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]-->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>*|MC:SUBJECT|*</title>

  <style type="text/css">
    p {
      margin: 10px 0;
      padding: 0;
    }

    table {
      border-collapse: collapse;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      display: block;
      margin: 0;
      padding: 0;
    }

    img,
    a img {
      border: 0;
      height: auto;
      outline: none;
      text-decoration: none;
    }

    body,
    #bodyTable,
    #bodyCell {
      height: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    #outlook a {
      padding: 0;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }

    table {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    .ReadMsgBody {
      width: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    p,
    a,
    li,
    td,
    blockquote {
      mso-line-height-rule: exactly;
    }

    a[href^=tel],
    a[href^=sms] {
      color: inherit;
      cursor: default;
      text-decoration: none;
    }

    p,
    a,
    li,
    td,
    body,
    table,
    blockquote {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
      line-height: 100%;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    #bodyCell {
      padding: 10px;
    }

    .templateContainer {
      max-width: 600px !important;
    }

    a.mcnButton {
      display: block;
    }

    .mcnImage {
      vertical-align: bottom;
    }

    .mcnTextContent {
      word-break: break-word;
    }

    .mcnTextContent img {
      height: auto !important;
    }

    .mcnDividerBlock {
      table-layout: fixed !important;
    }

    /*
	@tab Page
	@section Background Style
	@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
	*/
    body,
    #bodyTable {
      /*@editable*/
      background-color: #BBBBBB;
    }

    /*
	@tab Page
	@section Background Style
	@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
	*/
    #bodyCell {
      /*@editable*/
      border-top: 0;
    }

    /*
	@tab Page
	@section Email Border
	@tip Set the border for your email.
	*/
    .templateContainer {
      /*@editable*/
      border: 0;
    }

    /*
	@tab Page
	@section Heading 1
	@tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
	@style heading 1
	*/
    h1 {
      /*@editable*/
      color: #202020;
      /*@editable*/
      font-family: Helvetica;
      /*@editable*/
      font-size: 26px;
      /*@editable*/
      font-style: normal;
      /*@editable*/
      font-weight: bold;
      /*@editable*/
      line-height: 125%;
      /*@editable*/
      letter-spacing: normal;
      /*@editable*/
      text-align: left;
    }

    /*
	@tab Page
	@section Heading 2
	@tip Set the styling for all second-level headings in your emails.
	@style heading 2
	*/
    h2 {
      /*@editable*/
      color: #202020;
      /*@editable*/
      font-family: Helvetica;
      /*@editable*/
      font-size: 22px;
      /*@editable*/
      font-style: normal;
      /*@editable*/
      font-weight: bold;
      /*@editable*/
      line-height: 125%;
      /*@editable*/
      letter-spacing: normal;
      /*@editable*/
      text-align: left;
    }

    /*
	@tab Page
	@section Heading 3
	@tip Set the styling for all third-level headings in your emails.
	@style heading 3
	*/
    h3 {
      /*@editable*/
      color: #202020;
      /*@editable*/
      font-family: Helvetica;
      /*@editable*/
      font-size: 20px;
      /*@editable*/
      font-style: normal;
      /*@editable*/
      font-weight: bold;
      /*@editable*/
      line-height: 125%;
      /*@editable*/
      letter-spacing: normal;
      /*@editable*/
      text-align: left;
    }

    /*
	@tab Page
	@section Heading 4
	@tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
	@style heading 4
	*/
    h4 {
      /*@editable*/
      color: #202020;
      /*@editable*/
      font-family: Helvetica;
      /*@editable*/
      font-size: 18px;
      /*@editable*/
      font-style: normal;
      /*@editable*/
      font-weight: bold;
      /*@editable*/
      line-height: 125%;
      /*@editable*/
      letter-spacing: normal;
      /*@editable*/
      text-align: left;
    }

    /*
	@tab Preheader
	@section Preheader Style
	@tip Set the background color and borders for your email's preheader area.
	*/
    #templatePreheader {
      /*@editable*/
      background-color: #333333;
      /*@editable*/
      border-top: 0;
      /*@editable*/
      border-bottom: 0;
      /*@editable*/
      padding-top: 3px;
      /*@editable*/
      padding-bottom: 3px;
    }

    /*
	@tab Preheader
	@section Preheader Text
	@tip Set the styling for your email's preheader text. Choose a size and color that is easy to read.
	*/
    #templatePreheader .mcnTextContent,
    #templatePreheader .mcnTextContent p {
      /*@editable*/
      color: #ffffff;
      /*@editable*/
      font-family: Helvetica;
      /*@editable*/
      font-size: 14px;
      /*@editable*/
      line-height: 150%;
      /*@editable*/
      text-align: center;
    }

    /*
	@tab Preheader
	@section Preheader Link
	@tip Set the styling for your email's preheader links. Choose a color that helps them stand out from your text.
	*/
    #templatePreheader .mcnTextContent a,
    #templatePreheader .mcnTextContent p a {
      /*@editable*/
      color: #ffffff;
      /*@editable*/
      font-weight: normal;
      /*@editable*/
      text-decoration: none;
    }

    /*
	@tab Header
	@section Header Style
	@tip Set the background color and borders for your email's header area.
	*/
    #templateHeader {
      /*@editable*/
      background-color: #fff;
      /*@editable*/
      border-top: 0;
      /*@editable*/
      border-bottom: 0;
      /*@editable*/
      padding-top: 0px;
      /*@editable*/
      padding-bottom: 0;
    }

    /*
	@tab Header
	@section Header Text
	@tip Set the styling for your email's header text. Choose a size and color that is easy to read.
	*/
    #templateHeader .mcnTextContent,
    #templateHeader .mcnTextContent p {
      /*@editable*/
      color: #202020;
      /*@editable*/
      font-family: Helvetica;
      /*@editable*/
      font-size: 16px;
      /*@editable*/
      line-height: 150%;
      /*@editable*/
      text-align: left;
    }

    /*
	@tab Header
	@section Header Link
	@tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
	*/
    #templateHeader .mcnTextContent a,
    #templateHeader .mcnTextContent p a {
      /*@editable*/
      color: #FF8A2B;
      /*@editable*/
      font-weight: normal;
      /*@editable*/
      text-decoration: none;
    }

    /*
	@tab Body
	@section Body Style
	@tip Set the background color and borders for your email's body area.
	*/
    #templateBody {
      /*@editable*/
      background-color: #FFFFFF;
      /*@editable*/
      border-top: 0;
      /*@editable*/
      border-bottom: 2px solid #EAEAEA;
      /*@editable*/
      padding-top: 0;
      /*@editable*/
      padding-bottom: 9px;
    }

    /*
	@tab Body
	@section Body Text
	@tip Set the styling for your email's body text. Choose a size and color that is easy to read.
	*/
    #templateBody .mcnTextContent,
    #templateBody .mcnTextContent p {
      /*@editable*/
      color: #202020;
      /*@editable*/
      font-family: Helvetica;
      /*@editable*/
      font-size: 16px;
      /*@editable*/
      line-height: 150%;
      /*@editable*/
      text-align: left;
    }

    /*
	@tab Body
	@section Body Link
	@tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
	*/
    #templateBody .mcnTextContent a,
    #templateBody .mcnTextContent p a {
      /*@editable*/
      color: #FF8A2B;
      /*@editable*/
      font-weight: normal;
      /*@editable*/
      text-decoration: none;
    }

    /*
	@tab Footer
	@section Footer Style
	@tip Set the background color and borders for your email's footer area.
	*/
    #templateFooter {
      /*@editable*/
      background-color: #FAFAFA;
      /*@editable*/
      border-top: 0;
      /*@editable*/
      border-bottom: 0;
      /*@editable*/
      padding-top: 9px;
      /*@editable*/
      padding-bottom: 9px;
    }

    /*
	@tab Footer
	@section Footer Text
	@tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
	*/
    #templateFooter .mcnTextContent,
    #templateFooter .mcnTextContent p {
      /*@editable*/
      color: #656565;
      /*@editable*/
      font-family: Helvetica;
      /*@editable*/
      font-size: 12px;
      /*@editable*/
      line-height: 150%;
      /*@editable*/
      text-align: center;
    }

    /*
	@tab Footer
	@section Footer Link
	@tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
	*/
    #templateFooter .mcnTextContent a,
    #templateFooter .mcnTextContent p a {
      /*@editable*/
      color: #656565;
      /*@editable*/
      font-weight: normal;
      /*@editable*/
      text-decoration: underline;
    }

    @media only screen and (min-width:768px) {
      .templateContainer {
        width: 600px !important;
      }

    }

    @media only screen and (max-width: 480px) {

      body,
      table,
      td,
      p,
      a,
      li,
      blockquote {
        -webkit-text-size-adjust: none !important;
      }

    }

    @media only screen and (max-width: 480px) {
      body {
        width: 100% !important;
        min-width: 100% !important;
      }

    }

    @media only screen and (max-width: 480px) {
      #bodyCell {
        padding-top: 10px !important;
      }

    }

    @media only screen and (max-width: 480px) {
      .mcnImage {
        width: 100% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      .mcnCaptionTopContent,
      .mcnCaptionBottomContent,
      .mcnTextContentContainer,
      .mcnBoxedTextContentContainer,
      .mcnImageGroupContentContainer,
      .mcnCaptionLeftTextContentContainer,
      .mcnCaptionRightTextContentContainer,
      .mcnCaptionLeftImageContentContainer,
      .mcnCaptionRightImageContentContainer,
      .mcnImageCardLeftTextContentContainer,
      .mcnImageCardRightTextContentContainer {
        max-width: 100% !important;
        width: 100% !important;
      }

    }

    @media only screen and (max-width: 480px) {
      .mcnBoxedTextContentContainer {
        min-width: 100% !important;
      }

    }

    @media only screen and (max-width: 480px) {
      .mcnImageGroupContent {
        padding: 9px !important;
      }

    }

    @media only screen and (max-width: 480px) {

      .mcnCaptionLeftContentOuter .mcnTextContent,
      .mcnCaptionRightContentOuter .mcnTextContent {
        padding-top: 9px !important;
      }

    }

    @media only screen and (max-width: 480px) {

      .mcnImageCardTopImageContent,
      .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
        padding-top: 18px !important;
      }

    }

    @media only screen and (max-width: 480px) {
      .mcnImageCardBottomImageContent {
        padding-bottom: 9px !important;
      }

    }

    @media only screen and (max-width: 480px) {
      .mcnImageGroupBlockInner {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }

    }

    @media only screen and (max-width: 480px) {
      .mcnImageGroupBlockOuter {
        padding-top: 9px !important;
        padding-bottom: 9px !important;
      }

    }

    @media only screen and (max-width: 480px) {

      .mcnTextContent,
      .mcnBoxedTextContentColumn {
        padding-right: 18px !important;
        padding-left: 18px !important;
      }

    }

    @media only screen and (max-width: 480px) {

      .mcnImageCardLeftImageContent,
      .mcnImageCardRightImageContent {
        padding-right: 18px !important;
        padding-bottom: 0 !important;
        padding-left: 18px !important;
      }

    }

    @media only screen and (max-width: 480px) {
      .mcpreview-image-uploader {
        display: none !important;
        width: 100% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Heading 1
	@tip Make the first-level headings larger in size for better readability on small screens.
	*/
      h1 {
        /*@editable*/
        font-size: 22px !important;
        /*@editable*/
        line-height: 125% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Heading 2
	@tip Make the second-level headings larger in size for better readability on small screens.
	*/
      h2 {
        /*@editable*/
        font-size: 20px !important;
        /*@editable*/
        line-height: 125% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Heading 3
	@tip Make the third-level headings larger in size for better readability on small screens.
	*/
      h3 {
        /*@editable*/
        font-size: 18px !important;
        /*@editable*/
        line-height: 125% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Heading 4
	@tip Make the fourth-level headings larger in size for better readability on small screens.
	*/
      h4 {
        /*@editable*/
        font-size: 16px !important;
        /*@editable*/
        line-height: 150% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Boxed Text
	@tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
	*/
      .mcnBoxedTextContentContainer .mcnTextContent,
      .mcnBoxedTextContentContainer .mcnTextContent p {
        /*@editable*/
        font-size: 14px !important;
        /*@editable*/
        line-height: 150% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Preheader Visibility
	@tip Set the visibility of the email's preheader on small screens. You can hide it to save space.
	*/
      #templatePreheader {
        /*@editable*/
        display: block !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Preheader Text
	@tip Make the preheader text larger in size for better readability on small screens.
	*/
      #templatePreheader .mcnTextContent,
      #templatePreheader .mcnTextContent p {
        /*@editable*/
        font-size: 14px !important;
        /*@editable*/
        line-height: 150% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Header Text
	@tip Make the header text larger in size for better readability on small screens.
	*/
      #templateHeader .mcnTextContent,
      #templateHeader .mcnTextContent p {
        /*@editable*/
        font-size: 16px !important;
        /*@editable*/
        line-height: 150% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Body Text
	@tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
	*/
      #templateBody .mcnTextContent,
      #templateBody .mcnTextContent p {
        /*@editable*/
        font-size: 16px !important;
        /*@editable*/
        line-height: 150% !important;
      }

    }

    @media only screen and (max-width: 480px) {

      /*
	@tab Mobile Styles
	@section Footer Text
	@tip Make the footer content text larger in size for better readability on small screens.
	*/
      #templateFooter .mcnTextContent,
      #templateFooter .mcnTextContent p {
        /*@editable*/
        font-size: 14px !important;
        /*@editable*/
        line-height: 150% !important;
      }

    }
  </style>
</head>

<body>
  <center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="164%" id="bodyTable">
      <tr>
        <td align="center" valign="top" id="bodyCell">
          <!-- BEGIN TEMPLATE // -->
          <!--[if gte mso 9]>
						<table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
						<tr>
						<td align="center" valign="top" width="600" style="width:600px;">
						<![endif]-->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
            <tr>
              <td valign="top" id="templatePreheader">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                  <tbody class="mcnTextBlockOuter">
                    <tr>
                      <td valign="top" class="mcnTextBlockInner">

                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="366" class="mcnTextContentContainer">
                          <tbody>
                            <tr>

                              <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-left:18px; padding-bottom:9px; padding-right:0;">

                                <font color="#ffffff">This week's new teaching jobs.</font>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table align="right" border="0" cellpadding="0" cellspacing="0" width="197" class="mcnTextContentContainer">
                          <tbody>
                            <tr>

                              <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right:18px; padding-bottom:9px; padding-left:18px;">

                                <a href="*|ARCHIVE|*" target="_blank">View this email in your browser</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td valign="top" id="templateHeader">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
                  <tbody class="mcnImageBlockOuter">
                    <tr>
                      <td valign="top" style="padding:0px" class="mcnImageBlockInner">
                        <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer"
                          style="min-width:100%;">
                          <tbody>
                            <tr>
                              <td class="mcnImageContent" valign="top" style="padding-right: 0px; padding-left: 0px; padding-top: 0; padding-bottom: 0; text-align:center;">

                                <a href="http://teachercatapult.com/teaching-jobs-in-pa/" title="" class="" target="_blank">
                                  <img align="center" alt="" src="https://gallery.mailchimp.com/bda88dde6351939572b55c93d/images/90bc6c91-5e91-45a9-849b-bbf896a9a616.png"
                                    width="600" style="max-width:600px; padding-bottom: 0; display: inline !important; vertical-align: bottom;"
                                    class="mcnImage">
                                </a>

                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td valign="top" id="templateBody">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                  <tbody class="mcnTextBlockOuter">
                    <tr>
                      <td valign="top" class="mcnTextBlockInner">

                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;"
                          class="mcnTextContentContainer">
                          <tbody>
                            <tr>

                              <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">
                              ${artJobs.length > 0 ?
    `<p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                    target="_blank">14 Art Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                style="font-family:arial,helvetica,sans-serif; line-height:18px">${artJobs}</span></span></p>`
    :
    ``
  }  

                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">15 Autistic Support Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Allentown City
                                      SD, Central Bucks SD, Chester-Upland SD, Council Rock SD, General McLane
                                      SD, Hatboro-Horsham SD, Hempfield SD, Lancaster SD, Middletown Area SD, Owen J
                                      Roberts SD, Pittsburgh SD, Reading SD, Union Area SD, Upper Dublin SD, Riverview
                                      IU 6</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">3 Behavior Specialist Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Wilson SD, Bucks
                                      County IU 22, Sankofa Freedom Academy Charter School</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">1 Business Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Central Dauphin
                                      SD</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">4 Computer Science Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Lower Merion
                                      SD, North Star SD, Steelton-Highspire SD, Upper Darby SD</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">6 Early Childhood Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Radcliffe
                                      Learning Center, Blue Mountain SD, Manheim Township SD, South Williamsport Area
                                      SD, Delaware County IU 25, Crispus Attucks Youthbuild CS</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">48 Elementary Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Philadelphia
                                      City SD, Great Valley SD, Green Woods Charter School, Steelton-Highspire School
                                      District, Chester Community Charter School,The, Wilson SD, Big Beaver Falls Area
                                      SD, Centennial SD, Central Dauphin SD, Eastern York SD, Forbes Road SD, Garnet
                                      Valley SD, General McLane SD, Hanover Area SD, Homer-Center SD, Interboro
                                      SD, Lehighton Area SD, Middletown Area SD, Moon Area SD, Northeastern York
                                      SD, Northern Lebanon SD, Northwestern SD, Pottsville Area SD, Radnor Township
                                      SD, Riverview SD, Smethport Area SD, South Western SD, Southern Columbia Area
                                      SD, Steelton-Highspire SD, Wellsboro Area SD, Agora Cyber CS, Esperanza Academy
                                      Charter School, Laboratory CS, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">13 Emotional Support Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Bellefonte Area
                                      SD, Governor Mifflin SD, Middletown Area SD, Northern Lebanon SD, Perkiomen
                                      Valley SD, Radnor Township SD, Shenandoah Valley SD, Montgomery County IU
                                      23, Esperanza Academy Charter School, Frederick Douglass Mastery Charter
                                      School, Philadelphia City SD, NHS Human Services – Education and Autism Division
                                      – Posted by, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">30 English Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Brownsville Area
                                      SD, Delaware Valley SD, Erie City SD, Exeter Township SD, Greater Latrobe
                                      SD, Hempfield SD, Lower Dauphin SD, Marple Newtown SD, Montgomery Area SD, Penns
                                      Valley Area SD, Quaker Valley SD, Seneca Valley SD, Shenandoah Valley
                                      SD, Southern Tioga SD, Springfield SD, Upper Perkiomen SD, Wallenpaupack Area
                                      SD, Williamsport Area SD, Capital Area IU 15, Chester County IU 24, Colonial IU
                                      20, Agora Cyber CS, Esperanza Academy Charter School, Frederick Douglass Mastery
                                      Charter School, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">5 ESL Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Juniata County
                                      SD, Upper Adams SD, ARIN IU 28, Frederick Douglass Mastery Charter School, Pan
                                      American Academy CS</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">2 Family and Consumer Science Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Northeastern
                                      York SD, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">1 Foreign Language Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Fannett-Metal SD</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">2 Gifted Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Wallingford-Swarthmore
                                      SD, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">7 Guidance Counselor Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Chichester
                                      SD, Penns Valley Area SD, Phoenixville Area SD, Southeast Delco SD, Southern
                                      Columbia Area SD, Esperanza Academy Charter School, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">11 Health Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Independence
                                      Charter School, Lehigh Valley Academy Regional Charter School, North Penn
                                      SD, Oxford Area SD, Philadelphia City SD, Chester County IU 24, Esperanza Academy
                                      Charter School, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">21 Learning Support Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Brandywine
                                      Heights Area SD, Canton Area SD, Eastern York SD, Ephrata Area SD, Forbes Road
                                      SD, Juniata County SD, Lebanon SD, Lower Moreland Township SD, Muhlenberg
                                      SD, Newport SD, Northwestern Lehigh SD, Pottsville Area SD, Quakertown Community
                                      SD, Spring-Ford Area SD, Upper Dauphin Area SD, Wellsboro Area SD, Collegium
                                      CS, Philadelphia City SD, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">8 Librarian Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Mid Valley
                                      SD, Seneca Valley SD, Williams Valley SD, Tuscarora IU 11, York Academy Regional
                                      Charter School, Cheltenham Township SD, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">3 Life Skills Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Blairsville-Saltsburg
                                      SD, Frederick Douglass Mastery Charter School, Philadelphia City SD</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">32 Math Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Vision Academy
                                      Charter School, Green Woods Charter School, String Theory Schools, Bellefonte
                                      Area SD, Cameron County SD, Homer-Center SD, Middletown Area SD, Northern Lebanon
                                      SD, Port Allegany SD, Seneca Valley SD, Wallingford-Swarthmore SD, Williams
                                      Valley SD, Wissahickon SD, Esperanza Academy Charter School, Frederick Douglass
                                      Mastery Charter School, Renaissance Academy CS, Philadelphia City SD, Charter
                                      High School for Architecture and Design, Delaware County Intermediate
                                      Unit, Norristown Area SD, Chichester SD, West Oak Lane Charter School, and
                                      more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">14 Music Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Philadelphia
                                      City SD, Lehigh Valley Charter H.S. for the Arts, Green Woods Charter
                                      School, String Theory Schools, Franklin Regional SD, Middletown Area SD, North
                                      Pocono SD, Esperanza Academy Charter School, Lehigh Valley Charter High School
                                      for the Arts, Frederick Douglass Mastery Charter School, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">6 Occupational Therapist Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Perkiomen Valley
                                      SD, Phoenixville Area SD, Pottstown SD, Capital Area IU 15, Carbon-Lehigh IU
                                      21, Montgomery County IU 23</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">10 Physical Education Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Independence
                                      Charter School, Lehigh Valley Academy Regional Charter School, North Penn
                                      SD, Oxford Area SD, Centennial SD, Northern Lebanon SD, Frederick Douglass
                                      Mastery Charter School, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">24 Psychologist Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Bald Eagle Area
                                      SD, Cambria Heights SD, Everett Area SD, Governor Mifflin SD, Juniata County
                                      SD, Lakeview SD, Northern Lebanon SD, Parkland SD, Penns Valley Area SD, Pocono
                                      Mountain SD, Pottsgrove SD, Southern Tioga SD, Warrior Run SD, Wyomissing Area
                                      SD, Carbon-Lehigh IU 21, Colonial IU 20, Intermediate Unit 1, Midwestern IU
                                      4, Montgomery County IU 23, Pittsburgh-Mt Oliver IU 2, Tuscarora IU 11, Bear
                                      Creek Community CS, Pocono Mountain Charter School, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">8 Reading Specialist Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Cheltenham
                                      Township SD, Lower Dauphin SD, Palmerton Area SD, Perkiomen Valley SD, Seneca
                                      Valley SD, Carbon-Lehigh IU 21, Pittsburgh-Mt Oliver IU 2, Alliance for Progress
                                      Charter School</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">36 Science Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Lower Merion
                                      SD, North Star SD, Steelton-Highspire SD, Upper Darby SD, Northeastern York
                                      SD, Butler Area SD, Fairview SD, Glendale SD, Governor Mifflin SD, Mars Area
                                      SD, Morrisville Borough SD, Northampton Area SD, Old Forge SD, Penns Valley Area
                                      SD, Perkiomen Valley SD, Phoenixville Area SD, Pottsgrove SD, Shamokin Area
                                      SD, South Fayette Township SD, Springfield Township SD, William Penn SD, Williams
                                      Valley SD, Williamsburg Community SD, Esperanza Academy Charter School, Frederick
                                      Douglass Mastery Charter School, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">12 Social Studies Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Philadelphia
                                      City SD, Foundations Charter School, Northeastern York SD, Upper Saint Clair
                                      SD, Esperanza Academy Charter School, Folk Arts-Cultural Treasures CS, Frederick
                                      Douglass Mastery Charter School, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">19 Spanish Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Philadelphia
                                      City SD, One Bright Ray, Inc, Steelton-Highspire School District, Prep Charter
                                      High School, Coatesville Area SD, North Penn SD, Freire Charter, Greater Latrobe
                                      SD, Penn Cambria SD, Peters Township SD, Southeast Delco SD, Southern Huntingdon
                                      County SD, Esperanza Academy Charter School, Frederick Douglass Mastery Charter
                                      School, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">60 Special Ed Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Benton Area
                                      SD, Conewago Valley SD, Ligonier Valley SD, Moon Area SD, New Hope-Solebury
                                      SD, Northern Lebanon SD, Pottstown SD, Radnor Township SD, Southeast Delco
                                      SD, Tamaqua Area SD, Upper Moreland Township SD, Waynesboro Area SD, Wyalusing
                                      Area SD, Midwestern IU 4, Agora Cyber CS, Esperanza Academy Charter
                                      School, Frederick Douglass Mastery Charter School, Pan American Academy
                                      CS, Hoffman Homes for Youth, Philadelphia City SD, Prep Charter High
                                      School, Maritime Academy Charter School, Governor Mifflin SD, Foundations Charter
                                      School, Kaleidoscope Education Solutions, West Oak Lane Charter School, Reading
                                      SD, Gillingham Charter School, Pennsbury SD, LifeWorks Schools, Independence
                                      Charter School, Cheltenham Township SD, School Lane Charter School, Vida Charter
                                      School, Silver Springs - Martin Luther School, Delaware County Intermediate
                                      Unit, Woods Services, Chester Community Charter School,The, Pan American Academy
                                      Charter School, NHS Human Services – Education and Autism Division – Posted
                                      by, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">5 Speech and Language Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Tredyffrin-Easttown
                                      SD, Annville-Cleona SD, Jamestown Area SD, and more...</span></span></p>
                                <p style="line-height: 20.8px; text-align: center;"><span style="font-size:18px"><span
                                      style="color: #FF8A2B;"><strong><a href="http://teachercatapult.com/teaching-jobs-in-pa/"
                                          target="_blank">1 Technology Teacher Job(s):</a></strong></span></span></p>
                                <p style="line-height: 20.8px;text-align: center;"><span style="font-size:14px"><span
                                      style="font-family:arial,helvetica,sans-serif; line-height:18px">Penn-Delco SD</span></span></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td valign="top" id="templateFooter">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnShareBlock" style="min-width:100%;">
                  <tbody class="mcnShareBlockOuter">
                    <tr>
                      <td valign="top" style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                        class="mcnShareBlockInner">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnShareContentContainer"
                          style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                          <tbody>
                            <tr>
                              <td align="center" style="padding-top: 0;padding-left: 9px;padding-bottom: 0;padding-right: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                  class="mcnShareContent">
                                  <tbody>
                                    <tr>
                                      <td align="center" valign="top" class="mcnShareContentItemContainer" style="padding-top: 9px;padding-right: 9px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                          <tbody>
                                            <tr>
                                              <td align="left" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                <!--[if mso]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                    <![endif]-->

                                                <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                  <tbody>
                                                    <tr>
                                                      <td valign="top" style="padding-right: 9px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                        class="mcnShareContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width=""
                                                          class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0"
                                                                  cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" valign="middle" width="24"
                                                                        class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Feepurl.com%2FgjLoTj"
                                                                          target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img
                                                                            src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-facebook-48.png"
                                                                            style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"
                                                                            height="24" width="24" class=""></a>
                                                                      </td>
                                                                      <td align="left" valign="middle" class="mcnShareTextContent"
                                                                        style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Feepurl.com%2FgjLoTj"
                                                                          target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Share</a>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                                <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                  <tbody>
                                                    <tr>
                                                      <td valign="top" style="padding-right: 9px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                        class="mcnShareContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width=""
                                                          class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0"
                                                                  cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" valign="middle" width="24"
                                                                        class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="http://twitter.com/intent/tweet?text=*|URL:MC_SUBJECT|*: http%3A%2F%2Feepurl.com%2FgjLoTj"
                                                                          target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img
                                                                            src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-twitter-48.png"
                                                                            style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"
                                                                            height="24" width="24" class=""></a>
                                                                      </td>
                                                                      <td align="left" valign="middle" class="mcnShareTextContent"
                                                                        style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="http://twitter.com/intent/tweet?text=*|URL:MC_SUBJECT|*: http%3A%2F%2Feepurl.com%2FgjLoTj"
                                                                          target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Tweet</a>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                                <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                  <tbody>
                                                    <tr>
                                                      <td valign="top" style="padding-right: 9px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                        class="mcnShareContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width=""
                                                          class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0"
                                                                  cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" valign="middle" width="24"
                                                                        class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="http://us7.forward-to-friend.com/forward?u=bda88dde6351939572b55c93d&id=1f521d3bef&e=[UNIQID]"
                                                                          target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img
                                                                            src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-forwardtofriend-48.png"
                                                                            style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"
                                                                            height="24" width="24" class=""></a>
                                                                      </td>
                                                                      <td align="left" valign="middle" class="mcnShareTextContent"
                                                                        style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="http://us7.forward-to-friend.com/forward?u=bda88dde6351939572b55c93d&id=1f521d3bef&e=[UNIQID]"
                                                                          target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Forward</a>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                                <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                  <tbody>
                                                    <tr>
                                                      <td valign="top" style="padding-right: 9px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                        class="mcnShareContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width=""
                                                          class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0"
                                                                  cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" valign="middle" width="24"
                                                                        class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="https://www.pinterest.com/pin/find/?url=http%3A%2F%2Feepurl.com%2FgjLoTj"
                                                                          target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img
                                                                            src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-pinterest-48.png"
                                                                            style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"
                                                                            height="24" width="24" class=""></a>
                                                                      </td>
                                                                      <td align="left" valign="middle" class="mcnShareTextContent"
                                                                        style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="https://www.pinterest.com/pin/find/?url=http%3A%2F%2Feepurl.com%2FgjLoTj"
                                                                          target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Pin</a>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                                <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->
                                                <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                  <tbody>
                                                    <tr>
                                                      <td valign="top" style="padding-right: 0;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"
                                                        class="mcnShareContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width=""
                                                          class="mcnShareContentItem" style="border-collapse: separate;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                          <tbody>
                                                            <tr>
                                                              <td align="left" valign="middle" style="padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                <table align="left" border="0" cellpadding="0"
                                                                  cellspacing="0" width="" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                  <tbody>
                                                                    <tr>
                                                                      <td align="center" valign="middle" width="24"
                                                                        class="mcnShareIconContent" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="http://www.linkedin.com/shareArticle?url=http%3A%2F%2Feepurl.com%2FgjLoTj&amp;mini=true&amp;title=*|URL:MC_SUBJECT|*"
                                                                          target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img
                                                                            src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-linkedin-48.png"
                                                                            style="display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"
                                                                            height="24" width="24" class=""></a>
                                                                      </td>
                                                                      <td align="left" valign="middle" class="mcnShareTextContent"
                                                                        style="padding-left: 5px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                                        <a href="http://www.linkedin.com/shareArticle?url=http%3A%2F%2Feepurl.com%2FgjLoTj&amp;mini=true&amp;title=*|URL:MC_SUBJECT|*"
                                                                          target="" style="color: #202020;font-family: Arial;font-size: 12px;font-weight: normal;line-height: normal;text-align: center;text-decoration: none;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Share</a>
                                                                      </td>
                                                                    </tr>
                                                                  </tbody>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                                <!--[if mso]>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                  </tbody>
                </table>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
                  <tbody class="mcnDividerBlockOuter">
                    <tr>
                      <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                        <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top-width: 2px;border-top-style: solid;border-top-color: #EEEEEE;">
                          <tbody>
                            <tr>
                              <td>
                                <span></span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--            
                <td class="mcnDividerBlockInner" style="padding: 18px;">
                <hr class="mcnDividerContent" style="border-bottom-color:none; border-left-color:none; border-right-color:none; border-bottom-width:0; border-left-width:0; border-right-width:0; margin-top:0; margin-right:0; margin-bottom:0; margin-left:0;" />
-->
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
                  <tbody class="mcnTextBlockOuter">
                    <tr>
                      <td valign="top" class="mcnTextBlockInner">

                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;"
                          class="mcnTextContentContainer">
                          <tbody>
                            <tr>

                              <td valign="top" class="mcnTextContent" style="padding-top:9px; padding-right: 18px; padding-bottom: 9px; padding-left: 18px;">

                                <em>Copyright © *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</em>
                                <br>
                                *|IFNOT:ARCHIVE_PAGE|*
                                *|LIST:DESCRIPTION|*
                                <br>
                                <br>
                                <strong>Our mailing address is:</strong>
                                <br>
                                *|HTML:LIST_ADDRESS_HTML|* *|END:IF|*
                                <br>
                                <br>
                                Want to change how you receive these emails?<br>
                                You can <a href="*|UPDATE_PROFILE|*">update your preferences</a> or <a href="*|UNSUB|*">unsubscribe
                                  from this list</a>
                                <br>
                                <br>
                                *|IF:REWARDS|* *|HTML:REWARDS|*
                                *|END:IF|*
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
          <!--[if gte mso 9]>
						</td>
						</tr>
						</table>
						<![endif]-->
          <!-- // END TEMPLATE -->
        </td>
      </tr>
    </table>
  </center>
</body>

</html>`;